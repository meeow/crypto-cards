var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.WebsocketProvider('ws://127.0.0.1:8546'));

var contract = new web3.eth.Contract([{"constant":false,"inputs":[{"name":"_class","type":"uint8"},{"name":"_rarity","type":"uint8"},{"name":"_owner","type":"address"}],"name":"_createCard","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"cardsOwned","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"test1","type":"uint8"},{"name":"test2","type":"uint8"}],"name":"test","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token_Id","type":"uint256"},{"name":"_owner","type":"address"}],"name":"getClass","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"cardOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"printYeet","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"token_Id","type":"uint256"},{"name":"_owner","type":"address"}],"name":"getRarity","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_owner","type":"address"},{"indexed":false,"name":"_cardID","type":"uint256"},{"indexed":false,"name":"_class","type":"uint8"},{"indexed":false,"name":"_rarity","type":"uint8"}],"name":"Creation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"test1","type":"uint8"},{"indexed":false,"name":"test2","type":"uint8"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_operator","type":"address"},{"indexed":false,"name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}],"0x37528fe4a5e364dcfa37011b96300f548232576e");

// contract.setProvider(web3.currentProvider) //sets current provider, not currently necessary

contract.methods.printYeet().call(function (err, result) {
  if (err) {
    console.log('err');
    return error(err);
  } else {
  }
  // Use the function's return value
  console.log("Val is");
}).then(console.log);

contract.methods.getClass(0, '0xAe380865fbD4F70e08fD273a455405E332002f05').call(function (err, result) {
  if (err) {
    console.log('err');
    return error(err);
  } else {
  }
  // Use the function's return value
  console.log("Class is");
}).then(console.log);

// contract.events.Confirmation({}, function(error, event){ console.log(event); })
// .on('data', function(event){
//     console.log(event); // same results as the optional callback above
// })
// .on('changed', function(event){
//     // remove event from local database
// })
// .on('error', console.error);  //event handler to listen for event Confirmation

contract.events.Creation({}, function(error, event){ console.log(event); })
.on('data', function(event){
    console.log(event); // same results as the optional callback above
})
.on('changed', function(event){
    // remove event from local database
})
.on('error', console.error);  //event handler to listen for event Confirmation

contract.methods.test(1, 1).send({from: '0xae380865fbd4f70e08fd273a455405e332002f05'})
.on('transactionHash', function(hash){
    console.log("hash is ");
    console.log(hash);
})
.on('confirmation', function(confirmationNumber, receipt){
    console.log("confirmation is ");
    console.log(confirmationNumber);
    // console.log("receipt is");
    // console.log(receipt);
})
.on('receipt', function(receipt){
    // receipt example
    console.log("receipt is");
    console.log(receipt);
})
.on('error', console.error);

contract.methods._createCard(1, 1, '0xae380865fbd4f70e08fd273a455405e332002f05').send({from: '0xae380865fbd4f70e08fd273a455405e332002f05', gas: '950319'})
.on('transactionHash', function(hash){
    console.log("hash is ");
    console.log(hash);
})
.on('confirmation', function(confirmationNumber, receipt){
    console.log("confirmation is ");
    console.log(confirmationNumber);
    // console.log("receipt is");
    // console.log(receipt);
})
.on('receipt', function(receipt){
    // receipt example
    console.log("receipt is");
    console.log(receipt);
})
.on('error', console.error);

// var contract1 = new web3.eth.Contract([{"constant":false,"inputs":[],"name":"f","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}], "0x3c522db5229f40b5039fc381d00a54315d2e3576");

// contract1.methods.f().send({from: '0xae380865fbd4f70e08fd273a455405e332002f05', gas: 600000})
// .on('transactionHash', function(hash){
//     console.log("hash is ");
//     console.log(hash);
// })
// .on('confirmation', function(confirmationNumber, receipt){
//     console.log("confirmation is ");
//     console.log(confirmationNumber);
//     // console.log("receipt is")
//     // console.log(receipt)
// })
// .on('receipt', function(receipt){
//     // receipt example
//     console.log("receipt is");
//     console.log(receipt);
// })
// .on('error', console.error); // If there's an out of gas error the second parameter is the receipt.



/*

contract.events.Yeet(function (err, result) {
  if (err) {
    console.log(err);
  }
  else {
    console.log("Result " + result.args.val);
  }
});

*/


