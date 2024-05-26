import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // Use the static adapter
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
    }),
    // Optional: Define your base path if you need one
    // paths: {
    //   base: '/your-repo-name',
    // },
  },
}

export default config
