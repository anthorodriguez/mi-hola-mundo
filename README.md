# Hola Mundo para DevOps- Anthony A. Rodriguez 🚀

Proyecto final DevOps CI/CD: Página web profesional "Hola Mundo" con fondo animado de nebulosa, íconos de programación y despliegue automático usando Docker, Nginx y GitHub Actions.

## Características
- **Página HTML profesional** con fondo animado tipo nebulosa (Three.js) y varios íconos de programación (FontAwesome).
- **Prueba unitaria** en JavaScript (`index.test.js`) usando Jest + jsdom.
- **Dockerfile** para servir la página con Nginx.
- **CI/CD con GitHub Actions**: corre pruebas y publica automáticamente en GitHub Pages.

## Vista previa
[¡Mira la página en vivo aquí!](https://anthorodriguez.github.io/mi-hola-mundo/)

---

## Estructura del proyecto
```
├── index.html          # Página principal
├── estilo.css          # Estilos profesionales
├── nebula-bg.js        # Fondo animado de nebulosa (Three.js)
├── index.test.js       # Prueba unitaria
├── Dockerfile          # Servidor Nginx para Docker
├── .github/workflows/ci.yml # CI/CD con GitHub Actions
└── README.md           # Este archivo
```

---

## Uso local con Docker

1. Construye la imagen:
   ```sh
   docker build -t mi-pagina-nginx .
   ```
2. Corre el contenedor:
   ```sh
   docker run -d -p 8080:80 mi-pagina-nginx
   ```
3. Abre [http://localhost:8080](http://localhost:8080)

---

## Pruebas unitarias

1. Instala dependencias:
   ```sh
   npm install jest jsdom
   ```
2. Ejecuta las pruebas:
   ```sh
   npx jest index.test.js
   ```

---

## CI/CD
- Cada push a `main` ejecuta pruebas y publica automáticamente la web en GitHub Pages (`gh-pages`).
- Configura GitHub Pages para usar la rama `gh-pages`.

---

## Créditos
- Fondo de nebulosa generado con [Three.js](https://threejs.org/)
- Íconos de programación: [FontAwesome](https://fontawesome.com/)

---

¡Hecho con ❤️ para la práctica final de DevOps CI/CD!
