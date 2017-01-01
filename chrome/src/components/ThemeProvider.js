import React, { PropTypes } from 'react'

const ThemeSection = ({ label, children }) => (
  <div>
    <label>{label}</label>
    {children}
  </div>
)

const BackgroundTheme = ({ data }) => {
  const defaultStyle = {
    width: '15px',
    height: '15px',
    marginRight: '15px',
    display: 'inline-block',
    border: '1px solid rgba(0,0,0,0.2)'
  }

  return (
    <ThemeSection label="Background Colors" >
      <ul>
        {Object.keys(data).map((color) => {
          const style = Object.assign({}, defaultStyle, {
            backgroundColor: color
          })
          return (
            <li>
              <div style={style} />{color}
            </li>
          )
        })}
      </ul>
    </ThemeSection>
  )
}

const FontTheme = ({ data }) => (
  <ThemeSection label="Fonts">
    <ul>
      {Object.keys(data).map(font => (
      <li>{font}</li>
      ))}
    </ul>
  </ThemeSection>
)


export default function ThemeProvider ({ theme }) {
  return (
    <div>
      <BackgroundTheme data={theme['background-color']} />
      <FontTheme data={theme['font-family']} />
    </div>
  )
}

ThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired
}
