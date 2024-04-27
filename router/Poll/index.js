const express = require( "express" );
const { createPoll, getAllPolls ,updatePoll} = require("../../Controllers/Poll/index");
const route=require("express").Router();

route.post( "/create", createPoll);
route.get( "/get", getAllPolls);
route.put( "/update", updatePoll);

module.exports=route;
