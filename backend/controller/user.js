const bcrypt = require("bcryptjs");
const User = require('../model/user');

exports.signup = async (req, res) => {
  const data = req.body;
  console.log(data);

  try {
    const hash = await bcrypt.hash(data.password, 8);
    const user = await User.create({ email: data.email, password: hash, userName: data.userName});
    const savedUser = await user.save();

    return res.status(201).send(savedUser);
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  const data = req.body;
  try {
    const user = await User.loginWithEmailAndPassword({
      email: data.email,
      password: data.password,
    });


    const token = await user.generateToken()
    res.status(200).send({user, token})

  } catch (err) {
    if(err.message === 'Invalid password'){
      return res.status(404).send({error:err})
    }
    return res.status(500).send({error:err})
  }
};


exports.otherUsers = async(req,res)=>{
  try {
    let users = await User.find()
    res.status(200).send(users)

  } catch (error) {
    res.status(500).send(error.message)
  }
}

exports.profile = async(req,res)=>{
  const id = req.params.id
  console.log(id);
  try {
    const user = User.findOne({_id:id})
    if(!user){
      return res.status(404).send("Cant find user")
    }

    const findPlaces = await user.populate('places')
    const places = findPlaces.places
    console.log(places);

    res.send({places})

  } catch (error) {
    console.log(error);
    res.status(500).send(error)
  }
}


exports.me = (req,res)=>{
  const me = req.user

  try {
    res.status(200).send(me)

  } catch (error) {
    res.status(500).send(error)
  }
}