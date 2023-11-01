import { sizes } from "../infoLabelDefinitions";
import { Size } from "../types";

const getStyles = (color: string, size: Size) => {
 const sizeConfig = sizes[size];
 return {
  $bg: color,
  $borderRadius: "4px",
  $width: sizeConfig?.$width,
  $height: sizeConfig?.$height,
 };
};


export default getStyles