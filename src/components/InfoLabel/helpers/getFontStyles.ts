import { fontSizes } from "../infoLabelDefinitions";
import { Size } from "../types";

const getFontStyles = (size: Size) => {
 return {
  $fontWeight: "500",
  $lineHeight: "1.2",
  $fontSize: fontSizes[size],
 };
};

export default getFontStyles
