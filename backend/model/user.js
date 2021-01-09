const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const user = new Schema({
  userName:{
    type:String,
    required:true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email address");
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
  tokens:[
    {token:{type:String}}
  ]
});

user.statics.loginWithEmailAndPassword = async (data) => {
  const user = await User.findOne({ email: data.email });
  if (!user) {
    throw new Error("Loging failed");
  }

    const compare = await bcrypt.compare(data.password, user.password);
    if (!compare) {
      throw new Error("Invalid password");
    }

    return user;

}

user.methods.toJSON = function(){
  const user = this
  const userObject = user.toObject()

  delete userObject.tokens
  delete userObject.password

  return userObject
}

user.virtual('places', {
  ref:'Place',
  localField:'_id',
  foreignField:'user'
})

user.methods.generateToken = async function(){
  const user = this

  const token = jwt.sign({id:user._id.toString()},'thisisthesecretkey')
  user.tokens = user.tokens.concat({token})
  await user.save()
  return token
}

const User = mongoose.model("User", user);

module.exports = User;
