function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
        // error handling
        .catch(err => console.log(err))
}
//using fetch same as above code but different style
async function loadUserAsync() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data);
}

//same as above using arrow function . we can use any of these
const loadUserArrow = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}

// same thing as above method using try catch

const loadUserTryCatch = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        console.log(data);
    }
    catch (error) {

    }
}