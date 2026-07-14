import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notas' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    seccion: z.enum(['investigacion', 'nacional', 'ciudad', 'datos']),
    subtema: z.string().optional(),
    autor: z.string().default('Redacción'),
    fecha: z.coerce.date(),
    lectura: z.string().default('6 min'),
    // aparece como nota principal de portada
    portada: z.boolean().default(false),
    // aparece como nota principal de su sección
    destacada: z.boolean().default(false),
  }),
});

const columnas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/columnas' }),
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    autor: z.string().default('Mateo · Tu Nombre'),
    fecha: z.coerce.date(),
    edicion: z.string().optional(),
  }),
});

const voces = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/voces' }),
  schema: z.object({
    title: z.string(),
    autor: z.string(),
    credencial: z.string(),
    dek: z.string(),
    // día del rol semanal (deja vacío si solo va en la parrilla de academia)
    dia: z.enum(['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']).optional(),
    fecha: z.coerce.date(),
  }),
});

export const collections = { notas, columnas, voces };
