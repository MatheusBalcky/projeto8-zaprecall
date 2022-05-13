import React from 'react';
import './Reset.css'
import './App.css';
import InitialScreen from './Components/InitialScreen';
import FlashcardsScreen from './Components/FlashcardsScreen';

function App() {
  const [screen, setScreen] = React.useState(<InitialScreen changeScreen={changeScreen} />);
  
  function changeScreen (){
   setScreen(<FlashcardsScreen />)
  }
  
  return (
    <div className="backgroundApp">
      <div className="app">
        {screen}
      </div>
    </div>
    
  );
}
export default App;