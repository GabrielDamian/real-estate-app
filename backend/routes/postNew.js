const router = require('express').Router();
//middle ware pentru a face route-ul privat// verifica daca in header este atasat un token valid
const jwt = require('jsonwebtoken')
const verify = require('../verifyToken')
const PropertyModel = require('../model/Property');

router.post('/',async (req,res)=>{
    //middleware-ul de verificat tokenul nu merge pt post, deoarece in post, heade-urul est mutat in body

    const token = req.body.headers['auth-token'];
    if(!token)
    {
        //nu este furnizat un token
        res.status(403).json({error: "Acces denied!"})
    }
    else
    {
        //are token => verificam daca este corect
        try{
            const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            
            console.log("body",req.body.body);
            //verified = {_id: .. , iat: ..}
            let temp = req.body.body;

            let newProperty = new PropertyModel({
                name: temp.name,
                description: temp.description,
                contactNumber: temp.contact_nr,
            
                type: temp.type,
                status: temp.status,
                material: temp.material,
                price: temp.price,

                
                rooms: temp.rooms,
                baths: temp.baths,
                beds: temp.beds,
            
                long: temp.long,
                lat: temp.lat,
            
                images: temp.images
            })
            try{
                const savedProperty =  await newProperty.save();
                res.json({newProperty: savedProperty});
            }catch(err)
            {
                res.status(400).json({error: 'Unable to save into db!'})
            }
            
            
        }
        catch(err){
            res.status(401).json({error: "Invalid token!"})
        }
    }

})

module.exports = router;