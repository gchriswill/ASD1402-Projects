

function createAndUpdateData(executeType, field1, field2, field3, field4, field5, modalWindow){
    
    var datab = Ti.Database.open("passwordsDB");
    datab.execute("CREATE TABLE IF NOT EXISTS accounts (rowid INTEGER, name TEXT, url TEXT, featured TEXT, typeidentifier INTEGER)" );
    
    // Function message that output feddback to the users when a field has an invalid data...
    function errorMessage(messagepassed){
         
         var messageDialog = Ti.UI.createAlertDialog({
            message: messagepassed,
            ok: "Dismiss",
            title: "Error!"
            }).show();
            
         datab.close();
    };
    
        var passwordArray = [field1, field2, field3, field4, field5];
        
        datab.execute(executeType, passwordArray);
        
        var TableRows = datab.execute("SELECT rowid, name, url, featured, typeidentifier FROM accounts" );
        
        // Outputing the feddback of new rows's amount and fileds's ammount to the console...
        Ti.API.info("---------------------------------------------@ CREATE RUD: How many Rows on database? @---------------------------------------------");
        Ti.API.info("Row amount: " + TableRows.rowCount);
        
        var fieldCounter = TableRows.fieldCount();
        
        Ti.API.info("---------------------------------------------@ CREATE RUD: How many fields on rows? @---------------------------------------------");
        Ti.API.info("Field amount: " + fieldCounter);
        Ti.API.info("---------------------------------------------@ CREATE RUD: Displaying Table @---------------------------------------------");
        
        // Outputing the whole SQLite table to the console for visual representation...
        while (TableRows.isValidRow()){
            Ti.API.info("---- @ Accounts @---- Row Number: " + TableRows.fieldByName("rowid") + ", name: " + TableRows.fieldByName("name") + ", URL: " + TableRows.fieldByName("url") + ", Featured: " + TableRows.fieldByName("featured") + ", Search Type: " + TableRows.fieldByName("typeidentifier") );         
            TableRows.next();
        }
        
        TableRows.close();
        datab.close();
        
        // Refreshing the home window, the table and the database...
        QController.initController(null, 0, 1, 1, 62.5, 0);
        
        modalWindow.close({modal: true});
        
    

};

exports.databaseCreateAndUpdate = createAndUpdateData;


function readData(){
    
    var datab = Ti.Database.open("passwordsDB");
    datab.execute( "CREATE TABLE IF NOT EXISTS accounts (rowid INTEGER, name TEXT, url TEXT, featured TEXT, typeidentifier INTEGER)" );    
    
    var TableRows = datab.execute( "SELECT rowid, name, url, featured, typeidentifier FROM accounts" );
    
    if (TableRows.rowCount == 0){
        
        // Function message that output feddback to the users when a field has an invalid data...
        var messageDialog = Ti.UI.createAlertDialog({
            message: "You have not favorite any repo. To favorite a repo search for it first then save it...",
            ok: "Dismiss",
            title: "No Favorites Found!"
            }).show();
            
        TableRows.close();
        datab.close();
        
        var universalSections = [null];
        return universalSections;
    
    }else{
        
        // Array holder for sections view and creating the section
        var universalSections       = [];
        var universalSectionBuilder = creatingSectionView(" Favorites:" + TableRows.rowCount);
        
        // Looping through the database to make the rows for the table view...
        while (TableRows.isValidRow()){

            // Setting the custom values to the rows....
            var universalTableRowsFunction = creatingTableRows(TableRows.fieldByName("name"), true, false);
                universalTableRowsFunction.rowidField = TableRows.fieldByName("rowid");
                universalTableRowsFunction.BrowserURL = TableRows.fieldByName("url");
                universalTableRowsFunction.featuredProp = TableRows.fieldByName("featured");
                universalTableRowsFunction.rowTypeIdentifier = TableRows.fieldByName("typeidentifier");
           
            var buttonInfo = creatingButton(null, null, null, Titanium.UI.iPhone.SystemButton.INFO_LIGHT, 20, 20, 20, null, 20, 20);
    
            universalTableRowsFunction.add(buttonInfo);
            universalSectionBuilder.add(universalTableRowsFunction);
            
            TableRows.next();
        };
        
        // Pushing sections
        universalSections.push(universalSectionBuilder);
        
        TableRows.close();
        datab.close();
        
        return universalSections;
    };
};

