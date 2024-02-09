import './App.css';
import { useState } from 'react';
import Nav from './components/nav/Nav';
import Stacking from './components/stacking/Stacking';
import Lunchpad from './components/lunchpad/Lunchpad';
import InterfacesContainer from './components/interfacesContainer/InterfacesContainer';

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
