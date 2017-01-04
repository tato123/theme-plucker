

// Function to convert hex format to a rgb color
export function rgb2hex (inputRgb) {
  if (inputRgb.indexOf('rgb(') !== -1) {
    const rgb = inputRgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return `#${  hex(rgb[1])  }${hex(rgb[2])  }${hex(rgb[3])}`;
  }
  return '';
}

function hex (x) {
  const hexDigits = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f');
  return isNaN(x) ? '00' : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}
