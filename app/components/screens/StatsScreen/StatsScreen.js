import React, { Component } from "react";
import { ScrollView, Linking, View, StyleSheet } from "react-native";
import { Card, Button, Text, Input } from "react-native-elements";
import { connect } from 'react-redux';
import Datepicker from "./Datepicker";
import Icon from 'react-native-vector-icons/FontAwesome';
import Item from "./Item";

const StatsScreen = ({data, findUser, setDateFilter, date, searchInput, getMessagesByDate}) => (

    <ScrollView>
        <Card  containerStyle={{margin: 0 , paddingTop: 20}}>	
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between"}}>
                        <Datepicker 
                            setDateFilter={setDateFilter}
                        />
                        <Button
                            title='FILTER'
                            onPress={ () => getMessagesByDate()}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: "space-between"}}>
                        <Input
                            value={searchInput}
                            onChangeText={ (value) => findUser(value)}
                            placeholder='Enter something.. '
                        />
                    </View>
                </View>
        </Card>	
        {data.map((item)=> <Item item={item}/>)}
    </ScrollView>
);

export default StatsScreen;
