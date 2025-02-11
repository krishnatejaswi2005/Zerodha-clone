import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		hmr: {
			overlay: false, // Disables the error overlay
		},
		allowedHosts: ["6fe8-103-161-31-178.ngrok-free.app"], // Add your host here
	},
});
