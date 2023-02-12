import { FC, useEffect } from "react";

type ChildProps = {
  count: number;
};
const Before2Child: FC<ChildProps> = ({ count }) => {
  useEffect(() => {
    let i: number = 0;
    // 思い処理してる
    while (i < 1000000000) i++;
  });
  return <div>Heavy: {count}</div>;
};

export default Before2Child;
