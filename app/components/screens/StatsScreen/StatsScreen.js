import React, { Component } from "react";
import { ScrollView, Linking, View, StyleSheet } from "react-native";
import { Card, Button, Text, Input } from "react-native-elements";
import { connect } from 'react-redux';
import Datepicker from "./Datepicker";
import Icon from 'react-native-vector-icons/FontAwesome';
import Item from "./Item";

const StatsScreen = ({data, findUser, setDateFilter, date, searchInput, getMessagesByDate}) => (

    <ScrollView>
        <Card  containerStyle={styles.cardContainerStyle}>	
                <View style={styles.outherView}>
                    <View style={styles.viewStyle}>
                        <Datepicker 
                            setDateFilter={setDateFilter}
                        />
                        <Button
                            title='FILTER'
                            onPress={ () => getMessagesByDate()}
                        />
                    </View>
                    <View style={styles.viewStyle}>
                        <Input
                            value={searchInput}
                            onChangeText={ (value) => findUser(value)}
                            placeholder='Enter username.. '
                        />
                    </View>
                </View>
        </Card>
        { data.length ? data.map((item, i)=> <Item item={item} key={i}/>) 
                      : <Card containerStyle={styles.emptyContainerStyle}>
                          <Text style={styles.emptyStyle}> Empty! </Text>
                          <Text style={styles.emptyStyle}> Use datepicker to fetch messages </Text>
                        </Card>
        }
    </ScrollView>
);

export default StatsScreen;


const styles = StyleSheet.create({
	viewStyle: {
        paddingTop: 10,
        flexDirection: 'row', 
        justifyContent: "space-between",       
    },
    outherView : {
        flexDirection: 'column'
    },
    cardContainerStyle: {
        margin: 0,
        marginBottom: 20,
        paddingTop: 20
    },
    emptyStyle : {
        fontSize: 22,
        marginTop: 10,
        paddingBottom: 10,
        color: "#203929",
		fontFamily: "Arial",
        fontStyle: "normal",
        textAlign: "center"
    },
    emptyContainerStyle: {
        margin: 0,
        backgroundColor: '#8cd892'
    }
});