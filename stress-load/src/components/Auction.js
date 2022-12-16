import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import AuctionBrowser from './AuctionBrowser.js';
import AuctionItem from './auction_components/AuctionItem.js';
import {useState} from 'react';

/*
    The Auction component is responsible for storing the data of a single auction.
    Instances of this will be made by the AuctionCreator component,
    and stored in the AuctionBrowser component.
    This will need to store the type/quantity of food, the deadline the rescue
    needs to be finished by, and the location of the food rescue, among other things.
    
    titleState: the title of the auction
    auctionID: the unique ID of the auction which is used for API calls
*/

const Auction = ({setParentComponent}) => {
	const [titleState, setTitleState] = useState('Auction Default Title');
	const [auctionID, setAuctionID] = useState('000'); // UID of Auction for API
	
	let b1 = <AuctionItem className="Auction-Item"/>;
    let item_references = [b1]
    let item_inventory = [b1]
	
    return (
      
        <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{titleState}</h2>
        </div>
        
        {titleState}
        
        <div class="container" className="Auction-Display">
			<label><b>Location: </b></label><br/>
			<label><b>Organization: </b></label><br/>
			<label><b>Time Created: </b></label><br/>
			<label><b>Expiration Date: </b></label><br/>
			
			
			<ul id = "itemsLeft" className="Items-Left">
				{[item_references]}
			</ul>
        </div>
        
        <div class="container" className="Request-Form">
			
			<label for="location"><b>Location</b></label>
			<input type="text" placeholder="Location" name="location" required/>
			<br/>
			<label for="agency"><b>Agency</b></label>
			<input type="text" placeholder="Agency Name" name="agency" required/>
			<br/>
			<label for="email"><b>Email</b></label>
			<input type="text" placeholder="Email" name="email" required/>
			<br/>
			
			<ul id = "itemInventory" className="Item-Inventory">
				{[item_inventory]}
			</ul>
        </div>
        
        <button className="Confirm-Bid" onClick={() => setParentComponent('AuctionBrowser')}>Confirm Bid</button>
            
        
      </div>
    );
}
 
export default Auction;
