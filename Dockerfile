# Dockerfile para servir la página con Nginx
FROM nginx:alpine
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./estilo.css /usr/share/nginx/html/estilo.css
COPY ./nebula-bg.js /usr/share/nginx/html/nebula-bg.js
COPY ./index.test.js /usr/share/nginx/html/index.test.js
COPY ./assets /usr/share/nginx/html/assets
# FontAwesome y Three.js se cargan por CDN
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