exports.databaseREAD = readData;


function deleteData(deleteAll, idTarget){
    
    var datab = Ti.Database.open("passwordsDB");
    datab.execute( "CREATE TABLE IF NOT EXISTS accounts (rowid INTEGER, name TEXT, url TEXT, featured TEXT, typeidentifier INTEGER)" );
    var TableRows = datab.execute( "SELECT rowid, name, url, featured, typeidentifier FROM accounts" );
    
    function displayTableOnConsole(){
        
        // Outputing the feddback of new rows's amount and fileds's ammount to the console...
        var TableRowsCheck = datab.execute( "SELECT rowid, name, url, featured, typeidentifier FROM accounts" );
        Ti.API.info("---------------------------------------------@ CRU DELETE: How many Rows? @---------------------------------------------");
        Ti.API.info("Row amount: " + TableRowsCheck.rowCount);
        
        var fieldCounter = TableRowsCheck.fieldCount();
        
        Ti.API.info("---------------------------------------------@ CRU DELETE: How many fields? @---------------------------------------------");
        Ti.API.info("Field amount: " + fieldCounter);
        
    };
    
    if (TableRows.rowCount == 0){
        
        // Message for users that tell them that there is no data on local storage...
        var messageDialog1 = Ti.UI.createAlertDialog({
            message: "You do not have any favorite search to delete...",
            ok: "Dismiss",
            title: "No search found!"
        }).show();
        
        TableRows.close();
        datab.close(); 
           
    }else if (deleteAll == false){
        
        // Message for users that tell them that the selected rows had been deleted...
        var messageDialog2 = Ti.UI.createOptionDialog({
            cancel: 1,
            options: ["Delete", "Cancel"],
            selectedIndex: 1,
            destructive: 0,
            title: "Are you sure you want to delete the selected favorite search???"
        });
        
        // Setting the event listener to the option dialog
        messageDialog2.addEventListener("click", function(e){
            
            // Conditional that verifies what option was selected from the dialog button 
            if ( e.index == e.source.cancel){
                
                 var messageDialog3 = Ti.UI.createAlertDialog({
                         message: "Your selected favorite search was NOT deleted...",
                         ok: "Dismiss",
                         title: "Delete operation canceled"
                }).show();
                
                // Calling the methods and functions to: close the database's rows, close the entire database and refresh the app
                TableRows.close();
                datab.close();
                QController.initController(null, 0, 1, 1, 62.5, 0);
            
            }else{
            
                var messageDialog4 = Ti.UI.createAlertDialog({
                         message: "Your selected favorite search was deleted...",
                         ok: "Dismiss",
                         title: "Delete operation completed"
                }).show();
                
                // Executing the delete c
                datab.execute("DELETE FROM accounts WHERE rowid=" + idTarget);
                
                // Calling the methods and functions to: console log, close the database's rows, close the entire database and refresh the app   
                displayTableOnConsole();
                TableRows.close();
                datab.close();
                QController.initController(null, 0, 1, 1, 62.5, 0);
            };
        
        });
        
        // Calling an option dialog to show when the user tries to delete an item... 
        messageDialog2.show();
    
    }else{
        
        var DialogOptions = {
            cancel: 1,
            options: ["Delete", "Cancel"],
            selectedIndex: 1,
            destructive: 0,
            title: "Are you sure you want to DELETE all your favorites search???"
        };
        
        var warningDialog = Ti.UI.createOptionDialog(DialogOptions);
        
        warningDialog.addEventListener("click", function(e){
            
            if(e.index == e.source.destructive){
                
                var messageDialog5 = Ti.UI.createAlertDialog({
                     message: "All of your favorites searches were deleted...",
                     ok: "Dismiss",
                     title: "Delete operation completed"
                 }).show();
                
                datab.execute("DELETE FROM accounts");
                
                displayTableOnConsole();
                
            }else{
                 
                 var messageDialog6 = Ti.UI.createAlertDialog({
                     message: "Your favorites searches weren't deleted...",
                     ok: "Dismiss",
                     title: "Delete operation canceled"
                 }).show();
                 
            };
            
            TableRows.close();
            datab.close();
        
        });
        
        warningDialog.show();
    };
    
};

exports.databaseDELETE = deleteData;

