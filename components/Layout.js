// components/Layout.js
import React from "react";

function Layout({ children, titulo, usuario, onLogout, onNavigate }) {
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
        // Logo y título
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
        // Navegación y usuario
        React.createElement(
          "div",
          { className: "flex items-center gap-4" },
          // Botones de navegación
          React.createElement(
            "button",
            {
              onClick: () => onNavigate("productos"),
              className: "text-white hover:text-gray-200 transition",
            },
            "Productos",
          ),
          React.createElement(
            "button",
            {
              onClick: () => onNavigate("pedidos"),
              className: "text-white hover:text-gray-200 transition",
            },
            "Pedidos",
          ),
          // Si hay usuario, mostramos sus datos y botón salir
          usuario &&
            React.createElement(
              "div",
              {
                className:
                  "flex items-center gap-3 ml-4 pl-4 border-l border-white/30",
              },
              React.createElement(
                "span",
                { className: "text-sm" },
                usuario.email || usuario.id.slice(0, 8),
              ),
              React.createElement(
                "button",
                {
                  onClick: onLogout,
                  className:
                    "bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition",
                },
                "Salir",
              ),
            ),
          // Si NO hay usuario, mostramos botón login
          !usuario &&
            React.createElement(
              "button",
              {
                onClick: () => onNavigate("login"),
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
