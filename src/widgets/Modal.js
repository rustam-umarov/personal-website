import React, { useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

const StyledWrapper = styled.div`
  background-color: ${(props) => (props.dark ? "white" : "black")};
  -webkit-transition: background-color 500ms ease-out 0.2s;
  -moz-transition: background-color 500ms ease-out 0.2s;
  -o-transition: background-color 500ms ease-out 0.2s;
  transition: background-color 500ms ease-out 0.2s;
  width: 300px;
  padding: 10px;
  border-radius: 10px;
  border: 5px solid;
  border-color: ${(props) => (props.dark ? "black" : "white")};
  text-align: ${(props) => (props.align ? props.align : "center")};
  color: ${(props) => (props.dark ? "black" : "white")};
  font-style: ${(props) => (props.italic ? "italic" : "")};
  font-weight: ${(props) => (props.bold ? "bold" : "")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "18px")};
`;

const StyledButton = styled.div`
  margin-top: 5px;
  display: block;
  cursor: pointer;
  background-color: ${(props) => (props.dark ? "black" : "white")};
  -webkit-transition: background-color 500ms ease-out 0.2s;
  -moz-transition: background-color 500ms ease-out 0.2s;
  -o-transition: background-color 500ms ease-out 0.2s;
  transition: background-color 500ms ease-out 0.2s;
  color: ${(props) => (props.dark ? "white" : "black")};
  border-radius: 5px;
`;

export default function Modal(props) {
  const [open, setOpen] = useState(props.open);

  return (
    <Popup open={open} closeOnDocumentClick>
      <StyledWrapper {...props}>
        {props.text}
        <StyledButton {...props} onClick={() => setOpen(false)}>
          {props.closingText}
        </StyledButton>
      </StyledWrapper>
    </Popup>
  );
}
