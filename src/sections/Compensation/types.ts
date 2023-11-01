import { Picture } from "@/store/api/apiTypes";

export interface AnimationConfig {
 from: {
  scale: number;
  rotation: number;
  opacity: number;
 };
 to: {
  scale: number;
  rotation: number;
  opacity: number;
 };
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
