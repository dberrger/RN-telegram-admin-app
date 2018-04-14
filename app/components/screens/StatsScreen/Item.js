import React from 'react';
import { ScrollView, Linking, View, StyleSheet } from "react-native";
import { Card, Button, Text, Input } from "react-native-elements";

const Item = ({item}) => (
    <Card>  
        <View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <Text h4>{item.first_name}</Text>
                <Text h4>{item.username}</Text>
                <Text>{item.date}</Text>
            </View>
            <Text>{item.text}</Text>    
        </View>
    </Card>
);

export default Item;