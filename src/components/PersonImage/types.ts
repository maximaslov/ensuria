export enum Size {
    Small = "sm",
    Medium = "md",
    Large = "lg",
    ExtraLarge = "xl",
  }

export interface PersonImageProps {
 size: Size;
 image: string;
 alt: string;
 className?: string;
}
