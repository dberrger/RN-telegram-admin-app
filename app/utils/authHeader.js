import { AsyncStorage } from 'react-native';

export default async function authHeader() {
    let token = await AsyncStorage.getItem("@Storage:token");
    return (token) ? `Bearer ${token}` : {};
}