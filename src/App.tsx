import './App.css'
import CharacterGallery from "./components/CharacterGallery.tsx";
import {useEffect, useState} from "react";
import {characters} from "./Characters.ts";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header.tsx";
import CharacterDetailCard from "./components/CharacterDetailCard.tsx";
import CreateCharacter from "./components/CreateCharacter.tsx";
import axios from "axios";

export default function App() {
    const [searchText, setSearchText] = useState("");
    const [characterList, setCharacterList] = useState(characters);

    const filteredCharacters = characterList
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));

    function loadAllCharacters() {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => setCharacterList(response.data.results));
    }

    useEffect(() => {
        loadAllCharacters();
    }, [])

    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<h1>Welcome</h1>} />
                <Route path={"/characters"} element={
                    <>
                        <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a character"/>
                        {/*<button onClick={loadAllCharacters}>Load Characters</button>*/}
                        {
                            filteredCharacters.length > 0
                                ? <CharacterGallery characters={filteredCharacters}/>
                                : <p>No characters found</p>
                        }
                    </>
                } />
                <Route path={"characters/:id"} element={<CharacterDetailCard characters={characters}/>}/>
                <Route path={"/create"} element={<CreateCharacter addCharacter={char => setCharacterList([...characterList, char])}/>} />
            </Routes>
        </>
    );
}
