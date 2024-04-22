import React from "react";
import { StyleSheet, Image, View, Platform } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";
import theme from "../theme.js";



const RepositoryItemHeader = (props) => (
    <View style={{ flexDirection: 'row', paddingBottom: 2}}>
       <View style={{paddingRight:5}}>
        <Image
            style={styles.avatar}
            source={{
                uri: props.ownerAvatarUrl
            }}
        />
        </View>
        <View style={{ flex: 1}}>
            <StyledText fontWeight="bold" fontSize="subheading" >{props.fullName}</StyledText>
            <StyledText color="secondary">{props.description}</StyledText>
            <StyledText style={styles.language}>{props.language}</StyledText>
        </View>
    </View>
);


const ReposotoryItem = (props) => (

    <View key={props.id} style={styles.container}>
        <RepositoryItemHeader {...props} />
        <RepositoryStats {...props} />
    </View>

);

const styles = StyleSheet.create({
    container: {
        padding: 15,
        paddingTop: 10,
        paddingBottom: 20,
        width: '80%',
        marginHorizontal: '10%',
        marginVertical: '2%',
        paddingVertical: 5,
        borderRadius: 10,
        backgroundColor: '#f0f0f0'
    },
    language: {
        padding: 4,
        marginTop:4,
        marginBottom: 4,
        color: theme.colors.mainBackground,
        backgroundColor: Platform.select({
            ios: 'red',
            android: theme.colors.primary,
            default: 'purple',
        }),
        alignSelf: 'flex-start',
     
        borderRadius: 5,
        overflow: 'hidden',
      
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 5,

    }
});


export default ReposotoryItem;

