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
			'@pages': path.resolve('./src/pages'),
			'@services': path.resolve('./src/services')
		}
	}
});
