const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './public/**/*.html',
      ],
      safelist: {
        standard: [
          'lazyloaded',
          ...whitelister([
            './assets/scss/components/_cookieconsent.scss',
            './node_modules/vanilla-cookieconsent/src/cookieconsent.css',
          ]),
        ],
      },
    }),
  ],
}
