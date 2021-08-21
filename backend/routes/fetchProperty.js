const router = require('express').Router();
const PropertyModel = require('../model/Property');
const jwt = require('jsonwebtoken')
const verify = require('../verifyToken')

router.post('/',async(req,res)=>{
   
   
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
            //arunca eroare daca tokenul nu este corect
            const verified = jwt.verify(token, process.env.TOKEN_SECRET);
            
            
            let id_to_check = req.body.body.id_to_check;
            console.log(id_to_check);
            try{
                //verifica daca este un id corect
                if(id_to_check.length != 24)
                {
                    res.status(404).json({err: 'invalid id'})
                    return
                }
                else
                {
                    //id de forma corecta => verifica in db
                    try{
                        PropertyModel.findById(id_to_check,(err, docs)=>{
                            if (err){
                                res.status(404).json({err: 'not found!'})
                            }
                            else{
                                console.log("Result : ", docs);
                                if(docs == null)
                                {
                                    res.status(404).json({err: 'not found!'})
                                }
                                else
                                {
                                    res.json({gasit: docs})
                                }
                            }
                        })
                    }
                    catch(err)
                    {
                        console.log("err:", err)
                        res.status(500),json({err: 'search problem'})
                    }
                    
                }
                
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
