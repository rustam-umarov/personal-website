import React, { useEffect, useState } from "react";
import styled from "styled-components";
import queryString from "query-string";
import Article from "./Article";
import ArticleBox from "../widgets/ArticleBox.js";
import Header from "../widgets/Header";
import Paragraph from "../widgets/Paragraph";
import SearchBar from "../widgets/SearchBar";
import LoadingSpinner from "../widgets/LoadingSpinner";

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
  const [isLoading, setIsLoading] = useState(true);
  const qStrings = queryString.parse(props.location.search);

  //pull set of articles by page number from query string
  useEffect(async () => {
    const name = props.match.params.id;
    const articleFromUrl = name ? props.getArticle(name) : null;
    const searchObject = {};

    if (name && !articleFromUrl) {
      console.log("not found");
      //case: article name is supplied, but was not found
      props.history.push("/notfound");
    } else if (name && articleFromUrl) {
      console.log("article name is supplied and found");
      //case: article name is supplied and found
      setArticle(articleFromUrl);
    } else if (qStrings.p || qStrings.s || qStrings.t) {
      if (qStrings.p) {
        console.log("pull by page number");
        //case: pull by page number
        setPageNumber(qStrings.p);
        searchObject.page = qStrings.p;
      } else if (qStrings.s) {
        console.log("search");
        //case: search
        searchObject.query = qStrings.s;
      } else if (qStrings.t) {
        console.log("tag");
        //case: tag
        searchObject.tag = qStrings.t;
      }
      setArticles(await props.getArticles(searchObject));
    } else if (
      !qStrings.p &&
      !qStrings.s &&
      !qStrings.t &&
      !props.match.params.id
    ) {
      console.log("nothing is supplied, redirect to page 1");
      //case: nothing is supplied, redirect to page 1
      props.history.push("/articles?p=1");
    }
    setIsLoading(false);
  }, [qStrings.p, qStrings.s, qStrings.t, props.match.params.id]);

  return (
    <>
      <Header text='Real Articles' dark={props.dark} bold fontSize='70px' />
      <Paragraph
        dark={props.dark}
        fontSize='24px'
        align='center'
        text='...should be here very soon'
      />
      {articles && articles.length > 0 && (
        <SearchBar
          searchFunction={props.getArticles}
          history={props.history}
          url='/articles'
        />
      )}
      <StyledLanding dark={props.dark}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
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
                <Paragraph
                  dark={props.dark}
                  fontSize='24px'
                  align='center'
                  text='nothing to show :('
                />
              </>
            )}
          </StyledText>
        )}
      </StyledLanding>
    </>
  );
}
