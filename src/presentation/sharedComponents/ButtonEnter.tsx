import {TouchableOpacity, StyleSheet, Text} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

type Props = {
    text: string;
    type?: "default" | "primary" | "secondary";
}

export const ButtonEnter = (
    {text, type = "default"}: Props
) =>{
    return (
        <TouchableOpacity
            style={[
                styles.buttonContainer,
                type === "primary" ? {width:"95%", alignSelf:"center"} : null,
            ]}>

            <LinearGradient
                colors={['#5BB4B0', '#79C680']}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                style={styles.gradient}
            >
                <Text style={styles.textButton}>{text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: "60%",
        alignSelf: "center",
        margin:10,
    },

    gradient: {
        alignItems: "center",
        padding:15,
        borderRadius: 20,
    },

    textButton: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#FFFFFF",
        textAlign: "center",
    }
})
