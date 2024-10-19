// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BaseToken.sol";

contract AngelToken is BaseToken {
    constructor() BaseToken("AngelToken", "AGT", 10000000000 * 10 ** 18) {}
}
