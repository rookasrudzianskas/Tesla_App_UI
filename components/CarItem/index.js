import React from 'react';
import {Text, View, ImageBackground, Image, TouchableOpacity} from "react-native";
import styles from "./style.js";
import {Entypo, Feather, FontAwesome5, Foundation, MaterialCommunityIcons, Octicons} from "@expo/vector-icons";

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

            {/*    control icons*/}

                <View style={styles.controls}>
                    <View style={styles.controlsButton}>
                        <MaterialCommunityIcons name="fan" size={24} color="white" />
                    </View>

                    <View style={styles.controlsButton}>
                        <Entypo name="key" size={24} color="white" />
                    </View>

                    <View style={styles.controlsButton}>
                        <Feather name="lock" size={24} color="white" />
                    </View>
                </View>

            </ImageBackground>
        </View>
    );
};

export default CarItem;
