pragma solidity  ^0.4.21;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract Token is MintableToken {
  string public name = "Token";
  string public symbol = "TOKEN";
  uint public decimals = 18;
  uint constant INITIAL_SUPPLY = 1000;

  constructor() public {
    totalSupply_ = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY / 2;
  }
}
