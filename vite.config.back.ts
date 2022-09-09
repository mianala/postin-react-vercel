import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import EnvironmentPlugin from "vite-plugin-environment"
import basicSsl from "@vitejs/plugin-basic-ssl"
// import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  // plugins: [react(), basicSsl(), EnvironmentPlugin(["ANON_KEY", "API_URL"])],
  plugins: [react(), basicSsl(), EnvironmentPlugin(["ANON_KEY", "API_URL"])],
})