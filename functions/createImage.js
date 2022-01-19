import getFileResult from './getFileResult'

const MAX_SIZE = 600

const getSRC = function (src, image) {
  if (
    src instanceof File &&
    (
      image.naturalHeight > MAX_SIZE ||
      image.naturalWidth > MAX_SIZE
    )
  ) {
    const is = image.naturalWidth >= image.naturalHeight
    const canvas = document.createElement('canvas').getContext('2d')

    canvas.canvas.width = is ? MAX_SIZE : (image.naturalWidth / image.naturalHeight * MAX_SIZE)
    canvas.canvas.height = is ? (image.naturalHeight / image.naturalWidth * MAX_SIZE) : MAX_SIZE
    canvas.drawImage(image, 0, 0, canvas.canvas.width, canvas.canvas.height)

    return canvas.canvas.toDataURL()
  } else {
    return image.src
  }
}

export default function createImage (src) {
  return new Promise(resolve => {
    if (src) {
      const image = new Image()

      image.onerror = () => resolve(undefined)
      image.onload = () => {
        resolve({
          image,
          height: image.naturalHeight,
          width: image.naturalWidth,
          src: getSRC(src, image)
        })
      }

      (async () => {
        image.src = src instanceof File ? await getFileResult(src) : src
      })()
    } else {
      resolve(undefined)
    }
  })
}
