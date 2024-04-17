import React from "react";
import { Color } from "../types/types";

type ButtonProps = {
  children: React.ReactNode;
  backgroundColor: Color;
  color: Color;
};

const ChildrenAsProps = ({ children, backgroundColor, color }: ButtonProps) => {
  return (
    <>
      <button
        style={{
          borderRadius: "5px",
          border: "none",
          backgroundColor: backgroundColor,
          color: color,
        }}
      >
        <h3>Hello</h3>
        {children}
      </button>
    </>
  );
};

export default ChildrenAsProps;
