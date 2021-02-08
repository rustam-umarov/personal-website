import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  overflow: auto;
  min-height: 30px;
  color: ${(props) => (props.dark ? "black" : "white")};
  background-color: ${(props) => (props.dark ? "#1f3d7a" : "#737373")};
`;
const StyledFooterText = styled.p`
  text-align: center;
  font-size: 10px;
  color: white;
  font-weight: 900;
`;

export default function Footer(props) {
  return (
    <StyledBox {...props}>
      <StyledFooterText> !Copyright 2021</StyledFooterText>
    </StyledBox>
  );
}
