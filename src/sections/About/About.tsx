"use client";

import { Flex } from "@/ui";
import { AboutBottomBlock, AboutContent, AboutTopBlock } from "./blocks";
import {
 useGetCardsQuery,
 useGetTextContentQuery,
} from "@/store/api";

const About: React.FC = () => {
  const { data: cardsData, isLoading: isCardsLoading } = useGetCardsQuery();
  const { data: contentData, isLoading: isContentLoading } =
   useGetTextContentQuery();

  if (!cardsData || !contentData || isCardsLoading || isContentLoading)
   return null;

 if (cardsData) {
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
 }
};

export default About;
