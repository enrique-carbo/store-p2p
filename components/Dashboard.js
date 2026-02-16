// components/Dashboard.js
import React from "react";

function Dashboard() {
  // Cards de estadísticas (mock por ahora)
  const stats = [
    {
      titulo: "Productos",
      valor: "24",
      icono: "📦",
      color: "bg-blue-100 text-blue-600",
    },
    {
      titulo: "Pedidos",
      valor: "8",
      icono: "🛒",
      color: "bg-green-100 text-green-600",
    },
    {
      titulo: "Clientes",
      valor: "15",
      icono: "👥",
      color: "bg-purple-100 text-purple-600",
    },
    {
      titulo: "Ventas hoy",
      valor: "$45.200",
      icono: "💰",
      color: "bg-yellow-100 text-yellow-600",
    },
  ];

  return React.createElement(
    "div",
    { className: "space-y-8" },
    // Grid de estadísticas
    React.createElement(
      "div",
      { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" },
      stats.map((stat) =>
        React.createElement(
          "div",
          {
            key: stat.titulo,
            className:
              "bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition",
          },
          React.createElement(
            "div",
            { className: "flex items-center gap-4" },
            React.createElement(
              "div",
              {
                className: `w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center text-2xl`,
              },
              stat.icono,
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "p",
                { className: "text-sm text-gray-500" },
                stat.titulo,
              ),
              React.createElement(
                "p",
                { className: "text-2xl font-bold text-gray-800" },
                stat.valor,
              ),
            ),
          ),
        ),
      ),
    ),
    // Últimos productos
    React.createElement(
      "div",
      { className: "bg-white rounded-xl shadow-md p-6" },
      React.createElement(
        "h3",
        { className: "text-lg font-semibold text-gray-800 mb-4" },
        "Últimos productos",
      ),
      React.createElement(
        "div",
        { className: "grid grid-cols-2 md:grid-cols-4 gap-4" },
        [1, 2, 3, 4].map((i) =>
          React.createElement(
            "div",
            {
              key: i,
              className: "border rounded-lg p-4 hover:shadow-md transition",
            },
            React.createElement(
              "div",
              {
                className:
                  "h-20 bg-gray-200 rounded mb-2 flex items-center justify-center text-3xl",
              },
              "📷",
            ),
            React.createElement(
              "p",
              { className: "font-medium" },
              `Producto ${i}`,
            ),
            React.createElement(
              "p",
              { className: "text-primary font-bold" },
              "$ 10.000",
            ),
          ),
        ),
      ),
    ),
  );
}

export default Dashboard;
