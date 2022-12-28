/*
Define a function that can answer the role of a user. 
A user can be on following roles:

admin - with all acess
subadmin - with access to create/delete courses
testprep - with access to create/delete tests
user - trial user.

Input : getUserRole(name,role)


*/


function getUserRole(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            //break; this is not necessary
        
        case "subamdin":
             return `${name} is subamdin with access to create/delete courses`
            //break;
        case "subamdin":
             return `${name} is test prep with access to create/delete tests`
            //break;
        case "subamdin":
             return `${name} is a user consume content`
            //break;
        
        default:

            return `${name} is a trial user`
            
            //break;   

    }

}


console.log(getUserRole("Zac", "testprep"));

var getRole = getUserRole("Rohith", "subadmin");

console.log(getRole);