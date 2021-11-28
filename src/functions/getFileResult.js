import isImage from '@/functions/isImage'

export default function getFileResult (file) {
  return new Promise(resolve => {
    if (isImage(file)) {
      const reader = new FileReader()
      reader.onload = event => resolve(event.target.result)
      reader.readAsDataURL(file)
    } else {
      resolve(undefined)
    }
  })
}
