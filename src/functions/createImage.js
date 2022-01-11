import getFileResult from '@/functions/getFileResult'

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
          src: image.src
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
