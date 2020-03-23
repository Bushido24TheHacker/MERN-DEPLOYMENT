import React, { useState } from "react";

import { navigate } from "@reach/router";

import axios from "axios";

const CreatePet = props => {
  const [petName, setPetName] = useState("");
  const [petType, setPetType] = useState("");
  const [petDescription, setPetDescription] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = event => {
    event.preventDefault();

    const newPet = {
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
      .post("http://localhost:8000/api/pets", newPet)
      .then(res => {
        navigate("/pets/" + res.data._id);
      })
      .catch(err => {
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <h2>New Pet</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pet Name: </label>
          <input
            onChange={event => setPetName(event.target.value)}
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
            type="text"
          ></textarea>
          {errors.petType ? (
            <span className="error">{errors.petType.message}</span>
          ) : (
            ""
          )}
        </div>

        <div>
          <label>Pet Description: </label>
          <textarea
            onChange={event => setPetDescription(event.target.value)}
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
            type="text"
          />
          {errors.skill3 ? (
            <span className="error">{errors.skill3.message}</span>
          ) : (
            ""
          )}
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreatePet;
