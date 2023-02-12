import { useMemo, useState } from "react";

const After1 = () => {
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
  /**
   * メモ化したやつ
   */
  const heavyFunctionMemo = useMemo(() => {
    return heavyFunction(countHeavy);
  }, [countHeavy]);

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
        {/* <div>Heavy: {heavyFunction(countHeavy)}</div> */}
        {/* ↓useMemo使って軽くする */}
        <div>Heavy: {heavyFunctionMemo}</div>
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

export default After1;
