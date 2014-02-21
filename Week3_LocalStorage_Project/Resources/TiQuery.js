// "TiQuery" and all "Query add-ons" files are Custom Titanium Modules by Christopher "GchrisWill" Gonzalez...
// TiQuery version 3.0 (ASD Week 3 specific modified version with custom add-ons for local storage functionality )

/***
 *        .....             .            ....                                                                
 *     .H8888888h.  ~-.    @88>      .n~8888888nx                                                 ..         
 *     888888888888x  `>   %8P     :88>'8888888888:         x.    .                   .u    .    @L          
 *    X~     `?888888hx~    .     :8888 "*888888888k      .@88k  z88u        .u     .d88B :@8c  9888i   .dL  
 *    '      x8.^"*88*"   .@88u   '88888.         "8>    ~"8888 ^8888     ud8888.  ="8888f8888r `Y888k:*888. 
 *     `-:- X8888x       ''888E`   ?88888          'X      8888  888R   :888'8888.   4888>'88"    888E  888I 
 *          488888>        888E  ?  %888!           !      8888  888R   d888 '88%"   4888> '      888E  888I 
 *        .. `"88*         888E   ".:88"            !      8888  888R   8888.+"      4888>        888E  888I 
 *      x88888nX"      .   888E     xHH8Hx.        .X  :   8888 ,888B . 8888L       .d888L .+     888E  888I 
 *     !"*8888888n..  :    888&   :888888888hx....x\8..X  "8888Y 8888"  '8888c. .+  ^"8888*"     x888N><888' 
 *    '    "*88888888*     R888" :~  `"8888888888!`'8888   `Y"   'YP     "88888%       "Y"        "88"  888  
 *            ^"***"`       ""          `""*8*""`   "*"                    "YP'                         88F  
 *                                                                                                     98"   
 *                                                                                                   ./"     
 *                                                                                                  ~`       
 */

// Release Notes: 
// Lots of modification from outer space, thanks from the people of the planet Kepler-22b. 
// Multiple add-ons files that manage a CRUD functionality of a local database with SQLite scripting. 
// Also, more Functions UI classes on the main TiQuery file added to fit the week 3 app's structure from ASD at Full Sail University... Enjoy!


//Requirering custom Query add-ons
var QController = require("QueryCONTROLLERS");

//Testing modules links
function alertMsg1(string){
    alert(string);
};

/* UI Objects Classes Index
 * The folling list of classes are in the folloing order for fast access:
 * 
 * 1-createNavWindow
 * 2-creatingWindow
 * 3-creatingView
 * 4-creatingImageView
 * 5-creatingLabel
 * 6-creatingScrollableView
 * 7-creatingTab
 * 8-creatinCurveAnimation
 * 9-creatingWebView
 * 10-creatingTableView
 * 11-creatingSectionView
 * 12-creatingTableRows
 * 13-creatingActivityIndicator
 * 14-creatingButton
 * 15-creatingTextField
 * 
 */


// Function Class #1: createNavWindow (iOS specific function)- Accepts only argument, target window
//Important NOTE: There is no reason to use the Navigation Window system due to in this current app development I'm using the Tab Group system for main navigation.
function creatingNavWindow(openNewWindow){
    var universalNavWindow = Ti.UI.iOS.createNavigationWindow({
        window: openNewWindow
    });
    
    return universalNavWindow;
};
//End of Function Class #1: createNavWindow


/* Function Class #2: creatingWindow
 * 
 * Function call's arguments Specified in the following order: 
 * 1-Navigation Window title
 * 2-Color value string
 * 3-Background Image value string path
 * 4-Background LeftCap value number 
 * 5-Background TopCap value number 
 * 6-barColor
 * 7-URL JS path
 * 
 */
function creatingWindow(windowNavTitle, bgcolorValue, bgImageValue, bgLcValue, bgTcValue, barColorValue, jsFileURLpath){
    
    var universalWindow = Ti.UI.createWindow({
        title:             windowNavTitle,
        backgroundColor:   bgcolorValue,
        backgroundImage:   bgImageValue,
        backgroundLeftCap: bgLcValue,
        backgroundTopCap:  bgTcValue,
        barColor:          barColorValue,
        url:               jsFileURLpath
    });
    
    return universalWindow;

};
//End of Function Class #2: creatingWindow


/* Function Class #3: creatingView
 * 
 * Function call's arguments Specified in the following order: 
 * 1-Background color value string path
 * 2-Width value number or number-string
 * 3-Height vaule number or number-string
 * 4-Top position value number or number-string
 * 5-Left position value number or number-string
 * 6-Right position value number or number-string
 * 7-Bottom position value number or number-string
 *  
 */
function creatingView(bgColor, widthValue, heightValue, topValue, leftValue, rightValue, bottomValue){
    
    var universalView = Ti.UI.createView({
        backgroundColor:  bgColor,
        width:            widthValue,
        height:           heightValue,
        top:              topValue,
        left:             leftValue,
        right:            rightValue,
        bottom:           bottomValue
    });
    
    return universalView;
};
//End of Function Class #3: creatingView


