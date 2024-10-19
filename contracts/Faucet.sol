// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Faucet {
    address public token;
    uint256 public cooldown;
    mapping(address => uint256) public lastClaim;

    constructor(address _token, uint256 _cooldown) {
        token = _token;
        cooldown = _cooldown;
    }

    function claim() external {
        require(block.timestamp > lastClaim[msg.sender] + cooldown, "Wait for cooldown");
        IERC20(token).transfer(msg.sender, 100 * 10 ** 18);
        lastClaim[msg.sender] = block.timestamp;
    }
}
