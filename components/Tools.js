"use client";

import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import SortableTools from "./SortableTools";
import ToolsItem from "./ToolsItem";

export default function Tools({ id, itemsDragg }) {
  const { setNodeRef } = useDroppable({
    id,
  });
  return (
    <SortableContext
      id={id}
      items={itemsDragg}
      strategy={verticalListSortingStrategy}
    >
      <div ref={setNodeRef}>
        {itemsDragg.map((dragItem) => (
          <div key={dragItem.id}>
            <SortableTools id={dragItem.id || null}>
              <ToolsItem dragg={dragItem} />
            </SortableTools>
          </div>
        ))}
      </div>
    </SortableContext>
  );
}
