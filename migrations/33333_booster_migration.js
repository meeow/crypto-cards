var Booster = artifacts.require("contracts/CardToken.sol");

module.exports = function(deployer) {
  deployer.deploy(Booster);
};