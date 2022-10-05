import "./App.css";
import CoinComponent from "./components/coin";
import HeaderComponent from "./components/header";

function App() {
  return (
    <>
      <HeaderComponent />
      <div class="pt-4">
        <CoinComponent cryptoId="BTC" cryptoName="Bitcoin" />
      </div>
      <div class="pt-4">
        <CoinComponent cryptoId="ETH" cryptoName="Ethereum" />
      </div>
      <div class="pt-4">
        <CoinComponent cryptoId="BNB" cryptoName="BNB" />
      </div>
      <div class="pt-4">
        <CoinComponent cryptoId="LINK" cryptoName="Chainlink" />
      </div>
    </>
  );
}

export default App;
