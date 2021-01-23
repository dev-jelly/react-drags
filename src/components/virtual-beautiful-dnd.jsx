import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { JustBox } from "./just-box";
import * as React from "react";

export const VirtualBeautifulDnd = React.memo(({ l }) => {
  return (
    <DragDropContext>
      <Droppable
        droppableId={"beautiful-dnd"}
        mode="virtual"
        renderClone={(provided, snapshot, rubric) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <JustBox
              val={l[rubric.source.index].val}
              key={l[rubric.source.index].id}
            />
          </div>
        )}
      >
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {l.map((v, i) => (
              <Draggable key={v.id} draggableId={`${v.id}`} index={i}>
                {(provided, snapshot) => (
                  <div>
                    <div
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                    >
                      {provided.placeholder}
                      <JustBox val={v.val} key={v.id} />
                    </div>
                  </div>
                )}
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
});
