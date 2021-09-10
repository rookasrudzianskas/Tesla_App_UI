import React, {useState} from 'react';
import {Text, View, ImageBackground, Image, TouchableOpacity, ScrollView} from "react-native";
import styles from "./style.js";
import {Entypo, Feather, FontAwesome5, Foundation, MaterialCommunityIcons, Octicons} from "@expo/vector-icons";
import Menu from "../Menu";
import items from "../items";

const CarItem = () => {

    const [locked, setLocked] = useState(false);
    const changeState = (e) => {
        setLocked(!locked);
        // console.warn(e);
        return locked;
    }
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
                    <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 10,}}>Parked {locked ? '(Locked)' : '(Unlocked)'}</Text>
                </View>

            {/*    control icons*/}
            <ScrollView>
                <View style={styles.controls}>
                    <TouchableOpacity activeOpacity="0.8">
                        <View style={styles.controlsButton}>
                            <MaterialCommunityIcons name="fan" size={24} color="white" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity="0.8">
                        <View style={styles.controlsButton}>
                            <Entypo name="key" size={24} color="white" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity="0.8" onPress={changeState}>
                        <View style={styles.controlsButton} >
                            {locked ? (
                                <Feather name="lock" size={24} color="white" />
                            ): (
                                <Feather name="unlock" size={24} color="white" />
                            )}
                        </View>
                    </TouchableOpacity>
                </View>

                <View>
                    <Menu />
                </View>
            </ScrollView>

            </ImageBackground>
        </View>
    );
};

export default CarItem;

// done for today
