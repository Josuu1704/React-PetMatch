import {Image, Text, TextInput, View} from "react-native";
import {styles} from "../Inicio/InicioStyle";



const LoginView=() =>{
    return (
        <View>

            <Image
                source = {require("../../../../../assets/Logos/logoApp.png")}
                />

            <TextInput
                autoComplete={"email"}
                placeholder={"...@example.com"}
                keyboardType={"email-address"}
                ></TextInput>

            <TextInput
                autoComplete={"password"}
                placeholder={"*******"}
                keyboardType={"default"}
                secureTextEntry={true}
                ></TextInput>

        </View>
    )
}

export default LoginView;