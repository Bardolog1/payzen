import React from "react";
import {  Text, View, Platform } from "react-native";
import RepositoryList from "./ReposotoryList";
import { Redirect, Route, Routes } from "react-router-native";
import StyledText from "./StyledText";
import AppBar from "./AppBar";
import Login from "../pages/Login";




const Main = () => {
    return (
        <View style={style.container}>
        <AppBar />
        

            <Routes>
                <Route path="/" element={<RepositoryList />} exact/>
                <Route path="/signin" element={<Login/>} exact/>       
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