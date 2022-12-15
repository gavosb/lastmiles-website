import React from 'react';
import Home from './Home';
import '../App.css';
import AuctionCreator from './AuctionCreator.js';

/*
 * This component takes parameters that allow it to set a value.
 */
const AuctionButton = () => {
	const [textState, setTextState] = useState('Auction Default Title');
	const [auctionID, setAuctionID] = useState(''); // UID of Auction for API
    //const onChange = (event) => setAuctionID(event.target.value);

   return (
     <button className="Auction-Button" onClick={() => setParentComponent('Auction')}{textState}</button>
   )
}

/*
    The AuctionBrowser component displays a list of all active auctions.
    Users are also able to click on each auction to view more details about them,
    as well as make bids on any auctions they may be interested in.
    In the future, auctions will be displayed based on how much time they have before they expire:
    An auction with very little time left will be displayed first, to ensure that
    as little food as possible goes to waste.
*/

const AuctionBrowser = ({setParentComponent}) => {
    
    /*
     * This array holds auction button components, which hold a state element as
     * a reference to an actual auction, with useState.
     * The details of this will be dependent on the chosen API implementation.
     * 
    */
          
    
    let b1 = <AuctionButton/>
    let auction_references = [b1]
	
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
			<div className="App-header">
				<h2>Last Miles | Stress Load Auctions</h2>
			</div>
            <p className="App-intro">
            Open Auctions:
            </p>
            <ul id = "browser" className="Auction-browser">
            test
			{auction_references.map((comp, i) => React.createElement(comp, { key: i }))}
			</ul>
			  
            <button className="Create-Button" onClick={() => setParentComponent('AuctionCreator')}>Create an Auction</button>
            
        </div>
       
    );
}
 
export default AuctionBrowser;
