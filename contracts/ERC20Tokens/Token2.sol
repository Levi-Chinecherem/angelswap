// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BaseToken.sol";

contract Halo is BaseToken {
    constructor() BaseToken("Halo", "HALO", 10000000000 * 10 ** 18) {}
}
