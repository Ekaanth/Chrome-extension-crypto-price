import { getPriceDetails } from "../service/fetch";
import { useState } from "react";

function CoinComponent({ cryptoId, cryptoName }) {
  const [tokenDetails, setTokenDetails] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const getPrice = () => {
    setButtonDisabled(true);
    getPriceDetails(cryptoId).then((res) => {
      console.log(res);
      setTokenDetails({
        name: res.data[cryptoId].name,
        symbol: cryptoId,
        price: Number(res.data[cryptoId].quote.USD.price).toFixed(2),
        dailyChange: Number(
          res.data[cryptoId].quote.USD.percent_change_24h
        ).toFixed(2),
      });
      return;
    });
  };

  return (
    <div>
      <div class=" bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12">
        <div class="px-2">
          <div class="relative px-5 py-6 bg-slate-300 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6 grid-flow-row grid-cols-2 justify-between">
            {!tokenDetails ? (
              <>
                <div>
                  <p class="text-slate-800 font-bold">{cryptoName}</p>
                </div>
                <div>
                  <button
                    class="float-right"
                    onClick={getPrice}
                    disabled={buttonDisabled}
                  >
                    Get {cryptoId} Price
                  </button>
                </div>
              </>
            ) : (
              <>
                <div class="font-bold">{tokenDetails.name}</div>
                <div>{tokenDetails.symbol}</div>
                <div>${tokenDetails.price}</div>
                {tokenDetails.dailyChange > 0 ? (
                  <div class="text-green-600">
                    {tokenDetails.dailyChange}
                    <sub>(past 24 hours)</sub>
                  </div>
                ) : (
                  <div class="text-red-600">
                    {tokenDetails.dailyChange}
                    <sub>(past 24 hours)</sub>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinComponent;
