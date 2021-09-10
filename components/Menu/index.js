import React from 'react';
import {Text, View} from "react-native";
import styles from "./style";
import {Entypo} from "@expo/vector-icons";

const Menu = () => {
    return (
        <View style={styles.menuItems}>
            <View style={styles.menuRow}>
                <Entypo name="controller-next" size={24} color="white" />
            </View>
        </View>
    );
};

export default Menu;
