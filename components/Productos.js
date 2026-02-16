// components/Productos.js
import React, { useState } from "react";

function Productos() {
  const [productos] = useState([
    {
      id: 1,
      nombre: "Remera Negra",
      precio: 12500,
      stock: 15,
      talle: ["S", "M", "L"],
    },
    {
      id: 2,
      nombre: "Jean Azul",
      precio: 32000,
      stock: 8,
      talle: ["M", "L", "XL"],
    },
    { id: 3, nombre: "Campera", precio: 45000, stock: 5, talle: ["S", "M"] },
  ]);

  const [mostrarForm, setMostrarForm] = useState(false);
  const [nuevoProducto, setNuevoProducto] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Por ahora solo mock
    console.log("Producto a guardar:", nuevoProducto);
    setMostrarForm(false);
  };

  return React.createElement(
    "div",
    { className: "space-y-6" },
    // Header y botón nuevo
    React.createElement(
      "div",
      { className: "flex justify-between items-center" },
      React.createElement(
        "h3",
        { className: "text-lg font-semibold text-gray-800" },
        "Gestión de Productos",
      ),
      React.createElement(
        "button",
        {
          onClick: () => setMostrarForm(!mostrarForm),
          className:
            "bg-primary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition flex items-center gap-2",
        },
        React.createElement("span", null, mostrarForm ? "✕" : "+"),
        React.createElement(
          "span",
          null,
          mostrarForm ? "Cancelar" : "Nuevo Producto",
        ),
      ),
    ),

    // Formulario nuevo producto
    mostrarForm &&
      React.createElement(
        "form",
        {
          onSubmit: handleSubmit,
          className: "bg-white rounded-xl shadow-md p-6 space-y-4",
        },
        React.createElement(
          "div",
          { className: "grid grid-cols-2 gap-4" },
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { className: "block text-sm font-medium text-gray-700 mb-1" },
              "Nombre",
            ),
            React.createElement("input", {
              type: "text",
              className:
                "w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent",
              onChange: (e) =>
                setNuevoProducto({ ...nuevoProducto, nombre: e.target.value }),
            }),
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { className: "block text-sm font-medium text-gray-700 mb-1" },
              "Precio",
            ),
            React.createElement("input", {
              type: "number",
              className:
                "w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent",
              onChange: (e) =>
                setNuevoProducto({ ...nuevoProducto, precio: e.target.value }),
            }),
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { className: "block text-sm font-medium text-gray-700 mb-1" },
              "Stock",
            ),
            React.createElement("input", {
              type: "number",
              className:
                "w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent",
              onChange: (e) =>
                setNuevoProducto({ ...nuevoProducto, stock: e.target.value }),
            }),
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              { className: "block text-sm font-medium text-gray-700 mb-1" },
              "Talles",
            ),
            React.createElement("input", {
              type: "text",
              placeholder: "S, M, L",
              className:
                "w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary focus:border-transparent",
              onChange: (e) =>
                setNuevoProducto({
                  ...nuevoProducto,
                  talle: e.target.value.split(","),
                }),
            }),
          ),
        ),
        React.createElement(
          "button",
          {
            type: "submit",
            className:
              "bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition",
          },
          "Guardar Producto",
        ),
      ),

    // Tabla de productos
    React.createElement(
      "div",
      { className: "bg-white rounded-xl shadow-md overflow-hidden" },
      React.createElement(
        "table",
        { className: "w-full" },
        React.createElement(
          "thead",
          { className: "bg-gray-50 border-b" },
          React.createElement(
            "tr",
            null,
            ["Producto", "Precio", "Stock", "Talles", "Acciones"].map((col) =>
              React.createElement(
                "th",
                {
                  key: col,
                  className: "text-left p-4 text-sm font-medium text-gray-600",
                },
                col,
              ),
            ),
          ),
        ),
        React.createElement(
          "tbody",
          { className: "divide-y" },
          productos.map((p) =>
            React.createElement(
              "tr",
              { key: p.id, className: "hover:bg-gray-50" },
              React.createElement("td", { className: "p-4" }, p.nombre),
              React.createElement(
                "td",
                { className: "p-4 font-medium" },
                `$${p.precio.toLocaleString()}`,
              ),
              React.createElement("td", { className: "p-4" }, p.stock),
              React.createElement(
                "td",
                { className: "p-4" },
                p.talle.join(", "),
              ),
              React.createElement(
                "td",
                { className: "p-4" },
                React.createElement(
                  "button",
                  { className: "text-primary hover:text-primary-light mr-3" },
                  "Editar",
                ),
                React.createElement(
                  "button",
                  { className: "text-red-500 hover:text-red-600" },
                  "Eliminar",
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  );
}

export default Productos;
