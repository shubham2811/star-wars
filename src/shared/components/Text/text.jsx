import * as React from "react";
import styled from "styled-components";
const StyledText = styled.div``;
export const Text = props => {
  const { children } = props;
  return <StyledText>{children}</StyledText>;
};
