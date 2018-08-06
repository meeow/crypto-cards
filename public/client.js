//client-side code for accessing contract running on local ethereum node

console.log('Client running');

const button = document.getElementById('myButton');
const button2 = document.getElementById('myButton2')
const valueBar = document.getElementById('myTextField');

button.addEventListener('click', function(e) {
	console.log('button pressed');
	//var result = contract.printYeet();
	//console.log(result);

	fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        //console.log(response.json());
        //var parsedJson = JSON.parse(response.json());
        response.json().then(function(result) {
        	document.getElementById('myTextField').value = result;
        });
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    })
});

button2.addEventListener('click', function(e) {
	console.log('button 2 pressed');

	fetch('/clicked2', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        //console.log(response.json());
        //var parsedJson = JSON.parse(response.json());
        // response.json().then(function(result) {
        // 	document.getElementById('myTextField').value = result;
        // });
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    })
});

