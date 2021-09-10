import React from 'react';
import {Text, View, ImageBackground, Image} from "react-native";
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

                {/* mileage*/}
                <View style={styles.batterySection}>
                    <Image source={require('../../assets/battery.png')} style={styles.batteryImage}/>
                    <Text style={styles.batteryText}>150 mi</Text>
                </View>
            {/*    status*/}

                <View style={styles.status}>
                    <Text style={{color: 'white'}}>Parked</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

export default CarItem;
