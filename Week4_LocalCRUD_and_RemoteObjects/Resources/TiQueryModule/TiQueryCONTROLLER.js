

function ModalWindowController(infoWin, modalWindow, leftSystemButton, leftButtonFunction, rightSystemButton, rightButtonFunction, optionFunction){
    
    var buttonLeft  = creatingButton(leftSystemButton, null, null, null, null, null, null, null, null, null);
    var buttonRight = creatingButton(rightSystemButton, null, null, null, null, null, null, null, null, null);
    
    optionFunction();
    
    buttonLeft.addEventListener("click", function(){
        modalWindow.close({modal: true});
        leftButtonFunction();
        //ApplicationInitiationController(null, 0, 1, 1, 62.5, 0);
    });
    
    buttonRight.addEventListener("click", function(){
        rightButtonFunction();
    });
    infoWin.setRightNavButton(buttonRight);
    infoWin.setLeftNavButton(buttonLeft);
    modalWindow.open({modal: true});

};//End Of Function ModalWindowController
exports.newModal = ModalWindowController;

function ApplicationInitiationController(fileTarget, counterStartPoint, counterPlus, counterStopConditionValue, givenSpeed, nextDestination){ 
    
    // Interval loop counter
    var counter = counterStartPoint;
    
    // Creating deafult activity indicator
    var loadingIndicator = creatingActivityIndicator();
    landingWindow.add(loadingIndicator);
    
    // Setting interval for timing the landing root window
    var timer = setInterval(function(){
            
        counter+=counterPlus;
        
        // Condition to stop the interval and executes the rest of the source code...
        if (counter == counterStopConditionValue) {
            clearInterval(timer);
            landingWindow.remove(loadingIndicator);
            loadingIndicator = null;
            
            // Creating the Tab Group for app navigation""
            var mainTabController     = Ti.UI.createTabGroup({});
            mainTabController.opacity = 0.0;
            
            // Creating a initial root window and the "ADD" button. This root window is for displaying the initial table view...
            var searchWindow = creatingWindow(null, "#fff", null, null, null, "#fff", fileTarget);
            var buttonInfo   = creatingButton( Titanium.UI.iPhone.SystemButton.INFO_LIGHT, null, null,  null, null, null, null, null, null, null);
            var searchTextField = creatingTextField(Ti.UI.INPUT_BORDERSTYLE_ROUNDED, true, 4, "Search on Github...", false, "#333", null, 35, 10, 10, 10, null);
            searchTextField.returnKeyType = Titanium.UI.RETURNKEY_SEARCH;
            searchWindow.setRightNavButton(buttonInfo);
            searchWindow.add(searchTextField);
            
            var FavoritesWindow = creatingWindow(null, "#fff", null, null, null, "#fff", null);
            
            var filterLable = creatingLabel("Choose your search type! \n (required)", "#333", "center", 16, "arial", Ti.UI.SIZE, 40, 80, null, null, null);
            
            var filterButtonbar = Titanium.UI.iOS.createTabbedBar({
                labels:["Repos", "Users", "Issues"],
                backgroundColor: "#336699",
                style: Titanium.UI.iPhone.SystemButtonStyle.BAR,
                top: 55,
                left: 10,
                right: 10,
                height: 25,
              
            });
            
            var searchMotivationImage = creatingImageView("coderCat.png", null, null, null,null, null, 0);
            
            searchWindow.add(searchMotivationImage);
            searchWindow.add(filterButtonbar);
            searchWindow.add(filterLable);
            var filteredTypeValue = {} ;
            
            filterButtonbar.addEventListener("click", function(e){
                
                switch(e.index){
                    case 0: 
                        filteredTypeValue.APIURL = "https://api.github.com/search/repositories?q=";
                        
                        filteredTypeValue.searchType = "full_name";
                        filteredTypeValue.searchFeatured = "description";
                        filteredTypeValue.searchIdentifier = 0;
                        break;
                    case 1: 
                        filteredTypeValue.APIURL = "https://api.github.com/search/users?q=";
                        filteredTypeValue.searchType = "login";
                        filteredTypeValue.searchFeatured = "avatar_url";
                        filteredTypeValue.searchIdentifier = 1;
                        break;
                    case 2: 
                        filteredTypeValue.APIURL = "https://api.github.com/search/issues?q=";
                        filteredTypeValue.searchType = "title";
                        filteredTypeValue.searchFeatured = "state";
                        filteredTypeValue.searchIdentifier = 2;
                        break;
                };
                
                filteredTypeValue.searchEnabledBoolean = true;
            });
            
            searchTextField.addEventListener("return", function(){
        
                if (filteredTypeValue.searchEnabledBoolean == true){
        
                    //Ti.API.info(filteredTypeValueTest.APIURL + searchBar.getValue());
                
                    var connectionExecuter = Ti.Network.createHTTPClient({
                        //On successful load function
                        onload : function(e) {
                            Ti.API.info("-----@ API ACCESS GRANTED: " + connectionExecuter.responseText);
                            var dataExtracted = JSON.parse(connectionExecuter.responseText);
                            Ti.API.info(dataExtracted.total_count);
                        
                            var resultTable = TableViewController(dataExtracted, filteredTypeValue);
                            resultTable.opacity = 0.0;
                            creatinCurveAnimation(resultTable, Ti.UI.ANIMATION_CURVE_EASE_IN_OUT, 1, 1000);
                            searchWindow.add(resultTable);
                        },
             
                        //On unsuccessful load function
                        onerror : function(e) {
                 
                            //Logging connection errors
                            Ti.API.debug(e.error);
                     
                            //Logging connection status
                            Ti.API.info("-----@ API ACCESS DENIED or ERROR CONNECTION @-----");
                        },
             
                    //Setting a time disconnetion for the connectionExecuter object
                    timeout : 20000
           
                    });
    
                    //Opening connection
                    connectionExecuter.open("GET", filteredTypeValue.APIURL + searchTextField.getValue() );
    
                    //Sending request
                    connectionExecuter.send();
                }else{
                    alertMsg1("Please choose a search type and then try again...");
                };
         
            });            
           
            // Creating a single tab to hold the root window
            var searchTab = creatingTab(searchWindow, Titanium.UI.iPhone.SystemIcon.SEARCH, "Search");
            var favTab = creatingTab(FavoritesWindow, Titanium.UI.iPhone.SystemIcon.FAVORITES , "Favorites");
            
            
            mainTabController.addTab(searchTab);
            mainTabController.addTab(favTab);
            
            // Creating animation for mainTabController's transition
            creatinCurveAnimation(mainTabController, Ti.UI.ANIMATION_CURVE_EASE_IN_OUT, 1, 1000);
            
            // Adding event listener to the ADD button...
            buttonInfo.addEventListener("click", function(){
                
                // Creating a root window, a navigation window, 3 labels and a input field for each labels. This input fields has a null value and a hint text
                var infoWindow       = creatingWindow("Hints and Credits", "#fff", null, null, null, "#fff", fileTarget);
                var detailNavigation = creatingNavWindow(infoWindow);
                var infoLable = creatingLabel("@ Advance Search properties @ \n ---------------------------------------------- \n Repos --> user: \"username\" \n \n Repos --> language: \"syntax\" \n ---------------------------------------------- \n Users --> type: \"term (organization)\" \n ---------------------------------------------- \n Issues --> involves: \"username\" ",  "#333", "center", 16, "arial", Ti.UI.SIZE, Ti.UI.SIZE, 10, null, null, null);
                var aboutLable = creatingLabel("Credits: \n @TiQuery Custom Module by Christopher Gonzalez - @GchrisWill \n \n @Octocat images by Cameron McEfee - @cameronmcefee",  "#333", "center", 16, "arial", Ti.UI.SIZE, Ti.UI.SIZE, null, null, null, 200);
                
                infoWindow.add(infoLable, aboutLable);
                
                // Calling the "ModalWindowController" function and passes multiple objects attributes including custom functions for to be use in the "ModalWindowController"... 
                ModalWindowController(infoWindow, detailNavigation, Titanium.UI.iPhone.SystemButton.DONE, function(){}, Titanium.UI.iPhone.SystemButton.CONTACT_ADD, function(){
                    var aboutWindow = creatingWindow("GchrisWill's Profile", "#fff", null, null, null, "#fff", fileTarget);
                    var webview = Titanium.UI.createWebView({url:"https://github.com/GchrisWill"});
                    aboutWindow.add(webview);
                    detailNavigation.openWindow(aboutWindow);
                
                }, function(){});
                
            });
            var searchBar = Titanium.UI.createSearchBar({
                hintText: "Search on GitHub...",
                showCancel:false,
                height:10,
                top:0
                
                
            });
            ( function fastScriting(){
                
                var Qread = require("TiQueryModule/TiQueryCRUD");
                
                var newQSections = Qread.databaseREAD();
            
                var tableViewReady = creatingTableView(true, searchBar, true, 0);
            
                tableViewReady.setData(newQSections);
            
                FavoritesWindow.add(tableViewReady);
            }() );
            

            // Openign the mainTabController
            mainTabController.open();
        };
    }, givenSpeed);
};// End Of Function ApplicationInitiationController


