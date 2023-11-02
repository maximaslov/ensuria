import { ReactNode } from "react";

export interface HeadingProps {
 $variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "infoTitle";
 $color?: "dark" | "dark-2";
 children: ReactNode;
}
