import {Image, Text, TextInput, View} from "react-native";
import {styles} from "./RegisterStyles";
import {ButtonEnter} from "../../../sharedComponents/ButtonEnter";



const  RegisterView=() =>{
    return (
        <View>

            <Image style={styles.image}
                   source = {require("../../../../../assets/Logos/logoApp.png")}
            />

            <TextInput style={styles.textInput}
                       autoComplete={"email"}
                       placeholder={"...@example.com"}
                       keyboardType={"email-address"}
            ></TextInput>

            <TextInput style={styles.textInput}
                       autoComplete={"password"}
                       placeholder={"*******"}
                       keyboardType={"default"}
                       secureTextEntry={true}
            ></TextInput>

            <TextInput style={styles.textInput}
                       autoComplete={"password"}
                       placeholder={"*******"}
                       keyboardType={"default"}
                       secureTextEntry={true}
            ></TextInput>

            <ButtonEnter
                text={"Entrar"}
            >
            </ButtonEnter>

            <Text style={styles.text}> Inciar sesión como invitado </Text>

            <Text style={styles.text}> ¿Ya tienes una cuenta? Inicia sesión </Text>
        </View>
    )
}

export default RegisterView;
