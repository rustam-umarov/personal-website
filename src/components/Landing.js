import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import About from "./About";
import Articles from "./Articles";
import Meme from "./Meme";
import NotFound from "./NotFound";
import Header from "./Header";
import Footer from "./Footer";
import { AppContext } from "../context/AppContext";

const StyledParent = styled.div`
  -webkit-transition: background-color 500ms ease-out 0.2s;
  -moz-transition: background-color 500ms ease-out 0.2s;
  -o-transition: background-color 500ms ease-out 0.2s;
  transition: background-color 500ms ease-out 0.2s;
  background-color: ${(props) =>
    props.dark ? props.theme.colors.darkBackground : "#f2f2f2"};
  box-sizing: border-box;
  position: relative;
  min-height: 100%;
`;

const StyledBox = styled.div`
  -webkit-transition: background-color 500ms ease-out 0.2s;
  -moz-transition: background-color 500ms ease-out 0.2s;
  -o-transition: background-color 500ms ease-out 0.2s;
  transition: background-color 500ms ease-out 0.2s;
  width: 100%;
  height: 100%;
  margin: 0px auto;
  position: relative;
  overflow: hidden;
  padding-bottom: 50px;
  padding-top: 85px;
  max-width: 1200px;

  background-color: ${(props) =>
    props.dark ? props.theme.colors.darkBackground : "#f2f2f2"};
`;

export default function Landing(props) {
  const appContext = useContext(AppContext);
  return (
    <>
      <StyledParent dark={appContext.dark}>
        <Router>
          <Header
            {...props}
            dark={appContext.dark}
            changeTheme={appContext.changeTheme}
          />
          <StyledBox dark={appContext.dark}>
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
                path='/meme'
                render={(props) => <Meme {...props} dark={appContext.dark} />}
              />
              <Route component={NotFound} />
            </Switch>
          </StyledBox>
        </Router>
        <Footer dark={appContext.dark} {...props} />
      </StyledParent>
    </>
  );
}
