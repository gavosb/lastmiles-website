import React from 'react';
import '../App.css';
import logo from '../logo.svg';
import AuctionCreator from './AuctionCreator.js';
import AuctionBrowser from './AuctionBrowser.js';
import Auction from './Auction.js';

/*
  The Home Component - Serves as the basis for what the user sees in the website.
  This component is responsible for switching between two other components: AuctionBrowser and AuctionCreator.
  The selected component is displayed to the user, while the other is hidden.
*/
const Home = () => {
  let [currentComponent, setCurrentComponent] = React.useState("AuctionBrowser"); //hook's currentComponent State
  
  /*
    Returns the actual component to be displayed, using the currentComponent state.
  */
  const getCurrentComponent = () => {
    let component;
    switch (currentComponent){
        case 'AuctionCreator' :
          component = <AuctionCreator setParentComponent = {changeCurrentComponent}/>;
          break;
        case 'AuctionBrowser' :
          component = <AuctionBrowser setParentComponent = {changeCurrentComponent}/>;
          break;
        case 'Auction' :
			component = <Auction setParentComponent = {changeCurrentComponent}/>;
			break;
    }
    return component;
  }
  
  /*
    Changes the currentComponent state.
    parameter must be of the following options:
    'AuctionCreator', 'AuctionBrowser'
    @param component
  */
  const changeCurrentComponent = (component) => {
    setCurrentComponent(component);
  }
    return (
      
        <div className="App">
        {getCurrentComponent()}
      </div>
    );
}
 
export default Home;
