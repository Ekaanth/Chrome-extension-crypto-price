'use strict';

function nodeBuilder(price, coin) {
    const node = document.createElement('span')
    node.innerHTML = `The current price of ${coin} is $ ${price}`;
    return node;
}

async function fertchPrice(coin) {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`);
    const myJson = await response.json();
    return myJson
}

async function priceBtnClicked(coin, labelClass, buttonClass) {
    const btcPriceRes = await fertchPrice(coin);
    const btcPrice = (JSON.parse(JSON.stringify(btcPriceRes)))[coin].usd;
    const node = nodeBuilder(btcPrice, coin);
    document.getElementById(labelClass).append(node)
    document.getElementById(labelClass).style.display= 'block';
    document.getElementById(buttonClass).style.display = 'none';
}
function fetchBtcPrice() {
priceBtnClicked('bitcoin', 'btc', 'btc-btn')
}

function fetchEthPrice() {
    priceBtnClicked('ethereum', 'eth', 'eth-btn')
}

function fetchSolPrice() {
    priceBtnClicked('solana', 'sol', 'sol-btn')
}

function fetchLinkPrice(){
    priceBtnClicked('chainlink', 'link', 'link-btn')
}

document.getElementById('btc-btn').addEventListener('click', fetchBtcPrice)
document.getElementById('eth-btn').addEventListener('click', fetchEthPrice)
document.getElementById('sol-btn').addEventListener('click', fetchSolPrice)
document.getElementById('link-btn').addEventListener('click', fetchLinkPrice)