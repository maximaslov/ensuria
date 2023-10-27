"use client";

import styled, { css } from "styled-components";
import { InfoCardProps } from "./types";

interface InfoCardWrapperProps extends InfoCardProps {}

const variantStyles = {
 top: {
  padding: "1.736vw",
  width: "25vw",
  height: "12.014vw",
 },
 bottom: {
  padding: "2.083vw 2.778vw",
  minWidth: "29.375vw",
  width: "100%",
  height: "16.944vw",
 },
};

export const InfoCardWrapper = styled.div<InfoCardWrapperProps>`
 display: flex;
 position: relative;
 border-radius: 6px;
 overflow: hidden;
 justify-content: space-between;
 background-color: ${({ color }) => color};
 flex-direction: column;
 ${({ $variant }) =>
  $variant &&
  variantStyles[$variant] &&
  css`
   ${variantStyles[$variant]}
  `};
 min-width: ${({ $isLarge, $variant }) =>
  $isLarge && $variant === "top" && `calc(50vw - 44px)`};
 height: ${({ $isDoubleSize }) => $isDoubleSize && "calc(200% + 8px)"};
 ${({ $withCutCorner }) =>
  $withCutCorner &&
  css`
   border-top-left-radius: initial;
   &::before {
    content: "";
    position: absolute;
    left: -18px;
    top: -24px;
    height: 60px;
    width: 42px;
    background-color: white;
    z-index: 1;
    transform: rotate(45deg);
   }
  `}
`;
