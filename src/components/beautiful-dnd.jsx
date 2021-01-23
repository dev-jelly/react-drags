import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { JustBox } from "./just-box";
import * as React from "react";

export const BeautifulDnd = React.memo(({ l }) => {
  return (
    <DragDropContext>
      <Droppable droppableId={"beautiful-dnd"}>
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
