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

const StyledPageNumber = styled.text`
  border: black solid 1px;
  border-radius: 12px;
  display: inline-block;
  margin-left: 10px;
  padding: 5px;
  font-size: 10px;
  font-weight: bold;
  cursor: pointer;
  font-family: Aller;
  color: ${(props) => (props.dark ? "white" : "black")};
  background-color: ${(props) => (props.dark ? "black" : "white")};

  &:hover {
    color: ${(props) => (props.dark ? "black" : "white")};
    background-color: ${(props) => (props.dark ? "white" : "black")};
  }

  ${(props) =>
    (props.active && props.dark && "color: black; background-color: white;") ||
    (props.active && !props.dark && "color: white; background-color: black")}
`;

export default function Articles(props) {
  const [article, setArticle] = useState(null);
  const [articles, setArticles] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState();
  const [withPages, setWithPages] = useState();
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
        const maxPage = await props.getPages();
        if (qStrings.p < 1 || qStrings.p > maxPage) {
          props.history.push("/notfound");
        } else {
          setPageCount(maxPage);
          setPageNumber(qStrings.p);
          setWithPages(true);
          searchObject.page = qStrings.p;
        }
      } else if (qStrings.s) {
        console.log("search");
        //case: search
        searchObject.query = qStrings.s;
        setWithPages(false);
      } else if (qStrings.t) {
        console.log("tag");
        //case: tag
        searchObject.tag = qStrings.t;
        setWithPages(false);
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

  const iteratePages = () => {
    const pages = [];

    if (pageNumber == 1 && pageCount > 1) {
      pages.push(1);
      pageCount >= 2 && pages.push(2);
      pageCount >= 3 && pages.push(3);
    } else if (pageNumber > 1 && pageNumber < pageCount) {
      pageNumber - 1 > 0 && pages.push(pageNumber - 1);
      pages.push(pageNumber);

      parseInt(pageNumber) + 1 <= pageCount &&
        pages.push(parseInt(pageNumber) + 1);
    } else if (pageNumber > 1 && pageNumber == pageCount) {
      pageNumber - 2 > 0 && pages.push(pageNumber - 2);
      pageNumber - 1 > 0 && pages.push(pageNumber - 1);
      pages.push(pageNumber);
    }
    return pages;
  };

  const goToPage = (page) => {
    props.history.push(`/articles?p=${page}`);
  };

  return (
    <>
      <Header text='Real Articles' dark={props.dark} bold fontSize='70px' />
      <Paragraph
        dark={props.dark}
        fontSize='24px'
        align='center'
        text='...should be here very soon'
      />
      {!article && (
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
                  text='nothing was found :('
                />
              </>
            )}
          </StyledText>
        )}
        {withPages &&
          pageCount &&
          pageNumber &&
          iteratePages().map((page) => {
            return (
              <StyledPageNumber
                active={pageNumber === page}
                onClick={() => goToPage(page)}
              >
                {page}
              </StyledPageNumber>
            );
          })}
      </StyledLanding>
    </>
  );
}
