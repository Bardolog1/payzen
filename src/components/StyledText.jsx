import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme.js"; 


const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    blue: {
        color: "blue"
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    small: {
        fontSize: 10
    },
    center: {
        textAlign: "center"
    }
}); 


export default function StyledText({align, children, color, fontSize, fontWeight, style, ...restOfProps}) {

    const textStyles = [
        styles.text,
        style,
        align === "center" && styles.center,
        color === "primary" && styles.colorPrimary,
        color === "secondary" && styles.colorTextSecondary,
        fontSize === "subheading" && styles.subheading,
        fontWeight === "bold" && styles.bold
    ];
   
    return (
        <Text style={textStyles}{...restOfProps}>
            {children}
        </Text>
    );
}
