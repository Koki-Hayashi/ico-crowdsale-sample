
# ICO Crowdsale Sample
ICO sample project with Truffle Framework + Solidity + OpenZeppelin on private network or ropsten/rinkeby + infura + metamask or rinkeby + local geth.


# How to run

1. Setup a [Metamask](https://metamask.io/) account. 
2. Sign up  a [Infura](https://infura.io/) account with the Metamask account you just created.
3. Install [geth](https://github.com/ethereum/go-ethereum/wiki/geth) and setup.
4. Sync your geth with rinkeby test net 
e.g., geth --rinkeby --datadir "~/rinkby" --syncmode "light" --rpc --rpcaddr "localhost" --rpcport "8545" --rpccorsdomain "*" --rpcapi "eth,net,web3,personal"
5. Gain Ether on [Ropsten faucet](http://faucet.ropsten.be:3001/) and/or [Rinkeby faucet](https://faucet.rinkeby.io/).
6. Clone the repository.
7. run "npm install"
8. Run below according to the 
 - private network
-- Run your geth on private network. 
e.g., geth --networkid "10" --nodiscover --datadir ./datadir --rpc --rpcaddr "localhost" --rpcport "8545" --rpccorsdomain "*" --rpcapi "eth,net,web3,personal"
-- Run "export WALLET="{your account}"; truffle migrate --network development". 
  
- infura + ropsten/rinkeby + metamask  
-- Run "export INFURA_ACCESS_TOKEN="{your infura access token}";export MNEMONIC="{your metamask mnemonic}"; export WALLET="{your metamask account}"; truffle migrate --network {ropsten or rinkeby}".  
  
- ropsten + local geth  
-- Run your geth as Rinkeby mode. 
e.g.,  geth --rinkeby --datadir "~/rinkby" --rpc --rpcaddr "localhost" --rpcport "8545" --rpccorsdomain "*" --rpcapi "eth,net,web3,personal"
-- Run "export RINKEBY_ACCOUNT="{your account}"; export WALLET="{your account}"; truffle migrate --network rinkeby_local"

# TODO
- missing test
