import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {InicioView} from "../views/auth/Inicio/InicioView";
import LoginView from "../views/auth/Login/LoginView";
import RegisterView from "../views/auth/Register/RegisterView";
import {NavigationContainer} from "@react-navigation/native";
import HomeView from "../views/app/home/HomeView";

export type RootStackParamList = {
    Inicio: undefined;
    Login: undefined
    Register: undefined;
    Home: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();
export const AppNavigator =() => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false , animation: "default"}}
                >
                <Stack.Screen name={"Inicio"} component={InicioView}></Stack.Screen>
                <Stack.Screen name={"Home"} component={HomeView}></Stack.Screen>
                <Stack.Screen name={"Login"} component={LoginView}></Stack.Screen>
                <Stack.Screen name = {"Register"} component={RegisterView}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}