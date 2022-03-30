import React from 'react';

import subHeading from './SubHeading';
//import { images } from '../../constants';
import './Header.css';
import './App.css';
import { useMoralis, useWeb3ExecuteFunction } from "react-moralis";

import {Button, Alert, AlertIcon, Box, AlertTitle, AlertDescription, CloseButton, NumberInput,
  NumberInputField, Text, Stack,Flex,Spacer } from '@chakra-ui/react'
import { Container, Heading } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react';


function Header() {

  let currentPrice;
  let amountYouGet;
  let resultamount;
  let goldleft;
  let lastTime;


 
  


const amountEl_one = document.getElementById('amount1');
const amountEl_two = document.getElementById('rez');
const rateEl = document.getElementById('insidetext');


  const {authenticate, isAuthenticated, isAuthenticating, authError, logout, Moralis, enableWeb3} = useMoralis()
  const contractProcessor = useWeb3ExecuteFunction();


   async function handleErrors() {
    console.log("error?")
    await getBalance()
    if(parseFloat(goldleft) < parseFloat(amountEl_one.value)){
      console.log(goldleft);
      console.log(amountEl_one.value);
      console.log("missed?")
      document.getElementById("errormsg").innerHTML = ` Gold Availible in reserve: ${goldleft} grams`;
    }else if((Date.now() - lastTime) < (3000) ) {
      // get from variable
      document.getElementById("errormsg").innerHTML = "Insufficent ethereum balance in wallet";
  }
    
  }


  async function reset(){
    document.getElementById("errormsg").innerHTML = " ";
  }

 




  async function buyGold(){

    document.getElementById("errormsg").innerHTML = " ";
    await calculate();

    

    let options = {
      
      contractAddress:"0x72fc82a9f4660f59a46d8085F5900f03091376AB",
      functionName: "BuyGramOfGold",
      abi:[{
          "inputs": [],
          "name": "BuyGramOfGold",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
      }],
      params:{},
      //msgValue: Moralis.Units.ETH(0.1)
      msgValue: Moralis.Units.ETH(document.getElementById('rez').value)

  }

  lastTime = Date.now();

  let check = await contractProcessor.fetch({
    params: options
  })

  check.onerror = handleErrors();
  
   
  }

  async function getPrice() {

    await enableWeb3();

    let options2 = {
        
        contractAddress:"0x72fc82a9f4660f59a46d8085F5900f03091376AB",
        functionName: "PricePerGram",
        abi:[{
            "inputs": [],
            "name": "PricePerGram",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }],
        params:{}

    }

  //  await contractProcessor.fetch({
   //   params: options2
   // })

    let result = await Moralis.executeFunction(options2);
    currentPrice = parseInt(result._hex,16)/1e18 // price per gram in eth
    console.log(currentPrice);
 }


async function getBalance() {

  await enableWeb3();


  let options3 = {
      
      contractAddress:"0x72fc82a9f4660f59a46d8085F5900f03091376AB",
      functionName: "checkUnalocatedGold",
      abi:[ {
          "inputs": [],
          "name": "checkUnalocatedGold",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }    
          ],
          "stateMutability": "pure",
          "type": "function"
      }],
      params:{}

  }
  goldleft = await Moralis.executeFunction(options3);
  goldleft = parseFloat(goldleft,16);
  goldleft = (goldleft/1e18).toFixed(3);
  document.getElementById("numleft").innerHTML = `Gold availible from reserve: ${goldleft} grams` ;
  return goldleft
 // currentPrice = parseInt(result._hex,16)/1e18 // price per gram in eth
  //console.log(currentPrice);
}

async function calculate() {
  
      await getPrice();
      await getBalance();
      const rate = currentPrice
      //const rate = data.conversion_rates[currency_two];
     // rateEl.innerText = `1 Ether = ${1/rate} Grams of tokenized gold`;
      amountEl_two.value = (amountEl_one.value * (rate)).toFixed(7);
      console.log(amountEl_two.value);
      resultamount = amountEl_two.value;
      document.getElementById("rez").innerHTML = resultamount;
       
}

if(isAuthenticated){

  return( <div centerContent className="app__header app__wrapper section__padding" id="home">
  <div className="app__wrapper_info">
    <subHeading title="Chase the new flavour" />
    <h1 className="app__header-h1">Buy Gold Tokens</h1>
    <div>
      
      <div className="group">
        <Stack paddingTop={2} paddingBottom={2} spacing={2}>
          <Text fontSize='md'>Enter how many grams of tokenized gold you would like:</Text>
        </Stack>
              <NumberInput id="amount1"  onInput={() => calculate() && reset()} >
                <NumberInputField placeholder = "Grams of tokenized gold"/>
            </NumberInput>
            <Text id="numleft"fontSize='md ' paddingBottom={2}>Gold availible from reserve:</Text>
        </div>
        <div className="group">
        <Stack paddingTop={2} paddingBottom={2} spacing={10}>
          <Text fontSize='md'>Price in Ethereum:</Text>
        </Stack>
            <Text id="rez"fontSize='md ' paddingBottom={2}>0</Text>
            
        </div>
        <Stack direction='row' spacing={10}>
      <Button color='black' fontFamily={'Cormorant Upright'} backgroundColor='#F5EFDB' onClick = {() => buyGold()}>Buy Gold</Button>
      </Stack>
      <Text id="errormsg"fontSize='md ' paddingTop={2} color='#FF0000'></Text>
      
      
      </div>
  </div>
  <div className="app__wrapper_img">
    <img src={require('./try1.png')} alt="header_img" />
  </div>
</div>

  );
 }

  return(
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <subHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Gold Exchange</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Authenticate your metamask to begin</p>
      { authError && (<Alert status='error' marginBottom={10}>
  <AlertIcon />
  <Box flex='1'>
    <AlertTitle>Authentication has failed</AlertTitle>
    <AlertDescription display='block'>
      {authError.message}
    </AlertDescription>
  </Box>
  <CloseButton position='absolute' right='8px' top='8px' />
</Alert>)}
 
      <Button color='black' fontFamily={'Cormorant Upright'} backgroundColor='#F5EFDB' isLoading ={isAuthenticating} onClick = {() => authenticate()}>Authenticate</Button>
    </div>

    <div className="app__wrapper_img">
      <img src={require('./try1.png')} alt="header_img" />
    </div>
  </div>

);
}

export default Header;