/* Function Class #4: creatingImageView
 * 
 * Function call's arguments Specified in the following order: 
 * 1-Image value string path
 * 2-Width value number or number-string
 * 3-Height vaule number or number-string
 * 4-Top position value number or number-string
 * 5-Left position value number or number-string
 * 6-Right position value number or number-string
 * 7-Bottom position value number or number-string
 *  
 */
function creatingImageView(imagePathValue, widthValue, heightValue, topValue, leftValue, rightValue, bottomValue){
    
    var universalImageView = Ti.UI.createImageView({
        image:  imagePathValue,
        width:  widthValue,
        height: heightValue,
        top:    topValue,
        left:   leftValue,
        right:  rightValue,
        bottom: bottomValue
    });

    return universalImageView;

};
//End of Function Class #4: creatingImageView


/* Function Class #5: creatingLabel
 * 
 * Function call's arguments Specified in the following order: 
 * 1-Text value string
 * 2-Text's Color value string
 * 3-Text's Align value string
 * 4-Font's Size value number or number-string
 * 5-Font's family value string
 * 6-Width value number or number-string
 * 7-Height vaule number or number-string
 * 8-Top position value number or number-string
 * 9-Left position value number or number-string
 * 10-Right position value number or number-string
 * 11-Bottom position value number or number-string
 * 
 */
function creatingLabel(textValue, textColorValue, textAlignValue, fontSizeValue, fontFamilyValue, widthValue, heightValue, topValue, leftValue, rightValue, bottomValue){
    
    var universalLabel = Ti.UI.createLabel({
        text:      textValue,
        color:     textColorValue,
        textAlign: textAlignValue,
        font:      {fontSize: fontSizeValue, fontFamily: fontFamilyValue},
        width:     widthValue,
        height:    heightValue,
        top:       topValue,
        left:      leftValue,
        right:     rightValue,
        bottom:    bottomValue,
        
    });

    return universalLabel;
};
//End of Function Class #5: creatingLabel


/* Function Class #6: creatingScrollableView
 * 
 * Function call's arguments Specified in the following order: 
 * 1-Show pagination controll
 * 2-Pagination control color
 * 3-Views Array
 * 4-Width value number or number-string
 * 5-Height vaule number or number-string
 * 6-Top position value number or number-string
 * 7-Left position value number or number-string
 * 8-Right position value number or number-string
 * 9-Bottom position value number or number-string
 *  
 */
function creatingScrollableView(showPGControlBooleanValue, PGcontrolColorStringValue, viewsArray, widthValue, heightValue, topValue, leftValue, rightValue, bottomValue){
    
    var universalScrollableView = Ti.UI.createScrollableView({
        showPagingControl:   showPGControlBooleanValue,
        pagingControlColor:  PGcontrolColorStringValue, 
        views:                viewsArray,
        width:                widthValue,
        height:               heightValue,
        top:                  topValue,
        left:                 leftValue,
        right:                rightValue,
        bottom:               bottomValue

    });
    
    return universalScrollableView;
};
//End of Function Class #6: creatingScrollableView


/* Function Class #7: creatingTab
 * 
 * Function call's arguments Specified in the following order:
 * 1-Window object
 * 2-Icon Images Path
 * 3-Title string value
 * 
 */
function creatingTab(windowName, iconImagePath, titleValue){
    
    var universalTab = Titanium.UI.createTab({
        window: windowName,
        icon:   iconImagePath,
        title:  titleValue
    });
    if (Ti.Platform.name !== "iPhone OS"){
        universalTab.backgroundColor = "darkgray";
    };
    
    windowName.title = titleValue;
    
    return universalTab;
};
//End of Function Class #7: creatingTab


/* Function Class #8: creatinCurveAnimation
 * 
 * Function call's arguments Specified in the following order:
 * 1-Target UI view 
 * 2-Curve Type 
 * 3-Opacity Value decimal number
 * 4-duration value number 
 */
function creatinCurveAnimation(targetView, curveType, opacityValue, durationValue){
    
    //iOS compatibility conditional 
    if (Ti.Platform.name == "iPhone OS"){
        targetView.animate({
            curve:    curveType, 
            opacity:  opacityValue, 
            duration: durationValue
        });
    };
       
};
//End of Function Class #8: creatinCurveAnimation


/* Function Class #9: creatingWebView
 * 
 * Function call's arguments Specified in the following order: 
 * 1-URL path string
 * 2-Zoom control enabler Boolean
 * 3-Scale page to fit window or view boolean
 * 4-Scroll to top of window or view boolean
 * 5-Show scroll indicator bar boolean
 * 6-Width value number or number-string
 * 7-Height vaule number or number-string
 * 8-Top position value number or number-string
 * 9-Left position value number or number-string
 * 10-Right position value number or number-string
 * 11-Bottom position value number or number-string
 *  
 */
