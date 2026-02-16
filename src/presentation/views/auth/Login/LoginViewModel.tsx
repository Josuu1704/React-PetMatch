import {useState} from "react";

const LoginViewModel = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    const validate = () => {
        if (!email.includes("@")){
            alert("Correo electrónico no válido. Falta un @.")
            return false;
        }
        if(email == null){
            alert("Correo requerido")
            return false;
        }
        if(password == null){
            alert("Contraseña requerido")
            return false;
        }
        if (password.length > 6){
            alert("La contraseña debe tener min. 6 caracteres")
            return false;
        }
        return true;
    }

    return {
        email,
        password,
        setEmail,
        setPassword,

    }
}

export default LoginViewModel;