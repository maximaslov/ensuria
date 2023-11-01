import { Flex, Text } from "@/ui";
import { InfoLabelProps } from "./types";
import { getFontStyles, getStyles } from "./helpers";

const InfoLabel: React.FC<InfoLabelProps> = ({ size, text, color, ...props}) => {
 return (
  <Flex
   {...getStyles(color, size)}
   $alignItems="center"
   $justifyContent="center"
   $position="absolute"
   {...props}
  >
   <Text $variant="subtitle" $color="dark" {...getFontStyles(size)}>
    {text}
   </Text>
  </Flex>
 );
};

export default InfoLabel;
