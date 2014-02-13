/*

Student: Christopher Gonzalez
Student number: 3302426
Current Class: Advance Scalable Data
Current Term: 1402
Current Instructor: Doug Arley
Degree: Mobile Development
Institution: Full Sail University

*/

//Including Query Shortcut Library
Ti.include("TiQuery.js");

//Requiering Modulization
var dataInfo = require("TiQuery2");

//Setting Default background color
Titanium.UI.setBackgroundColor("#fff");

//Creating initial landing window
var landingWindow = creatingWindow("#fff", null, null, null, "#fff", null);

//The following "dataControl" method has these features:
// 1 - Sends the method and the API's URL for accessing data to remote API to the conneting function executer
// 2 - Accesing data from remote API
// 3 - Creating new window with transition
// 4 - Creating table with search feature for setting rows to hold remote API data's object
// 5 - Accessing two properties from objects: usernamea and avatars

dataInfo.dataControl("GET", "https://api.github.com/users/GchrisWill/following");

//Opening landing window
landingWindow.open();

