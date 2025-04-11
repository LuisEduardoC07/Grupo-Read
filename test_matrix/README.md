# 🧾 Parte 4: Matriz de Pruebas y Gestión de Defectos

Este repositorio contiene la **Matriz de Pruebas** y el **Reporte de Defectos** identificados durante la evaluación de la aplicación [https://www.saucedemo.com](https://www.saucedemo.com).

---

## ✅ Matriz de Pruebas

Se ha desarrollado una matriz con **20 casos de prueba**, cubriendo aspectos funcionales y no funcionales de la aplicación, en base a criterios como:

- Autenticación
- Navegación
- Filtros de productos
- Manejo del carrito
- Checkout
- Comportamientos no funcionales (UX, rendimiento)

### 📋 Estructura de la Matriz

Cada caso de prueba incluye:

- ID del Caso de Prueba  
- Descripción  
- Área funcional  
- Tipo de prueba  
- Prioridad (Alta, Media, Baja)  
- Complejidad (Alta, Media, Baja)  
- Automatizable (Sí/No)  
- Precondiciones  
- Datos de prueba  
- Pasos detallados  
- Resultado esperado  
- Estado (No ejecutado / En ejecución / Aprobado / Fallido)

> 📁 La matriz completa se encuentra en el archivo `matriz-pruebas.xlsx`.

---

## 🐞 Reporte de Defectos

Durante las pruebas exploratorias de la aplicación, se han identificado **3 defectos** relevantes desde la perspectiva de **experiencia de usuario (UX)**.

### 📌 Detalles del reporte por defecto

Cada defecto incluye:

- **ID único**
- **Título del defecto**
- **Severidad y prioridad** (con justificación)
- **Descripción detallada del comportamiento**
- **Pasos para reproducir el problema**
- **Comportamiento esperado vs actual**
- **Evidencia visual (capturas de pantalla)**
- **Impacto al usuario o negocio**
- **Sugerencia de mejora**

> 📁 Los defectos se encuentran documentados en `defectos-reportados.pdf`.

---

## 📎 Herramientas utilizadas

- **Excel** para la matriz de pruebas
- **Capturas de pantalla** de la interfaz real

---

## 📁 Estructura del repositorio
│ CYPRESS 
   ├── Escenarios 
│── defectos-reportados.pdf 
├── Cypress.config.js 
├── Matriz de pruebas.xlsx 
├── package-lock.json 
└── README.md