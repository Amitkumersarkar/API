function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(Response => Response.json())
        .then(data => console.log(data))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Res => Res.json())
        .then(data => displayUsers(data))
}

function displayUsers(data) {
    console.log(data);
}