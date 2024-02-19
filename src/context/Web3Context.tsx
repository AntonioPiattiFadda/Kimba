// src/context/Web3Context.tsx
import React, { createContext, useContext, ReactNode } from "react";
import useWeb3 from "../hooks/useWeb3";
import Web3 from "web3";

export interface UserData {
  data: {
    totalStaked: string;
    referralRewards: string;
  };
  stakes: {
    _amounts: string[];
    _startTimes: string[];
    _durations: string[];
    _unstakeds: boolean[];
  };
}

interface Web3ContextType {
  web3: Web3 | null;
  account: string | null;
  isConnected: boolean;
  totalValueLocked: string;
  kimbaBalance: string;
  contractsLoaded: boolean;
  connectWallet: () => Promise<void>;
  stakeTokens: (amount: string, duration: number, referralAddress: string) => Promise<void>;
  unstakeTokens: (stakeIndex: number) => Promise<void>;
  getUserData: () => Promise<UserData>;
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined);

export const Web3Provider = ({ children }: { children: ReactNode }) => {
  const { web3, account, isConnected, totalValueLocked, stakeTokens, unstakeTokens, getUserData, contractsLoaded, kimbaBalance } =
    useWeb3();

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // After requesting accounts, the useEffect in useWeb3 will handle state updates
      } catch (error) {
        console.error("Error on connecting: ", error);
      }
    } else {
      console.error("Ethereum object not found, install Metamask.");
    }
  };

  return (
    <Web3Context.Provider
      value={{
        web3,
        account,
        isConnected,
        totalValueLocked,
        connectWallet,
        stakeTokens,
        unstakeTokens,
        getUserData,
        contractsLoaded,
        kimbaBalance,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3Context = () => {
  const context = useContext(Web3Context);
  if (context === undefined) {
    throw new Error("useWeb3Context must be used within a Web3Provider");
  }
  return context;
};
