# Airdrop & Presale Smart Contracts with Staking and Rewards - Built with Solidity and Next.js

Welcome to the Airdrop, Presale, and Staking ecosystem, built using Solidity smart contracts and a modern Next.js frontend. This project brings together token distribution via airdrops, presale functionality, and staking with rewards. All features are designed to be intuitive, efficient, and optimized for user experience.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Smart Contracts](#smart-contracts)
- [Frontend](#frontend)
- [Getting Started](#getting-started)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

## Overview
This platform provides a complete solution for Token Airdrops, Presale Management, and Staking with Rewards:

- **Airdrop Contract**: Allows the owner to distribute tokens to a whitelist of eligible addresses.
- **Presale Contract**: Lets users purchase tokens during a limited presale period, with the ability to set rates and withdraw funds.
- **Staking Contract**: Users can stake their tokens for fixed periods, earning rewards. If they unstake early, they face a penalty.

The Next.js frontend brings these features to life with a smooth user interface that interacts directly with the blockchain.

## Features
### Airdrop System
- Easily distribute tokens to multiple recipients.
- Whitelist addresses for eligibility.
- Perform airdrops for large or small batches.
- Event logging for tracking each airdrop.

### Presale Mechanism
- Run a presale for your tokens.
- Set token price in ETH.
- Track total tokens sold and ETH raised.
- Ability to update the presale period and rate.

### Staking with Rewards
- Stake tokens and earn rewards.
- Choose between 1 month, 3 months, and 6 months staking periods.
- Receive rewards based on the staking duration.
- Option to unstake early with a penalty on rewards.

### Responsive Frontend
- Built with Next.js, the frontend allows users to easily interact with the smart contracts:
  - Purchase tokens.
  - Stake tokens and monitor rewards.
  - Track airdrop status and participate in presale.

## Smart Contracts
The contracts are implemented using Solidity and utilize various standards from the OpenZeppelin library.

### AirdropSmartContract
- Distribute tokens to a whitelist of addresses.
- Trigger Airdrop event on successful token transfer.

### RBOToken
- ERC-20 token with a burn mechanism.
- Implements minting and burning of tokens with a customizable burn rate.

### PresaleSmartContract
- Enable token purchases during a presale.
- Handle token transfers based on ETH sent by users.
- Events for tracking token purchases.

### StakingContract
- Let users stake tokens and earn rewards based on staking duration.
- Allow early unstaking with penalty logic.
- Reward payout for unstaking or claiming rewards.

## Frontend
The frontend is built using Next.js, which ensures a smooth, modern user experience.

### Features:
- **Airdrop Dashboard**: View current whitelisted addresses and airdrop status.
- **Presale Page**: Users can purchase tokens, check presale details, and track ETH raised.
- **Staking Interface**: Stake your tokens, track rewards, and view your staking duration.

### Key Components:
- **Web3 Integration**: Uses ethers.js to interact with smart contracts.
- **Real-time Interactions**: Users can see live data from the blockchain, like token balances, presale status, and staking details.
- **Responsive Design**: Mobile-first approach to ensure accessibility from any device.

### Tech Stack:
- React & Next.js for UI components.
- ethers.js for Web3 integration.
- Tailwind CSS for styling and responsive design.
- Metamask integration for wallet connection.

## Getting Started

### Prerequisites
- Node.js (v14 or above)
- Metamask wallet (for interacting with the contracts)
- Ethereum test network (such as Rinkeby or Goerli) or mainnet (for live deployment)

### Install Dependencies
Clone this repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd <project-directory>
npm install