
import React from 'react';
import { View, StyleSheet } from 'react-native';
import StyledText from './StyledText';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link, useLocation } from 'react-router-native';
import { ScrollView } from 'react-native';


const IOSAppBarTab = ({  children, to }) => {
    const { pathname } = useLocation();
    const active = pathname === to;

    const textStyles = [
        styles.text,
        active && styles.active,
    ];

    return (
        <Link to={to}>
            <StyledText fontWeight="bold" style={textStyles}>{children}</StyledText>
        </Link>
    );
}

const styles = StyleSheet.create({
    container: {

        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 20,
        flexDirection: 'row',
        width: '100%',

    },
    text: {
        color: theme.appBar.textSecondary,
        paddingHorizontal: 10,

    },
    scroll: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        backgroundColor: theme.appBar.primary,
        height: 50,
    },
    active: {
        color: theme.appBar.textPrimary,
    }
});



const IOSAppBar = () => {

    return (
        <View style={styles.container}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
                <IOSAppBarTab  to='/'>Repositories</IOSAppBarTab>
                <IOSAppBarTab  to='/signin'>Sign In</IOSAppBarTab>
                <IOSAppBarTab  to='/'>Repositories</IOSAppBarTab>
                <IOSAppBarTab  to='/signin'>Sign In</IOSAppBarTab>
                <IOSAppBarTab  to='/'>Repositories</IOSAppBarTab>
                <IOSAppBarTab  to='/signin'>Sign In</IOSAppBarTab>
                <IOSAppBarTab  to='/'>Repositories</IOSAppBarTab>
                <IOSAppBarTab  to='/signin'>Sign In</IOSAppBarTab>
                
            </ScrollView>

        </View>
    );
};


export default IOSAppBar;