import React, { useState } from "react";
import styled from "styled-components";
import Footer from "./Footer";

const StyledLanding = styled.div`
  overflow: auto;
  height: auto;
  min-height: 500px;
  -webkit-transition: background-color 500ms ease-out 0.2s;
  -moz-transition: background-color 500ms ease-out 0.2s;
  -o-transition: background-color 500ms ease-out 0.2s;
  transition: background-color 500ms ease-out 0.2s;
  background-color: ${(props) =>
    props.dark
      ? props.theme.dark.body.backgroundColor
      : props.theme.light.body.backgroundColor};
`;

const StyledText = styled.p`
  -webkit-transition: color 500ms ease-out 0.2s;
  -moz-transition: color 500ms ease-out 0.2s;
  -o-transition: color 500ms ease-out 0.2s;
  transition: color 500ms ease-out 0.2s;
  color: ${(props) => (props.dark ? "white" : "black")};
`;

export default function NotFound(props) {
  const [dark, setDark] = useState(false);

  const setTheme = () => {
    setDark(!dark);
  };

  return (
    <>
      <StyledLanding dark={props.dark}>
        <StyledText dark={props.dark}>Not found</StyledText>
      </StyledLanding>
    </>
  );
}
