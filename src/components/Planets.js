import { NavLink } from "react-router-dom";
import { planetInfo } from "../service/getPlanet";
import { useState, useEffect } from "react";
import "../styles/Planets.css";

function Planets(props) {
  const [planet, setPlanet] = useState([]);

  const fetchPlanets = async () => {
    const data = await planetInfo();
    console.log(data);
    setPlanet(data.planets);
  };
  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <div className="planets" style={{ textAlign: "center" }}>
      <h3>Planet List</h3>
      {planet.map((planetObj, index) => {
        return (
          <li key={index} style={{ textAlign: "center" }}>
            <NavLink
              to={{
                pathname: "/planetDetail",
                state: {
                  name: planetObj.name,
                  color: planetObj.color,
                  moons: planetObj.num_moons,
                },
              }}
            >
              {planetObj.name}
            </NavLink>
          </li>
        );
      })}
    </div>
  );
}

export default Planets;
