import * as React from "react";
import {Component} from "react";
import { Linking } from 'react-native';
import {SafeAreaView, ScrollView, View} from "react-native";
import {styles} from "../constants/Styles";
import Colors from "../constants/Colors";
import {Text as ViewText} from "../components/Themed";

export default class InformationScreen extends Component<any, any> {

    app: any

    constructor(props: Readonly<any> | any) {
        super(props);
        this.app = props.app
    }

    render() {
        return (
            <SafeAreaView style={[styles.container_fluid]}>
                <ScrollView style={{padding: 10}}>
                    <View style={{paddingVertical: 16, paddingHorizontal: 8, width: '100%', backgroundColor: Colors.light.white, borderRadius: 12, marginVertical: 16}}>
                        <ViewText style={{fontSize: 18, lineHeight: 24}} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>
                            A választásokon való részvételének helye és módja elsősorban attól függ, hogy rendelkezik-e magyarországi lakcímmel. A választásokon elsődlegesen a lakcíme szerinti szavazókörben szavazhat. Az egyes választástípusokhoz kapcsolódóan azonban különböző lehetőségei vannak, ha máshol (másik szavazókörben) kíván szavazni, illetve amennyiben fogyatékossággal él vagy mozgásában korlátozott. Alább ezekről a lehetőségekről tájékozódhat.
                        </ViewText>
                    </View>
                    <ViewText style={styles.subTitle} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>
                        Magyarországi lakcímmel
                    </ViewText>
                    <View style={{paddingVertical: 16, paddingHorizontal: 8, width: '100%', backgroundColor: Colors.light.white, borderRadius: 12, marginVertical: 16}}>
                        <ViewText style={styles.smallTitle} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>Szavazás másik szavazókörben</ViewText>
                        <ViewText style={{fontSize: 18, lineHeight: 24}} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>
                            Az országgyűlési választásokon az ország bármely, szabadon választott településének kijelölt szavazókörében leadhatja szavazatát átjelentkezési kérelmet benyújtva online vagy papír alapon.
                        </ViewText>
                    </View>
                    <View style={{paddingVertical: 16, paddingHorizontal: 8, width: '100%', backgroundColor: Colors.light.white, borderRadius: 12, marginVertical: 16}}>
                        <ViewText style={styles.smallTitle} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>Külképviseleti szavazás</ViewText>
                        <ViewText style={{fontSize: 18, lineHeight: 24}} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>
                            Kérheti külképviseleti névjegyzékbe vételét, amennyiben szavazatát a külföldi magyar nagykövetségek, konzulátusok valamelyikén kívánja leadni.
                        </ViewText>
                    </View>
                    <View style={{paddingVertical: 16, paddingHorizontal: 8, width: '100%', backgroundColor: Colors.light.white, borderRadius: 12, marginVertical: 16}}>
                        <ViewText style={styles.smallTitle} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>Szavazás másik szavazókörben (Időközi országgyűlési választások)</ViewText>
                        <ViewText style={{fontSize: 18, lineHeight: 24}} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>
                            Az időközi választásban érintett országgyűlési egyéni választókerületen belül bármely szabadon választott település kijelölt szavazókörében leadhatja szavazatát átjelentkezési kérelmet benyújtva online vagy papír alapon.
                        </ViewText>
                    </View>
                    <ViewText style={styles.subTitle} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>
                        Magyarországi lakcím nélkül
                    </ViewText>
                    <View style={{paddingVertical: 16, paddingHorizontal: 8, width: '100%', backgroundColor: Colors.light.white, borderRadius: 12, marginVertical: 16}}>
                        <ViewText style={{fontSize: 18, lineHeight: 24}} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>
                            Külhoni magyar állampolgárként - választási regisztrációját követően - szavazatát az önnek megküldött szavazási levélcsomagban leírtak szerint adhatja le az országgyűlési általános választásokon, az országos népszavazásokon, valamint – amennyiben az Európai Unió más tagállamában sincsen lakcíme – az európai parlamenti választásokon.
                        </ViewText>
                        <ViewText style={styles.linkText} lightColor={Colors.light.primary} darkColor={Colors.dark.primary}
                                  onPress={() => Linking.openURL('https://kerelem.valasztas.hu/vareg/KulfoldiCimKerelemInditasa.xhtml')}>
                            Választási regisztráció online
                        </ViewText>
                        <ViewText style={styles.linkText} lightColor={Colors.light.primary} darkColor={Colors.dark.primary}
                                  onPress={() => Linking.openURL('https://www.valasztas.hu/documents/20182/211767/Regisztr%C3%A1ci%C3%B3s+k%C3%A9relem+beny%C3%BAjt%C3%A1sa+postai+%C3%BAton/6ca89cc5-641d-46eb-a014-cd138e94c605')}>
                            Választási regisztráció postai úton (pdf)
                        </ViewText>
                        <ViewText style={styles.linkText} lightColor={Colors.light.primary} darkColor={Colors.dark.primary}
                                  onPress={() => Linking.openURL('https://www.valasztas.hu/documents/20182/211767/Kit%C3%B6lt%C3%A9si+minta+regisztr%C3%A1ci%C3%B3s+k%C3%A9relemhez/fb1f86b4-f5fe-4067-bbe5-1f1f4e841b8c')}>
                            Kitöltési minta/sample
                        </ViewText>
                        <ViewText style={styles.linkText} lightColor={Colors.light.primary} darkColor={Colors.dark.primary}
                                  onPress={() => Linking.openURL('https://www.valasztas.hu/documents/20182/211767/K%C3%A9relem+a+regisztr%C3%A1ci%C3%B3+m%C3%B3dos%C3%ADt%C3%A1s%C3%A1ra%2C+meghosszabb%C3%ADt%C3%A1s%C3%A1ra%2C+t%C3%B6rl%C3%A9s%C3%A9re/49e1e131-632e-48b1-9099-f63316eb215c')}>
                            Választási regisztráció módosítása/meghosszabbítása/törlése (pdf)
                        </ViewText>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
