import React from 'react';

import subHeading from './SubHeading';
//import { images } from '../../constants';
import './Header.css';
import './App.css';

const Header2 = () => (
  <div className="app__header app__wrapper section__padding" id="howitworks">
    <div className="app__wrapper_info">
      <subHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">How it works</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>When you pruchase our gold-backed cryptocurrency, you are issued fungible ERC20 tokens, each representing our sales value of 1 gram of gold
      bullion gold. The corresponding gold is backed and secured in our vaults, ready to be redeemed when the tokens are presented to us. This allows frictionless and easy movement
      of gold backed value. The reserves are audited twice a year to solidify the integrety of our tokens. </p>
      <button type="button" className="custom__button">Click here for a detailed guide</button>
    </div>

    <div className="app__wrapper_img">
    <img src={require('./safe.png')} alt="header_img" />
    </div>
  </div>
);

export default Header2;
