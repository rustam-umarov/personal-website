import React from "react";
import styled from "styled-components";

const StyledImage = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
`;

export default function ImageContainer(props) {
  return (
    <StyledImage onClick={props.onClick}>
      <img src={props.path} height={props.height} width={props.width} />
    </StyledImage>
  );
}
