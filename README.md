# Basic Ethereum Smart Contract

A simple demonstration of how to build, compile, and deploy a smart contract to the Rinkeby Etherum Network. 

## Description

This projectis my first attempt in learning the intracacies of the Software Development Lifecycle (SDLC) of a Decentralized Application (DApp). Within this project there is a basic definition of a smart contract "Inbox", a script to compile this smart contract into it's ABI and Bytecode, and a script to deploy this to the Rinkeby Etherum Test Network. Please follow the instructions below to get started. 

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

Execute the following command to download the source code
```sh
git clone TODO
```

### Executing program

#### Validate the Smart Contract

Execute this command to run all associated test cases. These test cases are ran on a local Ethereum test network.

```sh
npm run test
```

#### Deploying the Smart Contract

> **WARNING**: If this runs successfully, you will use a small amount of ETH on your test account

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

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments

* [Udemy: Ethereum and Solidity: The Complete Developer's Guide](https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide)
