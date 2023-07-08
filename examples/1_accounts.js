// const { ethers } = require("ethers");

// const INFURA_ID = ''
// const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

// const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e'

// const main = async () => {
//     const balance = await provider.getBalance(address)
//     console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
// }

// main()



// Reading  Information From BlockChain/Metamask wallet i.e Account Balance

const { ethers } = require("ethers");

const infura_api_key = "2e3d20ee8a354f6293194c6a9f5e997e"
const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${infura_api_key}`)

const address = "0x6ca780870c091a7fc2177d42bB0BC9d940047F65";

const main = async () => {
    const balance = await provider.getBalance(address)
    console.log(`Your Account balance : ${ethers.utils.formatEther(balance)}`);
}

main()