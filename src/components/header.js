function HeaderComponent() {
  return (
    <div className="mx-1">
      <div className="flex items-center py-2 justify-center">
        <div className="flex">
          <img className="h-8 w-auto sm:h-10" src={"../icon.png"} alt="logo" />
          <div className="py-1 px-2">
            <h1 className="font-bold text-2xl">Crypto price</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
