const fetchData = () => 
    new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data loaded !");
        }, 5000);  // wait for 2s until the promise is resolved
    });

const getData = async () => {
    console.log("Start");
    
    const result = await fetchData();
    console.log(result);

    console.log("End");
};

getData();