import { randoPlanetInfo } from "../service/getPlanet";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function RandomPlanet(props) {
  const [randPlanet, setRandPlanet] = useState([]);

  const fetchRandoPlanets = async () => {
    const data = await randoPlanetInfo();
    setRandPlanet(data.planet);
  };
  useEffect(() => {
    fetchRandoPlanets();
    console.log();
  }, []);

  return (
    <div className="RandoPlanets" style={{ textAlign: "center", backgroundColor: "pink", listStyleType: "none", fontSize: "30px", paddingBottom: "90px", paddingTop: "30px" }}>
      <h3 style={{ backgroundColor: "pink" }}>Random Planet</h3>
      <button onClick={fetchRandoPlanets} style={{ height: "50px", width: "200px", borderRadius: "5px", borderColor: "black", backgroundColor: "black", color: "white", fontSize: "30px" }}>Get Planet</button>
      <li style={{ paddingTop: "40px", textAlign: "center" }}>
        <NavLink style={{ textAlign: "center" }}
          to={{
            pathname: "/planetDetail",
            state: {
              name: randPlanet.name,
              color: randPlanet.color,
              moons: randPlanet.num_moons,
            },
          }}


        >
          {randPlanet.name}
        </NavLink>
      </li>
    </div>
  );
}

export default RandomPlanet;
