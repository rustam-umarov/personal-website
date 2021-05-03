import React, { useState } from "react";
import styled from "styled-components";
import LoadingSpinner from "../widgets/LoadingSpinner";

export default function ImageContainer(props) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const StyledImage = styled.img`
    margin: 0 auto;
    margin-bottom: 20px;
    display: none;
    ${imageLoaded && "display: inline;"}
  `;

  return (
    <>
      {!imageLoaded && <LoadingSpinner />}
      <StyledImage
        onClick={props.onClick}
        src={props.path}
        height={props.height}
        width={props.width}
        onLoad={() => setImageLoaded(true)}
      />
    </>
  );
}
