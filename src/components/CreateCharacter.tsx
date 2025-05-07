import {FormEvent, useState} from "react";
import {Character} from "../types/RickAndMortyCharacter.ts";
import {characters} from "../Characters.ts";
import {useNavigate} from "react-router-dom";

type CreateCharacterProps = {
    addCharacter: (character: Character) => void
}

export default function CreateCharacter(props: Readonly<CreateCharacterProps>) {

    const [name, setName] = useState<string>("");
    const [status, setStatus] = useState<string>("Alive");
    const [species, setSpecies] = useState<string>("");

    const nav = useNavigate();

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const char:Character = {
            id: characters.length + 1000,
            name: name,
            status: status,
            species: species,
            type: "",
            gender: "",
            origin: {
                name: "",
                url: ""
            },
            location: {
                name: "",
                url: ""
            },
            image: "",
            episode: [],
            url: "",
            created: ""
        }
        props.addCharacter(char)
        nav("/characters")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Name</span>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <br/>
                <label>
                    <span>Status</span>
                    <select value={status} onChange={e => setStatus(e.target.value)} >
                        <option>Alive</option>
                        <option>Dead</option>
                        <option>unknown</option>
                    </select>
                </label>
                <br/>
                <label>
                    <span>Species</span>
                    <input type="text" value={species} onChange={e => setSpecies(e.target.value)} />
                </label>
                <button>Speichern</button>
            </form>
        </>
    )
}