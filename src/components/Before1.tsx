import { useMemo, useState } from "react";

const Before1 = () => {
  const [countNormal, setCountNormal] = useState(0);
  const [countHeavy, setCountHeavy] = useState(0);

  /**
   * 重い処理
   * @param count
   * @returns
   */
  const heavyFunction = (count: number) => {
    let i = 0;
    while (i < 1000000000) i++; // ここで重くしてる
    return count;
  };

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
        {/* ↓こいつが重い */}
        <div>Heavy: {heavyFunction(countHeavy)}</div>
        {/* ↓こいつは軽い */}
        {/* <div>Heavy: {countHeavy}</div> */}
      </div>
      <div className="app-button">
        <button onClick={onClickNormalPlus}>Normal+</button>
        <button onClick={onClickHeavyPlus}>Heavy+</button>
      </div>
    </div>
  );
};

export default Before1;
