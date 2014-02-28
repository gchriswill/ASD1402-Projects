
//************************************************ QueryCONTROLLERS **********************************************************************//
/* -----@ Query root @-----
 * 
 * #### The QueryCONTROLLERS root super function classes are: ####
 * The folling list of Custom Function classes are in the folloing order for better app performace, 
 * less file clutter, fast acces and easier coding and better object-oriented scripting implementation:
 * 
 * Custom Function Class #1: ModalWindowController
 * Custom Function Class #2: ApplicationInitiationController
 * Custom Function Class #3: TableViewController
 */
 



/* Custom Function Class #1: ModalWindowController
 * 
 * Arguments Specified in the following order: 
 * 1-Target Window to applay the "modal" feature
 * 2-Navigation window created
 * 3-Navigation's left system button type value
 * 4-Navigation's left system button's function behavior
 * 5-Navigation's right system button type value
 * 6-Navigation's right system button's function behavior
 * 7-Function that executes optional features 
 * 
 */
//Function creates a modal window with all it structure and functionality ready for adding content to the window...
function ModalWindowController(addWin, modalWindow, leftSystemButton, leftButtonFunction, rightSystemButton, rightButtonFunction, optionFunction){
    
    var buttonLeft  = creatingButton(leftSystemButton, null, null, null, null, null, null, null, null, null);
    var buttonRight = creatingButton(rightSystemButton, null, null, null, null, null, null, null, null, null);
    
    optionFunction();
    
    buttonLeft.addEventListener("click", function(){
        modalWindow.close({modal: true});
        leftButtonFunction();
        ApplicationInitiationController(null, 0, 1, 1, 62.5, 0);
    });
    
    buttonRight.addEventListener("click", function(){
        rightButtonFunction();
    });
    addWin.setRightNavButton(buttonRight);
    addWin.setLeftNavButton(buttonLeft);
    modalWindow.open({modal: true});

};//End Of Function ModalWindowController




/* Custom Function Class #2: ApplicationInitiationController
 * 
 * Arguments Specified in the following order: 
 * 1-New JS file path to load and execute 
 * 2-counter start value number
 * 3-counter increaser value number
 * 4- counter stop value number for the stop condition
 * 5-speed value number in miliseconds
 * 6- function call for next destination view
 * 7- 
 * 
 */
//Function sets a timer for opening the app home window on the landing page. Also, sets the loading indicator animation...
//IMPORTANT NOTE: New argument has been temporary passed for Local Storage object...
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
            var homeWindow = creatingWindow(null, "#fff", null, null, null, "#fff", fileTarget);
            var buttonADD  = creatingButton( Titanium.UI.iPhone.SystemButton.ADD, null, null,  null, null, null, null, null, null, null);
            
            homeWindow.setRightNavButton(buttonADD);
            //homeWindow.tabBarHidden = true;
            
            // Calling the "TableViewController" function for displaying and setting the whole table
            var testtable = TableViewController(homeWindow);
            homeWindow.add(testtable);
            
            // Creating a single tab to hold the root window
            var homeTab = creatingTab(homeWindow, Titanium.UI.iPhone.SystemIcon.FAVORITES, "Password Manager");
            mainTabController.addTab(homeTab);
            
            // Creating animation for mainTabController's transition
            creatinCurveAnimation(mainTabController, Ti.UI.ANIMATION_CURVE_EASE_IN_OUT, 1, 1000);
            
            // Adding event listener to the ADD button...
            buttonADD.addEventListener("click", function(){
                
                // Creating a root window, a navigation window, 3 labels and a input field for each labels. This input fields has a null value and a hint text
                var addWindow        = creatingWindow("Save Your Password", "#cecece", null, null, null, "#fff", fileTarget);
                var detailNavigation = creatingNavWindow(addWindow);
                
                var itemLable1           = creatingLabel("Account Type:", "#333", null, 14, "arial", Ti.UI.SIZE, 40, 40, 10, null, null);
                var accountNameTextField = creatingTextField(Ti.UI.INPUT_BORDERSTYLE_ROUNDED, true, 4, "Website URL", false, "#333", 200, 40,  40, null, 10, null);
                
                var itemLable2           = creatingLabel("Login email:", "#333", null, 14, "arial", Ti.UI.SIZE, 40, accountNameTextField.top + accountNameTextField.height + 40, 10, null, null);
                var emailTextField       = creatingTextField(Ti.UI.INPUT_BORDERSTYLE_ROUNDED, true, 4, "Login email", false, "#333", 200, 40, accountNameTextField.top + accountNameTextField.height + 40, null, 10, null);            
                
                var itemLable3           = creatingLabel("Password:", "#333", null, 14, "arial", Ti.UI.SIZE, 40, emailTextField.top + emailTextField.height + 40, 10, null, null);
                var passwordTextField    = creatingTextField(Ti.UI.INPUT_BORDERSTYLE_ROUNDED, true, 9, "Login password", true, "#333", 200, 40, emailTextField.top + emailTextField.height + 40, null, 10, null);
                
                addWindow.add(itemLable1, itemLable2, itemLable3);
                addWindow.add(accountNameTextField, emailTextField, passwordTextField);
                
                // Calling the "ModalWindowController" function and passes multiple objects attributes including custom functions for to be use in the "ModalWindowController"... 
                ModalWindowController(addWindow, detailNavigation, Titanium.UI.iPhone.SystemButton.CANCEL, function(){},
                    Titanium.UI.iPhone.SystemButton.SAVE, function(){
                        var Qcreate = require("CRUD/QueryCREATEandUPDATE");
                        Qcreate.databaseCreateAndUpdate("INSERT INTO accounts (name, email, passwords) VALUES (?, ?, ?)", accountNameTextField.getValue(), emailTextField.getValue(), passwordTextField.getValue(), detailNavigation);
                
                }, function(){});
                
            });
            
            // Openign the mainTabController
            mainTabController.open();
            
        };
    }, givenSpeed);
};// End Of Function ApplicationInitiationController




