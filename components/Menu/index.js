import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styles from "./style";
import {Entypo, Feather} from "@expo/vector-icons";
import items from "../items";

const Menu = () => {
    return (
            <View style={styles.menuItems}>
                {items.map(item => (
                <TouchableOpacity key={item.id} activeOpacity="0.8">
                        <View style={styles.menuRow}>
                            <Entypo name={`${item.icon}`} size={30} color="white" />

                            <View style={styles.menuTextBox}>
                                <Text style={styles.menuText}>{item.title}</Text>
                                {item.subTitle && (
                                    <Text style={{color: 'gray', marginLeft: 15, marginTop: 3, fontSize: 17}}>{item.subTitle}</Text>
                                )}
                            </View>

                            <Feather name="chevron-right" size={30} color="gray" />
                        </View>
                </TouchableOpacity>
                    ))}
            </View>
    );
};

export default Menu;
