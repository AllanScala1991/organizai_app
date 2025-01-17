import { Alert, Button, TextField } from "@mui/material"
import "./index.css"
import { ChangeEvent, useState } from "react"
import { createUser } from "./service"

export function CreateUser() {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [url, setUrl] = useState("")
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState("")
    const [messageSeverity, setMessageSeverity] = useState("error")

    const insertUser = async () => {
        const response = await createUser({
            name: name,
            username: username,
            password: password,
            photoUrl: url
        })

        if(response.status != 201) {
            setMessage(response.message)
            setMessageSeverity("error")
            setShowMessage(true)
            return
        }

        setMessage("Usuário criado com sucesso.")
        setMessageSeverity("success")
        setShowMessage(true)

        document.querySelectorAll("input").forEach((item) => {
            if(item) item.value = ""
        })

        setName("")
        setUsername("")
        setPassword("")
        setUrl("")
    }

    return(
        <div className="createUserContainer">
            <div className="createUserInputs">
                <h1>Cadastro de Usuário</h1>
               <TextField 
                    id="input_name"
                    style={{width: "70%"}}
                    label="Nome Completo"
                    margin="normal"
                    onChange={(name: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setName(name.target.value)}
                />
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

                <TextField 
                    id="input_photoUrl"
                    style={{width: "70%"}}
                    label="Link da Foto"
                    margin="normal"
                    onChange={(photoUrl: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setUrl(photoUrl.target.value)}
                />

                <Button 
                    variant="contained"
                    id="btn_register"
                    style={{width: "70%", marginTop: "2vh", height: "6vh"}}
                    onClick={() => insertUser()}
                >REGISTRAR</Button>

                <Button 
                    variant="outlined"
                    id="btn_back"
                    style={{width: "70%", marginTop: "2vh", height: "6vh", marginBottom: "2vh"}}
                    onClick={() => window.location.href = "/"}
                >VOLTAR</Button>

                {
                    showMessage && messageSeverity === "error" ?
                        <Alert variant="filled" severity="error" className="modal_message_login">
                            {message}
                        </Alert>
                    :
                        null
                }

                {
                    showMessage && messageSeverity === "success" ?
                        <Alert variant="filled" severity="success" className="modal_message_login">
                            {message}
                        </Alert>
                    :
                        null
                }
            </div>

        </div>
    )
}