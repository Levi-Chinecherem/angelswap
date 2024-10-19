// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SecurityFeatures {
    struct TransactionHash {
        bytes32 hash;
        uint256 timestamp;
    }

    mapping(address => TransactionHash) public secureTransactions;

    function createSecureTransaction(bytes32 hash) external {
        secureTransactions[msg.sender] = TransactionHash(hash, block.timestamp);
    }

    function verifyTransaction(address user, bytes32 providedHash) external view returns (bool) {
        return secureTransactions[user].hash == providedHash;
    }
}
