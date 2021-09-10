import React from 'react';
import {Text, View, ImageBackground, Image, TouchableOpacity} from "react-native";
import styles from "./style.js";
import {FontAwesome5, Foundation, Octicons} from "@expo/vector-icons";

const CarItem = () => {
    return (

        <View style={styles.carContainer}>
            <ImageBackground source={require('../../assets/background.png')} style={styles.backgroundImage}>
                {/*Header in here*/}
                <View style={styles.header}>
                    <TouchableOpacity activeOpacity="0.8">
                    <Octicons style={styles.icon} name="gear" size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>RokasMobile</Text>
                    <TouchableOpacity activeOpacity="0.8">
                    <FontAwesome5 style={styles.icon} name="toolbox" size={24} color="white" />
                    </TouchableOpacity>
                </View>

                {/* mileage*/}
                <View style={styles.batterySection}>
                    <Image source={require('../../assets/battery.png')} style={styles.batteryImage}/>
                    <Text style={styles.batteryText}>150 mi</Text>
                </View>
            {/*    status*/}

                <View style={styles.status}>
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 10,}}>Parked</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

export default CarItem;
