import {TouchableOpacity, StyleSheet, Text} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

type Props = {
    text: string,
    type?: "default" | "primary" | "secondary"
}

export const ButtonInicio = (
    {text, type = "default"}:Props
) => {
    return (
        <TouchableOpacity
            style={[
                styles.buttonContainer,
                type === "primary" ? {width:"95%", alignSelf:"center"} : null,
            ]}
            >

            <LinearGradient
                colors={['#b2c55b', '#65975f']}
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
        width: "70%",
        alignSelf: "center",
        margin: 10,

    },

    gradient: {
        alignItems: "center",
        paddingVertical: 50,
        borderRadius: 20,

    },

    textButton: {
        fontWeight: "600",
        fontSize: 18,
        color: "#FFFFFF",
        textAlign: "center",
    }

})

