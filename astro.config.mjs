// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Agregamos el "output: 'server'," lo que hará esto es crear un servidor que solo se activara 
  // cuando lo necesite y así lo que sea estático seguirá estático pero lo que se necesite ejecutar
  // en un servidor se ejecutará en un servidor.
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
    // Workaround para un bug de @astrojs/vercel 11.0.13: su entrypoint importa constantes de
    // "../index.js" y eso deja en el bundle del servidor un `import "rolldown"` que solo se usa
    // en el build. En Vercel la función falla porque no encuentra el binario nativo de rolldown.
    // Le decimos al bundler que esos paquetes no tienen efectos secundarios para que los elimine.
    build: {
      rolldownOptions: {
        treeshake: {
          moduleSideEffects: (id, external) =>
            external && ['rolldown', '@vercel/routing-utils'].includes(id) ? false : undefined
        }
      }
    }
  },

  env: {
    schema: {
      SHOW_BUY_BUTTON: envField.boolean({ default:true, context: 'server', access: 'public' }),
      SCORE_API_ENDPOINT: envField.string({ context:'server', access:'public' }),
    }
  },

  adapter: vercel()
});