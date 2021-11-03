
## Progressive Image JS

![Progressive Image JS](https://i.imgur.com/o4aKBEH.png)

[Demo](https://arnoldfederis.github.io/progressive-image-lazyload.js)

### Progressive image with Lazyload

### Install in `npm` or `yarn`

```
$ npm install progressive-image-lazyload.js

$ yarn add progressive-image-lazyload.js
```


### How to use

* `HTML` markup

```html
<figure class="graf-figure">
    <div class="aspectRatioPlaceholder">
        <div class="aspectRatioPlaceholder-fill"></div>
        <div class="progressiveMedia" data-width="1920" data-height="1080">
            <img class="progressiveMedia-thumbnail" data-thumb="https://i.imgur.com/glCxppa.png" alt="progressive-image-lazyload">
            <canvas class="progressiveMedia-canvas"></canvas>
            <img class="progressiveMedia-image" data-src="https://i.imgur.com/o4aKBEH.png" alt="progressive-image-lazyload">
        </div>
    </div>
</figure>
```

* In `HTML` put this line of code inside your `<head>` tag

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/progressive-image-lazyload.js@1.0.4/dist/progressive-image-lazyload.css">
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/progressive-image-lazyload.js@1.0.4/dist/progressive-image-lazyload.js"></script>
```

* In `JavaScript` and `SCSS` using npm or yarn

```scss
/* SCSS */
@import "~progressive-image-lazyload.js/src/scss/progressive-image";
```

```javascript
/* JavaScript */
import 'progressive-image-lazyload.js'
```

* `data-thumb` this is where you set your small image.
* `data-src` this is where you set your large image.
