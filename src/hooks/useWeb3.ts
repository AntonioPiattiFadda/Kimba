// src/hooks/useWeb3.ts
import { useEffect, useState } from 'react';
import Web3 from 'web3';
import KimbaStakingABI from '../contracts/KimbaStaking.json';
import KimbaTokenABI from '../contracts/KimbaToken.json';
import { UserData } from '../context/Web3Context';
import BN from 'bn.js';
const targetNetworkId = '97'; // BSC Testnet ID
const stakingContractAddress = '0x4D8F1f8292A66A17593fef190E40C882929B74DF';
const tokenContractAddress = '0x26956107bd1F200dEac03229ABBB45779a03A4AF';
const rpcUrl = 'https://data-seed-prebsc-1-s1.bnbchain.org:8545';

const useWeb3 = () => {
    const [web3, setWeb3] = useState<Web3 | null>(null);
    const [account, setAccount] = useState<string | null>(null);
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const web3Public = new Web3(rpcUrl)
    const [stakingContract, setStakingContract] = useState<any>(new web3Public.eth.Contract(KimbaStakingABI, stakingContractAddress));
    const [tokenContract, setTokenContract] = useState<any>(new web3Public.eth.Contract(KimbaTokenABI, tokenContractAddress));
    const [kimbaBalance, setKimbaBalance] = useState<string>('0');
    const [totalValueLocked, setTotalValueLocked] = useState<string>('0');
    const [contractsLoaded, setContractsLoaded] = useState<boolean>(false);

    useEffect(() => {
        // Initialize Web3 with MetaMask or fallback to RPC
        const web3Instance = new Web3(window.ethereum || rpcUrl);
        setWeb3(web3Instance);

        // Load contracts
        const loadContracts = async (web3: Web3) => {

            // Get total value locked
            const tvl: number = await stakingContract.methods.totalValueLocked().call();

            setTotalValueLocked(web3.utils.fromWei(tvl, 'ether'));
            setContractsLoaded(true);
        };
        loadContracts(web3Instance);
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' }).then(() => {
                web3Instance.eth.getAccounts().then(accounts => {
                    if (accounts.length > 0) {
                        setAccount(accounts[0]);
                        setIsConnected(true);
                        setStakingContract(new web3Instance.eth.Contract(KimbaStakingABI, stakingContractAddress));
                        setTokenContract(new web3Instance.eth.Contract(KimbaTokenABI, tokenContractAddress));
                        updateKimbaBalance(accounts[0], web3Instance);
                    }
                });
            }).catch(() => {
                setIsConnected(false);
            });

            window.ethereum.on('accountsChanged', (accounts: string[]) => {
                if (accounts.length > 0) {
                    setAccount(accounts[0]);
                    setIsConnected(true);
                    setStakingContract(new web3Instance.eth.Contract(KimbaStakingABI, stakingContractAddress));
                    setTokenContract(new web3Instance.eth.Contract(KimbaTokenABI, tokenContractAddress));

                    updateKimbaBalance(accounts[0], web3Instance);
                } else {
                    setAccount(null);
                    setIsConnected(false);
                }
            });

            window.ethereum.on('chainChanged', async () => {
                const web3Instance = new Web3(window.ethereum);
                const currentNetworkId = await web3Instance.eth.net.getId();
                if (currentNetworkId.toString() !== targetNetworkId) {
                    alert('Please connect to BSC Testnet');
                    setIsConnected(false);
                } else {
                    setIsConnected(true);
                    // Optionally, refresh account information here if needed
                    const accounts = await web3Instance.eth.getAccounts();
                    if (accounts.length > 0) {
                        setAccount(accounts[0]);
                    } else {
                        setAccount(null);
                    }
                }
            });
        }
    }, []);

    const updateKimbaBalance = async (account: string, web3: Web3) => {
        if (tokenContract) {
            const balance: number = await tokenContract.methods.balanceOf(account).call();
            setKimbaBalance(web3.utils.fromWei(balance, 'ether'));
        }
    };

    // Function to stake tokens
    const stakeTokens = async (amount: string, duration: number, referralAddress: string) => {
        if (!stakingContract || !account || !web3) return;
        console.log("staking");
        const amountInWei = web3.utils.toWei(amount, 'ether');

        try {
            console.log("referido", referralAddress);
            const decodedReferralAddress = referralAddress ? referralAddress : '0x0000000000000000000000000000000000000000';
            const amountInWeiBN = new BN(web3.utils.toWei(amount, 'ether'));

            const allowance = await tokenContract.methods.allowance(account, stakingContractAddress).call();
            const allowanceBN = new BN(allowance);
            console.log("allowance", allowanceBN.lt(amountInWeiBN));
            if (allowanceBN.lt(amountInWeiBN)) {
                console.log("accountt", stakingContractAddress);
                const estimatedGas = Number(await tokenContract.methods.approve(stakingContractAddress, amountInWei).estimateGas({ from: account }));
                const gasPrice = Number(await web3.eth.getGasPrice());
                const gasLimit = Math.floor(estimatedGas * 1.2);
                console.log("est", estimatedGas);
                await tokenContract.methods.approve(stakingContractAddress, amountInWei).send({ from: account, gas: gasLimit, gasPrice: gasPrice });
            }
            console.log("done allowance");
            const estimatedGas = Number(await stakingContract.methods.stake(amountInWei, duration, decodedReferralAddress).estimateGas({ from: account }));
            const gasPrice = Number(await web3.eth.getGasPrice());
            const gasLimit = Math.floor(estimatedGas * 1.2);

            await stakingContract.methods.stake(amountInWei, duration, decodedReferralAddress).send({ from: account, gas: gasLimit, gasPrice: gasPrice });

            window.location.reload();
        } catch (error) {
            console.error("Staking error:", error);
        }
    };



    // Function to unstake tokens
    const unstakeTokens = async (stakeIndex: number) => {
        console.log("unlocking", account);
        if (!stakingContract || !account) return;
        if (!web3) return;
        try {
            const estimatedGas = Number(await stakingContract.methods.unstake(stakeIndex).estimateGas({ from: account }));
            const gasPrice = Number(await web3.eth.getGasPrice());
            const gasLimit = Math.floor(estimatedGas * 1.2);
            await stakingContract.methods.unstake(stakeIndex).send({ from: account || "", gas: gasLimit, gasPrice: gasPrice });
            window.location.reload();
        } catch (error) {
            console.error("Unstaking error:", error);
            alert("Error claiming, try again");
        }
    };

    // Ajuste en la función getUserData
    const getUserData = async (): Promise<UserData> => {
        if (!stakingContract || !account) {
            // Devuelve un objeto UserData vacío pero estructurado correctamente
            return Promise.resolve({
                data: { totalStaked: "0", referralRewards: "0" },
                stakes: {
                    _amounts: [],
                    _startTimes: [],
                    _durations: [],
                    _unstakeds: [],
                }
            });
        }
        try {
            const userData = await stakingContract.methods.users(account).call();
            const userDataStakes = await stakingContract.methods.getAllUserStakes(account).call();
            return {
                data: userData,
                stakes: userDataStakes
            };
        } catch (error) {
            console.error("Error getting user data:", error);
            return {
                data: { totalStaked: "0", referralRewards: "0" },
                stakes: {
                    _amounts: [],
                    _startTimes: [],
                    _durations: [],
                    _unstakeds: [],
                }
            };
        }
    };


    return { web3, account, isConnected, stakeTokens, unstakeTokens, getUserData, totalValueLocked, contractsLoaded, kimbaBalance };
};

export default useWeb3;
