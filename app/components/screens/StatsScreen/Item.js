import React from 'react';
import { ScrollView, Linking, View, StyleSheet } from "react-native";
import { Card, Button, Text, Input, Divider } from "react-native-elements";

const Item = ({item}) => (
    <Card>  
        <View>
            <View style={styles.mainHeaderStyle}>
                <Text style={styles.pStyle}> 
                    <Text style={styles.keyWords}>First_name: </Text>
                    {item.first_name}
                </Text>
                <Text style={styles.pStyle}>
                    <Text style={styles.keyWords}>Username:</Text> {item.username ? item.username : "default"}
                </Text>
                <Text  style={styles.pStyle}>
                    <Text style={styles.keyWords}>Date: </Text>
                    <Text style={styles.timeStyle}> {Date(item.date)} </Text>
                </Text>
            </View>
            <Divider/>
            <Text style={styles.textStyle}>
                <Text style={styles.keyWords}> Message: </Text>
                {item.text}
            </Text> 
        </View>
    </Card>
);

export default Item;


const styles = StyleSheet.create({
	mainHeaderStyle: {
        paddingBottom: 10
	},
	pStyle: {
		fontSize: 20,
        paddingTop: 10,
        color: "#000",
		fontFamily: "Verdana",
		fontStyle: "normal"
	},
	keyWords: {
		fontSize: 20,
        color: "#406299",
        fontStyle: "italic"
    },
    textStyle : {
        fontSize: 18,
        color: "#000",
        fontFamily: "Consolas",
		fontStyle: "normal"
    },
    timeStyle : {
        fontSize: 16,
    }
});