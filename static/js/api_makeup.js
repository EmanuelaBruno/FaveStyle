//API de consulta de productos
//Habria que aplicar tal vez para un caso de busqueda de productos 
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://makeup.p.rapidapi.com/products.json',
  params: {
    brand: 'colourpop',
    product_category: 'lipstick'
  },
  headers: {
    'X-RapidAPI-Key': 'ca03e3185amsh41da1f616b1ddb9p1822b7jsn902b0efbba41',
    'X-RapidAPI-Host': 'makeup.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}