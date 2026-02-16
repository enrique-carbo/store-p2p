# Store P2P 🛍️

**Plataforma de e-commerce descentralizada peer-to-peer.**  
Dueños de tiendas y clientes se conectan directamente. **Sin servidores, sin comisiones.**

## ✨ Características

- 🔐 **Identidad con 12 palabras** (frase semilla BIP39) - *Vos sos tus datos*
- 🏪 **Catálogo de productos** con fotos, precios y stock
- 👥 **Roles**: Admin / Vendedor / Cliente
- 🛒 **Carrito de compras** y checkout
- 📦 **Pedidos** con historial y estados (pendiente, enviado, entregado)
- 💬 **Chat P2P** entre vendedor y cliente por cada pedido
- 🔔 **Notificaciones** en tiempo real (sin emails, sin push externo)
- 📊 **Dashboard** para vendedor: gestión de productos y pedidos
- 👤 **Dashboard** para cliente: perfil, direcciones, pedidos anteriores
- 🚫 **Cero servidores, cero nube, cero intermediarios** - *Todo directo entre pares*

## 🌐 Filosofía

Este proyecto **no usa ningún servidor central**. Ni para autenticación, ni para base de datos, ni para archivos, ni para chat, ni para notificaciones. Todo funciona mediante comunicación directa entre las aplicaciones de los usuarios usando la red P2P de Holepunch.

## 🛠️ Stack Tecnológico

