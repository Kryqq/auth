import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'


export default defineConfig({
  plugins: [react()],
  resolve: {
	alias: {
	  '@': path.resolve(__dirname, './src'),
	  '@api': path.resolve(__dirname, './src/shared/api'),
	  '@components': path.resolve(__dirname, './src/shared/components'),
	  '@hooks': path.resolve(__dirname, './src/shared/hooks'),
	  '@types': path.resolve(__dirname, './src/shared/types'),
		}
  	}
  }
)
