export default function useClipboard () {
  const readText = async () => await navigator.clipboard.readText()
  const writeText = async value => {
    try {
      await navigator.clipboard.writeText(value)
    } catch (e) {
      document?.execCommand(value)
    }
  }

  const clipboardInit = async element => {
    element?.select()
    await writeText(element?.value || element?.dataset?.value || element?.innerText)
  }

  return {
    readText,
    writeText,
    clipboardInit
  }
}
