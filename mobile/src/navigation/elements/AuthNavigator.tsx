import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as React from "react";
import {Component} from "react";
import {RootStackParamList} from "../../types";
import LoginScreen from "../../screens/LoginScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default class AuthNavigator extends Component<any, any> {

    app: any

    constructor(props: Readonly<any> | any) {
        super(props);
        this.app = props.app
    }

    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="SignIn" options={{headerShown: false}}>
                    {props => <LoginScreen {...props} app={this.app}/>}
                </Stack.Screen>
            </Stack.Navigator>
        );
    }
}
