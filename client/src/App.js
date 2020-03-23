import React from "react";
import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import CreatePet from "./views/CreatePet";
import SinglePet from "./views/SinglePet";
import Pets from "./views/Pets";
import EditPet from "./views/EditPet";

// test

function App() {
  return (
    <>
      <div className="container">
        <Link to="/pets">View All Pets</Link>{" "}
        <Link to="/pets/new">Create Pet</Link>
      </div>
      <div className="container-flex justify-content-center">
        <Router>
          <Redirect from="/" to="/pets" noThrow="true" />
          <CreatePet path="/pets/new" />
          <SinglePet path="/pets/:id" />
          <Pets path="/pets" />
          <EditPet path="/pets/:id/edit" />
        </Router>
      </div>
    </>
  );
}

export default App;
