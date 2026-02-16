// components/Layout.js
import React from "react";

function Layout({ children, titulo }) {
  return React.createElement(
    "div",
    { className: "min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" },
    // Header fijo
    React.createElement(
      "div",
      { className: "bg-primary text-white p-6 shadow-lg" },
      React.createElement(
        "div",
        { className: "max-w-7xl mx-auto flex justify-between items-center" },
        React.createElement(
          "div",
          { className: "flex items-center gap-3" },
          React.createElement("span", { className: "text-2xl" }, "🛍️"),
          React.createElement(
            "h1",
            { className: "text-2xl font-bold" },
            "Store P2P",
          ),
        ),
        React.createElement(
          "div",
          { className: "flex items-center gap-4" },
          React.createElement(
            "button",
            { className: "text-white hover:text-gray-200 transition" },
            "Productos",
          ),
          React.createElement(
            "button",
            { className: "text-white hover:text-gray-200 transition" },
            "Pedidos",
          ),
          React.createElement(
            "button",
            {
              className:
                "bg-white text-primary px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition",
            },
            "Login",
          ),
        ),
      ),
    ),
    // Contenido
    React.createElement(
      "div",
      { className: "max-w-7xl mx-auto p-8" },
      titulo &&
        React.createElement(
          "h2",
          { className: "text-2xl font-bold text-gray-800 mb-6" },
          titulo,
        ),
      children,
    ),
  );
}

export default Layout;
