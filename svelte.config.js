// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-netlify';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
		edge: false,
		split: false
	  })
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;