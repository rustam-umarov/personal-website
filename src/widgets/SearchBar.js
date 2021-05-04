import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import LoadingSpinner from "../widgets/LoadingSpinner";

const StyledSearch = styled(Form.Group)`
  width: 300px;
  height: 50px;
  margin: 0px auto;
`;

export default function SearchBar(props) {
  const [time, setTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const search = (e) => {
    time && clearTimeout(time);
    e.target.value ? setIsLoading(true) : setIsLoading(false);
    setTime(
      setTimeout(() => {
        if (e.target.value) {
          setIsLoading(false);
          props.history.push(`${props.url}?s=${e.target.value}`);
        }
      }, 1500)
    );
  };

  return (
    <>
      <StyledSearch>
        <Form.Control
          type='text'
          placeholder='Start typing...'
          onChange={(e) => search(e)}
        />
        {isLoading && <LoadingSpinner scaleLoader />}
      </StyledSearch>
    </>
  );
}
