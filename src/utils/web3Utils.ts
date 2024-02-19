// src/web3Utils.ts
import Web3 from 'web3';

// A function to get the current Web3 provider (MetaMask in this case)
export const getWeb3Provider = () => {
    if (window.ethereum) {
        return window.ethereum;
    } else {
        throw new Error('No Web3 Provider found');
    }
};

// A function to convert Ether to Wei
export const toWei = (ethAmount: string | number) => {
    const web3 = new Web3(getWeb3Provider());
    return web3.utils.toWei(ethAmount.toString(), 'ether');
};

// A function to convert Wei to Ether
export const fromWei = (weiAmount: string | number) => {
    const web3 = new Web3(getWeb3Provider());
    return web3.utils.fromWei(weiAmount.toString(), 'ether');
};

// A function to get the current connected chain ID
export const getChainId = async () => {
    const web3 = new Web3(getWeb3Provider());
    return await web3.eth.getChainId();
};

// A function to check if the window.ethereum object is MetaMask
export const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
};

// A function to request accounts from MetaMask
export const requestAccounts = async () => {
    const { ethereum } = window;
    if (ethereum) {
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            return accounts;
        } catch (error) {
            throw new Error('User denied account access');
        }
    } else {
        throw new Error('No Web3 Provider found');
    }
};

export const formatDate = (timestamp: number) => {
    // Convierte el timestamp a milisegundos si está en segundos
    const date = new Date(timestamp * 1000);
    // Opciones de formato, ajusta según necesites
    const options:any = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    // Retorna la fecha formateada
    return date.toLocaleDateString(undefined, options);
  };
// Add other utility functions as needed
