import { useState, useEffect } from "react";
import pokemonData from "../data/pokemonData";
import axios from 'axios';


const PokeGallery = ({ type }) => {

    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    //fetch data
    const fetchData = async () => {
        try {
            await axios.get("https://poke-wars.herokuapp.com/pokemon").then((res) => {
                setPokemon(res.data);
                setLoading(false);
                //console.log(res.data);
            });
        } catch (e) {
            setError(true);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    //filter pokemon based on it's selection
    const filteredPokes = pokemon.filter(p => p.type.includes(type));
    console.log(filteredPokes);

    return (
        <>
            {filteredPokes.map(poke => {
                return (
                    <div>
                        <h1>
                            {poke.name.english}
                        </h1>
                        {poke.type.map(poketype => (
                            <>
                                <p>{poketype}</p>
                            </>
                        ))}
                        <ul>
                            <li>Attack: {poke.base.Attack}</li>
                            <li>Defense: {poke.base.Defense}</li>
                            <li>HP: {poke.base.HP}</li>
                            <li>Speed: {poke.base.Speed}</li>
                            <li>Special Attack: {poke.base["Sp.Attack"]}</li>
                            <li>Special Defense: {poke.base["Sp.Defense"]}</li>
                        </ul>
                    </div>
                )
            })}

        </>
    )
}

export default PokeGallery;