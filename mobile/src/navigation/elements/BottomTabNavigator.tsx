import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from "react";
import {Component} from "react";
import ProgramsScreen from "../../screens/ProgramsScreen";
import {RootTabParamList, RootTabScreenProps} from "../../types";
import Colors from "../../constants/Colors";
import AnalyticsScreen from "../../screens/AnalyticsScreen";
import {FontAwesome} from "@expo/vector-icons";
import InformationScreen from "../../screens/InformationScreen";
import {Pressable} from "react-native";

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

export default class BottomTabNavigator extends Component<any, any> {

    app: any

    constructor(props: Readonly<any> | any) {
        super(props);
        this.app = props.app
    }

    render() {
        return (
            <BottomTab.Navigator initialRouteName="TabOne" screenOptions={{tabBarActiveTintColor: Colors[this.app.colorScheme].primary}}>
                <BottomTab.Screen name="TabOne" component={AnalyticsScreen}
                      options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
                          title: 'Statisztikák',
                          headerTitle: 'Valósidejű statisztikák',
                          tabBarIcon: ({ color }) => <FontAwesome name="pie-chart" size={30} color={color} />,
                          headerRight: () => (
                              <Pressable
                                  onPress={() => navigation.navigate('Modal')}
                                  style={({ pressed }) => ({
                                      opacity: pressed ? 0.5 : 1,
                                  })}>
                                  <FontAwesome name="info-circle" size={30} color={Colors[this.app.colorScheme].darker} style={{ marginRight: 15 }}/>
                              </Pressable>
                          )
                      })}
                />
                <BottomTab.Screen name="TabThree"
                                  options={({ navigation }: RootTabScreenProps<'TabThree'>) => ({
                                      title: 'Programok',
                                      headerTitle: 'Kikre szavazhatok?',
                                      tabBarIcon: ({ color }) => <FontAwesome name="search" size={30} color={color} />
                                  })}
                >
                    {props => <ProgramsScreen {...props} app={this.app}/>}
                </BottomTab.Screen>
                <BottomTab.Screen name="TabTwo"
                                options={({ navigation }: RootTabScreenProps<'TabTwo'>) => ({
                                    title: 'Információ',
                                    headerTitle: 'Hol és hogyan szavazhatok?',
                                    tabBarIcon: ({ color }) => <FontAwesome name="info" size={30} color={color} />,
                                })}>
                    {props => <InformationScreen {...props} app={this.app}/>}
                </BottomTab.Screen>
            </BottomTab.Navigator>
        );
    }
}
