import React, { useEffect, useState } from "react";

import axios from "axios";
import { navigate } from "@reach/router";

// id prop comes from the URL, see routing :id
const SinglePet = ({ id }) => {
  const [pet, setPet] = useState(null);
  const [msg, setMsg] = useState("loading...");
  const [alreadyVoted, setAlreadyVoted] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets/" + id)
      .then(res => setPet(res.data))
      .catch(setMsg("Sumtin Wrong"));
  }, [id]);

  const handleDelete = idToDel => {
    axios
      .delete("http://localhost:8000/api/pets/" + idToDel)

      .then(res => {
        navigate("/pets/");
        const filteredPet = pet.filter(pet => pet._id !== idToDel);

        setPet(filteredPet);
      })
      .catch(console.log);
  };

  const handleVote = isUpvote => {
    if (alreadyVoted) {
      return;
    }

    if (isUpvote) {
      pet.likeCount++;
    } else {
      pet.dislikeCount++;
    }

    axios
      .put("http://localhost:8000/api/pets/" + id, pet)
      .then(res => {
        const updatedPet = res.data;
        setPet(updatedPet);
        setAlreadyVoted(true);
      })
      .catch(console.log);
  };

  if (pet === null) {
    return msg;
  }

  return (
    <div className="text-center">
      <div className="single-dog-header">
        <h2>Pet Shelter</h2>
        <h4>Details About {pet.petName} </h4>
      </div>

      <div className="adopt-div">
        <button
          className="adopt-button"
          onClick={event => handleDelete(pet._id)}
        >
          Adopt pet
        </button>
      </div>

      <div className="single-dog-details">
        <h4>Pet Type:</h4>
        <p>{pet.petType}</p>
        <h4>Pet Description:</h4>
        <p>{pet.petDescription}</p>
        <p>Skill 1 : {pet.skill1}</p>
        <p>Skill 2 : {pet.skill2}</p>
        <p>Skill 3 : {pet.skill3}</p>
        <button onClick={event => handleVote(true)} className="like-button">
          Like {pet.petName}
        </button>
        <h5 className="like-count">{pet.likeCount} like(s)</h5>
        {/* <button onClick={event => handleVote(false)} className="arrow">
          {pet.dislikeCount}&darr; Like {pet.petName}
        </button> */}
      </div>
    </div>
  );
};

export default SinglePet;
