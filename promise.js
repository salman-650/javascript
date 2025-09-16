//const promise = new Promise((resolve, reject) => {
  // asynchronous operation
  // })
  
  //resolve :-called when operation successfull
  //rreject :-called when operstion failed

  // .then = execute when the promise is resolve
  // .catch = its execute when the promise is reject
  // .finally = exicutes regadless of the promise outcome

  

  let myPromise = new Promise((resolve,reject) => {     //creating to the new promise
    let success = false;

    setTimeout(()=>{
      if (success) {
        resolve('promise resolved successfully')
      } else {
        reject('promise rejected')
    }
  },2000)
});

myPromise
      .then(result => console.log(result))  //then the promise is resolved
      .catch(Error => console.log(Error))   // then the promise is rejected
      .finally(()=>console.log("promise exicution finished"))
      
      