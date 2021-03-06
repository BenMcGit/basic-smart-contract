# Basic Ethereum Smart Contract

A simple demonstration of how to build, compile, and deploy a smart contract to the Rinkeby Etherum Network. 

## Description

This project is my first attempt in developing a Decentralized Application (DApp). 

This source code contains a smart contract called "Inbox", a script to compile this smart contract into it's ABI and Bytecode, and a script to deploy the smart contract to the Rinkeby Ethereum Test Network. 

Please follow the instructions below to get started. 

## Getting Started

### Dependencies

* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Node.js](https://nodejs.org/en/download/)
* [Metamask Account & Chrome Extension](https://metamask.io/)
* [Infura Account & Project](https://infura.io/)

### Preferred IDE & Plugins (Optional)

* [VSCode](https://code.visualstudio.com/)
* [VSCode Solidity Plugin](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)

### Installing

1. Clone the repo
   ```sh
   git clone https://github.com/BenMcGit/basic-smart-contract.git
   ```
2. Download dependencies
   ```sh
   cd basic-smart-contract && npm install
   ```

### Executing the program

#### Validate the Smart Contract

Execute this command to run all associated test cases. These test cases are ran on a local Ethereum test network.

```sh
npm run test
```

#### Deploying the Smart Contract

> **WARNING**: If this runs successfully, you will 'spend' a small amount of ETH on your Metamask account.

1. Follow the instructions in the .env_COPY_AND_RENAME_ME file
2. Assure that your Metamask account has a small amount of ETH
3. Run the deploy script
   ```sh
   npm run deploy
   ```

## Authors

Ben McAdams - [@benwmcadams](https://twitter.com/benwmcadams) - mcadams.benj@gmail.com

## Version History

* 0.0.1
    * Initial Release

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Acknowledgments

* [Udemy - Ethereum and Solidity: The Complete Developer's Guide](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide)
