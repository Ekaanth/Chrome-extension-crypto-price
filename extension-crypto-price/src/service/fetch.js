export async function getPriceDetails(coin) {
  const response = await fetch(
    `https://crypto-price-fetch.herokuapp.com/api/token/${coin}`
  );
  const data = await response.json();
  return data;
}
