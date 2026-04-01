#!/bin/sh
set -e

# Inyecta la variable de entorno en el config.json antes de arrancar nginx
cat > /usr/share/nginx/html/assets/config.json <<EOF
{
    "backendUrl": "${BACKEND_URL}"
}
EOF

exec nginx -g "daemon off;"