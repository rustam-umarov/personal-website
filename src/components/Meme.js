import React, { useState, useEffect } from "react";
import Header from "../widgets/Header";
import ImageContainer from "../widgets/ImageContainer";
import LoadingSpinner from "../widgets/LoadingSpinner";
import Modal from "../widgets/Modal";

export default function Meme(props) {
  const [meme, setMeme] = useState({});

  useEffect(async () => {
    await getMeme();
  }, []);

  const getMeme = async () => {
    const result = await props.appContext.getRandomMeme();
    setMeme(result);
  };

  return (
    <>
      {meme.data && meme.data.title && (
        <Header text={meme.data.title} dark={props.dark} bold fontSize='20px' />
      )}
      {meme.data && meme.data.url ? (
        <ImageContainer path={meme.data.url} width='300px' onClick={getMeme} />
      ) : (
        <LoadingSpinner color={props.dark ? "white" : "black"} loading />
      )}
      <Modal
        open
        dark={props.dark}
        text='Just click/tap on the meme to view another one!'
        closingText='Got it!'
      />
    </>
  );
}
