// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Contract: PresaleSmartContract
// -------------------------------------
// Variables:
//     - token (the ERC20 token contract being sold)
//     - rate (the number of tokens a buyer gets per 1 ETH)
//     - presaleStart (timestamp for when presale starts)
//     - presaleEnd (timestamp for when presale ends)
//     - isPresaleActive (flag to check if presale is active)

// Events:
//     - TokensPurchased (buyer, tokenAmount, ethCost)

// Modifiers:
//     - whenPresaleActive: Check if presale is ongoing (between start and end time)

// Functions:

// 1. Constructor:
//     - Set the token address, rate, presale start time, and presale end time.
//     - Set presale as active.

// 2. BuyTokens Function:
//     - Ensure that the presale is active (check time window).
//     - Ensure the buyer sends ETH (check if ETH > 0).
//     - Calculate the number of tokens the buyer gets based on the rate.
//     - Ensure the presale contract has enough tokens to give to the buyer.
//     - Transfer tokens to the buyer.
//     - Emit TokensPurchased event (buyer, amount, cost in ETH).

// 3. Withdraw ETH (Owner function):
//     - Allow the owner to withdraw ETH accumulated during the presale.

// 4. Withdraw Remaining Tokens (Owner function):
//     - After the presale ends, allow the owner to withdraw any unsold tokens from the contract.

// 5. Stop Presale (Owner function):
//     - The owner can manually stop the presale if needed.

// 6. Update Presale Period (Owner function):
//     - Allow the owner to update the presale start and end times.

// 7. Check Presale Status (Public function):
//     - Check if the presale is active (between start and end time).

// Flow:
// - When a buyer wants to purchase tokens:
//     - Buyer sends ETH to the contract.
//     - The contract checks if the presale is active.
//     - The contract calculates the token amount based on the rate.
//     - If enough tokens are available, the contract transfers tokens to the buyer.
//     - The contract emits a "TokensPurchased" event.

// - After the presale ends:
//     - The owner can withdraw any unsold tokens.
//     - The owner can withdraw any ETH raised during the presale.

