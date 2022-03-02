const assert = require('assert');
const ganache = require('ganache-cli');
const { interfaces } = require('mocha');
const Web3 = require('web3'); // constructor
const web3 = new Web3(ganache.provider()); // instance of Web3
const {interface, bytecode} = require('../compile.js');

let accounts;
let account;
let inbox;

const INITIAL_MESSAGE = 'Hi there!'

beforeEach(async () => {
    // get a list of unlocked accounts
    accounts = await web3.eth.getAccounts();

    // use the 0th account (can use any)
    account = accounts[0];

    // deploy a contract 
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: [INITIAL_MESSAGE]})
        .send({from: account, gas: '1000000'})
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call(); // does not require gas, only retrieving data
        assert.equal(INITIAL_MESSAGE, message);
    });

    it('can change the message', async () => {
        const expected = 'bye';
        await inbox.methods.setMessage(expected).send({from:account}); // requires gas, modifying data
        const message = await inbox.methods.message().call();
        assert.equal(message, expected);
    });
});