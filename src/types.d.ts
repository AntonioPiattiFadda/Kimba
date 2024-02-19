// window.d.ts
interface Window {
    ethereum?: {
        enable(): Promise<void>;
        on(arg0: string, arg1: (accounts: string[]) => void): void;
        removeListener(arg0: string, arg1: () => void): void;
        isMetaMask?: boolean;
        request: (request: { method: string, params?: any[] }) => Promise<any>;
        // Add other properties and methods you need from the ethereum object
    };
}
