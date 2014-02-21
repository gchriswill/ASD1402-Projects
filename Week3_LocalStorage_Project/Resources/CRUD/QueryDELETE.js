//************************************************ QueryDELETE **********************************************************************//
/* -----@ Query Add-on DELETE @-----
 * 
 * #### The QueryDELETE add-on's features are: #### 
 * # Deletes the data from a table view's row and simultaneously deletes the row of the database that is storaging the data of the deleted table view row.
 * # Deletes all the local storage that is on the database (this feature has been placed on an "issue" state and is currently not available due to some unidentified scope and bug that is affecting the functionality)
 * 
 * 
 * This function accepts the folling arguments:
 * 1- Delete all boolean
 * 2-id integer value of the database row
 * 
 * 
 */

// Main function for deleting the data.
function deleteData(deleteAll, idTarget){
    
    var datab = Ti.Database.open("passwordsDB");
    datab.execute("CREATE TABLE IF NOT EXISTS accounts (name TEXT, email TEXT, passwords TEXT)");
    var TableRows = datab.execute("SELECT rowid, name, email, passwords FROM accounts");
    
    function displayTableOnConsole(){
        
        // Outputing the feddback of new rows's amount and fileds's ammount to the console...
        var TableRowsCheck = datab.execute("SELECT rowid, name, email, passwords FROM accounts");
        Ti.API.info("---------------------------------------------@ CRU DELETE: How many Rows? @---------------------------------------------");
        Ti.API.info("Row amount: " + TableRowsCheck.rowCount);
        
        var fieldCounter = TableRowsCheck.fieldCount();
        
        Ti.API.info("---------------------------------------------@ CRU DELETE: How many fields? @---------------------------------------------");
        Ti.API.info("Field amount: " + fieldCounter);
        
    };
    
    if (TableRows.rowCount == 0){
        
        // Message for users that tell them that there is no data on local storage...
        var messageDialog1 = Ti.UI.createAlertDialog({
            message: "You do not have any SAVED passwords to delete...",
            ok: "Dismiss",
            title: "No passwords found!"
        }).show();
        
        TableRows.close();
        datab.close(); 
           
    }else if (deleteAll == false){
        
        // Message for users that tell them that the selected rows had been deleted...
        var messageDialog2 = Ti.UI.createAlertDialog({
            message: "Your selected password was deleted...",
            ok: "Dismiss",
            title: "Delete operation completed"
        }).show();
        
        datab.execute("DELETE FROM accounts WHERE rowid=" + idTarget);
        
        displayTableOnConsole();
        
        TableRows.close();
        datab.close();
    
    }else{
        
        // Desabled feature and work is in process. Bugs and unidetified scopes had not been found yet...
        var DialogOptions = {
            cancel: 1,
            options: ["Delete", "Cancel"],
            selectedIndex: 1,
            destructive: 0,
            title: "Are you sure you want to DELETE all your saved passwords???"
        };
        
        var warningDialog = Ti.UI.createOptionDialog(DialogOptions).show();
        
        // Issue #1: Event Listener is entering in an undefined scope that has not been identified yet...
        // Detail: When the event is trigered, the "delete all" feature breaks outputing and error to the console stating that the "warnign dialog" is undefined
        // and that is not an object..
        // The "delete" all feature has been censured until the bug is found and fixed...
        warningDialog.addEventListener("click", function(e){
            
            if(e.index == e.source.destructive){
                
                var messageDialog3 = Ti.UI.createAlertDialog({
                     message: "All of your passwords were deleted...",
                     ok: "Dismiss",
                     title: "Delete operation completed"
                 }).show();
                
                datab.execute("DELETE FROM accounts");
                
                displayTableOnConsole();
                
            }else{
                 
                 var messageDialog4 = Ti.UI.createAlertDialog({
                     message: "Your passwords weren't deleted...",
                     ok: "Dismiss",
                     title: "Delete operation canceled"
                 }).show();
                 
            };
            
            TableRows.close();
            datab.close();
        
        });
    };
};

exports.databaseDELETE = deleteData;
