'use client';
import React, { useState } from 'react';

const TabContent = ({ title, email, setEmail, password, setPassword, handleSubmit }) => (
  <div className="flex bg-white/10 items-center justify-center w-full">
    <div className="w-full p-8 space-y-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-100">{title}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-yellow-500">
            ETH
          </label>
          <input
            type="number"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mt-2 text-sm border bg-gray-200"
            placeholder="00.00 ETH"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-yellow-500">
            RBO
          </label>
          <input
            type="number"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
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
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      )}
      {activeTab === 'airdrop' && (
        <TabContent
          title="Fund Airdrop"
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      )}
      {activeTab === 'stake' && (
        <TabContent
          title="Fund Stake"
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default TabContainer;
