import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "four-t7",
    project: "iphone-gsap-threejs"
  }), sentryVitePlugin({
    org: "four-t7",
    project: "iphone-gsap-threejs"
  })],

  build: {
    sourcemap: true
  }
})