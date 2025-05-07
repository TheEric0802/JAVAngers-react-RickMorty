import {useParams} from "react-router-dom";
import {Character} from "../types/RickAndMortyCharacter.ts";
import CharacterCard from "./CharacterCard.tsx";

type CharacterDetailCardProps = {
    characters: Character[]
}

export default function CharacterDetailCard(props: Readonly<CharacterDetailCardProps>) {

    const params = useParams();

    const character = props.characters.find((character) => character.id == Number(params.id));

    return (
        <>
            {
                character !== undefined
                ? <CharacterCard character={character}/>
                : <p>Character not found</p>
            }
        </>
    )
}