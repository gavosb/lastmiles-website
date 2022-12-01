import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import AuctionBrowser from './AuctionBrowser.js';

const Auction = () => {

    return (
      
        <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Auction Creator</h2>
        </div>
        {getCurrentComponent()}
      </div>
    );
}
 
export default Auction;
