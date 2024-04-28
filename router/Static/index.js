const route=require('express').Router();;

const {update,get}= require('../../Controllers/Static/index')

route.post('/stat',update)
route.post('/getStat',get)
module.exports=route;






