const router = require('express').Router();
//middle ware pentru a face route-ul privat// verifica daca in header este atasat un token valid
const PropertyModel = require('../model/Property');
const verify = require('../verifyToken')


router.get('/',verify, async (req,res)=>{

    let temp = await PropertyModel.find({});
    if(temp.length <= 3)
    {
        res.send({random: temp})
    }
    else
    {
        let max = temp.length;
        let random = Math.floor(Math.random() * max);
        let new_arr = [];
        let old_randoms = [];
        for(let c =0;c<3;c++)
        {
            let random;
            let ok_random = false;
            //cat cat alege un random din cele alese deja, realege
            while(ok_random == false)
            {
                random = Math.floor(Math.random()*max);
                if(!old_randoms.includes(random))
                    ok_random = true;
            }
            new_arr.push(temp[random])
            old_randoms.push(random)
        }
        console.log("OLD RANDOM", old_randoms)
        res.send({random: new_arr})
    }


})

module.exports = router;