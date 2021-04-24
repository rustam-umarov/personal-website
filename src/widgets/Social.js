import React from "react";
import ImageContainer from "../widgets/ImageContainer";
import facebook from "../assets/images/fb.png";
import instagram from "../assets/images/ig.png";
import github from "../assets/images/gh.png";
import twitter from "../assets/images/tr.png";
import linkedin from "../assets/images/li.png";
import styled from "styled-components";

const StyledFlexBox = styled.div`
  display: flex;
  width: 300px;
  margin: 0 auto;
  cursor: pointer;
`;

export default function Social() {
  return (
    <StyledFlexBox>
      <ImageContainer
        path={linkedin}
        height='40px'
        height='40px'
        onClick={() =>
          window.open("https://www.linkedin.com/in/rustam-umarov/", "_blank")
        }
      />
      <ImageContainer
        path={github}
        height='40px'
        height='40px'
        onClick={() =>
          window.open("https://github.com/rustam-umarov", "_blank")
        }
      />
      <ImageContainer
        path={twitter}
        height='40px'
        height='40px'
        onClick={() =>
          window.open("https://twitter.com/rustamumar0v", "_blank")
        }
      />
      <ImageContainer
        path={facebook}
        height='40px'
        height='40px'
        onClick={() =>
          window.open("https://www.facebook.com/russstam/", "_blank")
        }
      />
      <ImageContainer
        path={instagram}
        height='40px'
        height='40px'
        onClick={() =>
          window.open("https://www.instagram.com/rstmumrv/", "_blank")
        }
      />
    </StyledFlexBox>
  );
}
