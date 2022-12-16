import React from 'react';
import '../../App.css';
import logo from '../../logo.svg';
import {useState} from 'react';

/*
    Item: Displays the type and quantity of an item that can be claimed,
    * along with an input box, which when entered will subtract the quantity
    * from this item and add the item to the claimant's inventory.
*/

const AuctionItem = () => {
	const [itemName, setItemName] = useState('Default Item Name');
	const [auctionID, setAuctionID] = useState('000'); // UID of Auction for API
	const [itemType, setItemType] = useState('Auction'); // Types: Auction, Inventory - to determine whether to add or subtract
	
    return (
      <div>
        <div>
			<p>Auction Item</p>
        </div>
      </div>
    );
}
 
export default AuctionItem;
