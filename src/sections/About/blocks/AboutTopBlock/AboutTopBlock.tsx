import { Flex } from "@/ui";
import { AboutTopBlockProps } from "./types";
import { InfoCard } from "@/components";

const AboutTopBlock: React.FC<AboutTopBlockProps> = ({ items }) => {
 return (
  <Flex $wrap $justifyContent="space-between">
   {items.map(({ id, ...item }) => (
    <InfoCard key={id} $variant="top" {...item} />
   ))}
  </Flex>
 );
};

export default AboutTopBlock;
