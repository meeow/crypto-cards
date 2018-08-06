//const Eth = require('ethjs-query');
//const EthContract = require('ethjs-contract');

//client-side code for accessing contract running on local ethereum node

const Web3 = require('web3');
var web3 = window.web3;

if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    //web3js = new Web3(web3.currentProvider);
    web3 = new Web3(web3.currentProvider);
} else {
	console.log('No web3? You should consider trying MetaMask!');
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    //web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
};

var account;

web3.eth.getAccounts((err, res) => {
	console.log(res[0]);
	account = res[0];
});

console.log('Client running');

const button = document.getElementById('myButton');
const button2 = document.getElementById('myButton2');
const valueBar = document.getElementById('myTextField');

// const eth = new Eth(web3.currentProvider);
// const contract = new EthContract(eth);

// const MiniToken = contract([{"constant":false,"inputs":[{"name":"_class","type":"uint8"},{"name":"_rarity","type":"uint8"},{"name":"_owner","type":"address"}],"name":"_createCard","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"cardsOwned","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"test1","type":"uint8"},{"name":"test2","type":"uint8"}],"name":"test","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token_Id","type":"uint256"},{"name":"_owner","type":"address"}],"name":"getClass","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"cardOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"printYeet","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token_Id","type":"uint256"},{"name":"_owner","type":"address"}],"name":"getRarity","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_owner","type":"address"},{"indexed":false,"name":"_cardID","type":"uint256"},{"indexed":false,"name":"_class","type":"uint8"},{"indexed":false,"name":"_rarity","type":"uint8"}],"name":"Creation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"test1","type":"uint8"},{"indexed":false,"name":"test2","type":"uint8"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_operator","type":"address"},{"indexed":false,"name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}]);
// const miniToken = MiniToken.at('0x37528fe4a5e364dcfa37011b96300f548232576e');

var contract = new web3.eth.Contract([{"constant":false,"inputs":[{"name":"_class","type":"uint8"},{"name":"_rarity","type":"uint8"},{"name":"_owner","type":"address"}],"name":"_createCard","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"cardsOwned","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"test1","type":"uint8"},{"name":"test2","type":"uint8"}],"name":"test","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token_Id","type":"uint256"},{"name":"_owner","type":"address"}],"name":"getClass","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"cardOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"printYeet","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token_Id","type":"uint256"},{"name":"_owner","type":"address"}],"name":"getRarity","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_owner","type":"address"},{"indexed":false,"name":"_cardID","type":"uint256"},{"indexed":false,"name":"_class","type":"uint8"},{"indexed":false,"name":"_rarity","type":"uint8"}],"name":"Creation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"test1","type":"uint8"},{"indexed":false,"name":"test2","type":"uint8"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_operator","type":"address"},{"indexed":false,"name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}],"0x37528fe4a5e364dcfa37011b96300f548232576e");

button.addEventListener('click', function(e) {
	console.log('button pressed');
	//var result = contract.printYeet();
	//console.log(result);
	contract.methods.printYeet().call(function (err, result) {
	  if (err) {
	    console.log('err');
	    // return error(err);
	  } else {
	  }
	  // Use the function's return value
	  console.log("Val is");
	  document.getElementById('myTextField').value = result;
	}).then(console.log);
});

button2.addEventListener('click', function(e) {
	console.log('button 2 pressed');

	contract.methods.test(1, 1).send({from: account})
	.on('transactionHash', function(hash){
	    console.log("hash is ");
	    console.log(hash);
	})
	.on('confirmation', function(confirmationNumber, receipt){
	    // console.log("confirmation is ");
	    // console.log(confirmationNumber);
	    // console.log("receipt is");
	    // console.log(receipt);
	})
	.on('receipt', function(receipt){
	    // receipt example
	    console.log("receipt is");
	    console.log(receipt);
	})
	.on('error', console.error);
});

