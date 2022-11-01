import React from 'react';
import '../App.css';
import logo from '../logo.png';
import AuctionCreator from './AuctionCreator.js';
import AuctionBrowser from './AuctionBrowser.js';

/*
  The Home Component - Serves as the basis for all other components and to which they all aspire.
  Different "pages" (components) can be flipped through here with currentComponent.
*/
const Home = () => {
  let [currentComponent, setCurrentComponent] = React.useState("AuctionCreator"); //hook's currentComponent State
  
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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Last Miles | Auction</h2>
        </div>
        {getCurrentComponent()}
      </div>
    );
}
 
export default Home;





<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
