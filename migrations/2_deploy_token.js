const TokenCrowdsale = artifacts.require("./TokenCrowdsale.sol")
const Token = artifacts.require("./Token.sol")

const wallet = process.env.WALLET;

module.exports = (deployer, network, accounts) => {
  
  deployer.then(() => {
    return deployer.deploy(Token);
  })
  .then(async () => {

    const startTime = _getLatestTime() + duration.minutes(1);
    const endTime = startTime + duration.minutes(30);
    const rate = 1;

    deployer.deploy(
      TokenCrowdsale,
      startTime,
      endTime,
      rate,
      wallet,
      Token.address)
      .then(async () => {
        const instance = await TokenCrowdsale.deployed();
        const token = await instance.token.call();
        console.log("Token address : " + token);
      });
    }).catch(e => {
      console.log("error while deploy")
      throw e;
    });
}

function _getLatestTime() {
  return web3.eth.getBlock("latest").timestamp;
}

const duration = {
  seconds: function(val) {return val},
  minutes: function(val) {return val * this.seconds(60)}, 
  hours: function(val) {return val * this.minutes(60)},
  days: function(val) {return val * this.hours(24)},
  weeks: function(val) {return val * this.days(7)},
  years:   function(val) {return val * this.days(365)}
}

