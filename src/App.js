import "./index.css";
import { BeautifulDnd } from "./components/beautiful-dnd";
import { VirtualBeautifulDnd } from "./components/virtual-beautiful-dnd";
import { Profiler } from "react";
import { SortableComponent } from "./components/sortable-component";
import { useEffect, useState } from "react";

function App() {
  const [l, setL] = useState([]);

  useEffect(() => {
    const numbers = [];
    for (let i = 0; i < 100; i++) {
      numbers.push({ id: "id_" + i, val: "val_" + i });
    }

    setL(numbers);
  }, []);

  const wrapperStyle = {
    display: "flex",
    flexDirection: "row",
  };

  const dragComponentStyle = {
    padding: 10,
    display: "flex",
    overflowY: "auto",
    height: 600,
  };

  const onRender = (
    id, // 방금 커밋된 Profiler 트리의 "id"
    phase, // "mount" (트리가 방금 마운트가 된 경우) 혹은 "update"(트리가 리렌더링된 경우)
    actualDuration, // 커밋된 업데이트를 렌더링하는데 걸린 시간
    baseDuration, // 메모이제이션 없이 하위 트리 전체를 렌더링하는데 걸리는 예상시간
    startTime, // React가 언제 해당 업데이트를 렌더링하기 시작했는지
    commitTime, // React가 해당 업데이트를 언제 커밋했는지
    interactions // 이 업데이트에 해당하는 상호작용들의 집합
  ) => {
    console.log(id, actualDuration, baseDuration);
  };

  return (
    <div style={wrapperStyle}>
      <div style={dragComponentStyle}>
        <Profiler id={"BeautifulDnd"} onRender={onRender}>
          <BeautifulDnd l={l} />
        </Profiler>
      </div>
      <div style={dragComponentStyle}>
        <Profiler id={"BeautifulDndVirtual"} onRender={onRender}>
          <VirtualBeautifulDnd l={l} />
        </Profiler>
      </div>
      <div style={dragComponentStyle}>
        <Profiler id={"SortableComponent"} onRender={onRender}>
          <SortableComponent l={l} setL={setL} />
        </Profiler>
      </div>
    </div>
  );
}

export default App;
