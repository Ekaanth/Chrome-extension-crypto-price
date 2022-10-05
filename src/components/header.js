function HeaderComponent() {
  return (
    <div class="mx-1">
      <div class="flex items-center border-b-2  py-2 justify-center">
        <div class="flex">
          <img class="h-8 w-auto sm:h-10" src={"../icon.png"} alt="" />
          <div class="py-1 px-2">
            <h1 class="font-sans font-bold">Crypto price</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
