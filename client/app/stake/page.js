'use client'
import { useState } from 'react';
import Link from "next/link";

const Staking = () => {
  const [stakeAmount, setStakeAmount] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('30');  // Default staking plan
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  // Handle staking form submission
  const handleStake = () => {
    if (!isWalletConnected) {
      alert("Please connect your wallet first.");
      return;
    }
    if (!stakeAmount || stakeAmount <= 0) {
      alert("Please enter a valid stake amount.");
      return;
    }
    alert(`You have successfully staked ${stakeAmount} tokens for ${selectedPlan} days.`);
  };

  return (
    <div>
      <section className="lg:flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 py-24 min-h-screen relative overflow-hidden">
        <div className="text-center text-white px-4 md:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
            {/* Heading */}
            <h2 className="text-5xl font-bold text-white">RBO - Stake Your Tokens</h2>

            {/* Subheading */}
            <p className="text-xl text-gray-200">
              Secure your future by staking your tokens in our platform. Choose your staking plan and earn rewards based on your commitment!
            </p>

            {/* Staking Amount Input */}
            <div className="mt-8">
              <input
                type="number"
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                placeholder="Enter amount to stake"
                className="bg-white/10 p-4 rounded-lg backdrop-blur-md text-white border border-gray-500 w-full text-lg"
              />
            </div>

            {/* Staking Plans */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* 30 Days Plan */}
              <div
                onClick={() => setSelectedPlan('30')}
                className={`bg-white/10 p-6 rounded-lg backdrop-blur-md cursor-pointer hover:bg-indigo-700 transition-colors duration-300 ${selectedPlan === '30' ? 'border-2 border-yellow-400' : ''}`}
              >
                <h3 className="text-2xl font-semibold text-yellow-400">30 Days</h3>
                <p className="text-gray-200">Earn 10% Rewards</p>
              </div>

              {/* 90 Days Plan */}
              <div
                onClick={() => setSelectedPlan('90')}
                className={`bg-white/10 p-6 rounded-lg backdrop-blur-md cursor-pointer hover:bg-indigo-700 transition-colors duration-300 ${selectedPlan === '90' ? 'border-2 border-yellow-400' : ''}`}
              >
                <h3 className="text-2xl font-semibold text-yellow-400">90 Days</h3>
                <p className="text-gray-200">Earn 20% Rewards</p>
              </div>

              {/* 180 Days Plan */}
              <div
                onClick={() => setSelectedPlan('180')}
                className={`bg-white/10 p-6 rounded-lg backdrop-blur-md cursor-pointer hover:bg-indigo-700 transition-colors duration-300 ${selectedPlan === '180' ? 'border-2 border-yellow-400' : ''}`}
              >
                <h3 className="text-2xl font-semibold text-yellow-400">180 Days</h3>
                <p className="text-gray-200">Earn 35% Rewards</p>
              </div>
            </div>

            {/* Wallet Connect Button */}
            <div className="mt-8">
              <button
                onClick={() => setIsWalletConnected(!isWalletConnected)}
                className="bg-yellow-400 text-black py-4 px-12 rounded-xl text-lg font-medium shadow-md hover:bg-yellow-500 transition-colors w-full"
              >
                {isWalletConnected ? 'Wallet Connected' : 'Connect Wallet'}
              </button>
            </div>

            {/* Stake Button */}
            <div className="mt-8">
              <button
                onClick={handleStake}
                className="bg-yellow-400 text-black py-4 px-12 rounded-xl text-lg font-medium shadow-md hover:bg-yellow-500 transition-colors w-full"
              >
                Stake Tokens
              </button>
            </div>

            {/* Information */}
            <div className="mt-8">
              <p className="text-xl text-gray-200">
                By staking, you are locking your tokens into our platform and earning rewards based on your selected plan duration. Make sure to check your rewards after the staking period ends.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staking;
