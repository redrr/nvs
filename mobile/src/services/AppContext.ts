import * as SecureStore from "expo-secure-store";
import * as React from "react";

export const AppContext = React.createContext({
    signIn: async (data: any) => {},
});

export function create() {
    const [appState, dispatch] = React.useReducer(
        (prevState: any, action: any) => {
            switch (action.type) {
                case 'WAIT':
                    return {
                        ...prevState,
                        isLoading: true,
                    }
                case 'RESTORE_TOKEN':
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case 'SIGN_IN':
                    return {
                        ...prevState,
                        isLoading: false,
                        isSignout: false,
                        userToken: action.token,
                    };
                case 'SIGN_OUT':
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null
        }
    );

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken;
            try {
                userToken = await SecureStore.getItemAsync('userToken');
            } catch (e) {
                // Restoring token failed
            }
            // After restoring token, we may need to validate it in production apps
            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch({type: 'RESTORE_TOKEN', token: userToken});
        };
        bootstrapAsync();
    }, []);

    const appContext = React.useMemo(
        () => ({
            signIn: async (data: any) => {
                dispatch({type: 'SIGN_IN', token: data});
            }
        }),
        []
    );
    return({context: appContext, state: appState})
}
