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
  In the future, this will need to be linked with a database, creating the auction there instead.
  Otherwise, the auction will only be stored locally, preventing anyone else from ever seeing it.
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
