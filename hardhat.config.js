require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  // 0x3d1A3169200354605d22C838C01a09B7D3F25581
  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    bsc: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [
        "029637d8ec86bafcfb3028089d154df9d25522c324b5ee87aa853d6cbe1fecf8",
      ],
    },
  },
  paths: {
    artifacts: "./src/artifacts",
  },
};
