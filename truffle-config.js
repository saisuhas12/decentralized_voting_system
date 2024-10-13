const HDWalletProvider = require('@truffle/hdwallet-provider');

// MetaMask mnemonic (12-word seed phrase)
const mnemonic = 'faculty bulk cup scatter couple resource tattoo hidden machine exotic goat child'; // Your mnemonic

// Infura Project ID
const infuraProjectId = '10e48ebba75a44ee9cbca657e7f07b83';

module.exports = {
  networks: {
    // Sepolia Testnet configuration
    sepolia: {
      provider: () => new HDWalletProvider(
        mnemonic,
        `https://sepolia.infura.io/v3/${10e48ebba75a44ee9cbca657e7f07b83}` // Infura Sepolia URL
      ),
      network_id: 11155111, // Sepolia Testnet ID
      gas: 5500000, // Gas limit
      confirmations: 2, // Number of confirmations to wait between deployments
      timeoutBlocks: 200, // Number of blocks before timeout
      skipDryRun: true // Skip dry run before migrations
    }
  },
  
  // Solidity compiler version
  compilers: {
    solc: {
      version: '0.8.19' // Ensure it matches your contract Solidity version
    }
  }
};
