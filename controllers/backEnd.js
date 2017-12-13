'use strict'

var BackEnd = require('../models/backEnd')
const Profiles = require('../models/profiles')

BackEnd = Profiles.find({label : 'backEnd'})
console.log(BackEnd)

//get todos los perfiles BackEnd
function getBackEnds (req, res) {
    Profiles.find({puesto : 'backEnd'}, (err, BackEndProfiles) => { 
        if (err) return res.status(500).send({message:`Error al realizar getFindAll: ${err}`})
        if(!BackEnd) return res.status(404).send({message: `No hay perfiles Back End :${err}`}) 

        res.send(200, {BackEndProfiles})
    })
}





module.exports = {
    getBackEnds
}