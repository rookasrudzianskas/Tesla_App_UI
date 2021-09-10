import React from 'react';
import {Text, View, ImageBackground} from "react-native";
import styles from "./style.js";
import {FontAwesome5, Foundation, Octicons} from "@expo/vector-icons";

const CarItem = () => {
    return (

        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/background.png')} style={styles.backgroundImage}>
                {/*Header in here*/}
                <View style={styles.header}>
                    <Octicons style={styles.icon} name="gear" size={24} color="white" />
                    <Text style={styles.headerTitle}>RokasMobile</Text>
                    <FontAwesome5 style={styles.icon} name="toolbox" size={24} color="white" />
                </View>
            </ImageBackground>
        </View>
    );
};

export default CarItem;
