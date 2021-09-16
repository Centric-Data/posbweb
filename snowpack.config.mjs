import { listen_dev } from "svelte/internal";

// snowpack.config.mjs
export default {
    mount: {
      /* ... */
      public: '/',
      src: '/dist',
    },
    plugins: [
     '@snowpack/plugin-svelte',
     '@snowpack/plugin-sass',
    ],
  };
