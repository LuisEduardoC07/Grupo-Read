# 🧪 Pruebas Automatizadas de API REST – ReqRes

Este proyecto contiene una suite de pruebas automatizadas para la API pública de [https://reqres.in/](https://reqres.in/), utilizando herramientas que permiten validar funcionalidad, estructura, tiempos de respuesta y manejo de errores.

---

## ✅ Endpoints probados

Se automatizan pruebas para los siguientes endpoints:

- `GET /api/users` → Listado de usuarios
- `GET /api/users/{id}` → Usuario específico
- `POST /api/users` → Creación de usuario
- `PUT /api/users/{id}` → Actualización de usuario
- `DELETE /api/users/{id}` → Eliminación de usuario

---

## 🔍 Validaciones realizadas en cada prueba

Para cada uno de los endpoints, se validan los siguientes aspectos:

- ✅ Códigos de estado HTTP esperados (ej: 200, 201, 204, 404)
- ✅ Estructura de la respuesta (esquema JSON, campos obligatorios, etc.)
- ✅ Tiempos de respuesta razonables (menor a 1000ms)
- ✅ Manejo de casos borde (ej. IDs inexistentes, datos inválidos)

---

## 🔁 Organización del código

- Las pruebas están organizadas por endpoint, con nombres descriptivos.
- Se implementaron funciones reutilizables para enviar peticiones y validar respuestas.
- Se documentan los **asertos realizados** dentro de cada prueba.

---

## 🛠 Herramienta utilizada

Se puede utilizar cualquiera de las siguientes herramientas para esta implementación:

- **Postman** (recomendado con colecciones y tests en JavaScript)
- **RestAssured** (Java)
- **SuperTest** (Node.js)
- **Cypress (API testing)**
- **Jest + Axios** (JavaScript)

---

## 📝 Ejemplo de asertos en Postman

```javascript
pm.test("Código de estado es 200", function () {
    pm.response.to.have.status(200);
});

pm.test("La respuesta contiene el campo 'data'", function () {
    const jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("data");
});