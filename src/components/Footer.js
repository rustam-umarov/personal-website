import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 30px;
  position: absolute;
  bottom: 0;
  width: 100%;
  font-size: 12px;
  padding-top: 5px;
  background-color: ${(props) => props.theme.light.footer.backgroundColor};
  color: ${(props) => props.theme.light.footer.fontColor};
  font-family: Aller;
`;

export default function Footer(props) {
  return (
    <StyledDiv {...props}>
      <strike>(c)</strike> not a copyright at all - 2021
    </StyledDiv>
  );
}
