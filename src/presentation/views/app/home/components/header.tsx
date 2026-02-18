import {StyleSheet, Image, Text, View, TouchableOpacity} from "react-native";
import {Icon} from "react-native-paper/lib/typescript/components/List/List";

export const HeaderComponent =() => {
    return (
        <View>
            <Image
                style={styles.image}
                source={require("../../../../../../assets/Logos/logo-removebg-preview.png")}
                resizeMode="contain"

            />

            <TouchableOpacity>
                <Icon name= "menu" size ={28} color={"#000"}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{

    }
})