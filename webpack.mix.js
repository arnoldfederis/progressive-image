const mix = require('laravel-mix');

mix.js('src/index.js', 'dist/progressive-image-lazyload.js')
    .sass('src/scss/_progressive-image.scss', 'dist/progressive-image-lazyload.css');

if(mix.inProduction()) {
    mix.version();
}
