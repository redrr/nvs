import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Component} from "react";
import {RootStackParamList} from "../../types";
import NotFoundScreen from "../../screens/NotFoundScreen";
import ModalScreen from "../../screens/ModalScreen";
import * as React from "react";
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class RootNavigator extends Component<any, any> {

    app: any

    constructor(props: Readonly<any> | any) {
        super(props);
        this.app = props.app
    }

    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Root" options={{ headerShown: false }}>
                    {props => <BottomTabNavigator {...props} app={this.app}/>}
                </Stack.Screen>
                <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
                <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen name="Modal" component={ModalScreen} />
                </Stack.Group>
            </Stack.Navigator>
        );
    }
}
