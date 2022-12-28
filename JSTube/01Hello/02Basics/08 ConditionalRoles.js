//admin :  gets full access
//subadmin : gets access to create or delete course
//testprep : gets access to create/delete users
// user : gets access to consume content


var user = "abc";

switch (user) {
	case "admin":
		console.log("you get full acess");
		break;
	case "subadmin":
		console.log("gets access to create or delete course");
		break;
	case "testprep":
		console.log("gets access to create/delete test");
		break;
	case "user":
		console.log("gets access to consume content");
        break;
    
    default:
        console.log("Trial user");
        break;
}