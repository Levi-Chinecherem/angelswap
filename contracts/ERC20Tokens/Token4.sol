// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BaseToken.sol";

contract Token1 is BaseToken {
    constructor() BaseToken("Token1", "TK1", 1000000 * 10 ** 18) {}
}
