import { Color } from "../types/types";

type ButtonProps = {
  handleClick: (test: string) => number;
  backgroundColor: Color;
  color: Color;
};

const FunctionAsProps = ({
  handleClick,
  backgroundColor,
  color,
}: ButtonProps) => {
  return (
    <>
      <button
        style={{
          border: "none",
          padding: "10px 12px",
          borderRadius: "5px",
          backgroundColor: backgroundColor,
          color: color,
        }}
        onClick={() => handleClick("Jag är en functionProp")}
      >
        Children
      </button>
    </>
  );
};

export default FunctionAsProps;
