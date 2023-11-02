export enum InfoCardVariant {
 Top = "top",
 Bottom = "bottom",
}

export interface InfoCardProps {
 color?: string;
 title?: string;
 text?: string;
 secondText?: string;
 image?: string;
 chart?: string;
 surfaceImage?: string;
 $withCutCorner?: boolean;
 $variant?: InfoCardVariant;
 $isLarge?: boolean;
 $isDoubleSize?: boolean;
 $isEmpty?: boolean;
}
