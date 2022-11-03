import React from 'react';
import Home from './Home';
import '../App.css';
import AuctionCreator from './AuctionCreator.js';

/*
    The AuctionBrowser component, where the list of auctions exist.
    This component takes Home's state function as a prop, so that it can change the page to a new component.
*/
const AuctionBrowser = ({setParentComponent}) => {
    
    let auction_list = [];
    
    
    /*
     * This component displays a clickable auction,
     * which will change the page to the auction component.
     * 
     */
    const AuctionElement = ({ value, setValue }) => {
	  const onChange = (event) => setValue(event.target.value);

	  return (
		<div onClick={setParentComponent('Auction')}>
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
                <Card.Text>
                    test
                 </Card.Text>
                 <Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</div>
	  )
	}


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
    return (
        <div>
            <p className="App-intro">
            Open Auctions:
            </p>
            <ul id = "browser" className="Auction-browser"></ul>

            <button className="Join-Button" onClick={() => setParentComponent('AuctionCreator')}>Create an Auction</button>
            
        </div>
       
    );
}
 
export default AuctionBrowser;
