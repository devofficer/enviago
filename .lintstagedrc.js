const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --write', 'git add'],
  '*.{css}': ['prettier --write', 'git add'],
  '*.{png,svg,ttf,woff,ico}': ['git add'],
};