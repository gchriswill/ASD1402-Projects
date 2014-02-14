
//************************************************ Super Custom Classes Below **********************************************************************//
/*Custom Functions Classes Index
 * The folling list of Custom Function classes are in the folloing order for better app performace, less file clutter, fast acces and easier coding and better scripting implementation:
 * 
 * Custom Function Class #1: applicationWindowController
 * Custom Function Class #2: APIdataController
 * Custom Function Class #3: creatingAwholeTableView
 */
 



/* Custom Function Class #1: APIdataController
 * 
 * Arguments Specified in the following order: 
 * 1- Method to connect
 * 2- API's URL
 * 
 */
//Function creates a whole Table View, apply elements of the passed remote API object and returns it
function APIdataController(openMethod, APIurl){
    
    //Connection Object
    var connectionExecuter = Ti.Network.createHTTPClient({
         
         //On successful load function
         onload : function(e) {
            
            //Converting from JSON object to executable script
            var dataExtracted = JSON.parse(connectionExecuter.responseText);
            
            //Logging connection status
            Ti.API.info("-----@ API ACCESS GRANTED @-----");
            
            //Calling the app's window controller
            var executingControlls = applicationWindowController(null, 0, 1, 1, 1000, 0, dataExtracted);
         },
         
         //On unsuccessful load function
         onerror : function(e) {
             
             //Logging connection errors
             Ti.API.debug(e.error);
             
             //Logging connection status
             Ti.API.info("-----@ API ACCESS DENIED or ERROR CONNECTION @-----");
         },
         
         //Setting a time disconnetion for the connectionExecuter object
         timeout : 28000
       
    });
    
    //Opening connection
    connectionExecuter.open(openMethod, APIurl);
    
    //Sending request
    connectionExecuter.send();
    
};//End Of Function APIdataController




/* Custom Function Class #2: applicationWindowController
 * 
 * Arguments Specified in the following order: 
 * 1-New JS file path to load and execute 
 * 2-counter start value number
 * 3-counter increaser value number
 * 4- counter stop value number for the stop condition
 * 5-speed value number in miliseconds
 * 6- function call for next destination view
 * 7- API object passed from "APIdataController" function
 * 
 */
//Function sets a timer for opening the app home window on the landing page. Also, sets the loading indicator animation...
//IMPORTANT NOTE: New argument has been temporary passed for remote API object...
function applicationWindowController(fileTarget, counterStartPoint, counterPlus, counterStopConditionValue, givenSpeed, nextDestination, AIPobjectPassed){ 
    
    //Interval loop counter
    var counter = counterStartPoint;
    
    //Creating deafult activity indicator
    var loadingIndicator = creatingActivityIndicator();
    
    landingWindow.add(loadingIndicator);
    
    //Setting interval for timing the landing window
    var timer = setInterval(function(){
            
        counter+=counterPlus;
        
        if (counter == counterStopConditionValue) {
            clearInterval(timer);
            landingWindow.remove(loadingIndicator);
            
            //New window for holding the table
            var homeWindow = creatingWindow("#fff", null, null, null, "#fff", fileTarget);
            
            //Hidding the tab bar
            homeWindow.tabBarHidden = true;
            
            //Creating the table and passing API object
            var newWholeTable = creatingAwholeTableView(AIPobjectPassed);
            
            homeWindow.add(newWholeTable);
            
            //Creating the Tab Group for app navigation""
            var mainTabController     = Ti.UI.createTabGroup({});
            
            //Setting the mainTabController's opacity to 0
            mainTabController.opacity = 0.0;
            
            //Creating a single tab to hold the main window
            var homeTab = creatingTab(homeWindow, null, "Home");
                        
            mainTabController.addTab(homeTab);
            
            //Creating animation for mainTabController's transition
            creatinCurveAnimation(mainTabController, Ti.UI.ANIMATION_CURVE_EASE_IN_OUT, 1, 1000);
            
            //Openign the mainTabController
            mainTabController.open();
            
        };
    }, givenSpeed);
};//End Of Function applicationWindowController




/* Custom Function Class #3: creatingAwholeTableView
 * 
 * Arguments Specified in the following order: 
 * 1-Argument Remote API Object
 *
 */
//Function creates a whole Table View, apply elements of the passed remote API object and returns it
function creatingAwholeTableView(APIpassedSecond){
    
    //Creating search bar for table
    var searchBar = Titanium.UI.createSearchBar({
        hintText: "Search By Years",
        showCancel:false,
        height:10,
        top:0
        
    });
    
    //Creating table 
    var tableViewReady = creatingTableView(true, searchBar, true, 0);
    
    //Hidding the search feature
    tableViewReady.searchHidden = true;
    
    //Desabling the row's click interaction
    tableViewReady.allowsSelection = false;
    
    //Array holder for sections
    var universalSections  = [];
    
    // Creating section
    var universalSectionBuilder = creatingSectionView("Peploe I Follow");
    
    //Looping through remote API's object
    for (var i = 0, j = APIpassedSecond.length; i < j; i++){
            
            //BUG FOUND on Titanium!
            //Had to concatinate the "loging" property with multiple spaces for indenting the username due to the "built-in" indent feature became useles when using the search feature.
            var universalTableRowsFucntion = creatingTableRows("                "+APIpassedSecond[i].login, false);
            
            //Creating image views for adding avatars from remote API to rows 
            var universalViewForRow = creatingImageView(APIpassedSecond[i].avatar_url, 75, 75, null, 0, null, null);
            
            universalTableRowsFucntion.add(universalViewForRow);
            
            universalSectionBuilder.add(universalTableRowsFucntion);
             
    };//End of Loop
    
    //Pushing sections
    universalSections.push(universalSectionBuilder);
    
    //Setting data for table
    tableViewReady.setData(universalSections);
    
    //Returning the whole table object 
    return tableViewReady;
    
};// End Of Function creatingAwholeTableView

//Exporting the whole thing! LOL!!!!!
exports.dataControl = APIdataController;

