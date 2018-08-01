console.log('Server-side code running');

const express = require('express');
const app = express();

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.WebsocketProvider('ws://127.0.0.1:8546'));

var contract = new web3.eth.Contract([{"constant":false,"inputs":[{"name":"_class","type":"uint8"},{"name":"_rarity","type":"uint8"},{"name":"_owner","type":"address"}],"name":"_createCard","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"cardsOwned","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"test1","type":"uint8"},{"name":"test2","type":"uint8"}],"name":"test","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token_Id","type":"uint256"},{"name":"_owner","type":"address"}],"name":"getClass","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"cardOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"printYeet","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token_Id","type":"uint256"},{"name":"_owner","type":"address"}],"name":"getRarity","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_owner","type":"address"},{"indexed":false,"name":"_cardID","type":"uint256"},{"indexed":false,"name":"_class","type":"uint8"},{"indexed":false,"name":"_rarity","type":"uint8"}],"name":"Creation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"test1","type":"uint8"},{"indexed":false,"name":"test2","type":"uint8"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_operator","type":"address"},{"indexed":false,"name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}],"0x37528fe4a5e364dcfa37011b96300f548232576e");

// serve files from the public directory
app.use(express.static('public'));

// start the express web server listening on 8080
app.listen(8080, () => {
  console.log('listening on 8080');
});

// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/demo.html');
});

app.post('/clicked', (req, res) => {
	var send = -1;
	contract.methods.printYeet().call(function (err, result) {
	  if (err) {
	    //console.log('err');
	    //return error(err);
	  } else {
	  }
	  // Use the function's return value
	  //console.log("Val is");
	}).then(function(result) {
		send = result;
		console.log(send);
	});
});