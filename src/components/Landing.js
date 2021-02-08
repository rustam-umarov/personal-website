import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import About from "./About";
import Articles from "./Articles";
import Lucky from "./Lucky";
import NotFound from "./NotFound";
import Header from "./Header";
import Footer from "./Footer";
import { AppContext } from "../context/AppContext";

const StyledLanding = styled.div`
  height: auto;
  min-height: 500px;
  -webkit-transition: background-color 500ms ease-out 0.2s;
  -moz-transition: background-color 500ms ease-out 0.2s;
  -o-transition: background-color 500ms ease-out 0.2s;
  transition: background-color 500ms ease-out 0.2s;
  background-color: ${(props) => (props.dark ? " #2e5cb8" : "#f2f2f2")};
`;

const StyledText = styled.p`
  -webkit-transition: color 500ms ease-out 0.2s;
  -moz-transition: color 500ms ease-out 0.2s;
  -o-transition: color 500ms ease-out 0.2s;
  transition: color 500ms ease-out 0.2s;
  color: ${(props) => (props.dark ? "white" : "black")};
`;

export default function Landing(props) {
  const appContext = useContext(AppContext);
  return (
    <>
      <Router>
        <Header
          {...props}
          dark={appContext.dark}
          changeTheme={appContext.changeTheme}
        />
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => <Home {...props} dark={appContext.dark} />}
          />
          <Route
            path='/home'
            render={(props) => <Home {...props} dark={appContext.dark} />}
          />
          <Route
            path='/about'
            render={(props) => <About {...props} dark={appContext.dark} />}
          />
          <Route
            path='/articles/:id?'
            render={(props) => (
              <Articles
                dark={appContext.dark}
                getArticle={appContext.getArticle}
                getArticles={appContext.getArticles}
                {...props}
              />
            )}
          />
          <Route
            path='/lucky'
            render={(props) => <Lucky {...props} dark={appContext.dark} />}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer dark={appContext.dark} {...props} />
      </Router>
    </>
  );
}
