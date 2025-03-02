// CONTRACT: StakingContract

// VARIABLES:
// - token: IERC20 (The token to stake)
// - owner: address (The contract owner)
// - stakers: mapping(address => uint256) (Mapping to track staked amounts per user)
// - stakeTimes: mapping(address => uint256) (Mapping to track when users staked their tokens)
// - totalStaked: uint256 (Total amount of tokens staked in the contract)
// - rewardRate: uint256 (The annual reward rate, e.g., 10% = 1000 basis points)
// - rewards: mapping(address => uint256) (Mapping to track rewards per user)
// - event: Staked(address indexed user, uint256 amount) (Event for staking)
// - event: Unstaked(address indexed user, uint256 amount) (Event for unstaking)
// - event: RewardPaid(address indexed user, uint256 reward) (Event for reward distribution)

// FUNCTIONS:

// 1. CONSTRUCTOR(tokenAddress: address, rewardRate: uint256):
//    - Set the token address
//    - Set the initial reward rate (in basis points, e.g., 1000 = 10%)

// 2. FUNCTION stake(uint256 amount):
//    - Ensure the user is sending the correct amount of tokens
//    - Transfer tokens from the user to the contract
//    - Update the stakers' record with the new staked amount
//    - Update the stake time to track how long they’ve staked
//    - Increment the total staked amount
//    - Emit a Staked event

// 3. FUNCTION unstake(uint256 amount):
//    - Ensure the user has enough staked tokens to withdraw
//    - Transfer the requested amount of tokens back to the user
//    - Update the stakers' record to reflect the unstaked amount
//    - Update the total staked amount
//    - Emit an Unstaked event

// 4. FUNCTION calculateReward(address staker) internal view returns (uint256):
//    - Calculate the reward based on the time the user has staked and the amount staked
//    - Use the reward rate and the staked duration to calculate rewards (e.g., linear reward calculation)
//    - Return the reward amount

// 5. FUNCTION claimReward():
//    - Calculate the rewards for the user
//    - Ensure the user has rewards to claim
//    - Transfer the rewards to the user
//    - Emit a RewardPaid event

// 6. FUNCTION setRewardRate(uint256 newRewardRate):
//    - Allow the owner to adjust the reward rate (e.g., increase or decrease rewards)
//    - Only owner can update the reward rate

// 7. FUNCTION emergencyWithdraw(uint256 amount):
//    - Allow the owner to withdraw any amount of tokens from the contract in emergency situations
//    - Only owner can call this function

// 8. EVENT: Staked(address indexed user, uint256 amount):
//    - Triggered when a user stakes tokens

// 9. EVENT: Unstaked(address indexed user, uint256 amount):
//    - Triggered when a user unstakes tokens

// 10. EVENT: RewardPaid(address indexed user, uint256 reward):
//     - Triggered when a user claims rewards

// ---

// ### High-Level Staking Workflow:

// 1. **User Stakes Tokens**:
//    - The user deposits tokens into the contract using the `stake` function. Their staked amount and staking time are recorded.
   
// 2. **Reward Calculation**:
//    - The contract calculates rewards based on the amount of tokens staked and the duration of the staking period.
   
// 3. **User Claims Rewards**:
//    - The user can call the `claimReward` function to withdraw their accumulated rewards.
   
// 4. **User Unstakes Tokens**:
//    - After staking, the user can call the `unstake` function to withdraw their tokens, minus any applicable rewards.

// 5. **Owner Control**:
//    - The owner can set a new reward rate or perform emergency withdrawals of tokens.

// ---

// ### Staking Smart Contract Example in Solidity:

// Here’s the actual **Solidity code** for the staking smart contract:

// ```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract StakingContract is Ownable {
    IERC20 public token; // The token to stake
    uint256 public rewardRate; // Annual reward rate in basis points (100 = 1%)
    uint256 public totalStaked; // Total tokens staked in the contract

    mapping(address => uint256) public stakedAmount; // Tracks staked tokens for each user
    mapping(address => uint256) public stakeTime; // Tracks the staking time for each user
    mapping(address => uint256) public rewards; // Tracks rewards for each user

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event RewardPaid(address indexed user, uint256 reward);

    constructor(IERC20 _token, uint256 _rewardRate) Ownable(msg.sender){
        token = _token;
        rewardRate = _rewardRate;
    }

    // Function to stake tokens
    function stake(uint256 amount) external {
        require(amount > 0, "Amount must be greater than 0");
        token.transferFrom(msg.sender, address(this), amount); // Transfer tokens from user to contract
        stakedAmount[msg.sender] += amount;
        stakeTime[msg.sender] = block.timestamp; // Record the time of staking
        totalStaked += amount;
        emit Staked(msg.sender, amount);
    }

    // Function to unstake tokens
    function unstake(uint256 amount) external {
        require(stakedAmount[msg.sender] >= amount, "Not enough staked tokens");
        stakedAmount[msg.sender] -= amount;
        totalStaked -= amount;
        token.transfer(msg.sender, amount); // Transfer the unstaked tokens to user
        emit Unstaked(msg.sender, amount);
    }

    // Function to calculate rewards for a staker
    function calculateReward(address staker) internal view returns (uint256) {
        uint256 stakedDuration = block.timestamp - stakeTime[staker]; // Duration staked in seconds
        uint256 reward = (stakedAmount[staker] * rewardRate * stakedDuration) / (365 days * 100); // Linear reward calculation
        return reward;
    }

    // Function to claim rewards
    function claimReward() external {
        uint256 reward = calculateReward(msg.sender);
        require(reward > 0, "No rewards available");
        rewards[msg.sender] += reward;
        stakeTime[msg.sender] = block.timestamp; // Reset the staking time after reward is claimed
        token.transfer(msg.sender, reward); // Transfer the reward to the user
        emit RewardPaid(msg.sender, reward);
    }

    // Function for the owner to adjust the reward rate
    function setRewardRate(uint256 newRewardRate) external onlyOwner {
        rewardRate = newRewardRate;
    }

    // Emergency withdraw function for the owner
    function emergencyWithdraw(uint256 amount) external onlyOwner {
        token.transfer(msg.sender, amount);
    }
}
