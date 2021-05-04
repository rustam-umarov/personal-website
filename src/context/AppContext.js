import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [dark, setDark] = useState(false);

  const getRandomMeme = async () => {
    const memeObject = await axios.get("https://meme-api.herokuapp.com/gimme");
    return memeObject;
  };

  const changeTheme = () => {
    const value = localStorage.getItem("dark") === "true" ? "false" : "true";
    localStorage.setItem("dark", value);
    setDark(value === "true" ? true : false);
  };

  const getArticles = async (searchObject) => {
    if (searchObject && searchObject.query) {
      return await searchAll(searchObject.query);
    } else if (searchObject && searchObject.page) {
      return [
        {
          id: 1,
          header: "Mocking static HttpClient in .NET 5",
          text:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          tags: ["JSON", "C#", "XML", "JWT", "Java", "SpringBoot"],
          date: "November 7, 2020",
        },
        {
          id: 2,
          header: "5 Design Patterns Every Developer Must Use",
          text:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
          tags: ["JSON", "C#"],
          date: "November 7, 2020",
        },
        {
          id: 3,
          header: "Dummy Header",
          text:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
          tags: ["JSON", "C#"],
          date: "November 7, 2020",
        },
      ];
    } else if (searchObject && searchObject.tag) {
      console.log("tag");
      return [
        {
          id: 1,
          header: "Mocking static HttpClient in .NET 5",
          text:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          tags: ["JSON", "C#", "XML", "JWT", "Java", "SpringBoot"],
          date: "November 7, 2020",
        },
        {
          id: 2,
          header: "5 Design Patterns Every Developer Must Use",
          text:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
          tags: ["JSON", "C#"],
          date: "November 7, 2020",
        },
      ];
    }
  };

  const getArticle = (name) => {
    const config = require("../assets/articles/config.json");
    if (config[name]) {
      const articleContent = require(`../assets/articles/${config[name]}-${name}.json`);
      return articleContent;
    }
    return undefined;
  };

  const searchAll = (text) => {
    const searchText = Promise.resolve(text);
    const searchTags = "text " + text;
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

  return (
    <AppContext.Provider
      value={{
        dark,
        changeTheme,
        getArticle,
        getArticles,
        getRandomMeme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
