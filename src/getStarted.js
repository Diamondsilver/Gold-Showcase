import React from 'react';

import subHeading from './SubHeading';
//import { images } from '../../constants';
import './Header.css';
import './App.css';

const GetStarted = () => (
  <div id="getstarted" className="app__header app__wrapper section__padding">
    <div className="app__wrapper_info">
      <subHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Get Started</h1>
      <ul className="p__opensans" style={{ margin: '2rem 0' }}>
      <li>Download metamask</li>
      <li>Create an ethereum wallet and keep your seed phrase safe</li>
      <li>Sign up to a trusted crypto exchange and purchase some ethereum</li>
      <li>Send the ethereum to your metamask wallet</li>
      <li>Authenticate your wallet to this website by clicking the authenticate button above</li>
      <li>import the tokens contract adress into your metamask</li>
      <li>Purchase tokens</li>

      </ul>
      <button type="button" className="custom__button">Click here for a detailed guide</button>
    </div>

    <div className="app__wrapper_img">
    <img src={require('./finegold.png')} alt="header_img" />
    </div>
  </div>
);

export default GetStarted;
