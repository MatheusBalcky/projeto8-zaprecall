import React from 'react';
import styles from './App.module.css';
import InitialScreen from './Components/InitialScreen';
import FlashcardsScreen from './Components/FlashcardsScreen';

function App() {
  const [screen, setScreen] = React.useState(<InitialScreen changeScreen={changeScreen} />);
  
  function changeScreen (){
    setScreen(<FlashcardsScreen />)
  }
  
  return (
    <div className={styles.backgroundApp}>
      <div className={styles.app}>
        {<FlashcardsScreen />}
      </div>
    </div>
    
  );
}
export default App;