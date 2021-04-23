import React, { useEffect } from "react";
import Header from "../widgets/Header";
import Paragraph from "../widgets/Paragraph";

export default function Home(props) {
  return (
    <>
      <Header text='Home page' dark={props.dark} bold fontSize='70px' />
      <Paragraph
        dark={props.dark}
        fontSize='24px'
        align='center'
        text='...just because it has to be on every website'
      />
    </>
  );
}
