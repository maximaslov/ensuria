export type Size = "sm" | "md" | "lg" | "xl";

export interface PersonImageProps {
 size: Size;
 image: string;
 alt: string;
 className?: string;
}
