import React, { useEffect } from "react";
import styled from "styled-components";

const StyledText = styled.p`
  -webkit-transition: color 500ms ease-out 0.2s;
  -moz-transition: color 500ms ease-out 0.2s;
  -o-transition: color 500ms ease-out 0.2s;
  transition: color 500ms ease-out 0.2s;
  color: ${(props) => (props.dark ? "white" : "black")};
  width: 85%;
  margin: 0px auto;
  text-align: left;
`;

export default function Home(props) {
  console.log(props);
  return (
    <>
      <StyledText dark={props.dark}>
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
        typesetting industry Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s when an unknown printer took a galley of type
        and scrambled it to make a type specimen book it has? What is Lorem
        Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type and
        scrambled it to make a type specimen book it has? What is Lorem Ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type and
        scrambled it to make a type specimen book it has? What is Lorem Ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type and
        scrambled it to make a type specimen book it has? What is Lorem Ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type and
        scrambled it to make a type specimen book it has? What is Lorem Ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type and
        scrambled it to make a type specimen book it has? What is Lorem Ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type and
        scrambled it to make a type specimen book it has? What is Lorem Ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type and
        scrambled it to make a type specimen book it has? What is Lorem Ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type and
        scrambled it to make a type specimen book it has?
      </StyledText>
      <StyledText dark={props.dark}>
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
        typesetting industry Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s when an unknown printer took a galley of type
        and scrambled it to make a type specimen book it has? What is Lorem
        Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type and
        scrambled it to make a type specimen book it has? What is Lorem Ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type and
        scrambled it to make a type specimen book it has? What is Lorem Ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type and
        scrambled it to make a type specimen book it has? What is Lorem Ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type and
        scrambled it to make a type specimen book it has? What is Lorem Ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type and
        scrambled it to make a type specimen book it has? What is Lorem Ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type and
        scrambled it to make a type specimen book it has? What is Lorem Ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type and
        scrambled it to make a type specimen book it has? What is Lorem Ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type and
        scrambled it to make a type specimen book it has?
      </StyledText>
    </>
  );
}
