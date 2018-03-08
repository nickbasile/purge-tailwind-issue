let mix = require('laravel-mix');
let tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.sass', 'public/css')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.js') ]
    })
    .purgeCss({
        extensions: ['html', 'js', 'jsx', 'ts', 'tsx', 'php', 'vue', 'sass'],
    })
    .copy('./node_modules/flatpickr/dist/flatpickr.min.css', 'public/css')
    .combine(['public/css/app.css', 'public/css/flatpickr.min.css'], 'public/css/main.css');
