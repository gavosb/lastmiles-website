import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import AuctionBrowser from './AuctionBrowser.js';

/*
    The Auction component is responsible for storing the data of a single auction.
    Instances of this will be made by the AuctionCreator component,
    and stored in the AuctionBrowser component.
    This will need to store the type/quantity of food, the deadline the rescue
    needs to be finished by, and the location of the food rescue, among other things.
*/

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
