import React from "react";
import { Wallet, SecuritySafe, Chart } from "iconsax-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-lg w-full space-y-8 text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <Wallet size={32} className="text-emerald-400" />
          <SecuritySafe size={32} className="text-emerald-400" /> 
          <Chart size={32} className="text-emerald-400" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Welcome to Econox</h1>
        <p className="text-gray-400 mb-8">Connect your wallet to get started</p>

        <appkit-button />
      </div>
    </div>
  );
}