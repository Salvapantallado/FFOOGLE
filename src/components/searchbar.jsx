import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./searchbar.css";
import Info from "./info";

export default function Searchbar() {
  const [search, setSearch] = useState("");
  const [details, setDetails] = useState([]);
  const [filter, setFilter] = useState("characters");
  console.log(details);

  async function awaitGames() {
    try {
      const getGames = await axios.get(
        `https://www.moogleapi.com/api/v1/games`
      );
      const filterGames = getGames.data.filter((x) =>
        x.title.toLowerCase().includes(search.toLowerCase())
      );
      setDetails(filterGames);
    } catch (err) {
      console.log(err);
    }
  }

  async function RandomInfo() {
    try {
      const getInfo = await axios.get(
        `https://www.moogleapi.com/api/v1/${filter}`
      );
      console.log(getInfo);
      const Random = getInfo.data.sort(() => Math.random() - 0.5).slice(0, 3);

      setDetails(Random);
    } catch (err) {
      console.log(err);
    }
  }

  /*eslint-disable*/
  useEffect(() => {
    if (search !== "" && filter !== "games") {
      axios
        .get(`https://www.moogleapi.com/api/v1/${filter}/search?name=${search}`)
        .then((res) => setDetails(res.data));
    }

    if (search !== "" && filter === "games") {
      awaitGames();
    }

    setDetails([]);
  }, [search, filter]); 
  /*eslint-enable*/

  const handleFilter = (e) => {
    e.preventDefault();
    if (e.target.value === filter) return;
    setDetails([]);
    setSearch("");
    setFilter(e.target.value);
  };

  return (
    <div className="searchbar">
      <div className="container">
        <form>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder={`Search any FF ${filter}!`}
          />
          <img
            src="https://freepikpsd.com/file/2019/10/icono-de-buscar-png-1-Transparent-Images-Free.png"
            alt=""
          />
        </form>
      </div>
      <div className="button-list">
        <ul>
          <div className={filter === "characters" ? "active" : null}>
            <button value="characters" onClick={handleFilter}>
              Characters
            </button>
          </div>
          <div className={filter === "monsters" ? "active" : null}>
            <button value="monsters" onClick={handleFilter}>
              Monsters
            </button>
          </div>
          <div className={filter === "games" ? "active" : null}>
            <button value="games" onClick={handleFilter}>
              Games
            </button>
          </div>
        </ul>
      </div>
      {search === "" ? (
        <div className="random-button">
          <button onClick={() => RandomInfo()}>
            <h4>Click me to get random {filter}</h4>
          </button>
        </div>
      ) : null}
      {details.length > 0 && search !== "" ? <span>Current results: {details.length}</span> : null}
      <div>
        <Info details={details} filter={filter} />
      </div>
    </div>
  );
}
