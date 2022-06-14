export class Icon {
  static list = {}

  static add (index, file) {
    this.list[`@${index}`] = file
  }

  static get (name, url = undefined) {
    if (name in this.list) {
      return this.list[name]
    } else if (url) {
      return name.toString().replace(/^@/, url) + '.svg'
    }
  }
}
