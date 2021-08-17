const router = require('express').Router();
//middle ware pentru a face route-ul privat// verifica daca in header este atasat un token valid

const verify = require('../verifyToken')


router.get('/',verify,(req,res)=>{
    res.send(req.user);
})

module.exports = router;