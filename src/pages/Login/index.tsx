import { Alert, Button, TextField } from "@mui/material"
import "./index.css"
import { ClipboardText } from "@phosphor-icons/react"
import { ChangeEvent, useState } from "react"
import { loginWithUsernameAndPassword } from "./service"
import { jwtDecode } from "jwt-decode"

export function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState("")

    const login = async () => {
        const response = await loginWithUsernameAndPassword(username, password);

        if(response.status != 200) {
            setMessage(response.message)
            setShowMessage(true)
        }

        const token: { id: string, name: string } = jwtDecode(response.data.token)

        window.sessionStorage.setItem("token", response.data.token);
        window.localStorage.setItem("id", token.id);
        window.localStorage.setItem("name", token.name);

        return window.location.href = "/home";
    }


    return (
        <div className="loginContainer">
            <div className="loginBox">
                <div className="loginLeftBox">
                    <ClipboardText 
                        size={128} 
                        color="#f9f9f9"
                        weight="fill"
                    />
                    <h2>Organiza Ai</h2>
                </div>

                <div className="loginRightBox">
                    <h3>LOGIN</h3>
                    <TextField 
                        id="input_username"
                        style={{width: "70%"}}
                        label="Usuário"
                        margin="normal"
                        onChange={(username: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setUsername(username.target.value)}
                    />
                    <TextField 
                        id="input_password"
                        style={{width: "70%"}}
                        label="Senha"
                        type="password"
                        margin="normal"
                        onChange={(password: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setPassword(password.target.value)}
                    />
                    <Button 
                    variant="contained" 
                    style={{width: "70%", marginTop: "5vh", height: "6vh"}}
                    id="btn_login"
                    onClick={() => login()}
                    >Login</Button>
                    <Button 
                    variant="outlined"
                    style={{width: "70%", marginTop: "2vh", height: "6vh"}}
                    id="btn_register"
                    onClick={() => window.location.href = "/create/user"}
                    >Registre-se</Button>

                    {
                        showMessage ?
                            <Alert variant="filled" severity="error" className="modal_message_login">
                                {message}
                            </Alert>
                        :
                            null
                    }
                </div>
            </div>
        </div>
    )
}