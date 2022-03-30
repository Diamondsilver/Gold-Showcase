import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
//import images from '../../constants/images';
import './Navbar.css';
import { Alert, AlertIcon, Box, AlertTitle, AlertDescription, CloseButton, NumberInput,
  NumberInputField, Text, Stack,Flex,Spacer } from '@chakra-ui/react'
import { Container, Heading } from "@chakra-ui/react";
//import { images } from '../../constants';
import './Header.css';
import './App.css';
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import { Button } from '@chakra-ui/react';



const Navbar = () => {

  const {authenticate, isAuthenticated, isAuthenticating, authError, logout, Moralis, enableWeb3} = useMoralis()
  const contractProcessor = useWeb3ExecuteFunction();

  const [toggleMenu, setToggleMenu] = React.useState(false);

  if(isAuthenticated){

    return( <nav className="app__navbar">
    <div className="app__navbar-logo">
      <Text fontFamily={'Cormorant Upright'} margin={2} paddingTop={1}>Tokenized Gold</Text>
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans"><a href="#home">Home</a></li>
      <li className="p__opensans"><a href="#about">About</a></li>
      <li className="p__opensans"><a href="#howitworks">How it works</a></li>
      <li className="p__opensans"><a href="#getstarted">Getting started</a></li>
      <li className="p__opensans"><a href="https://protectingcrypto.com/" target="_blank">Auditing</a></li>
      <li className="p__opensans"><a href="#contact">Contact</a></li>
    </ul>
    <div className="app__navbar-login">
    <Button color='black' fontFamily={'Cormorant Upright'} backgroundColor='#F5EFDB' onClick = {() => logout()}>Disconnect metamask</Button>
    
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
      {toggleMenu && (
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className="app__navbar-smallscreen_links">
            <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
            <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
            <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
            <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  </nav>
  
    );
   }





  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Text margin={2} paddingTop={1}>Tokenized Gold</Text>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">How it works</a></li>
        <li className="p__opensans"><a href="#awards">Auditing</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
      <Button color='black' fontFamily={'Cormorant Upright'} backgroundColor='#F5EFDB' isLoading ={isAuthenticating} onClick = {() => authenticate()}>Authenticate metamask</Button>
    
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
