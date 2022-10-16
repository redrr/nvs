import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {ColorSchemeName, Text} from 'react-native';
import {LoadingScreen} from "../screens/LoadingScreen";
import {AppContext, create} from "../services/AppContext";
import AuthNavigator from "./elements/AuthNavigator";
import RootNavigator from "./elements/RootNavigator";

import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { readonly colorScheme: ColorSchemeName }) {
    const {context, state} = create()
    const app = {
        context: context,
        state: state,
        colorScheme: colorScheme
    }
    return (
        <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <AppContext.Provider value={context}>
                {state.isLoading ?
                    <LoadingScreen/> :
                    (state.userToken == null || false) ?
                        <AuthNavigator app={app}/> :
                        <RootNavigator app={app}/>
                }
            </AppContext.Provider>
        </NavigationContainer>
    );
}
