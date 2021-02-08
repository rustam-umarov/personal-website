import React, { useEffect, useState } from "react";
import styled from "styled-components";
import queryString from "query-string";
import Article from "./Article";
import ArticleBox from "../widgets/ArticleBox.js";

const StyledLanding = styled.div`
  overflow: auto;
  height: auto;
  min-height: 500px;
  -webkit-transition: background-color 500ms ease-out 0.2s;
  -moz-transition: background-color 500ms ease-out 0.2s;
  -o-transition: background-color 500ms ease-out 0.2s;
  transition: background-color 500ms ease-out 0.2s;
  background-color: ${(props) => (props.dark ? "#2e5cb8" : "#f2f2f2")};
`;

const StyledText = styled.p`
  -webkit-transition: color 500ms ease-out 0.2s;
  -moz-transition: color 500ms ease-out 0.2s;
  -o-transition: color 500ms ease-out 0.2s;
  transition: color 500ms ease-out 0.2s;
  color: ${(props) => (props.dark ? "white" : "black")};
`;

export default function Articles(props) {
  const [article, setArticle] = useState(null);
  const [articles, setArticles] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const qStrings = queryString.parse(props.location.search);

  useEffect(() => {
    if (qStrings.p) {
      setPageNumber(qStrings.p);
      setArticles(props.getArticles(qStrings.p));
    }
  }, [qStrings.p]);

  useEffect(() => {
    const id = props.match.params.id;
    const articleFromUrl = id ? props.getArticle(id) : null;
    setArticle(articleFromUrl);
  }, [props.match.params.id]);

  return (
    <>
      <StyledLanding dark={props.dark}>
        <StyledText dark={props.dark}>
          {article ? (
            <Article content={article} />
          ) : articles && articles.length > 0 ? (
            articles.map((item) => {
              return (
                <ArticleBox
                  {...props}
                  id={item.id}
                  header={item.header}
                  text={item.text}
                  tags={item.tags}
                  date={item.date}
                />
              );
            })
          ) : (
            "Neither article or page were found"
          )}
        </StyledText>
      </StyledLanding>
    </>
  );
}