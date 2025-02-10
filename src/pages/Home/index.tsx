import { Profile } from "../../components/Profile"
import "./index.css"

export function Home() {

    return (
        <div className="homeContainer">
            <div className="homeLeftContainer">
                <Profile />
            </div>
            
            <div className="homeRightContainer"></div>
        </div>
    )
}