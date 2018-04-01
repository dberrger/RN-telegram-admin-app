import authHeader from "../utils/authHeader";

export const services = {
    login, logout,
    logs, statistics
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }
    return fetch('/authenticate', requestOptions)
                .then(response => { return response.json(); })
                .then(res => {
                    console.log(res);
                    return handleResponse(res)
                })
        }

function logout() {
    console.log("Logout")
    localStorage.removeItem('user');
    return false
}

function logs() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch('/logger', requestOptions)
                .then(response => { return response.json(); })
                .then(res => {
                    console.log(res);   
                    return handleResponse(res)
                })
}

function statistics(filterVal) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }
    return fetch('/statistics?' + filterVal, requestOptions)
                .then(response => { return response.json(); })
                .then(res => {
                    console.log(res);   
                    return handleResponse(res)
                })
}


function handleResponse(response) {
    return response.ok ? Promise.resolve(response) : Promise.reject(response);
}