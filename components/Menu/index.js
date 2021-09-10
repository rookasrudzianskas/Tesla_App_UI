import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./style";
import {Entypo, Feather} from "@expo/vector-icons";

const Menu = () => {
    return (
            <View style={styles.menuItems}>
                <TouchableOpacity activeOpacity="0.8">
                        <View style={styles.menuRow}>
                            <Entypo name={`controller-next`} size={24} color="white" />

                            <View style={styles.menuTextBox}>
                                <Text style={styles.menuText}>Media</Text>
                            </View>

                            <Feather name="chevron-right" size={24} color="gray" />
                        </View>
                </TouchableOpacity>
            </View>
    );
};

export default Menu;
