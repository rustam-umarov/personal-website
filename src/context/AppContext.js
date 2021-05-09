import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [dark, setDark] = useState(false);
  const config = require("../assets/articles/config.json");
  const articlesPerPage = 2;

  useEffect(() => {
    if (localStorage.getItem("dark") === "true") {
      setDark(true);
    }
  }, []);

  const getRandomMeme = async () => {
    const memeObject = await axios.get("https://meme-api.herokuapp.com/gimme");
    return memeObject;
  };

  const changeTheme = () => {
    const value = localStorage.getItem("dark") === "true" ? "false" : "true";
    localStorage.setItem("dark", value);
    setDark(value === "true" ? true : false);
  };

  const getArticles = (searchObject) => {
    if (searchObject && searchObject.query) {
      return Promise.resolve(searchAll(searchObject.query));
    } else if (searchObject && searchObject.page) {
      return getArticlesForPage(searchObject, articlesPerPage);
    } else if (searchObject && searchObject.tag) {
      return Promise.resolve(searchText(searchObject.tag, "tag"));
    }
  };

  const getArticlesForPage = (searchObject, articlesPerPage) => {
    const articleCount = Object.keys(config).length;
    const articleNames = [];
    Object.keys(config).forEach((name) => {
      articleNames.push(`${config[name]}-${name}.json`);
    });
    const articlesToReturn = [];
    if (Math.ceil(articleCount / articlesPerPage) >= searchObject.page) {
      for (
        let i = searchObject.page * articlesPerPage - articlesPerPage;
        i < searchObject.page * articlesPerPage;
        i++
      ) {
        if (articleNames[i]) {
          articlesToReturn.push(
            require(`../assets/articles/${articleNames[i]}`)
          );
        }
      }
    }
    console.log(articlesToReturn);
    return articlesToReturn;
  };

  const getArticle = (name) => {
    if (config[name]) {
      const articleContent = require(`../assets/articles/${config[name]}-${name}.json`);
      return articleContent;
    }
    return undefined;
  };

  const getAllPageNumbers = () => {
    return Promise.resolve(
      Math.ceil(Object.keys(config).length / articlesPerPage)
    );
  };

  const searchAll = (text) => {
    const searchParagraph = Promise.resolve(searchText(text, "text"));
    const searchTags = Promise.resolve(searchText(text, "tag"));
    const searchHeader = Promise.resolve(searchText(text, "header"));

    return Promise.all([searchParagraph, searchTags, searchHeader]).then(
      function ([first, second, third]) {
        return first.concat(second, third);
      }
    );
  };

  const searchText = (text, category) => {
    const articles = [];
    Object.keys(config).forEach((name) => {
      const article = require(`../assets/articles/${config[name]}-${name}.json`);
      switch (category) {
        case "tag":
          if (article) {
            article.tags.forEach((tag) => {
              tag.toLowerCase().includes(text.toLowerCase()) &&
                articles.push(article);
            });
          }
        case "header":
          if (
            article &&
            article.header.toLowerCase().includes(text.toLowerCase())
          ) {
            articles.push(article);
          }
        case "text":
          if (
            article &&
            article.text.toLowerCase().includes(text.toLowerCase())
          ) {
            articles.push(article);
          }
      }
    });
    return articles;
  };

  return (
    <AppContext.Provider
      value={{
        dark,
        changeTheme,
        getAllPageNumbers,
        getArticle,
        getArticles,
        getRandomMeme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
