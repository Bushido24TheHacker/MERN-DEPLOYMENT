const petController = require("../controllers/pet.controller");

// export a function to be called and passed the app
module.exports = app => {
  app.get("/api/pets", petController.getAll);

  app.get("/api/pets/:id", petController.getOne);

  app.post("/api/pets", petController.create);

  app.put("/api/pets/:id", petController.update);

  app.delete("/api/pets/:id", petController.delete);
};
