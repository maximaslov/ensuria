import { Flex } from "@/ui";
import { buttonsList } from "./linkButtonsDefinitions";
import CompensationLinkButton from "./CompensationLinkButton";

const LinkButtons: React.FC = () => {
 return (
  <Flex>
   {buttonsList.map(({ id, ...button }) => (
     <CompensationLinkButton key={id} {...button}/>
   ))}
  </Flex>
 );
};

export default LinkButtons;
