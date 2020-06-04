//Set default vaules for the big and small screen sizes, and big and small font sizes
const landscape = {
    smallScreen: 500,
    bigScreen: 1500,
    smallFont: 16,  
    bigFont: 75
};

const portrait = {
    smallScreen: 320,
    bigScreen: 1100,
    smallFont: 16,  
    bigFont: 112
};

//Create nodelist of HTML elements with class of .letterForm
const letterForms = document.querySelectorAll('.letterForm');

//Event listeners triggering the font size change function on load and on window resize
window.addEventListener('load', function(event) {
    changeFontSize();
});

window.addEventListener('resize', function(event) {
    changeFontSize();
});

//This is the font size change function used alongside the interpolator function
function changeFontSize(){
    //Container grid
    const theGrid = document.querySelector('#theGrid');
    //Set fontScaler values based on screen orientation
    let screenOrientation = window.screen.orientation.type;
    let fontScaler;
    if(screenOrientation === 'landscape-primary') {
        fontScaler = makeInterpolator(landscape.smallScreen, landscape.bigScreen, landscape.smallFont, landscape.bigFont);
    } else {
        fontScaler = makeInterpolator(portrait.smallScreen, portrait.bigScreen, portrait.smallFont, portrait.bigFont);
    }
    //Get screen width and assign as fontScaler parameter
    let currentScreen = window.innerWidth;
    let x = fontScaler(currentScreen);
    //Update font size of wrapping div with id of theGrid (and its children)
    theGrid.style.fontSize = `${x.toPrecision(3)}px`;
}


//Interpolator function returning floating point : START
function makeInterpolator(smallScreen, bigScreen, smallFont, bigFont) {

    return t => {
        if (t <= smallScreen) {
            return smallFont;
        };

        if (t >= bigScreen) {
            return bigFont;
        };

        // Calculate the proportion of the way between smallScreen and bigScreen.
        // s == 0  means we are at smallSCreen. 
        // s == 1  means we are at BigScreen.
        // s == 0.5 means we are half way between those sizes.
        //
        let s = (t - smallScreen) / (bigScreen - smallScreen);

        // Calculate the s proportion of values we are interested in.
        // s == 0 will give smallFont.
        // s == 1 will give bigFont.
        // s == 0.5 will give a font value half way between those font sizes.
        //
        let ft = smallFont + ((bigFont - smallFont) * s);

        return ft;
    }
    
}
//Interpolator function returning floating point : END

