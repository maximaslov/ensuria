import Image from "next/image";
import { BackgroundImageProps } from "./types";

const BackgroundImage: React.FC<BackgroundImageProps> = ({ image }) => {
 return (
  <Image
   src={image}
   alt="info-card"
   fill
   priority
   sizes="100vw 100vw"
   style={{ objectFit: "cover" }}
  />
 );
};

export default BackgroundImage;
