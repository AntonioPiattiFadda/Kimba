import "./App.css";
import { useState } from "react";
import Nav from "./components/nav/Nav";
import Staking from "./components/staking";
import Launchpad from "./components/launchpad";
import InterfacesContainer from "./components/interfacesContainer";
import { Web3Provider } from "./context/Web3Context";
import React from "react";

function App() {
  const [staking, setStaking] = useState(true);

  return (
    <Web3Provider>
      <div className="App">
        <Nav setStaking={setStaking} />
        <InterfacesContainer>{staking ? <Staking /> : <Launchpad />}</InterfacesContainer>
      </div>
    </Web3Provider>
  );
}

export default App;
