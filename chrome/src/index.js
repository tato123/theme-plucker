import React from 'react'
import { render } from 'react-dom'
import ThemeProvider from './container/ThemeProvider'
import { execute } from './content_script'


const div = document.createElement('div')
div.id = 'app'
document.body.appendChild(div)

execute();

render(
  <ThemeProvider />,
document.getElementById('app'))

