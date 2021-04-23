import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  -webkit-transition: color 500ms ease-out 0.2s;
  -moz-transition: color 500ms ease-out 0.2s;
  -o-transition: color 500ms ease-out 0.2s;
  transition: color 500ms ease-out 0.2s;
  width: 85%;
  margin: 0 auto;
  margin-bottom: 20px;
  font-family: Aller;
  text-align: ${(props) => (props.align ? props.align : "justify")};
  color: ${(props) => (props.dark ? "white" : "black")};
  font-style: ${(props) => (props.italic ? "italic" : "")};
  font-weight: ${(props) => (props.bold ? "bold" : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "18px")};
`;

export default function Paragraph(props) {
  return (
    <StyledParagraph
      dark={props.dark}
      italic={props.italic}
      bold={props.bold}
      fontSize={props.fontSize}
      align={props.align}
      dangerouslySetInnerHTML={{ __html: props.text }}
    ></StyledParagraph>
  );
}
