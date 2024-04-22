import React from "react";
import repository from "../data/repository";
import { FlatList } from "react-native";
import ReposotoryItem from "./RepositoyItem";


const RepositoryList = () => {
    return (
        <FlatList
        style={styles.flatLst}
            data={repository}
            renderItem={({ item : repo }) => (
                <ReposotoryItem {...repo} />
            )}
        >
        </FlatList>

    );
}


const styles = {
    separator: {
        height: 10,
    },
    flatLst: {
       
        paddingVertical: 10,
        width: '100%',
       
        
    }
};

export default RepositoryList;