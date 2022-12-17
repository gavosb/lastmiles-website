import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import AuctionBrowser from './AuctionBrowser.js';
import AuctionItem from './auction_components/AuctionItem.js';

/*
  The AuctionCreator component is responsible for creating an interface
  through which users can create stress loads.
  This is done by letting them input values in text boxes (such as how much food there is),
  then submitting the newly created auction.

  There are some ways this can be improved upon, such as:
  -Linking the creator to a database, so that it will be able to store the auction.
  Relying on the website to do this would cause auctions to be stored locally, so nobody
  else can see them.
  -Use HTML/CSS to improve how this looks, and make it easier to use.
  -Create new values for any other important parts of an auction that may be missing here.
  If these are changed, the Auction component will also need to be changed.
*/

const AuctionCreator = ({setParentComponent}) => {
	
	let b1 = <AuctionItem className="Auction-Item"/>;
    let item_inventory = [b1]
    
    return (
      
		<div className="App">
			<div className="App-header">
				<h2>Last Miles | Auction Creator</h2>
			</div>
        
			<div class="container" className="Create-Form">
				
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
				<div>
					<label for="itemName"><b>Item Name</b></label>
					<input type="text" placeholder="Item Name" name="itemName" required/>
					
					<label for="itemQuantity"><b>Item Quantity</b></label>
					<input type="text" placeholder="Item Quantity" name="itemName" required/>
					<br/>
					<button className="Create-Auction-Item">Create Item</button>
					<br/>
				</div>
				
			</div>
        
			<button className="Confirm-Create" onClick={() => setParentComponent('AuctionBrowser')}>Confirm Auction</button>
            
        
		</div>
    );
}
 
export default AuctionCreator;