function creatingWebView(urlWebPath, zoomControl, scalesToFit, toTop, showSbars, widthValue, heightValue, topValue, leftValue, rightValue, bottomValue){
    
    var universalWebView = Ti.UI.createWebView({
        url:               urlWebPath,
        enableZoomControl: zoomControl,
        scalesPageToFit:   scalesToFit,
        scrollsToTop:      toTop,
        showScrollBars:    showSbars,
        width:             widthValue,
        height:            heightValue,
        top:               topValue,
        left:              leftValue,
        right:             rightValue,
        bottom:            bottomValue
    });
    
    return universalWebView;
};
//End of Function Class #9: creatingWebView


/* Function Class #10: creatingTableView
 * 
 * Function call's arguments Specified in the following order: 
 * 1-Show scroll Indicator value boolean
 * 2-Search object 
 * 3-Scroll to top feature with tap on menubar value boolean
 * 4-Top value number
 * 
 *  
 */
function creatingTableView(scrollIndi, searchBarObject, scrollsToToTouchMenuBar, topValue){     
    
    var universalReadyTable = Ti.UI.createTableView({
        showVerticalScrollIndicator: scrollIndi,
        search:                      searchBarObject,
        scrollsToTop:                scrollsToToTouchMenuBar,
        top:                         topValue
    
    });
    
    return universalReadyTable;
    
};   
//End of Function Class #10: creatingTableView


/* Function Class #11: creatingSectionView
 * 
 * Function call's arguments Specified in the following order: 
 * 1-Section header title value string
 * 2-Section footer title value string 
 * 
 *  
 */
function creatingSectionView(seactionHeadersPassed){
    
    var UniversalStableSection  = Ti.UI.createTableViewSection({
        headerTitle: seactionHeadersPassed
        
    });
    
    return UniversalStableSection;
    
};
//End of Function Class #11: creatingSectionView


/* Function Class #12: creatingTableRows
 * 
 * Function call's arguments Specified in the following order: 
 * 1-Row data title value string for using and passing
 * 2-Row has a child feture boolean value
 * 3-Row has a detail information feature boolean value
 * 
 *  
 */
function creatingTableRows(rowTitleText, rowHasChild, rowHasDetail){
    
    var UniversalTableRows = Ti.UI.createTableViewRow({
        title:     rowTitleText,
        hasChild:  rowHasChild,
        hasDetail: rowHasDetail,
    });
                                
    return UniversalTableRows;
                        
};
//End of Function Class #12: creatingTableRows


/* Function Class #13: creatingActivityIndicator
 * 
 * No arguments passed
 *  
 */
function creatingActivityIndicator(){
    
    var windowActivityIndicator = Ti.UI.createActivityIndicator({
            color:  "#333",
            font:   {fontFamily: "arial", fontSize:26, fontWeight:"bold"},
            message: "Loading...",
            style:  Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
            bottom: null,
            height: "auto",
            width:  "auto"
    });
        
    windowActivityIndicator.show();
    
    return windowActivityIndicator;
};//End Of Function Class #13: creatingActivityIndicator





/* Function Class #14: creatingButton
 * 
 * Function call's arguments Specified in the following order: 
 * 1-Button style module
 * 2-Zoom control enabler Boolean
 * 3-Scale page to fit window or view boolean
 * 4-Scroll to top of window or view boolean
 * 5-Show scroll indicator bar boolean
 * 6-Width value number or number-string
 * 7-Height vaule number or number-string
 * 
 * 
 */

function creatingButton(systemButtonConstant, buttonTitle, buttonImage, buttonStyle, widthValue, heightValue, topValue, leftValue, rightValue, bottomValue){
    
    var universalButton = Ti.UI.createButton({
        systemButton: systemButtonConstant,
        title:        buttonTitle,
        image:        buttonImage,
        style:        buttonStyle,
        width:        widthValue,
        height:       heightValue,
        top:          topValue,
        left:         leftValue,
        right:        rightValue,
        bottom:       bottomValue
    });
    
    return universalButton;
};// End Of Function Class #14: creatingButton




/* Function Class #15: creatingTextField
 * 
 * Function call's arguments Specified in the following order: 
 * 1-Border style value
 * 2-Enable return key suppresor boolean
 * 3-Return key type integer
 * 4-Hint text string
 * 5-Password mask value boolean
 * 6-Color value string
 * 7-Width value number or number-string
 * 8-Height vaule number or number-string
 * 9-Top position value number or number-string
 * 10-Left position value number or number-string
 * 11-Right position value number or number-string
 * 12-Bottom position value number or number-string
 *  
 */
function creatingTextField(borderStyler, returnKeyBoolean, returnKeyType, textHinter, passwordMaskBoolean, colorValue, widthValue, heightValue, topValue, leftValue, rightValue, bottomValue){
    
    var universalTextField = Ti.UI.createTextField({
        borderStyle:     borderStyler,
        enableReturnKey: returnKeyBoolean,
        returnKeyType:   returnKeyType,
        hintText:        textHinter,
        passwordMask:    passwordMaskBoolean,
        color:           colorValue,
        width:           widthValue, 
        height:          heightValue,
        top:             topValue,
        left:            leftValue,
        right:           rightValue, 
        bottom:          bottomValue
    });
    
    return universalTextField;
};


