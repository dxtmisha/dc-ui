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
          src
        })
      }

      image.src = src
    } else {
      resolve(undefined)
    }
  })
}
