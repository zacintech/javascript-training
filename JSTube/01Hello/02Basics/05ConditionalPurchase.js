var isLoggedin = true;
var isEmailVerified = false;
var cardInfo = true;


//if (isLoggedin) {

//    console.log("Log in Success");

//    if (isEmailVerified) {
//        console.log("Email is verififed");

//        if (cardInfo) {
//            console.log("You can make a purchase");
//        }
//    }


//}



if (isLoggedin && isEmailVerified && cardInfo) {
    
    console.log("You are allowed to purchase");
}

else {
    console.log("you are not allowed to purcahse");
}