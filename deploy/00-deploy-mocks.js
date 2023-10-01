const { developmentChains } = require("../helper-hardhat-config")
const { network } = require("hardhat")

const DECIMALS = "8"
const INITIAL_ANSWER = "200000000000" // 2000

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    if (developmentChains.includes(network.name)) {
        log("Local network detected! Deploying mocks...")
        await deploy("MockV3Aggregator", {
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER],
        })
        log("Mocks deployed!")
        log("-------------------------------------------")
    }
}
module.exports.tags = ["all", "mocks"]
