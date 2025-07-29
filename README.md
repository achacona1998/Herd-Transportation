# Herd Transportation

Una aplicación web moderna para la gestión eficiente del transporte y logística.

## Descripción

Herd Transportation es una plataforma integral diseñada para optimizar la logística del transporte y la gestión de flotas. Construida con React y tecnologías web modernas, proporciona una interfaz intuitiva para gestionar vehículos, rutas y entregas.

## Características

- Gestión de flota de vehículos
- Optimización de rutas
- Gestión de conductores
- Programación de viajes
- Área de cobertura
- Testimonios de clientes
- Diseño responsive
- Formulario de contacto integrado con EmailJS

## Tecnologías Utilizadas

- React 19
- Vite 7
- TailwindCSS 4
- React Router DOM 7
- EmailJS para formularios
- Google OAuth 2.0
- Supabase

## Requisitos

- Node.js >= 18.0.0
- PNPM como gestor de paquetes

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/usuario/herd-transportation.git
```

2. Instalar dependencias:

```bash
pnpm install
```

3. Configurar variables de entorno:

```env
VITE_EMAILJS_PUBLIC_KEY=tu_clave
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_GOOGLE_CLIENT_ID=tu_client_id
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_KEY=tu_supabase_key
```

## Ejecución

### Desarrollo

Para ejecutar el proyecto en modo desarrollo:

```bash
pnpm dev
```

Esto iniciará el servidor de desarrollo en `http://localhost:5173`.

### Producción

Para construir el proyecto para producción:

```bash
pnpm build
```

Para previsualizar la versión de producción:

```bash
pnpm preview
```

## Estructura del Proyecto

```
├── public/              # Archivos estáticos
│   ├── img/             # Imágenes
│   └── favicon.svg      # Favicon
├── src/                 # Código fuente
│   ├── assets/          # Recursos (iconos, etc.)
│   ├── components/      # Componentes reutilizables
│   ├── constants/       # Constantes y datos estáticos
│   ├── hooks/           # Custom hooks
│   ├── layouts/         # Layouts de la aplicación
│   ├── pages/           # Páginas principales
│   ├── routes/          # Configuración de rutas
│   ├── sections/        # Secciones de páginas
│   ├── styles/          # Estilos globales
│   ├── utils/           # Utilidades y funciones auxiliares
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Punto de entrada
└── vite.config.js       # Configuración de Vite
```

## Características Principales

### Gestión de Flota

Permite administrar todos los vehículos de la flota, incluyendo:
- Registro y seguimiento de vehículos
- Estado y disponibilidad
- Mantenimiento programado
- Asignación a rutas y conductores

### Optimización de Rutas

Algoritmos avanzados para optimizar rutas considerando:
- Distancia
- Tráfico
- Consumo de combustible
- Tiempos de entrega

### Área de Cobertura

Visualización interactiva de las zonas de servicio con:
- Mapas detallados
- Tiempos estimados
- Costos por zona

### Testimonios

Sección dedicada a mostrar la experiencia de clientes satisfechos.

## Contribución

Si deseas contribuir al proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/amazing-feature`)
3. Realiza tus cambios y haz commit (`git commit -m 'Add some amazing feature'`)
4. Sube tus cambios (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Para cualquier consulta o sugerencia, por favor contacta a través de:
- Email: info@herdtransportation.com
- Web: [www.herdtransportation.com](https://www.herdtransportation.com)

## Agradecimientos

- A todos los contribuidores que han participado en este proyecto
- A la comunidad de React y Vite por su excelente documentación
- A los usuarios que confían en nuestro servicio

