"use client";

import {
 useGetCardsQuery,
 useGetPicturesQuery,
 useGetTextContentQuery,
} from "@/store/api";
import { About, Compensation } from "..";

const Main: React.FC = () => {
 const { data: cardsData } = useGetCardsQuery();
 const { data: contentData } = useGetTextContentQuery();
 const { data: picturesData } = useGetPicturesQuery();

 const isLoading = !cardsData || !contentData || !picturesData;

 if (isLoading) return null;

 return (
  <main>
   <About cardsData={cardsData} contentData={contentData} />
   <Compensation animationData={picturesData} />
  </main>
 );
};

export default Main;