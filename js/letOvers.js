//CSS Font Size Variables Portait Orientation converted to Floating Point
const portFontStyles = {
    xs: parseFloat(document.styleSheets[2].cssRules[0].cssText.replace(/[^\d.]/g, '')),
    sm: parseFloat(document.styleSheets[2].cssRules[1].cssText.replace(/[^\d.]/g, '')),
    md: parseFloat(document.styleSheets[2].cssRules[2].cssText.replace(/[^\d.]/g, '')),
    lg: parseFloat(document.styleSheets[2].cssRules[3].cssText.replace(/[^\d.]/g, '')),
    xl: parseFloat(document.styleSheets[2].cssRules[4].cssText.replace(/[^\d.]/g, ''))
}

console.log(portFontStyles.lg);
//CSS Font Size Variables Landscape Orientation converted to Floating Point
const landFontStyles = {
    xs: parseFloat(document.styleSheets[2].cssRules[5].cssText.replace(/[^\d.]/g, '')),
    sm: parseFloat(document.styleSheets[2].cssRules[6].cssText.replace(/[^\d.]/g, '')),
    md: parseFloat(document.styleSheets[2].cssRules[7].cssText.replace(/[^\d.]/g, '')),
    lg: parseFloat(document.styleSheets[2].cssRules[8].cssText.replace(/[^\d.]/g, '')),
    xl: parseFloat(document.styleSheets[2].cssRules[9].cssText.replace(/[^\d.]/g, ''))
}
console.log(landFontStyles.lg);

//DOM Elements with Class of LetterForm Added to Array.
//Variables for use in the Interpolator Function 
let smallScreen, bigScreen, smallFont, bigFont;
el = document.querySelector('.letterForm');
elStyles = window.getComputedStyle(el);
smallFont = elStyles.getPropertyValue('font-size');
console.log('small font = ' + smallFont);

//Switch statment to set bigFont relative to current smallFont size

switch(smallFont) {
//portrait font sizes    
    case '16px':
        bigFont = 32;
    break;
    case '32px':
        bigFont = 64;        
        break;        
    case '64px':
        bigFont = 83.2;
        break;        
    case '83.2px':
        bigFont = 112;
        break;        
    case '112px':
        bigFont = 112;
        break;
//landscape font sizes
    case '17.6px':
        bigFont = 19.2;
        break;        
    case '19.2px':
        bigFont = 33.6;
        break;        
    case '33.6px':
        bigFont = 48;
        break;        
    case '48px':
        bigFont = 54.4;                        
        break;       
    case '54.4px':
        bigFont = 54.4;                                
        break;  
    default: 
        bigFont = 'broke';
        break;
}