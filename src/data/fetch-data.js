import 'whatwg-fetch';

fetch('./data.json')
  .then((response) => response.json())
  .then((json) => {
    console.log('json: ', json);
  });


