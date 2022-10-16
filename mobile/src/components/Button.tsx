import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {styles} from "../constants/Styles";
import {useThemeColor} from "./Themed";
import Colors from "../constants/Colors";

export default function Button({...props}) {
    const { onPress, type = 'primary', title = 'Save' } = props;
    const primary = useThemeColor({light: Colors.light.primary, dark: Colors.dark.primary})
    const white = useThemeColor({light: Colors.light.white, dark: Colors.dark.white})
    const dark = useThemeColor({light: Colors.light.dark, dark: Colors.dark.dark})

    const backgroundColor = type === 'primary' ? primary : white
    const color = type === 'primary' ? white : primary

    return (
        <Pressable style={[{ backgroundColor },{borderWidth: 3, borderColor: primary, marginBottom: 10}, styles.btn, props.style]} onPress={onPress}>
            <Text style={[{ color }, styles.btnText]}>{title}</Text>
        </Pressable>
    );
}
