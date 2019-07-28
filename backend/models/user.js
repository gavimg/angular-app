const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');


// unique does't act as validator, it'll not through error if we tries to add duplicate email,
// unique allows mongodb to perform some internal optimizatioin
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// mongoose allows us to add plugin to our schema,
// uniqueValidator is extra hook that checks the schema before storing it to database
userSchema.plugin(uniqueValidator); // Now we'll get an error if tries to store user with duplicate email

module.exports = mongoose.model("User", userSchema);
