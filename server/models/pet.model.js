const mongoose = require("mongoose");
const requiredMsg = "{PATH} is required.";

const PetSchema = new mongoose.Schema(
  {
    petName: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
    },
    petType: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
    },
    petDescription: {
      type: String,
      required: [true, "{PATH} is required."],
      minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
    },

    skill1: {
      type: String
    },

    skill2: {
      type: String
    },

    skill3: {
      type: String
    },

    likeCount: {
      type: Number,
      default: 0
    },
    dislikeCount: {
      type: Number,
      default: 0
    }

    // adminPw: {
    //   type: String,
    //   minlength: [8, "{PATH} must be at least {MINLENGTH} characters"]
    // }
  },
  { timestamps: true }
);

const Pets = mongoose.model("Pet", PetSchema);

module.exports = Pets;
