# React + Appwrite Authentication

Este proyecto es una aplicación de demostración que implementa un sistema de autenticación completo utilizando **React** y **Appwrite**. Incluye funcionalidades de registro, inicio de sesión y gestión de sesión de usuario con un diseño personalizado en negro y amarillo.

## Características

*   **Registro de Usuarios**: Creación de nuevas cuentas de usuario.
*   **Inicio de Sesión**: Autenticación mediante correo electrónico y contraseña.
*   **Gestión de Sesión**: Persistencia de la sesión del usuario.
*   **Perfil de Usuario**: Visualización de datos del usuario autenticado y botón de cierre de sesión.
*   **Protección de Rutas**: Renderizado condicional basado en el estado de autenticación.
*   **Diseño Personalizado**: Tema oscuro (Negro/Amarillo).

## Tecnologías Utilizadas

*   [React](https://react.dev/)
*   [Appwrite](https://appwrite.io/) (Auth & SDK)
*   [React Router](https://reactrouter.com/)
*   [Vite](https://vitejs.dev/)

## Requisitos Previos

1.  Node.js instalado.
2.  Una cuenta en Appwrite Cloud o una instancia local.

## Configuración e Instalación

1.  **Clona el repositorio:**

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd appwrite-auth
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    ```

3.  **Configura Appwrite (Panel de Control):**

    *   Crea un nuevo proyecto.
    *   Ve a **Authentication** -> **Settings** y habilita **Email/Password**.
    *   Ve a **Overview** -> **Platforms** -> **Add Platform** -> **Web App**.
    *   Configura el hostname como `localhost` (para desarrollo local).

4.  **Configura el Proyecto (Código):**

    Edita el archivo `src/config/appwrite.js` o crea un archivo `.env` en la raíz del proyecto con tus credenciales:

    ```javascript
    // src/config/appwrite.js
    client
        .setEndpoint('https://cloud.appwrite.io/v1') // Tu Endpoint
        .setProject('TU_PROJECT_ID'); // Tu Project ID
    ```

5.  **Ejecuta la aplicación:**

    ```bash
    npm run dev
    ```

## Solución de Problemas

*   **Error "Network Request Failed" o CORS**:
    Este es el error más común. Asegúrate de haber agregado `localhost` en la sección **Platforms** de tu proyecto en Appwrite.

*   **Error "Invalid Project ID"**:
    Verifica que el ID en `src/config/appwrite.js` coincida exactamente con el de tu consola.

## Licencia

Este proyecto está bajo la Licencia MIT.