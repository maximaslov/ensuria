import Image from "next/image";

interface InfoCardImageProps {
 image: string;
}

const InfoCardImage: React.FC<InfoCardImageProps> = ({ image }) => {
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

export default InfoCardImage;
