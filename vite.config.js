import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/scrimba-learn-react-03-airbnb-experiences-clone/',
	plugins: [react()],
});
