function HeaderComponent() {
  const addNewCoin = () => {
    // alert("test");
  };

  return (
    <div class="mx-1">
      <div class="flex items-center justify-between border-b-2  py-2 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <img class="h-8 w-auto sm:h-10" src={"../icon.png"} alt="" />
          <div class="py-1 px-2">
            <h1 class="font-sans font-bold">Crypto price</h1>
          </div>
        </div>
        <button
          class="text-center text-base text-gray-500"
          onClick={addNewCoin}
        >
          Track new coin
        </button>
      </div>
    </div>
  );
}

export default HeaderComponent;
