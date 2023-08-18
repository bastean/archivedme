import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import path from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@src': path.resolve('./src'),
			'@components': path.resolve('./src/components'),
			'@layouts': path.resolve('./src/layouts'),
			'@libs': path.resolve('./src/libs'),
			'@pages': path.resolve('./src/pages'),
			'@services': path.resolve('./src/services'),
			'@stores': path.resolve('./src/stores'),
			'@utils': path.resolve('./src/utils'),
			'@validations': path.resolve('./src/validations')
		}
	}
});
