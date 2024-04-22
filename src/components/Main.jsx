import React from "react";
import {  Text, View, Platform } from "react-native";
import RepositoryList from "./ReposotoryList";
import { Redirect, Route, Routes } from "react-router-native";
import StyledText from "./StyledText";
import AppBar from "./AppBar";


const AppBarSel = Platform.select({
    web: () => require('./AppBar.jsx').default,
    android: () => require('./AppBar.jsx').default,
    ios: () => require('./IOSAppBar.jsx').default,
    default: () => require('./AppBar.jsx').default
})()

const Main = () => {
    return (
        <View style={style.container}>
        <AppBarSel />
        

            <Routes>
                <Route path="/" element={<RepositoryList />} exact/>
                <Route path="/signin" element={<StyledText>Sign in</StyledText>} exact/>       
           </Routes>
               
           
             
                   
        </View>
    );
};



const style = {
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#333"
    }
};

export default Main;