import styled from "styled-components";

export const LinkButtonBase = styled.button`
 display: flex;
 justify-content: center;
 height: 3.958vw;
 min-width: 10.764vw;
 padding: 5px 10px;
 border: none;
 border-radius: 2.014vw;
 cursor: pointer;
 background-color: var(--color-dark);
 transition: background-color 0.3s ease;
 position: relative;
 &:hover {
  background-color: var(--color-dark-2);
 }
`;
