import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text, View} from '../components/Themed';

import {RootStackScreenProps} from '../types';
import {styles} from "../constants/Styles";
import Colors from "../constants/Colors";

export default function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  return (
    <View style={styles.container} lightColor={Colors.light.whiter} darkColor={Colors.dark.darker}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}
