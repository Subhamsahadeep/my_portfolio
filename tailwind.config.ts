import type { Config } from 'tailwindcss';
import { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        backgroundImage: {
          'gradient-text':
            'linear-gradient(45deg, #ff82f3 0%, #7b13ff 50%, #400d64 100%)',
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities(
        {
          '.text-gradient': {
            background:
              'linear-gradient(45deg, #ff82f3 0%, #7b13ff 50%, #400d64 100%)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
          },
        },
        {
          // This is where you provide configuration options
          respectPrefix: false,
          respectImportant: false,
        },
      );
    },
  ],
};
export default config;
