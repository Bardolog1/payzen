import React from "react";
import {  Text, View } from "react-native";
import RepositoryList from "./ReposotoryList";
import AppBar from "./AppBar";
import { Redirect, Route, Routes } from "react-router-native";
import StyledText from "./StyledText";



const Main = () => {
    return (
        <View style={style.container}>
            <AppBar />

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