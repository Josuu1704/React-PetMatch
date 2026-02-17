import {Image, ScrollView, Text, View} from "react-native";
import {ButtonInicio} from "../../../sharedComponents/ButtonInicio";
import { useNavigation } from "@react-navigation/native";

import {styles} from "./InicioStyle";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../navigation/RootNavigator";



export const InicioView = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View>
            <Text style={styles.titleApp}> PetMatch </Text>
            <Text style={styles.titleDescription}> Adopt & Find </Text>

            <ButtonInicio
                text={"Inciar Sesión"}
                fnDeOtroComponente={() => {
                    navigation.navigate("Login");
                }}
            >
            </ButtonInicio>

            <ButtonInicio
                text={"Crear Cuenta"}
                fnDeOtroComponente={() => {
                    navigation.navigate("Register")
                }}
            >
            </ButtonInicio>

            <ButtonInicio
                text={"Entrar como invitado"}
                fnDeOtroComponente={() => {
                    navigation.navigate("Home")
                }}
            >
            </ButtonInicio>
        </View>
    )
}