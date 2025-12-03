# Blog con Astro

Proyecto de blog moderno desarrollado con Astro 5, que implementa un sistema completo de gestión de contenido con colecciones tipadas, paginación, RSS y soporte para múltiples autores.

## Características Principales

### Sistema de Contenido

- **Content Collections**: Utiliza el sistema de colecciones de Astro con esquemas tipados mediante Zod
- **Dos colecciones principales**:
  - `blog`: Posts en formato Markdown/MDX con frontmatter estructurado
  - `author`: Datos de autores en formato YAML con información de perfil

### Funcionalidades del Blog

- **Posts dinámicos**: Renderizado de posts individuales con rutas dinámicas (`/posts/[slug]`)
- **Paginación**: Sistema de paginación implementado con 2 posts por página (`/blog/[page]`)
- **Filtrado por autor**: Páginas dedicadas que muestran todos los posts de un autor específico (`/blog/[author]`)
- **Tabla de contenidos**: Generación automática de índice basado en los headings del post
- **Borradores**: Sistema de posts en borrador con flag `isDraft`
- **Feed RSS**: Endpoint RSS en `/rss.xml` para suscripciones

### Autores

- **Perfiles completos**: Cada autor tiene avatar, biografía, redes sociales (Twitter, LinkedIn, GitHub)
- **Relaciones**: Los posts están vinculados a autores mediante referencias tipadas
- **Página de autores**: Listado de todos los autores con tarjetas de presentación

### Tecnologías

**Core:**

- Astro 5.16.0
- TypeScript
- MDX (@astrojs/mdx)

**Estilos:**

- Tailwind CSS 4.1.17
- CSS personalizado para posts

**Características de Astro:**

- View Transitions (ClientRouter)
- Image optimization (astro:assets)
- Content Collections con validación Zod
- Static Site Generation (SSG)

## Estructura del Proyecto

blog/
├── src/
│ ├── assets/ # Recursos estáticos
│ ├── components/ # Componentes reutilizables
│ │ ├── AuthorCard.astro
│ │ ├── BlogPost.astro
│ │ └── TypeBlogPost.astro
│ ├── config/ # Configuración del sitio
│ │ └── site-config.ts
│ ├── content/ # Colecciones de contenido
│ │ ├── author/ # Datos de autores (YAML)
│ │ ├── blog/ # Posts del blog (MD/MDX)
│ │ └── config.ts # Esquemas de colecciones
│ ├── layouts/ # Layouts de página
│ │ ├── BlogLayout.astro
│ │ └── MainLayout.astro
│ ├── pages/ # Rutas de la aplicación
│ │ ├── authors/ # Listado de autores
│ │ ├── blog/ # Blog paginado y por autor
│ │ ├── posts/ # Posts individuales
│ │ ├── index.astro # Página principal
│ │ └── rss.xml.ts # Feed RSS
│ ├── styles/ # Estilos globales
│ └── utils/ # Utilidades
│ └── formatter.ts # Formateo de fechas
├── public/ # Archivos públicos
├── astro.config.mjs # Configuración de Astro
├── package.json
└── tsconfig.json

## Esquema de Datos

### Blog Post

```typescript
{
  title: string
  date: Date
  description: string
  image: ImageFunction
  author: Reference<'author'>
  tags: string[]
  isDraft: boolean
}