import { Link } from "react-router-dom";
import PokemonButton from "../components/PokemonButton";
import PokeGallery from "../components/PokeGallery";
import { useState, useEffect } from "react";

const Home = () => {

    const [type, setType] = useState('Fire')

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
    }

    const handleClick = (e) => {

        setType(e.target.value);
        console.log(type);
    }

    return (
        <>
            <h1>Welcome to the Pokemon Games</h1>
            <p>Select your Pokemon for the fight</p>

            {/* // ChooosePokemon COMPONENT: */}
            {/* Set state to FIRE/WATER/POISON             */}
            {/* <button>Fire Pokemon</button>
            <button>Water Pokemon</button>
            <button>Poison Pokemon</button> */}
            <form onSubmit={handleSubmit}> {/*This won't work as all the buttons will be in same form */}
                <PokemonButton />
            </form>
            {/* // Gallery COMPONENT: */}
            {/* if state is fire: show firebackroud background
and .filter only pokemons with fire type */}
            <div><PokeGallery type={type} /></div>


            {/* <Link to={`/choose`}>
                <button>My Pokemon is chosen!!</button>
            </Link> */}

        </>
    )
}

export default Home;