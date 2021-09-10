import React from 'react';
import {Text, View} from "react-native";
import styles from "./style.js";
import {Foundation, Octicons} from "@expo/vector-icons";

const CarItem = () => {
    return (

        <View style={styles.carContainer}>
            {/*Header in here*/}
            <View style={styles.header}>
                <Octicons name="gear" size={24} color="white" />
                <Text>RokasMobile</Text>
                <Foundation name="shopping-bag" size={24} color="white" />
            </View>
        </View>
    );
};

export default CarItem;
