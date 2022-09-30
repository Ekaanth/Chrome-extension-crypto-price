const axios = require("axios");

export async function getPriceDetails(coin) {
  const response = await axios.get(
    `https://crypto-price-fetch.herokuapp.com/api/token/${coin}`
  );
  return response;
}
