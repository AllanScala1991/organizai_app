import { Button, TextField } from "@mui/material"
import "./index.css"
import { ChangeEvent, useState } from "react"

export function CreateUser() {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [url, setUrl] = useState("")

    return(
        <div className="createUserContainer">
            <div className="createUserInputs">
                <h1>Cadastro de Usuário</h1>
               <TextField 
                    id="input_name"
                    className="inputs_create_user"
                    label="Nome Completo"
                    margin="normal"
                    onChange={(name: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setName(name.target.value)}
                />
                <TextField 
                    id="input_username"
                    className="inputs_create_user"
                    label="Usuário"
                    margin="normal"
                    onChange={(username: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setUsername(username.target.value)}
                />

                <TextField 
                    id="input_password"
                    className="inputs_create_user"
                    label="Senha"
                    type="password"
                    margin="normal"
                    onChange={(password: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setPassword(password.target.value)}
                />

                <TextField 
                    id="input_photoUrl"
                    className="inputs_create_user"
                    label="Link da Foto"
                    margin="normal"
                    onChange={(photoUrl: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setUrl(photoUrl.target.value)}
                />

                <Button 
                    variant="contained"
                    color="success"
                    id="btn_register"
                    className="buttons"
                    onClick={() => null}
                >REGISTRAR</Button>

                <Button 
                    variant="contained"
                    id="btn_back"
                    className="buttons"
                    onClick={() => null}
                >VOLTAR</Button>
            </div>

        </div>
    )
}