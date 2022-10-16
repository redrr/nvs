import * as React from 'react';
import {Component} from 'react';
import {SafeAreaView, ScrollView, View} from "react-native";
import {Text as ViewText} from "../components/Themed"
import {styles} from "../constants/Styles";
import Colors from "../constants/Colors";
import {ProgressCircle} from "react-native-svg-charts";
import {Text} from "react-native-svg";
import AllListaAnalytics from "../components/AllListaAnalytics";
import AllSoloAnalytics from "../components/AllSoloAnalytics";

const kerData =
    [{"label":"  Zsigó Róbert    FIDESZ, KDNP","value":23835,"svg":{"fill":"rgb(45,30,94)"}},{"label":"  Grünfelder Zoltán  JOBBIK","value":8203,"svg":{"fill":"rgb(234,79,234)"}},{"label":"  Hajdú Miklós    MSZP, PÁRBESZÉD","value":7880,"svg":{"fill":"rgb(30,131,109)"}},{"label":"  Ikotity István  LMP","value":2557,"svg":{"fill":"rgb(206,210,173)"}},{"label":"  Béni Kornél  MOMENTUM","value":728,"svg":{"fill":"rgb(138,240,98)"}},{"label":"  Almási Terézia  CSP","value":209,"svg":{"fill":"rgb(0,168,94)"}},{"label":"  Kalapos Mária  MUNKÁSPÁRT","value":179,"svg":{"fill":"rgb(50,245,223)"}},{"label":"  Mányoki Réka  SEM","value":71,"svg":{"fill":"rgb(114,202,90)"}},{"label":"  Zsemberiné Katona Margit Erika  KÖSSZ","value":46,"svg":{"fill":"rgb(175,86,158)"}},{"label":"  Sánta Olivér  TENNI AKARÁS MOZGALOM","value":30,"svg":{"fill":"rgb(102,203,120)"}},{"label":"  Antal Krisztián  NEMZET ÉS BÉKE","value":24,"svg":{"fill":"rgb(15,72,60)"}},{"label":"  Dinókné Kőrös Anita  ÖSSZEFOGÁS PÁRT","value":15,"svg":{"fill":"rgb(33,246,156)"}},{"label":"  Tumó György  FKGP","value":0,"svg":{"fill":"rgb(226,92,210)"}},{"label":"  Kurucz Nikolett  MISZEP","value":0,"svg":{"fill":"rgb(238,54,123)"}}]
const testSoloBarChart = [
    {
        value: 91,
        label: 'FIDESZ-KDMP',
        svg: {
            fill: '#ee8016'
        }
    },
    {
        value: 8,
        label: 'MSZP-PÁRBESZÉD',
        svg: {
            fill: '#e11831'
        }
    },
    {
        value: 3,
        label: 'DK',
        svg: {
            fill: '#2babe1'
        }
    },
    {
        value: 1,
        label: 'LMP',
        svg: {
            fill: '#86c553'
        }
    },
    {
        value: 1,
        label: 'EGYÜTT',
        svg: {
            fill: '#d09c5e'
        }
    },
    {
        value: 1,
        label: 'FÜGGETLEN',
        svg: {
            fill: '#2dfee8'
        }
    },
    {
        value: 1,
        label: 'JOBBIK',
        svg: {
            fill: '#008342'
        }
    },
]
const testGroupBarChart = [
    {
        value: 49.27,
        label: 'FIDESZ-KDMP',
        svg: {
            fill: '#ee8016'
        }
    },
    {
        value: 19.06,
        label: 'JOBBIK',
        svg: {
            fill: '#008342'
        }
    },
    {
        value: 11.91,
        label: 'MSZP-PÁRBESZÉD',
        svg: {
            fill: '#e11831'
        }
    },
    {
        value: 7.06,
        label: 'LMP',
        svg: {
            fill: '#86c553'
        }
    },
    {
        value: 5.38,
        label: 'DK',
        svg: {
            fill: '#2babe1'
        }
    },
]

export default class AnalyticsScreen extends Component<any, any> {

    app: any

    constructor(props: Readonly<any> | any) {
        super(props);
        this.app = props.app
    }

    render() {
        return (
            <SafeAreaView style={[styles.container_fluid]}>
                <ScrollView style={{padding: 10}}>
                    <ViewText style={styles.subTitle} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>Választókerületi eredmények</ViewText>
                    <AllSoloAnalytics height={40} data={kerData}/>
                    <ViewText style={styles.subTitle} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>Országos eredmények</ViewText>
                    <View style={{paddingVertical: 16, paddingHorizontal: 8, width: '100%', backgroundColor: Colors.light.white, borderRadius: 12, marginVertical: 16}}>
                        <ViewText style={styles.smallTitle} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>
                            Választási részvétel
                        </ViewText>
                        <ProgressCircle
                            style={ { width: '100%', height: 200 } }
                            progress={ 0.722 }
                            progressColor={Colors.light.primary}
                            startAngle={ -Math.PI * 0.8 }
                            endAngle={ Math.PI * 0.8 }
                        >
                            <Text x={-60} y={0} fontSize={40} fill={'black'} alignmentBaseline={'middle'} fontFamily={'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'}>
                                {70.22+"%"}
                            </Text>
                        </ProgressCircle>
                    </View>
                    <AllListaAnalytics height={40} data={testGroupBarChart}/>
                    <AllSoloAnalytics height={40} data={testSoloBarChart}/>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