/* Custom Function Class #3: TableViewController
 * 
 * Arguments Specified in the following order: 
 * 1-Argument Local Storage Object
 *
 */
// Function creates a whole Table View, apply elements of the passed Local Storage object and returns it
function TableViewController(windowTarget){
    var Qread = require("CRUD/QueryREAD");
    // Creating search bar for table
    var searchBar = Titanium.UI.createSearchBar({
        hintText: "Search By Years",
        showCancel:false,
        height:10,
        top:0
        
    });
    
    // Creating table and hidding the search feature
    var tableViewReady = creatingTableView(true, searchBar, true, 0);
    tableViewReady.searchHidden = true;
    
    // Calling the database to read it and create the rows and sections for the table view object, 
    // and returns the section with all the properties already setup and ready for to add it to the table view object. 
     var sectionReady = Qread.databaseREAD();
    
    // Setting data for table
    tableViewReady.setData(sectionReady);
    
    // Setting an event propagation to the table view...
    tableViewReady.addEventListener("click", function(e){
       
       if (e.source.identifierProperty){
           
           // Creating a root window, a navigation window, 3 labels and a input field for each label, and setting the current values for the input fields...
           var detailWindow     = creatingWindow("Update your passwords?", "#cecece", null, null, null, "#fff", null);
           var detailNavigation = creatingNavWindow(detailWindow);

           var itemLable1           = creatingLabel("Account Type:", "#333", null, 14, "arial", Ti.UI.SIZE, 40, 40, 10, null, null);
           var accountNameTextField = creatingTextField(Ti.UI.INPUT_BORDERSTYLE_ROUNDED, true, 4, null, false, "#333", 200, 40,  40, null, 10, null);
           accountNameTextField.setValue(e.source.title);
           
           var itemLable2           = creatingLabel("Login email:", "#333", null, 14, "arial", Ti.UI.SIZE, 40, accountNameTextField.top + accountNameTextField.height + 40, 10, null, null);
           var emailTextField       = creatingTextField(Ti.UI.INPUT_BORDERSTYLE_ROUNDED, true, 4, null, false, "#333", 200, 40, accountNameTextField.top + accountNameTextField.height + 40, null, 10, null);            
           emailTextField.setValue(e.source.emailProperty);
           
           var itemLable3           = creatingLabel("Password:", "#333", null, 14, "arial", Ti.UI.SIZE, 40, emailTextField.top + emailTextField.height + 40, 10, null, null);
           var passwordTextField    = creatingTextField(Ti.UI.INPUT_BORDERSTYLE_ROUNDED, true, 9, null, true, "#333", 200, 40, emailTextField.top + emailTextField.height + 40, null, 10, null);
           passwordTextField.setValue(e.source.pwdProperty);
           
           detailWindow.add(itemLable1, itemLable2, itemLable3);
           detailWindow.add(accountNameTextField, emailTextField, passwordTextField);
           
           // Calling the "ModalWindowController" function and passes multiple objects attributes including custom functions for to be use in the "ModalWindowController"... 
           ModalWindowController(detailWindow, detailNavigation, Titanium.UI.iPhone.SystemButton.DONE, function(){},
                Titanium.UI.iPhone.SystemButton.SAVE, function(){
                    
                    // Requiring the QueryCreate module only when its necesary.
                    var Qcreate = require("CRUD/QueryCREATEandUPDATE");
                    
                    // Calling the create and update function and passing SQLite's queries commands as arguments. Also passing the new updated values of the field's entries...
                    Qcreate.databaseCreateAndUpdate("UPDATE accounts SET name=?, email=?, passwords=? WHERE rowid=" + e.source.identifierProperty, accountNameTextField.getValue(), emailTextField.getValue(), passwordTextField.getValue(), detailNavigation);
                    
                    
                }, function(){
                    
                    var InvicibleButtonSpace1 = creatingButton(Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE, null, null, null, null, null, null, null, null, null);
                    var trashButton           = creatingButton(Titanium.UI.iPhone.SystemButton.TRASH, null, null, null, null, null, null, null, null, null);
                    var passID                = e.source.identifierProperty;
                    
                    // Setting an event listener to the trash button
                    trashButton.addEventListener("click", function(){
                        
                        // Requiring the QueryCreate module only when its necesary.
                        var Qdelete = require("CRUD/QueryDELETE");
                        
                        // Calling the delete function for deleting items
                        Qdelete.databaseDELETE(false, passID);
                        detailNavigation.close({modal: true});
                    }); 
                    
                    // Creating a tool bar "place holder" for holding the trash button...
                    var detailToolbar = Titanium.UI.iOS.createToolbar({
                        items:[InvicibleButtonSpace1, InvicibleButtonSpace1, trashButton, InvicibleButtonSpace1, InvicibleButtonSpace1],
                        bottom:0,
                        borderTop:true,
                        borderBottom:false
                    }); 
                    
                    detailWindow.add(detailToolbar);
           });
       };
    });
    
    // Returning the whole table object 
    return tableViewReady;
    
};// End Of Function TableViewController

//Exporting the whole thing! LOL!!!!!
exports.initController = ApplicationInitiationController;

