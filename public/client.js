console.log('Client running');

const button = document.getElementById('myButton');
button.addEventListener('click', function(e) {
	console.log('button pressed');

	fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Click was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    })
});