var arrayHolder = [];

//Literal Notation Objects
var object1 = {
    data :{
        title           : "May",
        year            : 2012,
        FSUclass        : "english composition",
        GradeType       : ["A+", "A", "B+", "B", "C+", "C", "D"],
        yourGrade       : 93.80,
        completed       : true,
        modify          : function(){//Function that modify the string from FSUclass 
                           var newString = this.FSUclass[0].toUpperCase() + this.FSUclass.slice(1, 8) + this.FSUclass[8].toUpperCase() + this.FSUclass.slice(9, this.FSUclass.length);
                           return newString;
                          },
        verify          : function(gradePercentage){
                            var newYourGrade = "In " + object1.data.title + ", "+ object1.data.year + " your over all GPA in \n" + this.modify() + "\'s class was: \n " + this.yourGrade + "% (" + this.GradeType[1] + " 3.5)";
                            return newYourGrade;
                          }
        
    }
};

var object2 = {
    data :{
        title           : "June",
        year            : 2012,
        FSUclass        : "mobile media Design 1",
        GradeType       : ["A+", "A", "B+", "B", "C+", "C", "D"],
        yourGrade       : 89.20,
        completed       : true,
        modify          : function(){//Function that modify the string from FSUclass
                           var newString = this.FSUclass[0].toUpperCase() + this.FSUclass.slice(1, 7) + this.FSUclass[7].toUpperCase() + this.FSUclass.slice(8, 13) + this.FSUclass[13].toUpperCase() + this.FSUclass.slice(14, this.FSUclass.length);
                           return newString;
                          },
        verify          : function(gradePercentage){
                            var newYourGrade = "In " + object2.data.title + ", "+ object2.data.year + " your over all GPA in \n" + this.modify() + "\'s class was: \n " + this.yourGrade + "% (" + this.GradeType[2] + " 3.0)";
                            return newYourGrade;
                          }
        
    }
};
    
var object3 = {
    data :{
        title           : "September",
        year            : 2012,
        FSUclass        : "mobile media Design 2",
        GradeType       : ["A+", "A", "B+", "B", "C+", "C", "D"],
        yourGrade       : 74.75,
        completed       : true,
        modify          : function(){//Function that modify the string from FSUclass
                           var newString = this.FSUclass[0].toUpperCase() + this.FSUclass.slice(1, 7) + this.FSUclass[7].toUpperCase() + this.FSUclass.slice(8, 13) + this.FSUclass[13].toUpperCase() + this.FSUclass.slice(14, this.FSUclass.length);
                           return newString;
                          },
        verify          : function(gradePercentage){
                            var newYourGrade = "In " + object3.data.title + ", "+ object3.data.year + " your over all GPA in " + this.modify() + "\'s \n class was: " + this.yourGrade + "% (" + this.GradeType[5] + " 2.0)";
                            return newYourGrade;
                          }
        
    }
};
        
var object4 = {
    data :{
        title           : "June",
        year            : 2013,
        FSUclass        : "scalable data infrastructure",
        GradeType       : ["A+", "A", "B+", "B", "C+", "C", "D"],
        yourGrade       : 88.36,
        completed       : true,
        modify          : function(){//Function that modify the string from FSUclass
                           var newString = this.FSUclass[0].toUpperCase() + this.FSUclass.slice(1, 9) + this.FSUclass[9].toUpperCase() + this.FSUclass.slice(10, 14) + this.FSUclass[14].toUpperCase() + this.FSUclass.slice(15, this.FSUclass.length);
                           return newString;
                          },
        verify          : function(gradePercentage){
                            var newYourGrade = "In " + object4.data.title + ", "+ object4.data.year + " your over all GPA in \n" + this.modify() + "\'s class \n was: " + this.yourGrade + "% (" + this.GradeType[2] + " 3.0)";
                            return newYourGrade;
                          }
        
    }
};
        
var object5 = {
    data :{
        title           : "August",
        year            : 2013,
        FSUclass        : "Visual Frameworks",
        GradeType       : ["A+", "A", "B+", "B", "C+", "C", "D"],
        yourGrade       : 100,
        completed       : true,
        modify          : function(){//Function that modify the string from FSUclass
                           var newString = this.FSUclass[0].toUpperCase() + this.FSUclass.slice(1, 7) + this.FSUclass[7].toUpperCase() + this.FSUclass.slice(8, this.FSUclass.length);
                           return newString;
                          },
        verify          : function(gradePercentage){
                            var newYourGrade = "In " + object5.data.title + ", "+ object5.data.year + " your over all GPA in \n" + this.modify() + "\'s class \n was: " + this.yourGrade + "% (" + this.GradeType[0] + " 4.4)";
                            return newYourGrade;
                          }
        
    }
};

    
//Dot Notation Objects        
var object6 = {};
    object6.data = {};
    object6.data.title     = "January";
    object6.data.year      = 2014;
    object6.data.FSUclass  = "mobile intefaces and usability";
    object6.data.GradeType = ["A+", "A", "B+", "B", "C+", "C", "D"];
    object6.data.yourGrade = 89.36;
    object6.data.completed = true;
    object6.data.modify    = function(){//Function that modify the string from FSUclass
                                var newString = this.FSUclass[0].toUpperCase() + this.FSUclass.slice(1, 7) + this.FSUclass[7].toUpperCase() + this.FSUclass.slice(8, 17) + this.FSUclass[17].toUpperCase() + this.FSUclass.slice(18, 21)  + this.FSUclass[21].toUpperCase() + this.FSUclass.slice(22, this.FSUclass.length);
                                return newString;
                             };
    object6.data.verify    = function(gradePercentage){
                                var newYourGrade = "In " + object6.data.title + ", "+ object6.data.year + " your over all GPA in " + this.modify() + "\'s \n class was: " + this.yourGrade + "% (" + this.GradeType[2] + " 3.0)";
                                return newYourGrade;
                             };

