import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "@reach/router";

const Pets = props => {
  const [pets, setPets] = useState([]);
  const [randomPet, setRandomPet] = useState({});
  const [searchCategory, setSearchCategory] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets")
      .then(res => setPets(res.data))
      .catch(console.log);
  }, []);

  const handleDelete = idToDel => {
    axios
      .delete("http://localhost:8000/api/pets/" + idToDel)
      .then(res => {
        const filteredPets = pets.filter(pet => pet._id !== idToDel);
        setPets(filteredPets);
      })
      .catch(console.log);
  };

  const handleRandomPet = () => {
    const randIdx = Math.floor(Math.random() * pets.length);
    const randomItem = pets[randIdx];
    setRandomPet(randomItem);
  };

  return (
    <>
      {/* <div>
        <label>DO A SEARCH </label>
        <input
          onChange={event => setSearchCategory(event.target.value)}
          type="text"
        />
      </div> */}
      <hr />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets
            .filter(pet => {
              if (searchCategory === "") {
                return true;
              } else {
                return (
                  pet.skill1.includes(searchCategory) ||
                  pet.skill2.includes(searchCategory)
                );
              }
            })
            .map((pet, idx) => (
              <tr key={idx}>
                <td>{pet.petName}</td>
                <td>{pet.petType}</td>

                <td>
                  <Link to={"/pets/" + pet._id}>Details</Link> |{" "}
                  <Link to={"/pets/" + pet._id + "/edit"}>Edit</Link> |{" "}
                  <button onClick={event => handleDelete(pet._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* <div>
        <h3>Random Pet:</h3>
        <button onClick={handleRandomPet}>Get Random Pet</button>
        <p>{JSON.stringify(randomPet)}</p>
      </div> */}
    </>
  );
};

export default Pets;
