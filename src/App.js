import './App.css';
import { useState } from 'react';
import Nav from './components/nav/Nav';
import Stacking from './components/stacking';
import Lunchpad from './components/lunchpad';
import InterfacesContainer from './components/interfacesContainer';

function App() {
  const [stacking, setStacking] = useState(true);

  return (
    <div className="App">
      <Nav setStacking={setStacking} />
      <InterfacesContainer>
        {stacking ? <Stacking /> : <Lunchpad />}
      </InterfacesContainer>
    </div>
  );
}

export default App;
