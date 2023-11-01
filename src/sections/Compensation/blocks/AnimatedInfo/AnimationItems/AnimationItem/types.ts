import React from "react";
import { Data } from "../types";

export interface AnimationItemProps {
 component: React.ElementType;
 data: Data;
 size: any;
 image?: string;
 text?: string;
 isImage?: boolean;
}
