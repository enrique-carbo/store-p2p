// components/Login.js
import React, { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return React.createElement(
    "div",
    { className: "min-h-[80vh] flex items-center justify-center" },
    React.createElement(
      "div",
      { className: "bg-white rounded-2xl shadow-xl p-8 w-full max-w-md" },
      React.createElement(
        "div",
        { className: "text-center mb-8" },
        React.createElement("div", { className: "text-6xl mb-4" }, "🛍️"),
        React.createElement(
          "h2",
          { className: "text-2xl font-bold text-gray-800" },
          "Store P2P",
        ),
        React.createElement(
          "p",
          { className: "text-gray-500 mt-2" },
          "Ingresá a tu tienda descentralizada",
        ),
      ),
      React.createElement(
        "form",
        { onSubmit: handleSubmit, className: "space-y-6" },
        React.createElement(
          "div",
          null,
          React.createElement(
            "label",
            { className: "block text-sm font-medium text-gray-700 mb-2" },
            "Email",
          ),
          React.createElement("input", {
            type: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            className:
              "w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent",
            placeholder: "tienda@ejemplo.com",
            required: true,
          }),
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "label",
            { className: "block text-sm font-medium text-gray-700 mb-2" },
            "Contraseña",
          ),
          React.createElement("input", {
            type: "password",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            className:
              "w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent",
            placeholder: "••••••••",
            required: true,
          }),
        ),
        React.createElement(
          "button",
          {
            type: "submit",
            className:
              "w-full bg-primary text-white py-3 rounded-lg hover:bg-opacity-90 transition font-medium",
          },
          "Ingresar",
        ),
      ),
      React.createElement(
        "p",
        { className: "text-center text-sm text-gray-500 mt-6" },
        "Demo: admin@tienda.local / admin123",
      ),
    ),
  );
}

export default Login;
