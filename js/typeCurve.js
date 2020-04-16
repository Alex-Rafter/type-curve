//Set interpolator variables and default vaules for the big and small screen sizes
let smallScreen = 320;
let bigScreen = 1500;
let smallFont, bigFont;
//Create nodelist of HTML elements with class of .letterForm
const letterForms = document.querySelectorAll('.letterForm');

//This is the font size change function used alongside the interpolator function
function changeFontSize(){
    //Set fontScaler values based on screen orientation
    let screenOrientation = window.screen.orientation.type;
    let fontScaler;
    if(screenOrientation === 'landscape-primary') {
        fontScaler = makeInterpolator(500, 1500, 16, 55);
    } else {
        fontScaler = makeInterpolator(320, 1100, 16, 112);
    }
    //Get screen width and assign as fontScaler parameter
    let currentScreen = window.innerWidth;
    let x = fontScaler(currentScreen);

    //Loop through HTML elements with class of letterForm and assign inline font size styling
    let i;
    for(i = 0; i < letterForms.length; i++){
        letterForms[i].style.fontSize = x+"px";
    }
}

//Event listeners triggering the font size change function on load and on window resize
window.addEventListener('load', function(event) {
    changeFontSize();
});

window.addEventListener('resize', function(event) {
    changeFontSize();
});

//Interpolator function returning floating point : START
function makeInterpolator(smallScreen, bigScreen, smallFont, bigFont) {

    return function interpFont(t) {

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

        return ft.toPrecision(3);

    };
}
//Interpolator function returning floating point : END


