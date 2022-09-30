import { getPriceDetails } from "../service/fetch";

function CoinComponent(props) {
  // const coinPrice = getPriceDetails(props.symbolId);
  // console.log(coinPrice);
  return (
    <div>
      <div class=" bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12">
        <div class="max-w-7xl mx-auto">
          <div class="relative group">
            <div class="absolute -inset-1 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div class="relative px-7 py-6 bg-slate-300 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <div class="space-y-2">
                <p class="text-slate-800">
                  Learn how to make a glowing gradient background!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinComponent;
