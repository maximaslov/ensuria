"use client";

import { Flex } from "@/ui";
import { LinkButtons } from "./components";
import { AnimatedInfo, CompensationContent } from "./blocks";

const Compensation: React.FC = () => {
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
   <AnimatedInfo />
  </section>
 );
};

export default Compensation;
