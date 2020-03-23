import React, { useEffect, useState } from "react";

import { navigate } from "@reach/router";

import axios from "axios";

const EditPet = props => {
  console.log(props);
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets/" + props.id)
      .then(res => {
        const pet = res.data;

        setPetName(pet.petName);
        setPetType(pet.petType);
        setPetDescription(pet.petDescription);
        setSkill1(pet.skill1);
        setSkill2(pet.skill2);
        setSkill3(pet.skill3);
      })
      .catch(console.log);
  }, [props.id]);

  const handleSubmit = event => {
    event.preventDefault();

    const editedPet = {
      // long-form
      petName: petName,
      // shorthand because key name and value stored in matching var name
      petDescription,
      petType,
      skill1,
      skill2,
      skill3
    };
    axios
      .put("http://localhost:8000/api/pets/" + props.id, editedPet)
      .then(res => navigate("/pets/" + res.data._id))
      .catch(err => {
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <h2>Edit Pet</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pet Name: </label>
          <input
            onChange={event => setPetName(event.target.value)}
            value={petName}
            type="text"
          />
          {errors.petName ? (
            <span className="error">{errors.petName.message}</span>
          ) : (
            ""
          )}
        </div>

        <div>
          <label>Pet Type: </label>
          <textarea
            onChange={event => setPetType(event.target.value)}
            value={petType}
            type="text"
          ></textarea>
          {errors.petType ? (
            <span className="error">{errors.petType.message}</span>
          ) : (
            ""
          )}
        </div>
        <div>
          <label> Pet Description: </label>
          <textarea
            onChange={event => setPetDescription(event.target.value)}
            value={petDescription}
            type="text"
          ></textarea>
          {errors.petDescription ? (
            <span className="error">{errors.petDescription.message}</span>
          ) : (
            ""
          )}
        </div>
        <div>
          <label>Skill 1: </label>
          <input
            onChange={event => setSkill1(event.target.value)}
            value={skill1}
            type="text"
          />
          {errors.skill1 ? (
            <span className="error">{errors.skill1.message}</span>
          ) : (
            ""
          )}
        </div>

        <div>
          <label>Skill 2: </label>
          <input
            onChange={event => setSkill2(event.target.value)}
            value={skill2}
            type="text"
          />
          {errors.skill2 ? (
            <span className="error">{errors.skill2.message}</span>
          ) : (
            ""
          )}
        </div>

        <div>
          <label>Skill 3: </label>
          <input
            onChange={event => setSkill3(event.target.value)}
            value={skill3}
            type="text"
          />
          {errors.skill3 ? (
            <span className="error">{errors.skill3.message}</span>
          ) : (
            ""
          )}
        </div>

        <button>Edit</button>
      </form>
    </div>
  );
};

export default EditPet;
