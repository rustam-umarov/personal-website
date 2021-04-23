import React, { useEffect, useState } from "react";
import styled from "styled-components";
import queryString from "query-string";
import Article from "./Article";
import ArticleBox from "../widgets/ArticleBox.js";
import Header from "../widgets/Header";
import Paragraph from "../widgets/Paragraph";

const StyledLanding = styled.div`
  overflow: auto;
  height: auto;
  min-height: 500px;
  -webkit-transition: background-color 500ms ease-out 0.2s;
  -moz-transition: background-color 500ms ease-out 0.2s;
  -o-transition: background-color 500ms ease-out 0.2s;
  transition: background-color 500ms ease-out 0.2s;
  background-color: ${(props) =>
    props.dark
      ? props.theme.dark.body.backgroundColor
      : props.theme.light.body.backgroundColor};
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

  //pull set of articles by page number from query string
  useEffect(() => {
    const name = props.match.params.id;
    const articleFromUrl = name ? props.getArticle(name) : null;

    if (name && !articleFromUrl) {
      //case: article name is supplied, but was not found
      props.history.push("/notfound");
    } else if (name && articleFromUrl) {
      //case: article name is supplied and found
      setArticle(articleFromUrl);
    } else if (qStrings.p) {
      //case: pull by page number
      setPageNumber(qStrings.p);
      setArticles(props.getArticles(qStrings.p));
    } else if (qStrings.s) {
      //case: search
      setArticles(props.getArticles(qStrings.s));
      setPageNumber(qStrings.p);
    } else if (!qStrings.p && !qStrings.s && !props.match.params.id) {
      //case: nothing is supplied, redirect to page 1
      props.history.push("/articles?p=1");
    }
  }, [qStrings.p, qStrings.s, props.match.params.id]);

  return (
    <>
      <Header text='Real Articles' dark={props.dark} bold fontSize='70px' />
      <Paragraph
        dark={props.dark}
        fontSize='24px'
        align='center'
        text='...should be here very soon'
      />
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
            <>
              <Header
                text='Real Articles'
                dark={props.dark}
                bold
                fontSize='70px'
              />
              <Paragraph
                dark={props.dark}
                fontSize='24px'
                align='center'
                text='...should be here really soon'
              />
            </>
          )}
        </StyledText>
      </StyledLanding>
    </>
  );
}
