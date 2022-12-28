var name = "Zac";

console.log("Line Number 3 is", name);

function sayName() {
    //var name = "Mr. H"
    console.log("Line Number 7 is", name);
    sayNameTwo()
    
    function sayNameTwo() {
        //var name = "Mr HC";
        console.log("Line number 11", name);
        
    }

}

sayName();