"use client";

import styled, { css } from "styled-components";
import { TextBaseProps } from "./types";

const variantStyles = {
 infoText: {
  fontSize: "1.111vw",
  lineHeight: "1.2",
 },
 main: {
  fontSize: "1.667vw",
  lineHeight: "1.3",
  fontWeight: "400",
 },
 subtitle: {
  lineHeight: "1.1",
  fontWeight: "500",
  fontSize: "1.25vw",
 },
};

const TextBase = styled.p<TextBaseProps>`
 text-align: ${({ $textAlign }) => $textAlign};

 color: ${({ $color }) => `var(--color-${$color})`};
 ${({ $variant }) =>
  $variant &&
  variantStyles[$variant] &&
  css`
   ${variantStyles[$variant]}
  `};
`;

export default TextBase;
