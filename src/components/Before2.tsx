import { useState } from "react";
import Before2Child from "./Before2Child";

const Before2 = () => {
  const [countNormal, setCountNormal] = useState(0);
  const [countHeavy, setCountHeavy] = useState(0);

  const onClickNormalPlus = () => {
    setCountNormal((prev) => prev + 1);
  };
  const onClickHeavyPlus = () => {
    setCountHeavy((prev) => prev + 1);
  };

  return (
    <div className="app">
      <a href="/">戻る</a>
      <div className="app-counter">
        <div>Normal: {countNormal}</div>
        {/* ↓この中で重い処理 */}
        <Before2Child count={countHeavy} />
      </div>
      <div className="app-button">
        <button onClick={onClickNormalPlus}>Normal+</button>
        <button onClick={onClickHeavyPlus}>Heavy+</button>
      </div>
    </div>
  );
};

export default Before2;