| Capa | Tecnología | Función |
|------|------------|---------|
| **Runtime** | [Pear](https://pears.com) (Holepunch) | Ejecuta apps P2P en escritorio/móvil |
| **UI** | React 19 + JavaScript (JSX) | Interfaz de usuario |
| **Estilos** | Tailwind CSS | Diseño responsive |
| **Red P2P** | Hyperswarm + HyperDHT | Descubrimiento y conexión entre pares |
| **Base de datos** | Hypercore | Logs inmutables (pedidos, chat) |
| **Índices** | Hyperbee | Búsquedas rápidas (usuarios, productos) |
| **Archivos** | Hyperdrive | Fotos de productos, documentos |
| **Identidad** | BIP39 + ed25519 | Claves criptográficas, no "usuario/contraseña" |
| **Comunicación** | Streams P2P | Chat en tiempo real |

## 📦 Dependencias Principales

```json
{
  "dependencies": {
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "pear-electron": "^1.7.28",
    "pear-bridge": "^1.2.5",
    "pear-updates": "^1.0.1",
    "pear-wakeups": "^1.0.0",
    "hypercore": "^10.0.0",
    "hyperdrive": "^11.0.0",
    "hyperbee": "^2.0.0",
    "hyperswarm": "^4.0.0",
    "bip39": "^3.1.0",
    "ed25519": "^0.0.5"
  },
  "devDependencies": {
    "tailwindcss": "^4.1.18",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

## 📥 Instalación

```bash
# Clonar repositorio
git clone <tu-repo>
cd store-p2p

# Instalar dependencias
npm install

# Configurar Tailwind (primera vez)
npx tailwindcss init -p

# Modo desarrollo (con recarga de CSS)
npm run dev

# Compilar para producción
npm run build-app

# Ejecutar en Pear (escritorio)
npm run pear
```

## 🚀 Uso Básico

### Para el dueño de la tienda (admin/vendedor)
1. **Crear identidad**: Generar frase de 12 palabras (guardar en papel, lugar seguro)
2. **Configurar tienda**: Nombre, rubro (indumentaria, electrónica, genérico)
3. **Cargar productos**: Fotos, precios, talles/colores según rubro
4. **Compartir clave pública** con clientes (o generar QR)
5. **Dejar la PC encendida** haciendo seed para que el catálogo esté disponible

### Para el cliente
1. **Crear identidad** (o usar existente)
2. **Ingresar clave de la tienda** (escaneo QR o manual)
3. **Ver catálogo** (se sincroniza P2P directamente con la tienda u otros clientes)
4. **Agregar productos al carrito**
5. **Checkout** con dirección y método de pago
6. **Chatear con el vendedor** sobre el pedido (chat P2P directo)

## 🏗️ Estructura del Proyecto

```
store-p2p/
│
├── 📄 package.json           # Configuración y dependencias
├── 📄 index.js                # Proceso principal Pear (backend P2P)
├── 📄 app.js                  # UI React (entrypoint)
├── 📄 index.html              # HTML principal
│
├── 📁 core/                    # Lógica P2P (sin servidores)
│   ├── 📄 catalogo.js         # Hyperdrive para productos
│   ├── 📄 pedidos.js          # Hypercore para pedidos
│   ├── 📄 clientes.js         # Hyperbee para perfiles
│   ├── 📄 chat.js             # Chat P2P por pedido
│   └── 📄 notificaciones.js   # Buzón P2P (Hypercore)
│
├── 📁 components/              # UI con React + Tailwind
│   ├── 📁 admin/               # Vistas para vendedor
│   │   ├── DashboardAdmin.jsx
│   │   ├── GestionProductos.jsx
│   │   └── GestionPedidos.jsx
│   ├── 📁 cliente/             # Vistas para cliente
│   │   ├── DashboardCliente.jsx
│   │   ├── Catalogo.jsx
│   │   ├── Checkout.jsx
│   │   ├── MisPedidos.jsx
│   │   └── ChatVendedor.jsx
│   └── 📁 common/               # Componentes compartidos
│       ├── Login.jsx
│       ├── Navbar.jsx
│       └── Notificaciones.jsx
│
├── 📁 config/                   # Configuración
│   ├── 📄 schemas.js           # Schemas por rubro
│   └── 📄 roles.js             # Permisos por rol
│
├── 📁 styles/                   # Tailwind CSS
│   ├── 📄 input.css
│   └── 📄 output.css           # Generado
│
└── 📁 test/                     # Tests
```

## 🔄 Cómo funciona (sin servidores)

### Descubrimiento de peers
```
Cliente abre app → Hyperswarm busca el topic "tienda:mi-local"
                 → Encuentra la PC del vendedor (o clientes con caché)
                 → Conexión directa (atravesando NATs si es necesario)
```

### Catálogo de productos
```
Vendedor: guarda productos en Hyperdrive local
Cliente: se conecta al Hyperdrive del vendedor
       → Lee el catálogo directamente
       → Las fotos viajan P2P, no desde un servidor
```

### Pedido
```
Cliente: genera pedido → lo guarda en su Hypercore local
                       → replica en el Hypercore del vendedor
Vendedor: recibe notificación (su app ve el nuevo dato)
        → todo sin que un servidor intermedio vea el pedido
```

### Chat
```
Por cada pedido se crea un topic único
Vendedor y cliente se conectan a ese topic
Los mensajes viajan directo (streams encriptados)
Quedan guardados en un Hypercore (historial inmutable)
```

### Notificaciones
```
Cada usuario tiene su propio Hypercore como "buzón"
Cuando alguien quiere notificarte, escribe en tu buzón
Tu app, al sincronizar, ve las nuevas notificaciones
```

## 📁 Estructura de Datos P2P

```
Hyperdrive (Catálogo)
├── /productos/
│   ├── prod_123.json  { nombre, precio, stock, talle, color }
│   └── prod_456.json
└── /imagenes/
    ├── prod_123.jpg
    └── prod_456.jpg

Hypercore (Pedidos)
[pedido_1, pedido_2, pedido_3, ...]  # Append-only log

Hyperbee (Usuarios)
{
  "user:cliente1": { id, nombre, direcciones, pedidos },
  "user:vendedor": { id, nombre, rol, productos }
}

Hypercore (Chat pedido_123)
[mensaje1, mensaje2, mensaje3, ...]  # Historial del chat
```

## 📱 Capturas (próximamente)

*Aquí van screenshots de las diferentes vistas*

## 🧪 Estado del Proyecto

✅ **Fase 1:** Base funcional (adaptada de Health P2P)  
🔄 **Fase 2:** En desarrollo - Core P2P de tienda  
⏳ **Fase 3:** Chat y notificaciones  
⏳ **Fase 4:** UI completa con Tailwind  
⏳ **Fase 5:** Testing y documentación  

## 🤝 Contribuir

El proyecto está en activo desarrollo. Áreas para contribuir:

- Implementación de más rubros (schemas personalizados)
- Mejoras en UI/UX
- Tests de replicación P2P
- Documentación y ejemplos
- Traducciones

## 📄 Licencia

Apache-2.0

## 🙌 Agradecimientos

- [Holepunch](https://holepunch.to) por Pear Runtime
- La comunidad Hypercore Protocol
- Todos los que creen en un internet más descentralizado

## ⚠️ Advertencia

Este es un proyecto **educativo y experimental**. Para uso en producción real con transacciones de dinero, se recomienda:
- Auditoría de seguridad
- Múltiples peers de respaldo
- Pruebas exhaustivas
- Asesoramiento legal (cada país tiene sus regulaciones)

---

**¿Sin servidores? Sí, 100% P2P.**  
Hecho con 💚 para dueños de tiendas que quieren ser dueños de sus datos.

---
