'use client';
import ERC20abi from '@/lib/abi/Ecr20ABI';
import { useWalletStore } from '@/store/walletStore';
import React, { useState } from 'react';

const TabContent = ({ title, amount, setAmount, address, setAddress, handleSubmit }) => (
  <div className="flex bg-white/10 items-center justify-center w-full">
    <div className="w-full p-8 space-y-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-100">{title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-yellow-500">
            ETH
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 mt-2 text-sm border bg-gray-200"
            placeholder="00.00 ETH"
            required
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-yellow-500">
            RBO
          </label>
          <input
            // type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 mt-2 text-sm border bg-gray-200"
            placeholder="00.00 RBO"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full font-bold py-2 mt-4 text-white bg-yellow-500"
        >
          Buy
        </button>
      </form>
    </div>
  </div>
);

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState('presale');
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const [presaleaddress, setPresaleAddress] = useState(process.env.NEXT_PUBLIC_PRESALE_CONTRACT_ADDRESS);

  const {callTransactionFunction}= useWalletStore()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('amount:', amount);
    console.log('address:', address);
    const tx = await callTransactionFunction(ERC20abi, process.env.NEXT_PUBLIC_ERC20_CONTRACT_ADDRESS, 'mint', address, amount)
    console.log('tx:', tx);
  };

  return (
    <div className="container mx-auto p-8">
      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'presale' ? 'text-yellow-500' : 'text-gray-200'}`}
          onClick={() => setActiveTab('presale')}
        >
          Fund Presale
        </button>
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'airdrop' ? 'text-yellow-500' : 'text-gray-200'}`}
          onClick={() => setActiveTab('airdrop')}
        >
          Fund Airdrop
        </button>
        <button
          className={`px-4 py-2 font-semibold ${activeTab === 'stake' ? 'text-yellow-500' : 'text-gray-200'}`}
          onClick={() => setActiveTab('stake')}
        >
          Fund Stake
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'presale' && (
        <TabContent
          title="Fund Presale"
          amount={amount}
          setAmount={setAmount}
          address={presaleaddress}
          setAddress={setAddress}
          handleSubmit={handleSubmit}
        />
      )}
      {activeTab === 'airdrop' && (
        <TabContent
          title="Fund Airdrop"
          amount={amount}
          setAmount={setAmount}
          address={address}
          setAddress={setPresaleAddress}
          handleSubmit={handleSubmit}
        />
      )}
      {activeTab === 'stake' && (
        <TabContent
          title="Fund Stake"
          amount={amount}
          setAmount={setAmount}
          address={address}
          setAddress={setAddress}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default TabContainer;
