import { Dispatch, SetStateAction } from "react";

type CounterProps = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export default function Counter({ count, setCount }: CounterProps) {
  return (
    <>
      <div>
        <p>Antal klick: {count}</p>
        <button onClick={() => setCount(count + 1)}>Öka</button>
      </div>
    </>
  );
}
