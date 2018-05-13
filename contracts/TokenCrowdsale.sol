pragma solidity  ^0.4.21;

import "zeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol";
import "zeppelin-solidity/contracts/crowdsale/validation/TimedCrowdsale.sol";

contract TokenCrowdsale is MintedCrowdsale, TimedCrowdsale {

  constructor(
    uint256 _startTime, 
    uint256 _endTime, 
    uint256 _rate, 
    address _wallet, 
    MintableToken _tokenAddress
  ) 
  public 
  Crowdsale(_rate, _wallet, _tokenAddress)
  TimedCrowdsale(_startTime, _endTime){
  }
}
