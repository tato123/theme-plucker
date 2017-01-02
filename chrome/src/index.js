import React from 'react';
import { render } from 'react-dom';
import ThemeProvider from './components/ThemeProvider';
import { execute, hide } from './content_script';

// create the element
const div = document.createElement('span');
div.id = 'app';
div.style.position = 'absolute';
div.style.zIndex = 10000000;
div.style.top = '0px';
div.style.left = '0px';
document.body.appendChild(div);

// get the current page styles
const theme = execute();

render(
  <ThemeProvider theme={theme} />,
document.getElementById('app'));
