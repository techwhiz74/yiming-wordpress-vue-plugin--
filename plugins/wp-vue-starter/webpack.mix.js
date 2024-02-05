const mix = require('laravel-mix');

/**
 * Setup public path to generate assets
 */
mix.setPublicPath('public');

mix.setResourceRoot('../');

/**
 * Autoload jQuery
 */
mix.autoload({
    jquery: ['$', 'window.jQuery', 'jQuery']
});

/**
 * Compile TypeScript
 */
mix.ts('src/admin/admin.ts', 'public/js/admin.js')
    .ts('src/frontend/frontend.ts', 'public/js/frontend.js')
    .sourceMaps(false)
    .extract(["vue"])
    .vue({version: 3});

/**
 * Compile Sass
 */
mix.sass('sass/admin/style.scss', 'public/css/admin.css')
    .sass('sass/frontend/style.scss', 'public/css/frontend.css');