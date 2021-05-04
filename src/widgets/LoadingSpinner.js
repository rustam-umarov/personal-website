import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function LoadingSpinner(props) {
  return (
    <>
      {props.scaleLoader ? (
        <ScaleLoader
          color={props.color}
          loading={props.loading}
          height='5'
          width='10'
        />
      ) : (
        <ClipLoader color={props.color} loading={props.loading} size={100} />
      )}
    </>
  );
}
