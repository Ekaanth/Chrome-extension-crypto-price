import "./App.css";
import CoinComponent from "./components/coin";
import ErrorComponent from "./components/error";
import HeaderComponent from "./components/header";

function App() {
  return (
    <>
      <HeaderComponent />
      <div class="pt-4">
        <CoinComponent symbolId="BTC" />
      </div>
    </>
  );
}

export default App;
