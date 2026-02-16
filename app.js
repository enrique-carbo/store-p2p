/** @typedef {import('pear-interface')} */
/* global Pear, document */

import React from "react";
import ReactDOM from "react-dom/client";
import updates from "pear-updates";
import wakeups from "pear-wakeups";

function App() {
  const [mensaje, setMensaje] = React.useState("Cargando...");

  React.useEffect(() => {
    async function cargarInfo() {
      const { app, platform } = await Pear.versions();
      if (app.key) {
        setMensaje(`Store P2P - App: ${app.key.slice(0, 8)}...`);
      } else {
        setMensaje("Store P2P - Modo desarrollo");
      }
    }
    cargarInfo();
  }, []);

  return React.createElement(
    "div",
    { className: "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" },
    // Header con color de Pear
    React.createElement(
      "div",
      { className: "bg-primary text-white p-8 rounded-b-3xl shadow-lg" },
      React.createElement(
        "h1",
        { className: "text-4xl font-bold mb-2" },
        "Store P2P 🛍️",
      ),
      React.createElement("p", { className: "opacity-90" }, mensaje),
    ),
    // Contenido principal
    React.createElement(
      "div",
      { className: "max-w-4xl mx-auto p-8" },
      // Card principal
      React.createElement(
        "div",
        { className: "bg-white rounded-lg shadow-md p-6 mb-6" },
        React.createElement(
          "h2",
          { className: "text-2xl font-semibold text-gray-800 mb-4" },
          "Tienda 100% P2P",
        ),
        React.createElement(
          "p",
          { className: "text-gray-600 mb-4" },
          "Sin servidores, cero comisiones, tus datos son tuyos.",
        ),
        React.createElement(
          "button",
          {
            className:
              "bg-[#405b40] text-white px-4 py-2 rounded hover:bg-opacity-90 transition",
          },
          "Comenzar",
        ),
      ),
      // Grid de características
      React.createElement(
        "div",
        { className: "grid md:grid-cols-3 gap-6" },
        [
          {
            titulo: "Catálogo P2P",
            icono: "📦",
            desc: "Productos sincronizados entre pares sin servidor",
          },
          {
            titulo: "Chat directo",
            icono: "💬",
            desc: "Comunicación sin intermediarios",
          },
          {
            titulo: "Tus datos",
            icono: "🔐",
            desc: "Vos sos el dueño, no las grandes corporaciones",
          },
        ].map((item) =>
          React.createElement(
            "div",
            {
              key: item.titulo,
              className:
                "bg-white rounded-lg shadow p-6 hover:shadow-lg transition",
            },
            React.createElement(
              "div",
              { className: "text-4xl mb-3" },
              item.icono,
            ),
            React.createElement(
              "h3",
              { className: "font-semibold text-lg mb-2" },
              item.titulo,
            ),
            React.createElement(
              "p",
              { className: "text-gray-600 text-sm" },
              item.desc,
            ),
          ),
        ),
      ),
    ),
  );
}

// Montar React
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));

updates((update) => {
  console.log("update available:", update);
});

wakeups(async (wakeup) => {
  console.log("GOT WAKEUP", wakeup);
});
