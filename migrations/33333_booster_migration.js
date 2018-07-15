var Booster = artifacts.require("contracts/BoosterPack.sol");

module.exports = function(deployer) {
  deployer.deploy(Booster);
};