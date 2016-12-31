import React, { PropTypes } from 'react'

export default function ThemeProvider ({ theme }) {
  return (
    <h1>ThemeProvider</h1>
  )
}

ThemeProvider.propTypes = {
  theme: PropTypes.object
}
