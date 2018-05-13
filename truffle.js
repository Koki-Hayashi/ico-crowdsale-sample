const HDWalletProvider = require("truffle-hdwallet-provider");

// necessary for ropsten/rinkeby + infura + metamask
const infuraAccessToken = process.env.INFURA_ACCESS_TOKEN;
const mnemonic = process.env.MNEMONIC;

// necesarry for rinkeby + local geth
const rinkebyAccount = process.env.RINKEBY_ACCOUNT; // necesarry when use rinkeby

module.exports = {
  networks: {
    development: { // local geth
      host:"localhost",
      port: 8545,
      network_id:"*" 
    },
    ropsten: { 
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          "https://ropsten.infura.io/" + infuraAccessToken
        );
      },
      network_id: 3,
      gas: 4700000,
      gasPrice: 1000000000
    }, 
    rinkeby: { 
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          "https://rinkeby.infura.io/" + infuraAccessToken
        );
      },
      network_id: 3,
      gas: 4700000,
      gasPrice: 1000000000
    },
    rinkeby_local: {
      host: "localhost",
      port: 8545,
      from: rinkebyAccount,
      network_id: 4,
      gas: 6612388, 
      gasPrice: 200000000
    }
  }
};

