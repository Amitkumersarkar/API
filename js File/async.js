const myLoader = () => {
    return new Promise((resolve, reject) => {
        // const success = true;
        const success = Math.random();
        if (success <= 0.5) {
            // resolve(0.3)
            resolve(success)
        }
        else {
            // reject(0.7)
            reject(success)
        }
    })
}

myLoader()
    .then(data => console.log('resolve data', data))
    .catch(err => console.log('rejected with value', err));
