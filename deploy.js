require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, evm } = require('./compile');

const validateEnvVar = (value, name) => {
    let isSet = 'X';
    if(value == '' || value === undefined){
        isSet = ' ';
    }
    console.log('[%s] Environment variable %s is set', isSet, name);
};
validateEnvVar(process.env.METAMASK_ACCOUNT_MNEMONIC, 'METAMASK_ACCOUNT_MNEMONIC');
validateEnvVar(process.env.INFURA_ENDPOINT, 'INFURA_ENDPOINT');

console.log('Connecting to the Ethereum network...')
const provider = new HDWalletProvider(
    process.env.METAMASK_ACCOUNT_MNEMONIC,
    process.env.INFURA_ENDPOINT
);
const web3 = new Web3(provider);
 
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
 
  console.log('Attempting to deploy from account', accounts[0]);
 
  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });
 
  console.log('Contract deployed to', result.options.address);
  provider.engine.stop();
};
 
deploy();
