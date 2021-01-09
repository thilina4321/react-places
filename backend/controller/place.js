const Place = require('../model/places')
const User = require('../model/user')

exports.createPlace = async(req,res)=>{
    const {title, description,address} = req.body
    const user = req.user
    console.log(user);
    
    try {
        const newPlace = new Place({title, description,address, user:user._id})
        await newPlace.save()

        res.status(201).send({message:'place create successfully'})
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error.messgae)

    }

}

exports.currentUserPlaces = async(req,res)=>{

    try {
        const places = await req.user.populate('places').execPopulate()
        const myPlaces = places.places
        console.log(myPlaces);
        
        res.status(200).send(myPlaces)
    } catch (error) {
        console.log(error);
    }
    // console.log(places.places);

}

exports.placesOfOtherUsers = async(req,res)=>{
    const id = req.params.id

    try {
        const user = await User.findOne({_id:id})
        if(!user){
            return res.status(404).send({message:'Cant find this user'})
        }

        const places = user.populate('places').execPopulate()
        res.status(200).send(places.places)

    } catch (error) {
        res.status(500).send(error.message)
    }
}
