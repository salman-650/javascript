//function get are passed as argumens to other function
//why use callback-function?
//1.asynchronous
//2.avoid blocking code execution

function greetUser(name){
    console.log(`hello, ${name}`);

    
}
//this function takes another function (callback     )
function getUserInput(callback){
    const name = "liyara";
    callback(name);
}
//getuserinput pass get greet user as a callback 
getUserInput(greetUser);