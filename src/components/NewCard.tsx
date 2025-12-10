import React from "react";

const NewCard = () => {
  return (
    <>
      <div className='className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 grid place-content-center gap-4'>
        <h1 className="text-center m-20 text-white font-bold font-xxl">Új kártya létrehozása</h1>
        <div className="w-full max-w-sm bg-white rounded-xl">
          <div className="flex items-stretch gap-4">
            <div className="m-10">
              <h2 className="text-center">Kérdés</h2>
              <textarea
                name="q"
                id="q"
                placeholder="Kérdés placeholder"
              ></textarea>
            </div>
            <div className="m-10">
              <h2 className="text-center">Kérdés</h2>
              <textarea
                name="a"
                id="a"
                placeholder="Válasz placeholder"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="cursor-pointer bg-[#66CB92] rounded-xl p-10">
              <i className="fa-solid fa-plus"></i>Hozzáadás
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCard;
