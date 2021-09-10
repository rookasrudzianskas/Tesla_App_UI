import React from 'react';
import {Text, View} from "react-native";
import styles from "./style.js";

const CarItem = () => {
    return (

        <View style={styles.carContainer}>
            {/*Header in here*/}
            <View style={styles.header}>
                <Text>Settings</Text>
                <Text>RokasMobile</Text>
                <Text>Surprise</Text>
            </View>
        </View>
    );
};

export default CarItem;
