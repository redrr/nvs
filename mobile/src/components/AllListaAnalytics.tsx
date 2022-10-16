import React from 'react'
import {View} from "react-native";
import {Text as ViewText} from '../components/Themed';
import { BarChart, Grid } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import Colors from "../constants/Colors"
import {styles} from "../constants/Styles";

export default class AllListaAnalytics extends React.Component<any, any> {

    data: any
    height: any

    constructor(props: Readonly<any> | any) {
        super(props);
        this.data = props.data
        this.height = props.height * props.data.length
    }

    render() {
        const CUT_OFF = 10

        // @ts-ignore
        const Values = ({x,y,bandwidth,data}) => (
            // @ts-ignore
            data.map((value, index) => (
                <Text
                    key={ index }
                    x={ value.value > CUT_OFF ? x(value.value) - 60 : x(value.value) + 20 }
                    y={ y(index) + (bandwidth / 2) }
                    fontSize={ 14 }
                    fontFamily={'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'}
                    fill={ value.value > CUT_OFF ? 'white' : 'black' }
                    alignmentBaseline={ 'middle' }
                >
                    {value.value+"%"}
                </Text>
            ))
        )
        const Labels = () => (
            // @ts-ignore
            this.data.map((value, index) => (
                <View style={{flexDirection: 'row', marginVertical: 7, marginEnd: 7}}>
                    <View style={{height: 10, width: 10, margin: 4, backgroundColor: value.svg.fill}}/>
                    <ViewText lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>
                        {value.label}
                    </ViewText>
                </View>
            ))
        )

        return (
            <View style={{paddingVertical: 16, paddingHorizontal: 8, width: '100%', backgroundColor: Colors.light.white, borderRadius: 12, marginBottom: 24}}>
                <ViewText style={styles.smallTitle} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>
                    Országos listás szavazatok
                </ViewText>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Labels/>
                </View>
                <View style={{ flexDirection: 'row', height: this.height, width: '100%' }}>
                    <BarChart
                        style={{ flex: 1, marginHorizontal: 12 }}
                        data={this.data}
                        horizontal={true}
                        // @ts-ignore
                        yAccessor={({ item }) => item.value}
                        svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
                        contentInset={{ top: 10, bottom: 10 }}
                        spacing={0.2}
                        gridMin={0}
                    >
                        <Grid direction={Grid.Direction.VERTICAL}/>
                        <Values/>
                    </BarChart>
                </View>
            </View>
        )
    }

}
