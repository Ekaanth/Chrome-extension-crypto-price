import "./App.css";
import CoinComponent from "./components/coin";
import HeaderComponent from "./components/header";

function App() {
  const tokens = ["BTC", "ETH", "BNB", "LINK"];

  return (
    <>
      <HeaderComponent />
      <div className="pt-4">
        {tokens.map((token) => (
          <CoinComponent key={token} cryptoId={token} />
        ))}
      </div>
    </>
  );
}

export default App;
