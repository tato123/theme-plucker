var whitelist = "body, label, div, span, h1, h2, h3, h4, h5, pre, code, p, button, a";

var elements = document.querySelectorAll(whitelist);
var styles = buildTable(elements);
console.log(styles)
writeStyleTable(styles);

function buildTable(nodes) {
    let lookupTable = {
        'font-family' : {},
        'background-color' : {},
    };

    elements.forEach(element => {
        lookupTable['font-family'][window.getComputedStyle(element, null).getPropertyValue('font-family')]  = true;
        lookupTable['background-color'][window.getComputedStyle(element, null).getPropertyValue('background-color')]  = true;        
    });

    return lookupTable;
}

function writeStyleTable(styles) {
    const colorMap = Object.keys(styles['background-color']).map(font=> (
        `<li><div style="background-color:${font};width:15px;height:15px;margin-right:15px;display:inline-block;border:1px solid rgba(0,0,0,0.2);"></div>${font}</li>`
    )).join('');

    const fontMap = Object.keys(styles['font-family']).map(font=> (
        `<li>${font}</li>`
    )).join('');
    
    const section1 = `<label>Color Mapping</label><ul>${colorMap}</ul>`;
    const section2 = `<label>Font Mapping</label><ul>${fontMap}</ul>`;
    const template = `
        <div style="position:fixed; width:400px;height:200px;border:2px solid black;top: 0px; left:0px;background-color:white; overflow:auto;">
            ${section1}
            ${section2}
        </div>
    `;

    
    document.body.insertAdjacentHTML('beforeend', template)
}