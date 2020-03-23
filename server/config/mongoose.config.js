const mongoose = require("mongoose");

module.exports = db_name => {
  mongoose
    .connect(`mongodb://localhost/${db_name}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .then(() => console.log(`Mongoose successfully connected to ${db_name}`))
    .catch(err => console.log("Mongoose connection failed: ", err));
};
