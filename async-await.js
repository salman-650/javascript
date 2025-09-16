// async make a function that will return a promise
//await pause the function execution until the promise is resolved or rejected
// look & behave like synchronous (more efficient & responsive)
function fetchData(){
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve("data loaded!")
    },2000);
});
}


async function getdata() {
    console.log("start");
    
    const result = await fetchData();  //until the promise is resolved
    console.log(result);

    console.log("end");
    
    
    
}
getdata()