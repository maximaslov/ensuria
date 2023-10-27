import { ReactNode } from "react";

type JustifyContent =
 | "flex-start"
 | "flex-end"
 | "center"
 | "space-between"
 | "space-around";

type AlignItems = "flex-start" | "flex-end" | "center" | "stretch";

type Position = "static" | "relative" | "fixed" | "absolute" | "sticky";

type Ovetflow = "visible" | "hidden" | "scroll" | "auto" | "inherit";

export interface FlexProps {
 children?: ReactNode;
 $width?: string;
 $maxWidth?: string;
 $minWidth?: string;
 $height?: string;
 $column?: boolean;
 $wrap?: boolean;
 $justifyContent?: JustifyContent;
 $alignItems?: AlignItems;
 $padding?: string;
 $pl?: string;
 $pr?: string;
 $pb?: string;
 $pt?: string;
 $px?: string;
 $py?: string;
 $margin?: string;
 $ml?: string;
 $mr?: string;
 $mb?: string;
 $mt?: string;
 $mx?: string;
 $my?: string;
 $bg?: string | undefined;
 $position?: Position;
 $top?: string;
 $bottom?: string;
 $left?: string;
 $right?: string;
 $transform?: string;
 $overflow?: Ovetflow;
 $zIndex?: string;
 $gap?: string;
 $flex?: string;
}
