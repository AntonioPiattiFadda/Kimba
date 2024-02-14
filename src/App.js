import './App.css';
import { useState } from 'react';
import Nav from './components/nav/Nav';
import Staking from './components/staking';
import Launchpad from './components/launchpad';
import InterfacesContainer from './components/interfacesContainer';

function App() {
  const [staking, setStaking] = useState(true);

  return (
    <div className="App">
      <Nav setStaking={setStaking} />
      <InterfacesContainer>
        {staking ? <Staking /> : <Launchpad />}
      </InterfacesContainer>
    </div>
  );
}

export default App;
