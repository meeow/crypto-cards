var testmig = artifacts.require("contracts/MappingUser.sol");

module.exports = function(deployer) {
  deployer.deploy(testmig);
};