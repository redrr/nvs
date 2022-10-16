import * as React from 'react';
import {Text, View} from '../components/Themed';
import Colors from "../constants/Colors";
import {styles} from "../constants/Styles";

export default function ModalScreen() {
  return (
    <View style={styles.container} lightColor={Colors.light.whiter} darkColor={Colors.dark.darker}>
      <Text style={styles.title}>Információ</Text>
    </View>
  );
}
