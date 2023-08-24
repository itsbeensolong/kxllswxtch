"use client";

import { useState } from "react";
import languague from "@/utils/languague";

import {
  DndContext,
  closestCorners,
  DragOverlay,
  useSensors,
  useSensor,
  PointerSensor,
  KeyboardSensor,
  defaultDropAnimation,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { getElementDraggId } from "@/utils/statusIdentify";
import { findSectionContainer, initilizeBoardDrop } from "@/utils/board";
import Tools from "./Tools";
import ToolsItem from "./ToolsItem";

export default function AddPage() {
  const [activeId, setActivedId] = useState(null);

  const draggItemContent = languague;
  const initialBoard = initilizeBoardDrop(draggItemContent);
  const [boardSections, setBoardSections] = useState(initialBoard);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const handleDragOver = ({ active, over }) => {
    // Find the containers
    const activeContainer = findSectionContainer(boardSections, active.id);
    const overContainer = findSectionContainer(boardSections, over?.id);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return;
    }

    setBoardSections((boardSection) => {
      const activeItems = boardSection[activeContainer];
      const overItems = boardSection[overContainer];

      // Find the indexes for the items
      const activeIndex = activeItems.findIndex(
        (item) => item.id === active.id
      );
      const overIndex = overItems.findIndex((item) => item.id !== over?.id);

      return {
        ...boardSection,
        [activeContainer]: [
          ...boardSection[activeContainer].filter(
            (item) => item.id !== active.id
          ),
        ],
        [overContainer]: [
          ...boardSection[overContainer].slice(0, overIndex),
          boardSections[activeContainer][activeIndex],
          ...boardSection[overContainer].slice(
            overIndex,
            boardSection[overContainer].length
          ),
        ],
      };
    });
  };
  const handleDragStart = ({ active }) => {
    setActivedId(active.id);
  };
  const handleDragEnd = ({ active, over }) => {
    const activeContainer = findSectionContainer(boardSections, active.id);
    const overContainer = findSectionContainer(boardSections, over?.id);

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return;
    }

    const activeIndex = boardSections[activeContainer].findIndex(
      (item) => item.id === active.id
    );
    const overIndex = boardSections[overContainer].findIndex(
      (item) => item.id === over?.id
    );

    if (activeIndex !== overIndex) {
      setBoardSections((boardSection) => ({
        ...boardSection,
        [overContainer]: arrayMove(
          boardSection[overContainer],
          activeIndex,
          overIndex
        ),
      }));
    }

    setActivedId(null);
  };
  const dropAnimation = {
    ...defaultDropAnimation,
  };

  const dragg = activeId ? getElementDraggId(draggItemContent, activeId) : null;

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        {Object.keys(boardSections).map((boardSectionKey) => (
          <div key={boardSectionKey}>
            <Tools
              id={boardSectionKey}
              itemsDragg={boardSections[boardSectionKey]}
            />
          </div>
        ))}
        <DragOverlay dropAnimation={dropAnimation}>
          {dragg ? <ToolsItem dragg={dragg} /> : null}
        </DragOverlay>
      </DndContext>
    </>
  );
}
