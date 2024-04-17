import { Color } from "../types/types";

//type
type ButtonProps = {
  backgroundColor: Color; //union
  fontSize: number | string;
  fontFamily: string;
  color: Color;
  border: string;
  borderRadius: string;
  isRounded?: boolean; //optional
  padding: number[];
  // handleClickBtn: (test: string) => number;
};

// interface
// interface ButtonProps {
//   backgroundColor: string;
//   fontSize: number;
//   fontFamily: string;
//   color: string;
//   border: string;
//   borderRadius: string;
//   isRounded: boolean;
//   padding: number[];
// }

const Button = ({
  // handleClickBtn,
  backgroundColor,
  fontSize,
  fontFamily,
  color,
  border,
  isRounded,
  padding,
}: ButtonProps) => {
  return (
    <>
      <button
        // onClick={() => handleClickBtn("")}
        style={{
          backgroundColor: backgroundColor,
          fontSize: typeof fontSize === "number" ? `${fontSize}px` : fontSize,
          fontFamily: fontFamily,
          color: color,
          border: border,
          borderRadius: isRounded ? "5px" : 0,
          padding: `${padding[0]}px ${padding[1]}px`,
        }}
      >
        Click me
      </button>
    </>
  );
};

export default Button;
