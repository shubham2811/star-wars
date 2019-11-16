import React from "react";
import styled, { keyframes } from "styled-components";
import { Text } from "../Text/text";
const rotateLoader = keyframes`
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
`;
const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LoaderElem = styled.div.attrs({
  key: "loader"
})`
  width: 20px;
  height: 20px;
  background-color: rgb(25, 116, 207);
  margin: 10px auto;
  animation: ${rotateLoader} 1.2s infinite ease-in-out;
  position: relative;
`;
const LoaderText = styled(Text)`
  font-size: 16px;
  font-weight: 700;
  color: black;
`;
export const Loader = () => {
  return (
    <LoaderOverlay id="Loader">
      <LoaderElem />
      <LoaderText>Loading Content...</LoaderText>
    </LoaderOverlay>
  );
};
