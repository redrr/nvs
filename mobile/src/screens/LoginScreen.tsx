import * as React from 'react';
import {Component} from 'react';
import Button from "../components/Button";
import {Text, View} from '../components/Themed';
import Colors from "../constants/Colors";
import {styles} from "../constants/Styles";
import SelectDropdown from 'react-native-select-dropdown'

export default class LoginScreen extends Component<any, any> {

    app: any

    constructor(props: Readonly<any> | any) {
        super(props);
        this.state = {
            data: [],
            selected: 0
        }
        this.app = props.app
    }

    componentDidMount() {
        //Fetch options
        this.setState({
            data: ["Budapest, Budapest V. kerület","Budapest, Budapest XI. kerület","Budapest, Budapest XII. kerület","Budapest, Budapest II. kerület","Budapest, Budapest VII. kerület","Budapest, Budapest VIII. kerület","Budapest, Budapest XIII. kerület","Budapest, Budapest XIV. kerület","Budapest, Budapest X. kerület","Budapest, Budapest III. kerület","Budapest, Budapest IV. kerület","Budapest, Budapest XV. kerület","Budapest, Budapest XVI. kerület","Budapest, Budapest XVII. kerület","Budapest, Budapest XVIII. kerület","Budapest, Budapest XX. kerület","Budapest, Budapest XXI. kerület","Budapest, Budapest XXII. kerület","Bács-Kiskun, Kecskemét","Bács-Kiskun, Kecskemét","Bács-Kiskun, Kalocsa","Bács-Kiskun, Kiskunfélegyháza","Bács-Kiskun, Kiskunhalas","Bács-Kiskun, Baja","Baranya, Pécs","Baranya, Pécs","Baranya, Mohács","Baranya, Szigetvár","Békés, Békéscsaba","Békés, Békés","Békés, Gyula","Békés, Orosháza","Borsod-Abaúj-Zemplén, Miskolc","Borsod-Abaúj-Zemplén, Miskolc","Borsod-Abaúj-Zemplén, Ózd","Borsod-Abaúj-Zemplén, Kazincbarcika","Borsod-Abaúj-Zemplén, Sátoraljaújhely","Borsod-Abaúj-Zemplén, Tiszaújváros","Borsod-Abaúj-Zemplén, Mezőkövesd","Csongrád, Szeged","Csongrád, Szeged","Csongrád, Szentes","Csongrád, Hódmezővásárhely","Fejér, Székesfehérvár","Fejér, Székesfehérvár","Fejér, Bicske","Fejér, Dunaújváros","Fejér, Sárbogárd","Győr-Moson-Sopron, Győr","Győr-Moson-Sopron, Győr","Győr-Moson-Sopron, Csorna","Győr-Moson-Sopron, Sopron","Győr-Moson-Sopron, Mosonmagyaróvár","Hajdú-Bihar, Debrecen","Hajdú-Bihar, Debrecen","Hajdú-Bihar, Debrecen","Hajdú-Bihar, Berettyóújfalu","Hajdú-Bihar, Hajdúszoboszló","Hajdú-Bihar, Hajdúböszörmény","Heves, Eger","Heves, Gyöngyös","Heves, Hatvan","Jász-Nagykun-Szolnok, Szolnok","Jász-Nagykun-Szolnok, Jászberény","Jász-Nagykun-Szolnok, Karcag","Jász-Nagykun-Szolnok, Törökszentmiklós","Komárom-Esztergom, Tatabánya","Komárom-Esztergom, Esztergom","Komárom-Esztergom, Komárom","Nógrád, Salgótarján","Nógrád, Balassagyarmat","Pest, Érd","Pest, Budakeszi","Pest, Szentendre","Pest, Vác","Pest, Dunakeszi","Pest, Gödöllő","Pest, Vecsés","Pest, Szigetszentmiklós","Pest, Nagykáta","Pest, Monor","Pest, Dabas","Pest, Cegléd","Somogy, Kaposvár","Somogy, Barcs","Somogy, Marcali","Somogy, Siófok","Szabolcs-Szatmár-Bereg, Nyíregyháza","Szabolcs-Szatmár-Bereg, Nyíregyháza","Szabolcs-Szatmár-Bereg, Kisvárda","Szabolcs-Szatmár-Bereg, Vásárosnamény","Szabolcs-Szatmár-Bereg, Mátészalka","Szabolcs-Szatmár-Bereg, Nyírbátor","Tolna, Szekszárd","Tolna, Dombóvár","Tolna, Paks","Vas, Szombathely","Vas, Sárvár","Vas, Körmend","Veszprém, Veszprém","Veszprém, Balatonfüred","Veszprém, Tapolca","Veszprém, Pápa","Zala, Zalaegerszeg","Zala, Keszthely","Zala, Nagykanizsa"]})
    }

    render() {
        return (
            <View style={styles.container} lightColor={Colors.light.whiter} darkColor={Colors.dark.darker}>
                <Text style={styles.title} lightColor={Colors.light.darker} darkColor={Colors.dark.whiter}>Választás 2022</Text>
                <SelectDropdown
                    data={this.state.data}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                        this.setState({selected: index+1})
                    }}
                    defaultButtonText={"Válassz szavazó körzetet"}
                    buttonStyle={{width: '100%', borderRadius: 10, marginVertical: 16}}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        // text represented after item is selected
                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                        // text represented for each item in dropdown
                        // if data array is an array of objects then return item.property to represent item in dropdown
                        return item
                    }}
                />
                <Button title={'Tovább'} style={styles.btn_p_lg} onPress={() => {
                    this.app.context.signIn(this.state.selected)
                        .then((e:any) => console.log(this.state.selected))
                        .catch((e:any) => console.log(e))
                }}/>
            </View>
        );
    }

//https://www.valasztas.hu/oevk-jegyzokonyv?
//          p_p_id=ogyoevkeredmenyadatlap_WAR_nvinvrportlet&
//          p_p_lifecycle=1&
//          p_p_state=normal&
//          p_p_mode=view&
//          p_p_col_id=column-2&
//          p_p_col_pos=2&
//          p_p_col_count=3&
//          _ogyoevkeredmenyadatlap_WAR_nvinvrportlet_megyeKod=01&
//          _ogyoevkeredmenyadatlap_WAR_nvinvrportlet_vlId=244&
//          _ogyoevkeredmenyadatlap_WAR_nvinvrportlet_vltId=556&
//          _ogyoevkeredmenyadatlap_WAR_nvinvrportlet_oevkKod=1

//https://www.valasztas.hu/oevk-jegyzokonyv?
//          p_p_id=ogyoevkeredmenyadatlap_WAR_nvinvrportlet&
//          p_p_lifecycle=1&
//          p_p_state=normal&
//          p_p_mode=view&
//          p_p_col_id=column-2&
//          p_p_col_pos=2&
//          p_p_col_count=3&
//          _ogyoevkeredmenyadatlap_WAR_nvinvrportlet_megyeKod=03&
//          _ogyoevkeredmenyadatlap_WAR_nvinvrportlet_vlId=244&
//          _ogyoevkeredmenyadatlap_WAR_nvinvrportlet_vltId=556&
//          _ogyoevkeredmenyadatlap_WAR_nvinvrportlet_oevkKod=6

    //Megye és oevk kell az azonosításhoz
}
