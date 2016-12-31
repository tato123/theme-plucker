
export const whitelist = 'body, label, div, span, h1, h2, h3, h4, h5, pre, code, p, button, a'

/**
 * Extracts each of the style values from the page
 *
 * @returns {Object}
 */
export function extract () {

  const buildTable = (nodes) => {
      const lookupTable = {
          'font-family': {},
          'background-color': {}
        }

      elements.forEach((element) => {
          const fontList = window.getComputedStyle(element, null).getPropertyValue('font-family') || ''
          fontList.split(',').forEach((font) => {
              lookupTable['font-family'][font.trim()] = true
            })

          lookupTable['background-color'][window.getComputedStyle(element, null).getPropertyValue('background-color')] = true
        })

      return lookupTable
    }

  const elements = document.querySelectorAll(whitelist)
  return buildTable(elements)
}
