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
import LoginReal from "./components/LoginReal.js";

function App() {
  const [vista, setVista] = React.useState("dashboard");
  const [usuario, setUsuario] = React.useState(null);
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

  const handleLogin = (datos) => {
    // En producción, aquí derivaríamos la clave pública/privada
    console.log("Usuario autenticado:", datos);
    setUsuario({
      id: datos.frase.slice(0, 8), // Esto después será la clave pública
      email: datos.email || "anon@local",
      frase: datos.frase,
    });
  };

  const handleLogout = () => {
    setUsuario(null);
  };

  if (!usuario) {
    return React.createElement(LoginReal, { onLogin: handleLogin });
  }

  let contenido;
  if (vista === "dashboard") contenido = React.createElement(Dashboard);
  else if (vista === "productos") contenido = React.createElement(Productos);
  else contenido = React.createElement(Dashboard);

  return React.createElement(
    Layout,
    {
      titulo: vista === "dashboard" ? "Dashboard" : "Productos",
      usuario: usuario,
      onLogout: handleLogout,
      onNavigate: setVista,
    },
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
