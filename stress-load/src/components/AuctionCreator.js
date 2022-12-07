import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import AuctionBrowser from './AuctionBrowser.js';

/*
  The AuctionCreator component is responsible for creating an interface
  through which users can create stress loads.
  This is done by letting them input values in text boxes (such as how much food there is),
  then submitting the newly created auction.
  In the future, this will need to be linked with a database, creating the auction there instead.
  Otherwise, the auction will only be stored locally, preventing anyone else from ever seeing it.
*/

const AuctionCreator = () => {

    return (
      
        <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
			<h2>Auction Creator</h2>
        </div>
      </div>
    );
}
 
export default AuctionCreator;
