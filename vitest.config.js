import { defineConfig } from 'vitest/conmfig';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        setupFiles: './src/setupTest.js',
        global: true
    }
});