var object7 = {};
    object7.data = {};
    object7.data.title     = "February";
    object7.data.year      = 2014;
    object7.data.FSUclass  = "advance scalable data";
    object7.data.GradeType = ["A+", "A", "B+", "B", "C+", "C", "D"];
    object7.data.yourGrade = "is not available yet.";
    object6.data.completed = false;
    object7.data.modify    = function(){//Function that modify the string from FSUclass
                                var newString = this.FSUclass[0].toUpperCase() + this.FSUclass.slice(1, 8) + this.FSUclass[8].toUpperCase() + this.FSUclass.slice(9, 17) + this.FSUclass[17].toUpperCase() + this.FSUclass.slice(18, this.FSUclass.length);
                                return newString;
                             };
    object7.data.verify    = function(gradePercentage){
                                var newYourGrade = "In " + object7.data.title + ", "+ object7.data.year + " your over all GPA in \n" + this.modify() + "\'s class \n " + this.yourGrade;
                                return newYourGrade;
                             };

var object8 = {};
    object8.data = {};
    object8.data.title     = "March";
    object8.data.year      = 2014;
    object8.data.FSUclass  = "advance visual framework";
    object8.data.GradeType = ["A+", "A", "B+", "B", "C+", "C", "D"];
    object8.data.yourGrade = "is not available yet.";
    object6.data.completed = false;
    object8.data.modify    = function(){//Function that modify the string from FSUclass
                                var newString = this.FSUclass[0].toUpperCase() + this.FSUclass.slice(1, 8) + this.FSUclass[8].toUpperCase() + this.FSUclass.slice(9, 15) + this.FSUclass[15].toUpperCase() + this.FSUclass.slice(16, this.FSUclass.length);
                                return newString;
                             };
    object8.data.verify    = function(gradePercentage){
                                var newYourGrade = "In " + object8.data.title + ", "+ object8.data.year + " your over all GPA in \n" + this.modify() + "\'s class \n " + this.yourGrade;
                                return newYourGrade;
                             };

var object9 = {};
    object9.data = {};
    object9.data.title     = "April";
    object9.data.year      = 2014;
    object9.data.FSUclass  = "apple programming language";
    object9.data.GradeType = ["A+", "A", "B+", "B", "C+", "C", "D"];
    object9.data.yourGrade = "is not available yet.";
    object6.data.completed = false;
    object9.data.modify    = function(){//Function that modify the string from FSUclass
                                var newString = this.FSUclass[0].toUpperCase() + this.FSUclass.slice(1, 6) + this.FSUclass[6].toUpperCase() + this.FSUclass.slice(7, 18) + this.FSUclass[18].toUpperCase() + this.FSUclass.slice(19, this.FSUclass.length);
                                return newString;
                             };
    object9.data.verify    = function(gradePercentage){
                                var newYourGrade = "In " + object9.data.title + ", "+ object9.data.year + " your over all GPA in \n" + this.modify() + "\'s class \n " + this.yourGrade;
                                return newYourGrade;
                             };         

var object10 = {};
    object10.data = {};
    object10.data.title = "May";
    object10.data.year = 2014;
    object10.data.FSUclass  = "mobile development frameworks 1";
    object10.data.GradeType = ["A+", "A", "B+", "B", "C+", "C", "D"];
    object10.data.yourGrade = "is not available yet.";
    object6.data.completed  = false;
    object10.data.modify    = function(){//Function that modify the string from FSUclass
                                var newString = this.FSUclass[0].toUpperCase() + this.FSUclass.slice(1, 7) + this.FSUclass[7].toUpperCase() + this.FSUclass.slice(8, 19) + this.FSUclass[19].toUpperCase() + this.FSUclass.slice(20, this.FSUclass.length);
                                return newString;
                              };
    object10.data.verify    = function(gradePercentage){
                                var newYourGrade = "In " + object10.data.title + ", "+ object10.data.year + " your over all GPA in \n" + this.modify() + "\'s class " + this.yourGrade;
                                return newYourGrade;
                              };


arrayHolder.push(object1.data, object2.data, object3.data, object4.data, object5.data, object6.data, object7.data, object8.data, object9.data, object10.data );

exports.arrayData = arrayHolder;
