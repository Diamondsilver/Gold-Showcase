import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";
import {Button, Alert, AlertIcon, Box, AlertTitle, AlertDescription, CloseButton, NumberInput,
  NumberInputField, Text, Stack,Flex,Spacer } from '@chakra-ui/react'
import { Container, Heading } from "@chakra-ui/react";
import Buysection from "./buysection";
import Navbar from "./Navbar";
import Header2 from "./Header2";
import Header from "./Header";
import GetStarted from "./getStarted";
import Footer from "./Footer";

//import React, { useEffect } from "react";


function App() {

  return (
    <div>
    <Navbar/>
   <Header/>
   <Header2/>
   <GetStarted/>
   <Footer/>
   </div>
  );

//Event Listener

  //amountEl_one.addEventListener('input', calculate);
  //amountEl_two.addEventListener('input', calculate);

}



export default App;
