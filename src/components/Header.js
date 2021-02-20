import React from "react";
import "../App.css";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Switch from "@material-ui/core/Switch";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  color: ${(props) =>
    props.dark
      ? props.theme.dark.header.fontColor
      : props.theme.light.header.fontColor};
  height: 100%;
  padding: 8px;
  margin-left: 20px;
  width: 100px;
  display: inline-block;
  text-decoration: none;
  border: 1px solid transparent;

  &:hover {
    text-decoration: none;
    border: 1px solid black;
    border-radius: 20px;
    background-color: ${(props) =>
      props.dark
        ? props.theme.dark.header.overBackgroundColor
        : props.theme.light.header.hoverBackgroundColor};
    color: ${(props) =>
      props.dark
        ? props.theme.dark.header.hoverFontColor
        : props.theme.light.header.hoverFontColor};
  }
`;

const StyledNav = styled(Nav)`
  overflow: hidden;
  margin: 0px;
  heigth: 100%;
  padding: 0px;
`;

const StyledCollapse = styled(Navbar.Toggle)`
  background-colod: pink;
`;

export default function Header(props) {
  const activeStyle = {
    backgroundColor: "white",
    color: "black",
    borderRadius: "20px",
  };

  const StyledNavbar = styled(Navbar)`
    background-color: ${(props) =>
      props.dark
        ? props.theme.dark.header.backgroundColor
        : props.theme.light.header.backgroundColor};
    color: white;
  `;

  return (
    <StyledNavbar collapseOnSelect expand='md' {...props}>
      <Switch
        checked={props.dark}
        onChange={props.changeTheme}
        color='primary'
        name='checkedB'
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      <StyledCollapse aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <StyledNav className='mr-auto'>
          <StyledLink to='/home' activeStyle={activeStyle} {...props}>
            Home
          </StyledLink>
          <StyledLink to='/articles' activeStyle={activeStyle} {...props}>
            Articles
          </StyledLink>
          <StyledLink to='/about' activeStyle={activeStyle} {...props}>
            About
          </StyledLink>
        </StyledNav>
        <StyledNav>
          <StyledLink to='/Meme' activeStyle={activeStyle} {...props}>
            Meme
          </StyledLink>
        </StyledNav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
}
