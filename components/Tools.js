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
      <div ref={setNodeRef} className="flex-1">
        {itemsDragg.map((dragItem) => (
          <SortableTools id={dragItem.id || null} key={dragItem.id}>
            <ToolsItem dragg={dragItem} />
          </SortableTools>
        ))}
      </div>
    </SortableContext>
  );
}
