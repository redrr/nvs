import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useThemeColor} from "../components/Themed";
import Colors from "../constants/Colors";
import {styles} from "../constants/Styles";

export const LoadingScreen = () => {
    const color = useThemeColor({light: Colors.light.primary, dark: Colors.dark.primary});
    const backgroundColor = useThemeColor({light: Colors.light.whiter, dark: Colors.dark.darker});
    const style = styles.container
    return (
        <View
            style={[{backgroundColor}, style]}>
            <ActivityIndicator color={color} animating={true} size="large" />
        </View>
    );
};
