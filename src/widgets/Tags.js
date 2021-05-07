import React from "react";
import styled from "styled-components";

const StyledTag = styled.p`
  border: black solid 1px;
  border-radius: 12px;
  background-color: ${(props) => (props.dark ? "black" : "white")};
  display: inline-block;
  margin-left: 10px;
  padding: 5px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  float: left;
  font-family: Aller;
  color: ${(props) => (props.dark ? "white" : "black")};

  &:hover {
    color: ${(props) => (props.dark ? "black" : "white")};
    background-color: ${(props) => (props.dark ? "white" : "black")};
  }
`;

export default function Tags(props) {
  return (
    <>
      {props.tags.map((tag) => (
        <StyledTag
          {...props}
          onClick={() =>
            props.history.push(`/articles?t=${tag.replace("#", "%23")}`)
          }
        >
          {tag}
        </StyledTag>
      ))}
    </>
  );
}
