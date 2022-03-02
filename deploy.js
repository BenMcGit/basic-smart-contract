require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3'); // constructor
const {interface, bytecode} = require('./compile.js');

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

// require function to call async/awaits
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];

    console.log('Attempting to deploy from account', account);

    const inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['Hi!'] })
        .send({ gas: '1000000', from: account });

    // manual validation can be done at https://rinkeby.etherscan.io/address/<ADDRESS>
    console.log('Contract deployed to', inbox.options.address);

    // prevent hanging deployment
    provider.engine.stop();
};
deploy();
