import React from 'react';
import '../App.css';
import logo from '../logo.png';
import AuctionBrowser from './AuctionBrowser.js';

const AuctionCreator = () => {

  }
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
 
export default AuctionCreator;
