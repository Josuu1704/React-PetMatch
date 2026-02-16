import {Image, ScrollView, Text, View} from "react-native";
import {ButtonInicio} from "../../../sharedComponents/ButtonInicio";
import {styles} from "./InicioStyle";

export const InicioView = () => {
    return (
        <View>
            <Text style={styles.titleApp}> PetMatch </Text>
            <Text style={styles.titleDescription}> Adopt & Find </Text>

            <ButtonInicio
                text={"Inciar Sesión"}>
            </ButtonInicio>

            <ButtonInicio
                text={"Inciar Sesión"}>
            </ButtonInicio>

            <ButtonInicio
                text={"Inciar Sesión"}>
            </ButtonInicio>
        </View>
    )
}