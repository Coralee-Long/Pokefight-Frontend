import { Link } from "react-router-dom";
import PokemonButton from "../components/PokemonButton";
import PokeGallery from "../components/PokeGallery";
import "../styles/home.css";

const Home = ({ type, setType }) => {
  //   const [type, setType] = useState("Normal");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const form = e.target;
  //     console.log(form);
  //   };

  //   const handleClick = (e) => {
  //     setType(e.target.value);
  //     console.log(type);
  //   };
  console.log(type);

  return (
    <>
      <h1>Welcome to the Pokemon Games</h1>
      <p>Select your Pokemon for the fight</p>
      <PokemonButton type={type} setType={setType} />
      {/* // Gallery COMPONENT: */}
      <div>
        <PokeGallery type={type} setType={setType} />
      </div>
      {/* <Link to={`/choose`}>
                <button>My Pokemon is chosen!!</button>
            </Link> */}
    </>
  );
};

export default Home;
