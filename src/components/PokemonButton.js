import { useState, useEffect } from "react";
import pokemonData from "../data/pokemonData";
import axios from 'axios';

const PokemonButton = () => {
    //********************get data from different component************* */
    // const [pokemon, setPokemon] = useState([]);
    // const [error, setError] = useState(false);
    // const [loading, setLoading] = useState(true);
    // const fetchData = () => {
    //     //get pokemon data
    //     try {
    //         setPokemon(pokemonData.getAllPokemon());
    //     } catch (e) {
    //         setError(true);
    //     }
    // }
    // useEffect(() => {
    //     fetchData();
    // }, [])
    //********************get data from different component************* */

    const [pokemon, setPokemon] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    //fetch data
    const fetchData = async () => {
        try {
            await axios.get("https://poke-wars.herokuapp.com/pokemon").then((res) => {
                setPokemon(res.data);
                setLoading(false);
                console.log(res.data);
            });
        } catch (e) {
            setError(true);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    //creating of an array of pokemon types
    const pokemonTypes = ['Normal', 'Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy']
    if (loading) return <h1>LOADING........</h1>; //no need if not fetching data
    if (error) return <h1>Something went wrong........</h1>; //no need if not fetching data
    return (
        <>
            <div>
                {pokemonTypes.slice(0, 9).map(p => (
                    <button type="submit" name={p} value={p}>{p} Pokemon</button>
                ))}
            </div>
            <div>
                {pokemonTypes.slice(9).map(p => (
                    <button type="submit" name={p} value={p}>{p} Pokemon</button>
                ))}
            </div>
        </>
    );

}

export default PokemonButton;