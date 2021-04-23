import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function LoadingSpinner(props) {
  const style = "";

  return <ClipLoader color={props.color} loading={props.loading} size={150} />;
}
