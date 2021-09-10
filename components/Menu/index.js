import React from 'react';
import {Text, View} from "react-native";
import styles from "./style";
import {Entypo, Feather} from "@expo/vector-icons";

const Menu = () => {
    return (
        <View style={styles.menuItems}>
            <View style={styles.menuRow}>
                <Entypo name={`controller-next`} size={24} color="white" />

                <View style={styles.menuTextBox}>
                    <Text style={styles.menuText}>Media</Text>
                </View>

                <Feather name="chevron-right" size={24} color="gray" />
            </View>
        </View>
    );
};

export default Menu;
