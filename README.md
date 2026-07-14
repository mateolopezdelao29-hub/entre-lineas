# Entre Líneas — proyecto Astro + editor no-code

Tu sitio, listo para publicar y crecer sin tocar código.

## Qué es esto

- **Astro** genera el sitio estático (rapidísimo, gratis de hospedar).
- **Sveltia CMS** es el editor visual: entras a `/admin`, escribes tus notas y tu columna en una interfaz bonita —sin tocar código—, y se guardan como archivos Markdown en tu repositorio.
- Todas las páginas ya están construidas con tu diseño: portada, secciones, notas, columnas, opinión, datos y quiénes somos.

## Cómo correrlo en tu compu

Necesitas Node.js 18+ instalado.

```bash
npm install
npm run dev       # abre http://localhost:4321
```

Editas contenido en `src/content/` (notas, columnas, voces). Al guardar, la página se recarga sola.

## Para publicar en la web (gratis)

1. **Sube el proyecto a GitHub** (crea un repo `entre-lineas`).
2. **Cloudflare Pages** (o Netlify): conecta el repo. Comando de build: `npm run build`. Carpeta de salida: `dist`.
3. **Dominio**: apunta `entrelineas.mx` (o el que compres) a Cloudflare.

Cada vez que guardes un cambio en `main`, el sitio se reconstruye y publica **automáticamente**. Ese es el "actualiza diario" — no un cron mágico, sino que tú (o tus colaboradores) publican y el sitio se redespliega en segundos.

## Cómo funciona el panel de edición (`/admin`)

1. Edita `public/admin/config.yml`: cambia `TU-USUARIO/entre-lineas` por tu repo real de GitHub.
2. Para que Sveltia pueda escribir a GitHub, necesitas un pequeño autenticador OAuth. La forma **gratis** recomendada es un Cloudflare Worker; guía paso a paso: https://github.com/sveltia/sveltia-cms-auth
3. Abre `tudominio.com/admin`, entra con GitHub, y a escribir.

Mientras tanto, si quieres probar el editor **en tu compu**, en `config.yml` descomenta la línea `local_backend: true` y corre en otra terminal:

```bash
npx @sveltia/cms-proxy-server
```

## Estructura del proyecto

```
src/
  content/
    notas/          ← todas las notas (Investigación, Ciudad, Nacional, Datos)
    columnas/       ← tu columna semanal
    voces/          ← columnistas académicos (Opinión)
  content.config.ts ← esquema de contenido (qué campos tiene cada tipo)
  pages/            ← rutas del sitio
  layouts/          ← BaseLayout compartido
  components/       ← Header, Footer, NotaCard, SectionPage
  styles/global.css ← tu diseño consolidado
  lib/fechas.ts     ← helpers de fecha en español
public/
  admin/            ← Sveltia CMS (editor no-code)
```

## Cómo publicar una nota

Desde el editor: entra a `/admin` → **Notas** → **Nueva**. Llenas titular, sumario, sección, autor, y el cuerpo con Markdown. Guardas → aparece en el sitio en segundos.

O escribiendo directo un archivo `.md` en `src/content/notas/` con este frontmatter:

```md
---
title: "Titular de la nota"
dek: "Sumario que aparece bajo el titular."
seccion: "ciudad"           # investigacion | nacional | ciudad | datos
subtema: "Movilidad"
autor: "Redacción"
fecha: 2026-07-13
lectura: "8 min"
portada: false              # true = nota principal de portada
destacada: false            # true = nota principal de su sección
---

Aquí va el cuerpo en Markdown.
```

## Cómo publicar tu columna

Igual, pero en `src/content/columnas/`. Tu columna más reciente sale automáticamente destacada en la página `/columna/` y como tu firma del jueves en el rol diario de Opinión.

## Notas honestas

- Este sitio es **estático**: rapidísimo, seguro, gratis. Pero para *newsletter* y *pagos de suscripción* hay que sumar piezas después (Buttondown, Ghost embed, o migrar a Ghost si te vuelves grande).
- Sveltia CMS está en beta (v1.0 llega a finales de 2026). Es usable y estable; nada más para que lo sepas.
- Los placeholders de foto son bloques tintados a propósito. Cuando subas fotos reales en `public/assets/`, el diseño levanta muchísimo.
