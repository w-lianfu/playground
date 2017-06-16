import 'whatwg-fetch';

fetch('/json/data.json')
  .then((response) => response.json())
  .then((json) => {
    // console.log('json: ', json);
  });


