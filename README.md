# API REST con Express y Middleware Propio

## Descripción del proyecto
Aplicación backend desarrollada con **Node.js** y **Express** diseñada para la recepción, análisis y validación de solicitudes de registro, implementando un middleware personalizado de registro de trazabilidad y un manejo estricto de códigos de estado HTTP.

---

## Explicación del código (`app.js`)
El archivo principal configura un servidor web modular y limpio:
1. **Analizador JSON (`express.json()`):** Permite procesar de manera automática los datos entrantes en formato JSON enviados en el cuerpo (`req.body`) de las peticiones POST.
2. **Middleware Propio (Logger):** Intercepta cada solicitud entrante para registrar en la consola del servidor el método HTTP (`GET`, `POST`, etc.) y la ruta exacta consultada en tiempo real, cediendo el control mediante `next()`.
3. **Controladores de ruta (`/inicio`, `/informacion`, `/solicitudes`):** Gestionan las respuestas en formato JSON aplicando validaciones de estructura y semántica de errores.
4. **Manejo de rutas no encontradas (404):** Captura cualquier endpoint inexistente para retornar una respuesta estándar en formato JSON.

---

## Breve explicación del middleware
Un **middleware** es una función intermedia que se ejecuta en el ciclo de vida de la petición HTTP, ubicándose entre la recepción de la solicitud del cliente y la respuesta del servidor. En este proyecto utilizamos:
- Un **middleware global de análisis** para descifrar cuerpos JSON.
- Un **middleware personalizado de auditoría** que imprime la traza de la petición y utiliza `next()` para evitar que el servidor se quede bloqueado (*hanging*).

---

## Instrucciones de instalación y ejecución

1. Clona este repositorio de forma libre:
   ```bash
   git clone [https://github.com/Karenniheidy/construccion-y-documentaci-n-de-una-API-con-Express-.git](https://github.com/Karenniheidy/construccion-y-documentaci-n-de-una-API-con-Express-.git)