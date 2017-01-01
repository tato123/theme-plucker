import React from 'react'
import { render } from 'react-dom'
import ThemeProvider from './components/ThemeProvider'
import { execute, hide } from './content_script'

// create the element
const div = document.createElement('div')
div.id = 'app'
document.body.appendChild(div)

// get the current page styles
const theme = execute()

render(
  <ThemeProvider theme={theme} />,
document.getElementById('app'))
