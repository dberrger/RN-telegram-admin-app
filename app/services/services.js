import authHeader from "../utils/authHeader";
import { AsyncStorage } from 'react-native';

export const services = {
    login, logout,
    logs, statistics
}

const BASE_URL = 'https://6776ce94.ngrok.io';

async function login(username, password) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    }

    const user = await fetch(`${BASE_URL}/authenticate`, requestOptions);
    const res = await user.json();

    if(res.ok) {
        await AsyncStorage.setItem('@Storage:token', res.token);
        return Promise.resolve(res.token);
    } 
    return Promise.reject(res.error);
}

async function logout() {
    await AsyncStorage.removeItem("@Storage:token");
    return false;
}

async function logs(filterDate) {
    const requestOptions = {
        method: 'GET',
        headers: { 
                    "Authorization": await authHeader(), 
                    "Content-Type": "application/json"
                 }
        }

    const payload = await fetch(`${BASE_URL}/stats?date=${filterDate}`, requestOptions);
    const logs = await payload.json();
    return handleResponse(logs);
}

async function statistics(filterVal) {
    const requestOptions = {
        method: 'GET',
        headers: { 
                    "Authorization": await authHeader(), 
                    "Content-Type": "application/json"
                 }
        }

    const payload = await fetch(`${BASE_URL}/logs?date=${filterVal}`, requestOptions);
    const stats = await payload.json();
    return handleResponse(stats);
}


function handleResponse(response) {
    return response.ok ? Promise.resolve(response.payload) : Promise.reject(response.error);
}