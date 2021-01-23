import React from "react";
import { ReactSortable, Sortable, MultiDrag } from "react-sortablejs";
import { JustBox } from "./just-box";

export const SortableComponent = ({ l, setL }) => {
  return (
    <ReactSortable groupName={"sortable"} tag={"div"} list={l} setList={setL}>
      {l.map((v) => {
        return <JustBox val={v.val} key={`${v.id}`} />;
      })}
    </ReactSortable>
  );
};
