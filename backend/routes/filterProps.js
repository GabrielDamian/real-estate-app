const router = require('express').Router();

const PropertyModel = require('../model/Property');

router.post('/',async (req,res)=>{
    //nu ai nevoied de token, se poate face filter si din search-ul din home fara log in


    //elimita filtre goale
    let fullfiled_filters = {};
    for(let c in req.body.body)
    {
        //dara pret max, pret min
        if(req.body.body[c] != '' && c !='price_to' && c != 'price_from' )
        {
            fullfiled_filters[c] = req.body.body[c];
        }
    }

    console.log("filtre:", req.body.body);
    console.log("filtre pline:", fullfiled_filters)

    let filtrate_fara_pret = await PropertyModel.find({...fullfiled_filters},(err,data)=>{
        if(err)
        {
            res.status(500).json({err: 'search err'})
        }
        else
        {
            return data;
        }
    })
    console.log("ciicici",filtrate_fara_pret)

    let arr_final = []
    let pret_min = Number(req.body.body.price_from);
    let pret_max = Number(req.body.body.price_to);

    filtrate_fara_pret.forEach((el)=>{
        
        if(el.price > pret_max && el.price < pret_max )
        {
            //exact price
            arr_final.push(el)
        }
        else if(pret_max == '' && pret_min == '')
        {
            //not completed fields
            arr_final.push(el);
        }
        else if(pret_max == '' && el.price > pret_min)
        {
            //only pret_min completed
            arr_final.push(el);
        }
        else if(pret_min == ''  && el.price < pret_max)
        {
            arr_final.push(el);
        }
    })
    console.log("final", arr_final);
    res.json({rasp: arr_final})
    }
)
module.exports = router;