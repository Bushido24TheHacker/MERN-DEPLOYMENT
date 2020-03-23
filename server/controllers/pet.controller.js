const Pet = require("../models/pet.model");

// export an object that is full of methods
module.exports = {
  getAll(_req, res) {
    Pet.find()
      .then(pets => res.json(pets))
      .catch(err => res.status(400).json(err));
  },

  getOne(req, res) {
    Pet.findById(req.params.id)
      .then(pet => res.json(pet))
      .catch(err => res.status(400).json(err));
  },

  create(req, res) {
    Pet.create(req.body)
      .then(newPet => res.json(newPet))
      .catch(err => res.status(400).json(err));
  },

  update(req, res) {
    Pet.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true
    })
      .then(updatedPet => res.json(updatedPet))
      .catch(err => res.status(400).json(err));
  },

  delete(req, res) {
    Pet.findByIdAndDelete(req.params.id)
      .then(pet => res.json(pet))
      .catch(err => res.status(400).json(err));
  }
};
