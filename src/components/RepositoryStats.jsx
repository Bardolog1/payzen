import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import StyledText from "./StyledText";

const parseThousands = (num) => {
    return  num>=1000 ? `${Math.round(num / 1000 ) / 10}k` : String(num);
 };
 
 
 const RepositoryStats = (props) => {
     return (
         <View style={styles.container}>
             <View>
                 <StyledText align='center' fontWeight='bold' fontSize='subheading'>Stars</StyledText>
                 <StyledText align='center' >{parseThousands(props.stargazersCount)}</StyledText>
             </View>
             <View>
                 <StyledText align='center' fontWeight='bold' fontSize='subheading'>Forks</StyledText>
                 <StyledText align='center' >{parseThousands(props.forksCount)}</StyledText>
             </View>
             <View>
                 <StyledText align='center' fontWeight='bold' fontSize='subheading'>Reviews</StyledText>
                 <StyledText align='center' >{parseThousands(props.reviewCount)}</StyledText>
             </View>
             <View>
                 <StyledText align='center' fontWeight='bold' fontSize='subheading'>Rating</StyledText>
                 <StyledText align='center' >{parseThousands(props.ratingAverage)}</StyledText>
             </View>
 
         </View>
     );
 };

 const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10

    }
});

 export default RepositoryStats;