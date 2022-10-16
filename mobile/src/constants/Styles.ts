import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    row: {
        //flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    container_fluid: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    px_20: {
        paddingHorizontal: 20,
    },
    py_20: {
        paddingVertical: 20
    },
    w_100: {
      width: '100%'
    },
    smallTitle: {
        fontSize: 21,
        fontWeight: '700',
        marginBottom: 24
    },
    subTitle: {
        fontSize: 32,
        fontWeight: '500',
        marginBottom: 20
    },
    title: {
        fontSize: 36,
        fontWeight: '600',
        marginBottom: 20
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
    },
    linkText: {
        fontSize: 14,
        marginVertical: 5
    },
    card: {
        width: '100%',
        marginVertical: 15,
        borderRadius: 17,
        paddingVertical: 12,
        paddingHorizontal: 32,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 12
    },
    cardImg: {
        width: 60,
        height: 60,
        marginEnd: 15
    },
    cardDesc: {
        fontSize: 14,
    },
    input: {
        borderRadius: 12,
        fontSize: 14,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
    },
    btn: {
        width: '100%',
        borderRadius: 6,
        fontSize: 12,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn_p_lg: {
        paddingVertical: 12,
        paddingHorizontal: 32,
    },
    key: {
        paddingVertical: 8,
    },
    btnText: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
});
