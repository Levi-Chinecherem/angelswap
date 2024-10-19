// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LiquidityPool {
    address public tokenA;
    address public tokenB;
    uint256 public reserveA;
    uint256 public reserveB;
    uint256 public feeRate; // Fee rate in basis points (e.g., 30 for 0.3%)

    event LiquidityAdded(address indexed provider, uint256 amountA, uint256 amountB);
    event LiquidityRemoved(address indexed provider, uint256 amountA, uint256 amountB);
    event Swap(address indexed trader, uint256 amountIn, uint256 amountOut, address fromToken, address toToken);

    constructor(address _tokenA, address _tokenB, uint256 _feeRate) {
        tokenA = _tokenA;
        tokenB = _tokenB;
        feeRate = _feeRate;
    }

    function addLiquidity(uint256 amountA, uint256 amountB) external {
        require(amountA > 0 && amountB > 0, "Amounts must be greater than 0");
        IERC20(tokenA).transferFrom(msg.sender, address(this), amountA);
        IERC20(tokenB).transferFrom(msg.sender, address(this), amountB);

        reserveA += amountA;
        reserveB += amountB;

        emit LiquidityAdded(msg.sender, amountA, amountB);
    }

    function removeLiquidity(uint256 amountA, uint256 amountB) external {
        require(amountA <= reserveA && amountB <= reserveB, "Insufficient liquidity");
        IERC20(tokenA).transfer(msg.sender, amountA);
        IERC20(tokenB).transfer(msg.sender, amountB);

        reserveA -= amountA;
        reserveB -= amountB;

        emit LiquidityRemoved(msg.sender, amountA, amountB);
    }

    function swap(uint256 amountIn, address fromToken, address toToken) external returns (uint256) {
        require(fromToken == tokenA || fromToken == tokenB, "Invalid fromToken");
        require(toToken == tokenA || toToken == tokenB, "Invalid toToken");
        require(fromToken != toToken, "Tokens must be different");

        uint256 amountOut;
        if (fromToken == tokenA && toToken == tokenB) {
            amountOut = _getAmountOut(amountIn, reserveA, reserveB);
            IERC20(tokenA).transferFrom(msg.sender, address(this), amountIn);
            IERC20(tokenB).transfer(msg.sender, amountOut);
            reserveA += amountIn;
            reserveB -= amountOut;
        } else {
            amountOut = _getAmountOut(amountIn, reserveB, reserveA);
            IERC20(tokenB).transferFrom(msg.sender, address(this), amountIn);
            IERC20(tokenA).transfer(msg.sender, amountOut);
            reserveB += amountIn;
            reserveA -= amountOut;
        }

        emit Swap(msg.sender, amountIn, amountOut, fromToken, toToken);
        return amountOut;
    }

    function _getAmountOut(uint256 amountIn, uint256 reserveIn, uint256 reserveOut) private view returns (uint256) {
        uint256 amountInWithFee = amountIn * (10000 - feeRate) / 10000;
        return (amountInWithFee * reserveOut) / (reserveIn + amountInWithFee);
    }

    function getReserves() external view returns (uint256, uint256) {
        return (reserveA, reserveB);
    }
}
