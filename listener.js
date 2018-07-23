var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.WebsocketProvider('ws://127.0.0.1:8546'));

// var contract = new web3.eth.Contract([{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"cardsOwned","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"test1","type":"uint8"},{"name":"test2","type":"uint8"}],"name":"test","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_class","type":"int256"},{"name":"_rarity","type":"int256"},{"name":"_owner","type":"address"}],"name":"_createCard","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"cardOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"printYeet","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_owner","type":"address"},{"indexed":false,"name":"_cardID","type":"uint256"},{"indexed":false,"name":"_class","type":"int256"},{"indexed":false,"name":"_rarity","type":"int256"}],"name":"Creation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"test1","type":"uint8"},{"indexed":false,"name":"test2","type":"uint8"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_operator","type":"address"},{"indexed":false,"name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"}],"0x40e5f84aa27063a9a06a7ea6152e184922d22908");

// // console.log("point 1");
// contract.setProvider(web3.currentProvider)

// contract.methods.printYeet().call(function (err, result) {
//  //console.log("point 3");
//   if (err) {
//     console.log('err');
//     return error(err);
//   } else {
//     //console.log("Yeet call executed successfully.");
//   }
//     //console.log("point 4");
//   // Use the function's return value
//   console.log("Val is");
// }).then(console.log);

// contract.methods.test(1, 1).send({from: '0xae380865fbd4f70e08fd273a455405e332002f05'}).on('receipt', function(receipt) { 
//    console.log(reciept);
// });

// contract.methods._createCard(1, 1, '0xae380865fbd4f70e08fd273a455405e332002f05').send({from: '0xae380865fbd4f70e08fd273a455405e332002f05', gas: '750319'}).on('receipt', function(receipt) { 
//    console.log(reciept);
//  });

var contract1 = new web3.eth.Contract([{"constant":false,"inputs":[],"name":"f","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"}], "0xdd14011afa949e8b215b8c24d536863c25015184");

contract1.methods.f().send({from: '0xae380865fbd4f70e08fd273a455405e332002f05'}).on('receipt', function(receipt) { 
  console.log(reciept);
});



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

//console.log("point 2");

