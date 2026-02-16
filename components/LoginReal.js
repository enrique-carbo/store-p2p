// components/LoginReal.js
import React, { useState } from "react";
import bip39 from "bip39";

function LoginReal({ onLogin }) {
  const [modo, setModo] = useState("login"); // "login" o "registro"
  const [frase, setFrase] = useState("");
  const [nuevaFrase, setNuevaFrase] = useState("");
  const [email, setEmail] = useState("");

  // Generar nueva frase de 12 palabras
  const generarFrase = () => {
    const mnemonic = bip39.generateMnemonic();
    setNuevaFrase(mnemonic);
  };

  const handleRegistro = () => {
    console.log("Frase generada (guardar en lugar seguro):", nuevaFrase);
    onLogin({ email, frase: nuevaFrase, modo: "registro" });
  };

  const handleLogin = () => {
    if (bip39.validateMnemonic(frase)) {
      onLogin({ frase, modo: "login" });
    } else {
      alert("Frase inválida");
    }
  };

  return React.createElement(
    "div",
    { className: "min-h-[80vh] flex items-center justify-center p-4" },
    React.createElement(
      "div",
      { className: "bg-white rounded-2xl shadow-xl p-8 w-full max-w-md" },
      // Header
      React.createElement(
        "div",
        { className: "text-center mb-8" },
        React.createElement("div", { className: "text-6xl mb-4" }, "🔐"),
        React.createElement(
          "h2",
          { className: "text-2xl font-bold text-gray-800" },
          "Store P2P",
        ),
        React.createElement(
          "p",
          { className: "text-gray-500 mt-2" },
          modo === "login" ? "Ingresá con tu frase" : "Creá tu identidad",
        ),
      ),

      // Tabs
      React.createElement(
        "div",
        { className: "flex gap-2 mb-6" },
        ["login", "registro"].map((m) =>
          React.createElement(
            "button",
            {
              key: m,
              onClick: () => setModo(m),
              className: `flex-1 py-2 rounded-lg transition ${
                modo === m
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`,
            },
            m === "login" ? "Ingresar" : "Registrarme",
          ),
        ),
      ),

      // Contenido según modo
      modo === "login"
        ? // LOGIN
          React.createElement(
            "div",
            { className: "space-y-6" },
            React.createElement(
              "div",
              null,
              React.createElement(
                "label",
                { className: "block text-sm font-medium text-gray-700 mb-2" },
                "Frase de 12 palabras",
              ),
              React.createElement("textarea", {
                value: frase,
                onChange: (e) => setFrase(e.target.value),
                className:
                  "w-full border rounded-lg px-4 py-3 h-24 focus:ring-2 focus:ring-primary focus:border-transparent font-mono text-sm",
                placeholder: "palabra1 palabra2 palabra3 ...",
              }),
            ),
            React.createElement(
              "button",
              {
                onClick: handleLogin,
                disabled: !frase,
                className:
                  "w-full bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed",
              },
              "Ingresar a mi tienda",
            ),
          )
        : // REGISTRO
          React.createElement(
            "div",
            { className: "space-y-6" },
            !nuevaFrase
              ? // Paso 1: Generar frase
                React.createElement(
                  "div",
                  { className: "space-y-4" },
                  React.createElement(
                    "div",
                    {
                      className:
                        "bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-700",
                    },
                    "Tu frase de 12 palabras es tu identidad. Guardala en un lugar seguro, nadie puede recuperarla.",
                  ),
                  React.createElement(
                    "button",
                    {
                      onClick: generarFrase,
                      className:
                        "w-full bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition font-medium",
                    },
                    "Generar mi frase",
                  ),
                )
              : // Paso 2: Mostrar frase y confirmar
                React.createElement(
                  "div",
                  { className: "space-y-4" },
                  React.createElement(
                    "div",
                    {
                      className:
                        "bg-yellow-50 border border-yellow-200 rounded-lg p-4",
                    },
                    React.createElement(
                      "p",
                      { className: "font-mono text-sm break-all" },
                      nuevaFrase,
                    ),
                  ),
                  React.createElement(
                    "div",
                    null,
                    React.createElement(
                      "label",
                      {
                        className:
                          "block text-sm font-medium text-gray-700 mb-2",
                      },
                      "Email (opcional)",
                    ),
                    React.createElement("input", {
                      type: "email",
                      value: email,
                      onChange: (e) => setEmail(e.target.value),
                      className:
                        "w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent",
                      placeholder: "tu@email.com",
                    }),
                  ),
                  React.createElement(
                    "button",
                    {
                      onClick: handleRegistro,
                      className:
                        "w-full bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition font-medium",
                    },
                    "Crear mi cuenta",
                  ),
                ),
          ),
    ),
  );
}

export default LoginReal;
