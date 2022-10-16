import React from 'react'
import {TextInput, View} from 'react-native'
import {Text, useThemeColor} from "./Themed";
import Colors from "../constants/Colors";
import {styles} from "../constants/Styles";

export default function Input({...props }) {
    const {errorText, description} = props
    const backgroundColor = useThemeColor({light: Colors.light.white, dark: Colors.dark.dark});
    const colorDesc = useThemeColor({light: Colors.light.dark, dark: Colors.dark.white});
    const colorError = useThemeColor({light: Colors.light.danger, dark: Colors.dark.danger});
    return (
        <View style={[styles.w_100, styles.py_20]}>
            {description ? (<Text style={{color: colorDesc}}>{description}</Text>) : null}
            <TextInput style={[{ backgroundColor },{ color: colorDesc }, styles.input]} {...props}/>
            {errorText ? (<Text style={{color: colorError}}>{errorText}</Text>) : null}
        </View>
    )
}
