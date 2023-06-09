import dotenv from 'dotenv';
import '@nomicfoundation/hardhat-toolbox';
import { HardhatUserConfig } from 'hardhat/types';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: '0.8.9',
  /* networks: {
		hardhat: {},
		MATIC_MAINNET: {
			accounts: [`${process.env.PRIVATE_KEY}`],
			url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
		},
		MATIC_MUMBAI: {
			accounts: [`${process.env.PRIVATE_KEY}`],
			url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
		}
	},
	etherscan: {
		apiKey: `${process.env.ETHERSCAN_API_KEY}`
	} */
};

export default config;
