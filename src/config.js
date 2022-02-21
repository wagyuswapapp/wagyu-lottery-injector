const config = {
  testnet: {
    url: "https://testnet.velas.com/rpc/",
    chainId: 111,
    contracts: {
      lottery: "0x11FbA0b1ED82824b2bccC99a3098e6328ba4C610",
    },
    injection: "5000000000000000000000", // 5000 ETHER
  },
  mainnet: {
    url: "https://evmexplorer.velas.com/rpc",
    chainId: 106,
    contracts: {
      lottery: "0xCc98EA77643713A1bBe42C468e3D8263E635ed29",
    },
    injection: "5000000000000000000000", // 5000 ETHER
  },
};

module.exports = config;
