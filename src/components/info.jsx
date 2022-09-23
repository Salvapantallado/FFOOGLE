import "./info.css";

export default function Info({ details, filter }) {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="item-wrapper">
      
      {details?.length >= 1 && filter === "characters"
        ? details.map((item) => (
            <div key={item.id} className="item-container">
              <div className="menu-background">
              <div className="item-description">
                <h2>{item.name}</h2>
                <span className="url-span">
                  To learn more visit{" "}
                  <a
                    href={`https://www.google.com/search?q=Final+Fantasy+${item.name}`}
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    https://www.google.com/search?q=
                    {item.name}
                  </a>
                </span>
                <p>{item.description ? item.description : "Unknown."}</p>
                <br />
                <div className="info-grid">
                  <span>
                    <b>Origin: </b> {item.origin}
                  </span>

                  <span>
                    <b>Age: </b> {item.age}
                  </span>

                  <span>
                    <b>Gender: </b> {item.gender}
                  </span>

                  <span>
                    <b>Job: </b> {item.job}
                  </span>

                  <span>
                    <b>Height: </b> {item.height}
                  </span>

                  <span>
                    <b>Weight: </b> {item.weight}
                  </span>
                </div>
              </div>
              <div className="item-img">
                <img
                  src={
                    item.pictures.length > 0 && filter === "characters" && item.pictures.length !== undefined
                      ? item.pictures[0].url
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ8puqKFJtMEUt4h9gNSa1mKp5RoSHXtBwQQ&usqp=CAU"
                  }
                  alt=""
                />
                <button onClick={goTop}>Back to top</button>
              </div>
              </div>
            </div>
          ))
        : details.message}
        {details?.length >= 1 && filter === "monsters"
        ? details.map((item) => (
            <div key={item.id} className="item-container">
              <div className="menu-background">
              <div className="item-description">
                <h2>{item.name}</h2>
                <span className="url-span">
                  To learn more visit{" "}
                  <a
                    href={`https://www.google.com/search?q=Final+Fantasy+${item.name}`}
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    https://www.google.com/search?q=
                    {item.name}
                  </a>
                </span>
                <p>{item.description ? item.description : "Unknown."}</p>
                <br />
                <div className="info-grid">
                  <span>
                    <b>Elemental Affinity: </b> {item.elementalAffinity}
                  </span>

                  <span>
                    <b>Elemental Weakness: </b> {item.elementalWeakness}
                  </span>

                  <span>
                    <b>Hit Points: </b> {item.hitPoints}
                  </span>

                  <span>
                    <b>Mana Points: </b> {item.manaPoints}
                  </span>

                  <span>
                    <b>Attack: </b> {item.attack}
                  </span>

                  <span>
                    <b>Defense: </b> {item.defense}
                  </span>
                </div>
              </div>
              <div className="item-img">
                <img
                  src={item.picture}
                  alt=""
                />
                <button onClick={goTop}>Back to top</button>
              </div>
              </div>
            </div>
          ))
        : details.message}
        {details?.length >= 1 && filter === "games" && item.pictures.length !== undefined
        ? details.map((item) => (
            <div key={item.gameId} className="item-container">
              <div className="menu-background">
              <div className="item-description">
                <h2>{item.title}</h2>
                <span className="url-span">
                  To learn more visit{" "}
                  <a
                    href={`https://www.google.com/search?q=Final+Fantasy+${item.title}`}
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    https://www.google.com/search?q=
                    {item.title}
                  </a>
                </span>
                <p>{item.description ? item.description : "Unknown."}</p>
                <br />
                <div className="info-grid">
                  <span>
                    <b>Platform: </b> {item.platform}
                  </span>

                  <span>
                    <b>Release: </b> {item.releaseDate}
                  </span>

                </div>
              </div>
              <div className="item-img">
                <img
                  src={item.picture}
                  alt=""
                />
                <button onClick={goTop}>Back to top</button>
              </div>
            </div>
        </div>
          ))
        : details.message}
    </div>
  );
}
