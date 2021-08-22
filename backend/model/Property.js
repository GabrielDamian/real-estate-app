const mongoose = require('mongoose')

// name: Property announcement name
// type: Apartament / Building area / House / Villa,
// status: available / rent agreed / reserved / sell agreed,
// material: block / brick / mixed / prefab / stone / wood
// price: 200.000 (number)
// rooms: 1+ ... 5+
// baths: 1+ ... 5+
//beds: 1+ ... 5+

//amenities: air conditioning / balcnoy / bedding / cable tv / dishwasher / internet
//FOR PUBLIC FACILITIES:
//time_to_airport: String
//time_to_hospital: String,
//time_to_city_center: String

//GPS
//long: Number
//lat: Number

const propertySchema = new mongoose.Schema({
    name: String,
    description: String,
    contactNumber:String,

    type: String,
    status: String,
    material: String,
    price: Number,

    
    rooms:Number,
    baths: Number,
    beds:Number,
    location: String,

    long: Number,
    lat: Number,

    images: Array
})

module.exports = mongoose.model('Property',propertySchema);