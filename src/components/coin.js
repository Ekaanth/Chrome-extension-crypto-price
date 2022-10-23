import { getPriceDetails } from "../service/fetch";
import { useEffect, useState } from "react";

function CoinComponent({ cryptoId, cryptoName }) {
  const [tokenDetails, setTokenDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const getPrice = () => {
    setIsLoading(true);
    getPriceDetails(cryptoId)
      .then((res) => {
        if (Object.entries(res.data).length !== 0) {
          setTokenDetails({
            name: res.data[cryptoId].name,
            symbol: cryptoId,
            price: Number(res.data[cryptoId].quote.USD.price).toFixed(2),
            dailyChange: Number(
              res.data[cryptoId].quote.USD.percent_change_24h
            ).toFixed(2),
          });
        } else {
          setIsError(true);
        }
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    if (!cryptoName) {
      getPrice();
    }
  }, [cryptoName, getPrice]);

  return (
    <div className="flex flex-col justify-center relative overflow-hidden sm:py-4">
      <div className="px-2">
        <div className="relative px-4 py-6 bg-slate-300 ring-1 ring-gray-900/5 rounded-lg leading-none bg-gradient-to-r from-gray-700 to-slate-700">
          {!tokenDetails && !isError ? (
            !isLoading ? (
              <div className="flex flex-start justify-between">
                <div className="flex-2">
                  <p className="font-bold">{cryptoName}</p>
                </div>
                <div className="flex-2">
                  <button className="float-right" onClick={getPrice}>
                    Get {cryptoId} Price
                  </button>
                </div>
              </div>
            ) : (
              <div className="relative py-2">
                <div className="spin"></div>
              </div>
            )
          ) : (
            <div className="flex flex-start justify-between">
              {!isError ? (
                <>
                  <div className="font-bold">{tokenDetails.name}</div>
                  <div>{tokenDetails.symbol}</div>
                  <div>${tokenDetails.price}</div>
                  {tokenDetails.dailyChange > 0 ? (
                    <div className="text-green-600 ">
                      {tokenDetails.dailyChange}
                      <sub>(past 24 hours)</sub>
                    </div>
                  ) : (
                    <div className="text-red-600">
                      {tokenDetails.dailyChange}
                      <sub>(past 24 hours)</sub>
                    </div>
                  )}
                </>
              ) : (
                <p>The {cryptoId} does not exit, Please try with new symbol</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CoinComponent;
