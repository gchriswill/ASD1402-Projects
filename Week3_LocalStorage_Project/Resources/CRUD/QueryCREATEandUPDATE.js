//************************************************ QueryCREATEandDELETE **********************************************************************//
/* -----@ Query Add-on CREATEandDELETE @-----
 * 
 * #### The QueryCREATEandDELETE add-on's features are: #### 
 * # This function creates the SQLite's database from an initial state of the app or when the "ADD" is clicked
 * # Validates each input field of the form and refresh the root window including the table view
 * # Display the database rows's ammount, fileds's ammount and the whole SQLite database's table to the console
 * 
 * 
 * This function accepts the folling arguments:
 * 1- SQLite executable query
 * 2-First input field's value
 * 3-Second input field's value
 * 4-Third input field's value
 * 3-Navigation window to close when the function is done executing
 * 
 * 
 */

function createAndUpdateData(executeType, field1, field2, field3, modalWindow){
    
    var datab = Ti.Database.open("passwordsDB");
    datab.execute("CREATE TABLE IF NOT EXISTS accounts (name TEXT, email TEXT, passwords TEXT)");
    
    // Function message that output feddback to the users when a field has an invalid data...
    function errorMessage(messagepassed){
         
         var messageDialog = Ti.UI.createAlertDialog({
            message: messagepassed,
            ok: "Dismiss",
            title: "Error!"
            }).show();
            
         datab.close();
    };
    
    // Custom validation for input fields...
    if ( (field1 == null || field1 == "" || field1 == " ") || (field2 == null || field2 == "" || field2 == " ") || (field3 == null || field3 == "" || field3 == " ") ){
        
        errorMessage("All fields are requiered! \n Please try again wiht the appropiate data on all fields");
        
    } else if ( (field1.match(/\W/g) == null) || field1.lastIndexOf(".") + 1 == field1.length || field1.lastIndexOf(".") + 2 == field1.length){
        
        errorMessage("Please enter a valid URL...");
    
    } else if ( ( field2.search("@") == -1 ) || field2.indexOf("@") < 1 || field2.lastIndexOf(".") < field2.indexOf("@") + 2 || field2.lastIndexOf(".") + 2 >= field2.length ){
        
        errorMessage( "222Please, eneter a valid format of an email. \n There is no way to fool GchrisWill's string email validation condition... LOL");
        
    }else if (field3.length < 4){
        
        errorMessage("Please, try again with a password length of 5 charaters or more...");
    
    }else{
    
        var passwordArray = [field1, field2, field3];
        
        datab.execute(executeType, passwordArray);
        
        var TableRows = datab.execute("SELECT rowid, name, email, passwords FROM accounts");
        
        // Outputing the feddback of new rows's amount and fileds's ammount to the console...
        Ti.API.info("---------------------------------------------@ CREATE RUD: How many Rows on database? @---------------------------------------------");
        Ti.API.info("Row amount: " + TableRows.rowCount);
        
        var fieldCounter = TableRows.fieldCount();
        
        Ti.API.info("---------------------------------------------@ CREATE RUD: How many fields on rows? @---------------------------------------------");
        Ti.API.info("Field amount: " + fieldCounter);
        Ti.API.info("---------------------------------------------@ CREATE RUD: Displaying Table @---------------------------------------------");
        
        // Outputing the whole SQLite table to the console for visual representation...
        while (TableRows.isValidRow()){
            Ti.API.info("---- @ Accounts @---- Row Number: " + TableRows.fieldByName("rowid") + ", name: " + TableRows.fieldByName("name") + ", email: " + TableRows.fieldByName("email") + ", passwords: " + TableRows.fieldByName("passwords"));         
            TableRows.next();
        }
        
        TableRows.close();
        datab.close();
        
        // Refreshing the home window, the table and the database...
        QController.initController(null, 0, 1, 1, 62.5, 0);
        
        modalWindow.close({modal: true});
        
    };

};

exports.databaseCreateAndUpdate = createAndUpdateData;

