//************************************************ QueryREAD **********************************************************************//
/* -----@ Query Add-on READ @-----
 * 
 * #### The QueryREAD add-on's features are: #### 
 * # This function reads the SQLite's database table.
 * # Runs when the application is initializing to output the data from the database if any.
 * # Creates the rows, the table view's section and returns it ready for adding it to the root window's table view.
 * 
 * 
 * No arguments are accepted for this function...
 * 
 * 
 */
function readData(){
    
    var datab = Ti.Database.open("passwordsDB");
    datab.execute("CREATE TABLE IF NOT EXISTS accounts (name TEXT, email TEXT, passwords TEXT)");    
    
    var TableRows = datab.execute("SELECT rowid, name, email, passwords FROM accounts");
    
    if (TableRows.rowCount == 0){
        
        // Function message that output feddback to the users when a field has an invalid data...
        var messageDialog = Ti.UI.createAlertDialog({
            message: "You have not saved any passwords. To save a password press the \"ADD\" symbol on the top right.",
            ok: "Dismiss",
            title: "No passwords found"
            }).show();
            
        TableRows.close();
        datab.close();    
    
    }else{
        
        // Array holder for sections view and creating the section
        var universalSections       = [];
        var universalSectionBuilder = creatingSectionView("Passwords saved: " + TableRows.rowCount);
        
        // Looping through the database to make the rows for the table view...
        while (TableRows.isValidRow()){
            
            // Setting the custom values to the rows....
            var universalTableRowsFucntion                    = creatingTableRows(TableRows.fieldByName("name"), false, false);
                universalTableRowsFucntion.identifierProperty = TableRows.fieldByName("rowid");
                universalTableRowsFucntion.emailProperty      = TableRows.fieldByName("email");
                universalTableRowsFucntion.pwdProperty        = TableRows.fieldByName("passwords");
           
            var buttonInfo = creatingButton(null, null, null, Titanium.UI.iPhone.SystemButton.INFO_LIGHT, 20, 20, 20, null, 20, 20);
    
            universalTableRowsFucntion.add(buttonInfo);
            universalSectionBuilder.add(universalTableRowsFucntion);
            
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