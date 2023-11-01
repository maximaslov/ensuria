import { Size } from "@/components/PersonImage/types";
import { AnimationConfig, StylesConfig } from "../../../types";

export interface Data {
 className: string;
 animation: AnimationConfig;
 styles: StylesConfig;
};

export interface AnimationItemsProps {
 size: any;
 personData: Data;
 priceData: Data;
 image: string;
 text: string;
}

export interface AnimateItem {
    component: any;
    image?: string;
    size: Size;
    data: Data;
    isImage?: boolean;
    text?: string;
   }