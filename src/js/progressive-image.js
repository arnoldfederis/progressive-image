import { CanvasImage } from './canvas-image'

const loadLgImage = (progressiveMedia) => {
  // grab data-src from original image
  // from progressiveMedia-image
  let lgImage = progressiveMedia.querySelector('.progressiveMedia-image')
  lgImage.src = lgImage.dataset.src

  // onload image visible
  lgImage.onload = () => {
    progressiveMedia.classList.add('is-imageLoaded')
  }
}

const loadSmImage = (progressiveMedia) => {
  // calculate aspect ratio
  // for the aspectRatioPlaceholder-fill
  // that helps to set a fixed fill for loading images
  let width = progressiveMedia.dataset.width,
    height = progressiveMedia.dataset.height,
    fill = height / width * 100,
    placeholderFill = progressiveMedia.previousElementSibling

  placeholderFill.setAttribute('style', 'padding-bottom:' + fill + '%;')

  // set max-height and max-width to aspectRatioPlaceholder
  let aspectRatioPlaceholder = progressiveMedia.parentElement,
    maxWidth = aspectRatioPlaceholder.offsetWidth,
    maxHeight = aspectRatioPlaceholder.offsetHeight

  aspectRatioPlaceholder.setAttribute('style', 'max-width:' + maxWidth + 'px; max-height:' + maxHeight + 'px;')

  // get thumbnail height wight
  // make canvas fun part
  let thumbnail = progressiveMedia.querySelector('.progressiveMedia-thumbnail'),
    smImageWidth = thumbnail.width,
    canvas = progressiveMedia.querySelector('.progressiveMedia-canvas'),
    context = canvas.getContext('2d')

  canvas.height = thumbnail.height
  canvas.width = smImageWidth

  let img = new Image()
  img.src = thumbnail.dataset.thumb

  img.onload = () => {
    context.drawImage(img, 0, 0)
    // draw canvas
    let canvasImage = new CanvasImage(canvas, img)
    canvasImage.blur(2)

    // load canvas visible
    progressiveMedia.classList.add('is-canvasLoaded')
  }
}

const lazyLoadImage = (target) => {
  const intersectObject = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadSmImage(entry.target)
        loadLgImage(entry.target)
        observer.disconnect()
      }
    })
  })

  intersectObject.observe(target)
}

setTimeout(() => document.querySelectorAll('.progressiveMedia').forEach(lazyLoadImage));


