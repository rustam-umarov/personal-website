import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  // border: ${(props) => (props.dark ? "white" : "black")} 3px solid;
  border-radius: 5px;
  max-width: 700px;
  margin: auto;
  margin-top: 20px;
  padding-left: 20px;
  overflow: hidden;
`;

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

const StyledHeader = styled.p`
  font-size: 23px;
  font-family: Basketball, serif;
  padding-right: 20xpx;
  font-family: CaviarDreams;
`;

const StyledText = styled.p`
  font-size: 13px;
  padding-right: 20px;
  text-align: justify;
  float: left;
  font-family: Aller;
`;

const StyledDate = styled.p`
  font-size: 8px;
  font-family: Aller;

  float: left;
`;
const StyledMore = styled.p`
  display: inline;
  font-weight: bold;
  font-style: italic;
  color: ${(props) => (props.dark ? "black" : "black")};
  &:hover {
    color: ${(props) => (props.dark ? "white" : "white")};
    cursor: pointer;
  }
`;

export default function ArticleBox(props) {
  return (
    <StyledBox {...props}>
      <StyledHeader>{props.header}</StyledHeader>
      <StyledDate>{props.date}</StyledDate>
      <StyledText>
        {props.text.substring(0, 580).trim()}...{" "}
        <StyledMore {...props} onClick={() => alert("hey thanks")}>
          continue reading
        </StyledMore>
      </StyledText>
      {props.tags.map((tag) => (
        <StyledTag {...props} onClick={() => alert(tag)}>
          {tag}
        </StyledTag>
      ))}
    </StyledBox>
  );
}
