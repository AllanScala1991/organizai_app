import { Avatar, LinearProgress } from "@mui/material"
import "./index.css"
import { UserCheck, UsersThree } from "@phosphor-icons/react"

export function Profile() {
    
    return (
        <div className="profileContainer">
            <div className="photoProfileContainer">
                <Avatar alt="avatar icon" src="https://cdn-icons-png.flaticon.com/512/147/147144.png" sx={{width: 64, height: 64}}/>

                <div className="profileInfoContainer">
                    <h3 className="infoProfile">Carlos Eduardo Ramos</h3>
                    <div className="infoProfile">Nível: 33</div>
                    <LinearProgress 
                        variant="determinate" 
                        value={10} 
                        color="success"
                        sx={{width: '80%'}}  
                        className="infoProfile"
                    />100 / 1000
                </div>
            </div>

            <div className="profileFollowerContainer">
                <UserCheck size={32} weight="light" color="#ffffff"/>
                <div className="textFollowers">200 Seguindo</div>
                <UsersThree size={32} weight="light" color="#ffffff"/>
                <div className="textFollowers">200 Seguidores</div>
            </div>
        </div>
    )
}