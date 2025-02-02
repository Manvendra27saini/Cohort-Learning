/*import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <LightBulb />
    </div>
  );
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setBulbOn={setBulbOn} />
    </div>
  );
}
///bulbOn is the prop to the BulbState component and setBulbOn is the prop to the ToggleBulbState component.

function BulbState({ bulbOn }) {
  return (
    <div>
      {bulbOn ? 'The bulb is on' : 'The bulb is off'}
    </div>
  );
}

function ToggleBulbState({ setBulbOn }) {
  function toggle() {
    setBulbOn(currentState => !currentState);
  }

  return (
    <div>
      <button onClick={toggle}>Toggle the Bulb State</button>
    </div>
  );
}

export default App;
*/
import React, { createContext, useState, useContext } from 'react';
import './App.css';

// Create context
const BulbContext = createContext();

function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <BulbContext.Provider value={{ bulbOn, setBulbOn }}>
      {children}
    </BulbContext.Provider>
  );
}

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center' }}>
      <BulbProvider>
        <LightControl />
      </BulbProvider>
    </div>
  );
}

function LightControl() {
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  );
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext); // Get the current bulb state
  return (
    <div>
      <img
        src={bulbOn ? '/assets/onbulb.png' : '/assets/offbulb.png'}
        alt={bulbOn ? 'Bulb is ON' : 'Bulb is OFF'}
        style={{ width: '100px', height: '100px' }} // Adjust size as needed
      />
    </div>
  );
}

function LightSwitch() {
  const { bulbOn, setBulbOn } = useContext(BulbContext); // Get and set the bulb state

  function toggle() {
    setBulbOn((prevState) => !prevState); // Toggle the bulb state
  }

  return (
    <div>
      <button onClick={toggle}>
        {bulbOn ? 'Turn Off' : 'Turn On'} the Bulb
      </button>
    </div>
  );
}

export default App;
