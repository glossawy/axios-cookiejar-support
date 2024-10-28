import { configs as sharedConfigs } from '@3846masa/configs/eslint/config.mjs';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('typescript-eslint').Config} */
export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ['dist/**'],
  },
  ...sharedConfigs,
  {
    files: ['examples/**/*'],
    rules: {
      'import/order': [
        'error',
        {
          pathGroups: [
            {
              group: 'external',
              pattern: 'axios-cookiejar-support',
            },
          ],
        },
      ],
    },
  },
);
