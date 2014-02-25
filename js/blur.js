//<![CDATA[

(function(){
    
    // get the height, width of the window, and background image.
    var theBody = document.body,
        wrapper = document.getElementById( 'card-wrapper' ),
        theWrapper = {},
        windowWidth = window.innerWidth,
        windowHeight = window.innerHeight,
        fauxBackground = '<div id="header-background" class="faux-background blurred"></div>'; 

    
    // calculate all of the dimensions needed in a function, so it 
    // be called again when the window resizes etc
    function dimensionCalc() {
        var windowWidth = window.innerWidth,
            windowHeight = window.innerHeight;
            
            theWrapper = {
                // adding to the object - see, told you
                top : wrapper.offsetTop,
                left : wrapper.offsetLeft
            }
            
        // pass the vars over into the function that positions the 
        // faux background
        rejigFauxBackground( windowWidth, windowHeight, theWrapper.top, theWrapper.left );
    }
    
            
    // detect whether #header-background exists, then add it into #
    // the header without destroying anything
    
    function detectIfElementExists( testThis ) {
        var testedElement = document.getElementById( testThis );
        
        if ( testedElement === null ) {
            // run the creation of the faux background element and 
            // add it into the header
    
            wrapper.insertAdjacentHTML(
                'beforeend',
                fauxBackground
            );
        }
    }
    
    // offset this div by the dimensions needed to line it up with
    // the background
    function rejigFauxBackground( theWidth, theHeight, topOffset, leftOffset ) {
        var fauxBackground = document.getElementById('header-background');
        
        fauxBackground.style.height = theHeight + 'px'; // and remember the pixels
        fauxBackground.style.width = theWidth + 'px';
        fauxBackground.style.top = '-'+ topOffset + 'px';
        fauxBackground.style.left = '-'+ leftOffset + 'px';
    
    }
    
    detectIfElementExists( 'header-background' );
    dimensionCalc(); // also needs to be triggered on window resize
    
    /*window.addEventListener('resize', function(){
        dimensionCalc();
    });
    */
    
    window.onresize = dimensionCalc;
})();

//]]>