function HeaderComponent({ addToken }) {
  return (
    <div className="mx-3 mt-4 flex flex-row ">
      <div className="flex flex-1 w-64">
        <img className="h-8 w-auto sm:h-10" src={"../icon.png"} alt="logo" />
        <div className="py-1 px-2">
          <h1 className="font-bold text-2xl">Crypto price</h1>
        </div>
      </div>
      <div className="justify-end m-3 flex" onClick={addToken}>
        <div>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
