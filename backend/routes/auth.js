const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    obj = {
        a: 'thois',
        number: 25
    }
    res.json(obj);
}
)

module.exports = router