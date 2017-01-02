import React, { PropTypes } from 'react';
import Draggable from 'react-draggable';

const ThemeSection = ({ label, children }) => (
  <div>
    <label>{label}</label>
    {children}
  </div>
);

const BackgroundTheme = ({ data }) => {
  const defaultStyle = {
    width: '15px',
    height: '15px',
    marginRight: '15px',
    display: 'inline-block',
    border: '1px solid rgba(0,0,0,0.2)'
  };

  return (
    <ThemeSection label="Background Colors" >
      <ul>
        {Object.keys(data).map((color) => {
          const style = Object.assign({}, defaultStyle, {
            backgroundColor: color
          });
          return (
            <li>
              <div style={style} />{color}
            </li>
          );
        })}
      </ul>
    </ThemeSection>
  );
};

const FontTheme = ({ data }) => (
  <ThemeSection label="Fonts">
    <ul>
      {Object.keys(data).map(font => (
        <li>{font}</li>
      ))}
    </ul>
  </ThemeSection>
);


export default function ThemeProvider ({ theme }) {
  const rootStyle = {
    lineHeight: '1.6',
    fontSize: '13px',
    fontFamily: 'Sans Serif, Arial',
    color: 'black',
    border: '1px solid black',
    backgroundColor: '#fff',
    width: '500px'
  };
  return (
    <Draggable>
      <div style={rootStyle}>
        <BackgroundTheme data={theme['background-color']} />
        <FontTheme data={theme['font-family']} />
      </div>
    </Draggable>
  );
}

ThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired
};
