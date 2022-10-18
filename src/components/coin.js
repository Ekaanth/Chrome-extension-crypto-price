import { getPriceDetails } from "../service/fetch";
import { useEffect, useState } from "react";

function CoinComponent({ cryptoId }) {
  const [tokenDetails, setTokenDetails] = useState(null);

  useEffect(() => {
    getPriceDetails(cryptoId).then((res) => {
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
  }, []);

  return (
    <div>
      <div className="flex flex-col justify-center relative overflow-hidden sm:py-4">
        <div className="px-2">
          {tokenDetails ? (
            <div className="relative px-4 py-6 bg-slate-300 ring-1 ring-gray-900/5 rounded-lg leading-none bg-gradient-to-r from-gray-700 to-slate-700">
              <div className="flex flex-start justify-between">
                <div className="font-bold">{tokenDetails.name}</div>
                <div>{tokenDetails.symbol}</div>
                <div>${tokenDetails.price}</div>
                {tokenDetails.dailyChange > 0 ? (
                  <div className="text-green-600">
                    {tokenDetails.dailyChange}
                    <sub>(past 24 hours)</sub>
                  </div>
                ) : (
                  <div className="text-red-600">
                    {tokenDetails.dailyChange}
                    <sub>(past 24 hours)</sub>
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CoinComponent;
