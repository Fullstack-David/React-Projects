import { Dispatch, SetStateAction } from "react";

type ButtonProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>; //gå till App.tsx och hovra över setCount och kopiera den raden
};

const StatesAsProps = ({ count, setCount }: ButtonProps) => {
  return (
    <>
      <button onClick={() => setCount(count + 1)}>StateAsProps: {count}</button>
    </>
  );
};

export default StatesAsProps;
