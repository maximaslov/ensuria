import Image from "next/image";
import { ChartImageProps } from "./types";

export const ChartImage: React.FC<ChartImageProps> = ({ image }) => {
 return (
  <Image
   src={image}
   alt="ichart"
   fill
   priority
   sizes="100vw 100vw"
   style={{ objectFit: "contain" }}
  />
 );
};

export default ChartImage;
