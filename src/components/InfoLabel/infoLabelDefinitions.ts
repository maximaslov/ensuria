import { Size } from "./types";

export const sizes: Record<Size, { $width: string; $height: string }> = {
 sm: { $width: "6vw", $height: "2vw" },
 md: { $width: "8.5vw", $height: "2.8vw" },
 lg: { $width: "10vw", $height: "3vw" },
 xl: { $width: "14vw", $height: "5vw" },
};

export const fontSizes: Record<Size, string> = {
 sm: "0.796vw",
 md: "1.389vw",
 lg: "1.667vw",
 xl: "2vw",
};