function TableViewController(dataExtracted, filteredTypeValue ){
    
    // Creating search bar for table
    var searchBar = Titanium.UI.createSearchBar({
        hintText: "Search on GitHub...",
        showCancel:false,
        height:10,
        top:0
        
        
    });
    
    var tableViewReady = creatingTableView(true, searchBar, true, 0);
    tableViewReady.top = 125;
    var sectionReady = [];
    var universalSectionBuilder = creatingSectionView("Search Results: " + dataExtracted.total_count);
    
    for (var i = 0, j = dataExtracted.items.length; i < j; i++){
        Ti.API.info(dataExtracted.items[i][filteredTypeValue.searchType]);
        
        var universalTableRowsFunction = creatingTableRows(dataExtracted.items[i][filteredTypeValue.searchType], true, false);
        universalTableRowsFunction.rowidField = dataExtracted.items[i].id;
        universalTableRowsFunction.BrowserURL = dataExtracted.items[i].html_url;
        universalTableRowsFunction.featuredProp = dataExtracted.items[i][filteredTypeValue.searchFeatured];
        universalTableRowsFunction.rowTypeIdentifier = filteredTypeValue.searchIdentifier;
        
        universalSectionBuilder.add(universalTableRowsFunction);
    };//End of Loop
    
    sectionReady.push(universalSectionBuilder);
    tableViewReady.setData(sectionReady);
    
    // Setting an event propagation to the table view...
    tableViewReady.addEventListener("click", function(e){
       
       if (e.source.rowidField){
           
           Ti.API.info(" # ID @---> " + e.source.rowidField + " # HTML URL @---> " + e.source.BrowserURL + " # Feature @---> "+ e.source.featuredProp +" # search Type Identifier @---> "+ e.source.rowTypeIdentifier);
           
           // Creating a root window, a navigation window, 3 labels and a input field for each label, and setting the current values for the input fields...
           var detailWindow     = creatingWindow(e.source.title, "#fff", null, null, null, "#fff", null);
           var detailNavigation = creatingNavWindow(detailWindow);

           switch(e.source.rowTypeIdentifier){
               case 0:
                   var searchMotivationImage = creatingImageView("coderCatGirl.png", null, null, null,null, null, 0);
                   var detailLable = creatingLabel(e.source.title, "#333", null, 14, "arial", Ti.UI.SIZE, 40, 20, null, null, null);
                   var detailLable2 = creatingLabel(e.source.BrowserURL, "#333", null, 14, "arial", Ti.UI.SIZE, 40, 50, null, null, null);
                   var detailLable3 = creatingLabel(e.source.featuredProp, "#333", null, 14, "arial", Ti.UI.SIZE, 40, 80, null, null, null);
                   var detailLable4 = creatingLabel("Save the search to favorites?", "#333", null, 14, "arial", Ti.UI.SIZE, 40, 130, null, null, null);
                   detailWindow.add(searchMotivationImage);
                   detailWindow.add(detailLable, detailLable2, detailLable3, detailLable4);
                   
                   ModalWindowController(detailWindow, detailNavigation, Titanium.UI.iPhone.SystemButton.DONE, function(){},
                        Titanium.UI.iPhone.SystemButton.SAVE, function(){
                        
                        // Requiring the QueryCreate module only when its necesary.
                        var Qcreate = require("TiQueryModule/TiQUeryCRUD");
                    
                        // Calling the create and update function and passing SQLite's queries commands as arguments. Also passing the new updated values of the field's entries...
                        Qcreate.databaseCreateAndUpdate("INSERT INTO accounts (rowid, name, url, featured, typeidentifier) VALUES (?, ?, ?, ?, ?)", e.source.rowidField, e.source.title, e.source.BrowserURL, e.source.featuredProp, e.source.rowTypeIdentifier, detailNavigation);
                   }, function(){});
                   break;
               
               case 1:
                   var searchMotivationImage = creatingImageView("coderCatGirl.png", null, null, null,null, null, 0);
                   var detailLable = creatingLabel(e.source.title, "#333", null, 14, "arial", Ti.UI.SIZE, 40, 20, null, null, null);
                   var detailLable2 = creatingLabel(e.source.BrowserURL, "#333", null, 14, "arial", Ti.UI.SIZE, 40, 50, null, null, null);
                   var detailLable3 = creatingImageView(e.source.featuredProp, 75, 75, 80, null, null, null);
                   var detailLable4 = creatingLabel("Save the search to favorites?", "#333", null, 16, "arial", Ti.UI.SIZE, 40, 160, null, null, null);
                   
                   detailWindow.add(searchMotivationImage);
                   detailWindow.add(detailLable, detailLable2, detailLable3, detailLable4);
                   
                   ModalWindowController(detailWindow, detailNavigation, Titanium.UI.iPhone.SystemButton.DONE, function(){},
                        Titanium.UI.iPhone.SystemButton.SAVE, function(){
                        
                        // Requiring the QueryCreate module only when its necesary.
                        var Qcreate = require("TiQueryModule/TiQUeryCRUD");
                    
                        // Calling the create and update function and passing SQLite's queries commands as arguments. Also passing the new updated values of the field's entries...
                        Qcreate.databaseCreateAndUpdate("INSERT INTO accounts (rowid, name, url, featured, typeidentifier) VALUES (?, ?, ?, ?, ?)", e.source.rowidField, e.source.title, e.source.BrowserURL, e.source.featuredProp, e.source.rowTypeIdentifier, detailNavigation);
                   }, function(){});
                   break;
               
               case 2:
                   var searchMotivationImage = creatingImageView("coderCatGirl.png", null, null, null,null, null, 0);
                   var detailLable = creatingLabel(e.source.title, "#333", null, 14, "arial", Ti.UI.SIZE, 40, 20, null, null, null);
                   var detailLable2 = creatingLabel(e.source.BrowserURL, "#333", null, 14, "arial", Ti.UI.SIZE, 40, 50, null, null, null);
                   var detailLable3 = creatingLabel("Status: " + e.source.featuredProp, "#333", null, 18, "arial", Ti.UI.SIZE, 40, 80, null, null, null);
                   var detailLable4 = creatingLabel("Save the search to favorites?", "#333", null, 16, "arial", Ti.UI.SIZE, 40, 160, null, null, null);
                   
                   detailWindow.add(searchMotivationImage);
                   detailWindow.add(detailLable, detailLable2, detailLable3, detailLable4);
                   
                   ModalWindowController(detailWindow, detailNavigation, Titanium.UI.iPhone.SystemButton.DONE, function(){},
                        Titanium.UI.iPhone.SystemButton.SAVE, function(){
                        
                        // Requiring the QueryCreate module only when its necesary.
                        var Qcreate = require("TiQueryModule/TiQUeryCRUD");
                    
                        // Calling the create and update function and passing SQLite's queries commands as arguments. Also passing the new updated values of the field's entries...
                        Qcreate.databaseCreateAndUpdate("INSERT INTO accounts (rowid, name, url, featured, typeidentifier) VALUES (?, ?, ?, ?, ?)", e.source.rowidField, e.source.title, e.source.BrowserURL, e.source.featuredProp, e.source.rowTypeIdentifier, detailNavigation);
                   }, function(){});
                   break;
            };
       };
       
    });
    
    return tableViewReady;
    
};

//Exporting the whole thing! LOL!!!!!
exports.initController = ApplicationInitiationController;

