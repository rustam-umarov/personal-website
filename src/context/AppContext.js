import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [dark, setDark] = useState(false);
  const config = require("../assets/articles/config.json");
  const articlesPerPage = 4;

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
      // TODO:
      return Promise.resolve(searchAll(searchObject.query));
    } else if (searchObject && searchObject.page) {
      return getArticlesForPage(searchObject, articlesPerPage);
    } else if (searchObject && searchObject.tag) {
      return Promise.resolve(searchTag(searchObject.tag));
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
      Math.ceil(Math.ceil(Object.keys(config).length / articlesPerPage))
    );
  };

  const searchAll = (text) => {
    const searchText = Promise.resolve(text);
    const searchTags = Promise.resolve(searchTag(text));
    const searchHeader = Promise.resolve("hey");

    return Promise.all([searchText, searchTags, searchHeader]).then(
      (values) => {
        return [
          {
            id: 1,
            header: "Mocking static HttpClient in .NET 5",
            text:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            tags: ["JSON", "C#", "XML", "JWT", "Java", "SpringBoot"],
            date: "November 7, 2020",
          },
        ];
      }
    );
  };

  const searchTag = (tag) => {
    const articles = [];
    Object.keys(config).forEach((name) => {
      const article = require(`../assets/articles/${config[name]}-${name}.json`);
      if (article && article.tags.includes(tag)) {
        articles.push(article);
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
