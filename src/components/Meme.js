import React from "react";
import Header from "../widgets/Header";

export default function Meme(props) {
  return (
    <>
      <Header text='Random meme' dark={props.dark} bold fontSize='70px' />
    </>
  );
}
