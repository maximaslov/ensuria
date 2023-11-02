"use client";

import { Flex } from "@/ui";
import { AboutBottomBlock, AboutContent, AboutTopBlock } from "./blocks";
import { AboutProps } from "./types";

const About: React.FC<AboutProps> = ({ cardsData, contentData }) => {
 const { topCards, bottomCards } = cardsData;
 return (
  <section>
   <Flex $column $padding="10px">
    <AboutTopBlock items={topCards} />
    <AboutContent data={contentData} />
    <AboutBottomBlock items={bottomCards} />
   </Flex>
  </section>
 );
};

export default About;
