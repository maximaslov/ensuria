import styled, { css } from "styled-components";

interface InfoItemProps {
  bg?: string;
  title?: string;
  text?: string;
  image?: string;
  withCutCorner?: boolean;
  variant?: "top" | "bottom";
}

// const variantStyles = {
//   top: {
//     padding: "1.736vw",
//   },
//   bottom: { 
//     padding: "2.083vw 2.778vw"
//  },
// };

export const InfoItemWrapper = styled.div<InfoItemProps>`
  border-radius: 6px;
  overflow: hidden;
  justify-content: space-between;
  background-color: ${({ bg }) => bg};
  flex: 1;
  position: relative;
`;

// ${({ variant }) => variant && variantStyles[variant] && css`
//     ${variantStyles[variant]}
//   `}