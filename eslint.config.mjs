import { configs as sharedConfigs } from '@3846masa/configs/eslint/config.mjs';
import tslint from 'typescript-eslint';

/** @type {import('typescript-eslint').Config} */
export default tslint.config(
  {
    ignores: ['dist/**'],
  },
  ...sharedConfigs,
  tslint.configs.eslintRecommended,
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
