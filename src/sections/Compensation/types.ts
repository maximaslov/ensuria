import { GetPicturesResponse, Picture } from "@/store/api/apiTypes";

export interface CompensationProps {
 animationData: GetPicturesResponse;
}

interface Animation {
 scale: number;
 rotation: number;
 opacity: number;
}

export interface AnimationConfig {
 from: Animation;
 to: Animation;
}

export interface StylesConfig {
 $top?: string;
 $right?: string;
 $left?: string;
}

export interface Item extends Picture {}

export interface PersonData {
 animation: AnimationConfig;
 styles: StylesConfig;
}

export interface PersonParamsContent {
 animation: AnimationConfig;
 styles: StylesConfig;
}

export type PersonParams = Record<string, PersonParamsContent>;
