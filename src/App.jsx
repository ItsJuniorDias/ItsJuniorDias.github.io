import { useState } from "react";
import background from "./assets/background.png";

function App() {
  function openApp() {
    const packageName = "com.itsjuniordias1997.blogclub"; // altere para o package real do seu app

    const intentUrl = `intent://home#Intent;scheme=blogclub;package=com.itsjuniordias1997.blogclub;end`;
    const fallbackUrl = `https://play.google.com/store/apps/details?id=com.itsjuniordias1997.blogclub`;

    // Tenta abrir o app
    window.location.href = intentUrl;

    // Se falhar (app não instalado), cai no fallback após 2s
    setTimeout(() => {
      window.location.href = fallbackUrl;
    }, 2000);
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex items-center justify-center">
        <div className="max-w-6xl w-full bg-white shadow-lg rounded-2xl flex overflow-hidden">
          {/* Formulário */}
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to the <span className="text-blue-600">Blog Club</span>
            </h1>

            <p className="text-gray-600 mb-6">
              Sign up to receive exclusive content and updates.
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your e-mail"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                placeholder="Your message"
                rows="4"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full bg-[#376AED] text-white px-4 py-2 rounded-2xl"
                onClick={() => {}}
              >
                Send
              </button>
            </form>
          </div>

          {/* Imagem */}
          <div className="hidden md:block w-1/2">
            <img
              src={background}
              alt="Blog Club"
              className="h-[787px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
