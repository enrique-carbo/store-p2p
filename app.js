// app.js
/** @typedef {import('pear-interface')} */
/* global Pear, document */

import React from "react";
import ReactDOM from "react-dom/client";
import updates from "pear-updates";
import wakeups from "pear-wakeups";
import Layout from "./components/Layout.js";
import Dashboard from "./components/Dashboard.js";
import Productos from "./components/Productos.js";
import Login from "./components/Login.js";

function App() {
  const [vista, setVista] = React.useState("dashboard");
  const [logueado, setLogueado] = React.useState(false);
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

  const handleLogin = (credenciales) => {
    // Mock login (después implementaremos el real)
    console.log("Login con:", credenciales);
    setLogueado(true);
  };

  if (!logueado) {
    return React.createElement(Login, { onLogin: handleLogin });
  }

  let contenido;
  if (vista === "dashboard") contenido = React.createElement(Dashboard);
  else if (vista === "productos") contenido = React.createElement(Productos);
  else contenido = React.createElement(Dashboard);

  return React.createElement(
    Layout,
    { titulo: vista === "dashboard" ? "Dashboard" : "Productos" },
    contenido,
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));

updates((update) => {
  console.log("update available:", update);
});

wakeups(async (wakeup) => {
  console.log("GOT WAKEUP", wakeup);
});
