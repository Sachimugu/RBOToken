'use client'
import React, { useState } from 'react';

const LoginForm = ({amountInEther, setAmountInEther, amountInRBO, setAmountInRBO}) => {
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', amountInEther);
    console.log('Password:', amountInRBO);
  };

  const handleOnchangeInEther = (e) => {  
    setAmountInEther(e.target.value)
    setAmountInRBO(e.target.value *10000)
    }
  const handleOnchangeInRBO = (e) => { 
    setAmountInEther(e.target.value/10000)
    setAmountInRBO(e.target.value)
  }

  return (
    <div className="flex bg-white/10 items-center justify-center w-full">
      <div className="w-full p-8 space-y-6  rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold r text-gray-300">In Progress</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="amountInEther" className="block text-sm font-medium text-yellow-500">
              ETH
            </label>
            <input
              type="number"
              id="amountInEther"
              value={amountInEther}
              onChange={handleOnchangeInEther}
              className="w-full px-4 py-2 mt-2 text-sm border bg-gray-200 "
              placeholder="00.00 ETH"
              required
            />
          </div>

          <div>
            <label htmlFor="amountInRBO" className="block text-sm font-medium text-yellow-500">
              RBO
            </label>
            <input
              type="Number"
              id="amountInRBO"
              value={amountInRBO}
              onChange={handleOnchangeInRBO}
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
};

export default LoginForm;
