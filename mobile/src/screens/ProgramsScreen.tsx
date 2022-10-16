import * as React from "react";
import {Component} from "react";
import {SafeAreaView, ScrollView, View} from "react-native";
import {styles} from "../constants/Styles";
import Colors from "../constants/Colors";
import {Text as ViewText} from "../components/Themed";

export default class ProgramsScreen extends Component<any, any> {

    app: any

    constructor(props: Readonly<any> | any) {
        super(props);
        this.app = props.app
    }

    render() {
        return (
            <SafeAreaView style={[styles.container_fluid]}>
                <ScrollView style={{padding: 10}}>
                    <ViewText style={styles.subTitle} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>Kerületi egyéni jelöltek</ViewText>
                    <View style={{paddingVertical: 16, paddingHorizontal: 8, width: '100%', backgroundColor: Colors.light.white, borderRadius: 12, marginVertical: 16}}>
                        <ViewText style={styles.smallTitle} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>Név</ViewText>
                    </View>

                    <ViewText style={styles.subTitle} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>Országos lista</ViewText>
                    <View style={{paddingVertical: 16, paddingHorizontal: 12, width: '100%', backgroundColor: Colors.light.white, borderRadius: 12, marginVertical: 16}}>
                        <ViewText style={styles.smallTitle} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>FIDESZ - KDMP</ViewText>
                        <ViewText style={{fontSize: 18, lineHeight: 24}} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </ViewText>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
