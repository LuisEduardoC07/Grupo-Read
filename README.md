Prueba Técnica - QA Software
Descripción del Proyecto
Este proyecto es parte del proceso de selección para la posición de Especialista y Analista de QA de Software. Consiste en un ejercicio práctico que simula un escenario real de pruebas para una aplicación web. El objetivo es demostrar habilidades en automatización de pruebas, diseño de estrategias de QA, y documentación profesional.

La solución se divide en cuatro partes principales:

Automatización con Cypress.

Automatización con Selenium WebDriver.

Pruebas de API REST.

Creación de una Matriz de Pruebas y un Informe de Defectos.

Estructura del Repositorio
text
├── cypress/                  # Proyecto Cypress
│   ├── fixtures/             # Datos dinámicos (faker.js)
│   ├── integration/          # Casos de prueba automatizados
│   ├── plugins/              # Configuración adicional
│   └── support/              # Comandos personalizados y POM
├── selenium/                 # Proyecto Selenium WebDriver
│   ├── src/
│   │   ├── main/
│   │   │   └── java/         # Clases POM y utilidades
│   │   └── test/
│   │       └── java/         # Casos de prueba automatizados
├── api-tests/                # Pruebas API REST
│   ├── tests/                # Casos para endpoints (GET, POST, etc.)
│   └── utils/                # Métodos reutilizables
├── test-matrix.xlsx          # Matriz de pruebas
├── defect-report.docx        # Informe de defectos
└── README.md                 # Documentación principal


Parte 1: Automatización con Cypress

Características Implementadas:
Configuración inicial del proyecto desde cero.

Uso del patrón Page Object Model (POM).

Flujos automatizados:

Login (éxitos y fallos).

Navegación y filtrado del catálogo.

Agregar productos al carrito.

Proceso completo de checkout.

Logout.

Comandos personalizados:

login(username, password) para reutilizar el flujo de autenticación.

addProductToCart(productName) para agregar productos al carrito.

Datos dinámicos generados con faker.js.

Reportes visuales configurados con Cypress Mochawesome Reporter.

Instrucciones para Ejecutar:
Clonar el repositorio:

bash
git clone <repositorio>
cd cypress/
Instalar dependencias:

bash
npm install
Ejecutar pruebas en modo interactivo:

bash
npx cypress open
Generar reporte visual:

bash
npx cypress run --reporter mochawesome



Parte 3: Pruebas de API REST

Características Implementadas:

Framework utilizado: RestAssured (Java).

Endpoints probados en Reqres:

GET /api/users

GET /api/users/{id}

POST /api/users

PUT /api/users/{id}

DELETE /api/users/{id}

Validaciones realizadas:

Códigos HTTP esperados (200, 201, 404, etc.).

Estructura y esquema JSON mediante aserciones.

Tiempos máximos de respuesta (<500ms).

Casos borde (IDs inexistentes, datos inválidos).

Código modular para reusabilidad.

Instrucciones para Ejecutar:
Clonar el repositorio:

bash
git clone <repositorio>
cd api-tests/
Ejecutar las pruebas con Maven:

bash
mvn test



Parte 4: Matriz de Pruebas y Gestión de Defectos

Matriz de Pruebas:

El archivo test-matrix.xlsx incluye una matriz detallada con al menos 20 casos de prueba, cubriendo aspectos funcionales y no funcionales del sitio SauceDemo. Los campos incluyen:

ID Caso de Prueba

Descripción

Área Funcional

Tipo de Prueba

Prioridad

Complejidad

Automatizable (S/N)

Precondiciones

Datos de Prueba

Pasos

Resultado Esperado

Informe de Defectos:
El archivo defect-report.docx documenta tres defectos identificados en SauceDemo, incluyendo:

ID único y título descriptivo.

Severidad y prioridad justificadas.

Pasos detallados para reproducir el defecto.

Evidencia visual (capturas).

Impacto en usuario/negocio y sugerencias.

Decisiones Técnicas Clave
Uso del patrón POM en Cypress y Selenium para mejorar la mantenibilidad del código.

Generación dinámica de datos con faker.js para evitar dependencias estáticas.

Configuración explícita de esperas en Selenium para evitar fallos intermitentes.

Modularización del código API para facilitar la extensión futura.

Requisitos Previos
Antes de ejecutar cualquiera de las partes, asegúrate de tener instalados los siguientes requisitos:

Node.js v14+ (para Cypress).

Java JDK v11+ (para Selenium).

Maven v3+ (para Selenium y API tests).

Allure CLI (para reportes).