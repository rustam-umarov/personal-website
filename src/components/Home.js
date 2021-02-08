import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { withRouter } from "react-router-dom";

const StyledLanding = styled.div`
  overflow: auto;
  height: auto;
  min-height: 500px;
  -webkit-transition: background-color 500ms ease-out 0.2s;
  -moz-transition: background-color 500ms ease-out 0.2s;
  -o-transition: background-color 500ms ease-out 0.2s;
  transition: background-color 500ms ease-out 0.2s;
  background-color: ${(props) => (props.dark ? " #2e5cb8" : "#f2f2f2")};
`;

const StyledText = styled.p`
  -webkit-transition: color 500ms ease-out 0.2s;
  -moz-transition: color 500ms ease-out 0.2s;
  -o-transition: color 500ms ease-out 0.2s;
  transition: color 500ms ease-out 0.2s;
  color: ${(props) => (props.dark ? "white" : "black")};
`;

export default function Home(props) {
  console.log(props);
  return (
    <>
      <StyledLanding dark={props.dark}>
        <StyledText dark={props.dark}>Home</StyledText>
      </StyledLanding>
    </>
  );
}
