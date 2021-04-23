import React from "react";
import styled from "styled-components";

const StyledHeader = styled.p`
  -webkit-transition: color 500ms ease-out 0.2s;
  -moz-transition: color 500ms ease-out 0.2s;
  -o-transition: color 500ms ease-out 0.2s;
  transition: color 500ms ease-out 0.2s;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  text-align: center;
  font-family: CaviarDreams;
  color: ${(props) => (props.dark ? "white" : "black")};
  font-style: ${(props) => (props.italic ? "italic" : "")};
  font-weight: ${(props) => (props.bold ? "bold" : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "30px")};
`;

export default function Header(props) {
  return (
    <StyledHeader
      dark={props.dark}
      italic={props.italic}
      bold={props.bold}
      fontSize={props.fontSize}
      dangerouslySetInnerHTML={{ __html: props.text }}
    ></StyledHeader>
  );
}
