function HeaderComponent() {
  return (
    <div class="mx-1">
      <div class="flex items-center py-2 justify-center">
        <div class="flex">
          <img class="h-8 w-auto sm:h-10" src={"../icon.png"} alt="logo" />
          <div class="py-1 px-2">
            <h1 class="font-bold text-2xl">Crypto price</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
