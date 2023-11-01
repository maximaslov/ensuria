import { Flex } from "@/ui";
import { AboutBottomBlockProps } from "./types";
import { InfoCard } from "@/components";

const AboutBottomBlock: React.FC<AboutBottomBlockProps> = ({ items }) => {
 return (
  <Flex $wrap $justifyContent="space-between">
   {items.map(({ id, ...item }) => (
    <InfoCard key={id} $variant="bottom" {...item} />
   ))}
  </Flex>
 );
};

export default AboutBottomBlock;
