//Search engine JS code
var app = angular.module("searchApp", []);

// Create the search filter
app.filter('searchFor', function(){
    return function(dataArr, searchString){

        if(!searchString){
            return dataArr;
        }
        
        var result = [];
        searchString = searchString.toLowerCase();

        // looping through the array
        angular.forEach(dataArr, function(item){
            if(item.pcode.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }
        });
        return result;
    };
});

// The controller
function searchController($scope){
    $scope.docinfo = [
        {pcode:"411048",dname:"Dr. Jyoti Shah",spe:"Dentist",city:"Pune",cont:"+91 9875445678"},
        {pcode:"411048",dname:"Dr. Prashant Raipure",spe:"ENT specialist",city:"Pune",cont:"+91 9875490678"},
        {pcode:"411048",dname:"Dr. Trupti Surwade",spe:"Dermatologist",city:"Pune",cont:"+91 9834445678"},
        {pcode:"440001",dname:"Dr. Shrushti Ranade",spe:"Gastroenterologist",city:"Nagpur",cont:"+91 9844445678"},
        {pcode:"440001",dname:"Dr. Suraj Deshmukh",spe:"Gynecologist",city:"Nagpur",cont:"+91 9844445609"},
        {pcode:"440001",dname:"Dr. Gaurav Kharat",spe:"Ophthalmologist",city:"Nagpur",cont:"+91 9984445609"},
        {pcode:"400052",dname:"Dr. Raj Sharma",spe:"ENT specialist",city:"Mumbai",cont:"+91 9984498709"},
        {pcode:"400052",dname:"Dr. Tushar Shah",spe:"ENT specialist",city:"Mumbai",cont:"+91 9984488709"},
        {pcode:"400052",dname:"Dr. Rahul Dev",spe:"Pediatrician",city:"Mumbai",cont:"+91 9984498659"},
        {pcode:"425411",dname:"Dr. Sanika Bhosale",spe:"Pediatrician",city:"Nandurbar",cont:"+91 9984234659"},
        {pcode:"425411",dname:"Dr. Disha Satpute",spe:"Gynecologist",city:"Nandurbar",cont:"+91 9884234659"},
        {pcode:"425411",dname:"Dr. Mohit Kakade",spe:"Dermatologist",city:"Nandurbar",cont:"+91 9984234659"},
        {pcode:"415611",dname:"Dr. Praful Karmarkar",spe:"Ophthalmologist",city:"Ratnagiri",cont:"+91 9984784659"},
        {pcode:"415611",dname:"Dr. Manisha Shahane",spe:"Dentist",city:"Ratnagiri",cont:"+91 9990784659"},
        {pcode:"415611",dname:"Dr. Mandeep Chabhra",spe:"Ophthalmologist",city:"Ratnagiri",cont:"+91 9984798659"},
    ];}