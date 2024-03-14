const brcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "admin",
    },
  },
  {
    typeStamps: true,
  }
);

//Hash Password
adminSchema.pre("Save", async function (next) {
  if (!this.isModified("password")) {
    next(); // if user is not updating password but updating other fields then password will be hashed again. To avoid that we use this.
  }
  //salt
  const salt = await brcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  console.log("I have been called");
  next();
});

//verifyPassword
adminSchema.methods.verifyPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
