import React from "react";
import { Color } from "../types/types";
import { ReactNode } from "react";

type StyleProps = {
  children: ReactNode;
  backgroundColor: string;
  color: string;
};

export default function Wrapper({
  children,
  color,
  backgroundColor,
}: StyleProps) {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        color: color,
        padding: "1rem",
      }}
    >
      {children}
    </div>
  );
}
