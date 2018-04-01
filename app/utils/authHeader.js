export default function authHeader() {
    let user = 'd';
    return (user && user.token) ? { 'Authorization': user.token } : {};
}