import {useNavigate} from "react-router-dom";
import "./Header.css";

export default function Header() {

    const navigate = useNavigate();
    return (
        <header className="header">
            <h1>Titel</h1>
            <nav className={"navbar"}>
                <button onClick={() => navigate("/")}>Home</button>
                <button onClick={() => navigate("/characters")}>Characters</button>
                <button onClick={() => navigate("/create")}>Create Character</button>
            </nav>
        </header>
    );
}