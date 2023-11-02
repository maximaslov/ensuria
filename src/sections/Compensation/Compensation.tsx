"use client";

import { Flex } from "@/ui";
import { AnimatedInfo, CompensationContent } from "./blocks";
import LinkButtons from "./LinkButtons";
import { CompensationProps } from "./types";

const Compensation: React.FC<CompensationProps> = ({ animationData }) => {
 return (
  <section style={{ position: "relative" }}>
   <Flex $pt="13.056vw" $pb="23.193vw" $justifyContent="center">
    <Flex
     $px="0.903vw"
     $column
     $maxWidth="46.597vw"
     $alignItems="center"
     $position="relative"
     className="animation-trigger"
    >
     <CompensationContent />
     <LinkButtons />
    </Flex>
   </Flex>
   <AnimatedInfo animationData={animationData} />
  </section>
 );
};

export default Compensation;
