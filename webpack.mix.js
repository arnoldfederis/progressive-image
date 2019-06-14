const mix = require('laravel-mix');

mix.js('src/index.js', 'dist/index.js')
    .sass('src/scss/_progressive-image.scss', 'dist/progressive-image.css');

if(mix.inProduction()) {
    mix.version();
}
