import { useRef, useState } from "react";
import "./App.css";
import CoinComponent from "./components/coin";
import HeaderComponent from "./components/header";

function App() {
  const [newToken, setNewToken] = useState(false);
  const [tokens, setTokens] = useState([
    { id: "BTC", name: "Bitcoin" },
    { id: "ETH", name: "Ethereum" },
    { id: "SOL", name: "Solana" },
    { id: "LINK", name: "Chainlink" },
  ]);
  const inputRef = useRef();

  const handleKeypress = (e) => {
    console.log(e);
    if (e.charCode === 13) {
      setTokens([...tokens, { id: inputRef.current.value.toUpperCase() }]);
      setNewToken(false);
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <HeaderComponent addToken={() => setNewToken(true)} />
      {newToken ? (
        <div className="flex flex-col justify-center relative overflow-hidden sm:py-4">
          <div className="px-2">
            <div className="relative px-4 py-6 bg-slate-300 ring-1 ring-gray-900/5 rounded-lg leading-none bg-gradient-to-r from-gray-700 to-slate-700">
              <input
                ref={inputRef}
                type={"text"}
                className="bg-transparent ring-white w-full"
                placeholder="Enter the token symbol and press Enter"
                onKeyPress={handleKeypress}
              />
            </div>
          </div>
        </div>
      ) : null}
      <div className="pt-1">
        {tokens.map((token) => (
          <CoinComponent
            key={token.id}
            cryptoId={token.id}
            cryptoName={token.name}
          />
        ))}
      </div>
    </>
  );
}

export default App;
