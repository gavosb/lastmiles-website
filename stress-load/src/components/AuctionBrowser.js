import React from 'react';
import Home from './Home';
import '../App.css';
import AuctionCreator from './AuctionCreator.js';

/*
    The AuctionBrowser component displays a list of all active auctions.
    Users are also able to click on each auction to view more details about them,
    as well as make bids on any auctions they may be interested in.
    In the future, auctions will be displayed based on how much time they have before they expire:
    An auction with very little time left will be displayed first, to ensure that
    as little food as possible goes to waste.
*/

const AuctionBrowser = ({setParentComponent}) => {
    
    let auction_references = []
    

    /*
        Builds an array from the array of auctions from the server's API. Called every time the page is refreshed.
    */
    async function getAuctions (){
        /*
         * Place API code here OR temporary fake auctions, example:
         * NOTE: This should implement useState like in Home.js. Only use this as a reference. 
        let obj;
        const response = await fetch("https://"+location.hostname + ":9000/api/peers");
        codes = await response.json();
        codes.forEach(element => {
            document.getElementById('browser').innerHTML += ('<br><li> ID: '+element+'</li>');
        });
        */
        
        
    }
    getAuctions();
    
   function buttonAction(){
	   return;
   }
    return (
        <div>
            <p className="App-intro">
            Open Auctions:
            </p>
			{auction_references.map((comp, i) => React.createElement(comp, { key: i }))}
			
			  
            <button className="Join-Button" onClick={() => setParentComponent('AuctionCreator')}>Create an Auction</button>
            
        </div>
       
    );
}
 
export default AuctionBrowser;
