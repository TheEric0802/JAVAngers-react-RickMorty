import './App.css'
import CharacterGallery from "./components/CharacterGallery.tsx";
import {useState} from "react";
import {characters} from "./Characters.ts";
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header.tsx";
import CharacterDetailCard from "./components/CharacterDetailCard.tsx";

export default function App() {
    const [searchText, setSearchText] = useState("");

    const filteredCharacters = characters
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<h1>Welcome</h1>} />
                <Route path={"/characters"} element={
                    <>
                        <input type="text" onChange={(e) => setSearchText(e.target.value)} placeholder="Search for a character"/>
                        {
                            filteredCharacters.length > 0
                                ? <CharacterGallery characters={filteredCharacters}/>
                                : <p>No characters found</p>
                        }
                    </>
                } />
                <Route path={"characters/:id"} element={<CharacterDetailCard characters={characters}/>}/>
            </Routes>
        </>
    );
}
