// "Ti.Query" is a Custom Titanium Module by Christopher "GchrisWill" Gonzalez... LOL!!!!!
// Ti.Query version 1.2

//Release Notes: Updated performance with more stability and improvements. More Function UI classes added, 1 Super Custom Class added and 2 Supper Custom Classes modified to fit app's structure needs... Enjoy!

//Testing Include #2
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
 * 
 * 
 * Custom Functions Classes Index
 * The folling list of Custom Function classes are in the folloing order for better app performace, less file clutter, fast acces and easier coding and better scripting implementation:
 * 
 * Custom Function Class #1: loadingTimer
 * Custom Function Class #2: creatingAwholeTableView 
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
 * 1-Color value string
 * 2-Background Image value string path
 * 3-Background LeftCap value number 
 * 4-Background TopCap value number 
 * 5-barColor
 * 6-URL JS path
 * 
 */
function creatingWindow(bgcolorValue, bgImageValue, bgLcValue, bgTcValue, barColorValue, URLpath){
    
    var universalWindow = Ti.UI.createWindow({
        backgroundColor:   bgcolorValue,
        backgroundImage:   bgImageValue,
        backgroundLeftCap: bgLcValue,
        backgroundTopCap:  bgTcValue,
        barColor:          barColorValue,
        url:               URLpath
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
        backgroundColor: "#fff",
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
        font: {
            fontSize:   fontSizeValue, 
            fontFamily: fontFamilyValue, 
        },
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
        //pagingControlTimeout: 60000

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
 * 2-Row data year make value string for using and passing
 * 3-Row data Model number value string for using and passing
 * 4-Row data Model identifier value string for using and passing
 * 5-Row has child built in feature value boolean 
 * 
 *  
 */
function creatingTableRows(rowHasChild){
    
    var UniversalTableRows = Ti.UI.createTableViewRow({
    //title: headerTitle,
    hasChild: rowHasChild
                                    
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
            color: "#333",
            font: {fontFamily: "arial", fontSize:26, fontWeight:"bold"},
            message: "Loading...",
            
            style: Ti.UI.iPhone.ActivityIndicatorStyle.DARK,
            bottom: null,
            height: "auto",
            width: "auto"
    });
        
    windowActivityIndicator.show();
    
    return windowActivityIndicator;
};//End Of Function Class #13: creatingActivityIndicator




//************************************************ Super Custom Classes Below **********************************************************************//


/* Custom Function Class #1: applicationWindowController
 * 
 * Arguments Specified in the following order: 
 * 1-New JS file path to load and execute 
 * 2-counter start value number
 * 3-counter increaser value number
 * 4- counter stop value number for the stop condition
 * 5-speed value number in miliseconds
 * 6- function call for next destination view  
 * 
 */
//Function sets a timer for opening the app home window on the landing page. Also, sets the loading indicator animation...

function applicationWindowController(fileTarget, counterStartPoint, counterPlus, counterStopConditionValue, givenSpeed, nextDestination){ 
    
    var counter = counterStartPoint;
    
    var loadingIndicator = creatingActivityIndicator();
    
    landingWindow.add(loadingIndicator);
    
    var timer = setInterval(function(){
            
        counter+=counterPlus;
        
        if (counter == counterStopConditionValue) {
            clearInterval(timer);
            landingWindow.remove(loadingIndicator);
            
            var homeWindow = creatingWindow("#fff", null, null, null, "#fff", fileTarget);
            homeWindow.tabBarHidden = true;
            
            var newWholeTable = creatingAwholeTableView();
            
            homeWindow.add(newWholeTable);
            
            var mainTabController     = Ti.UI.createTabGroup({});
            mainTabController.opacity = 0.0;
            
            var homeTab = creatingTab(homeWindow, null, "Home");
                        
            mainTabController.addTab(homeTab);
            
            
            creatinCurveAnimation(mainTabController, Ti.UI.ANIMATION_CURVE_EASE_IN_OUT, 1, 1000);
            mainTabController.open();
            
        };
    }, givenSpeed);
};//End Of Function applicationWindowController


/* Custom Function Class #2: creatingAwholeTableView
 * 
 * No arguments passed
 *
 */
//Function creates a whole Table View and returns it
function creatingAwholeTableView(){
    
    var newArray = require("data10Objects");
    
    var searchBar = Titanium.UI.createSearchBar({
        hintText: "Search By Years",
        showCancel:false,
        height:10,
        top:0
        
    });

    var tableViewReady = creatingTableView(true, searchBar, true, 0);
    tableViewReady.searchHidden = true;
    tableViewReady.filterAttribute = "searchFilter";
    
    var universalSections  = [];
    var universalSectionBuilder = creatingSectionView("Classe's Grade List");
    
    for (var i = 0, j = newArray.arrayData.length; i < j; i++){
            
            var universalTableRowsFucntion = creatingTableRows(false);
                universalTableRowsFucntion.searchFilter = newArray.arrayData[i].year;
            if (i < 6 ){
                universalTableRowsFucntion.hasCheck = true;
            };
            var universalViewForRow = creatingLabel(newArray.arrayData[i].verify(), "#333", "center", 16, "arial", "auto", "auto", 10, 10, 10, 10);
            
            universalTableRowsFucntion.add(universalViewForRow);
            
            universalSectionBuilder.add(universalTableRowsFucntion);
             
            
            
    };//End of First Loop
    universalSections.push(universalSectionBuilder);
    tableViewReady.setData(universalSections);
    
    return tableViewReady;
};// End Of Function creatingAwholeTableView



