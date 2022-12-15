const express = require('express');
const Works = require('../models/works.model');

const postWorks = async (req, res) => {
    try {
        const {
            work
        } = req.body;
        

        const {
            Experience,
            Ratings
        } = work;


        await Works.updateOne({
            Experience,
            Ratings
        })
        

        res.send({
            msg:"Works Added"
        })
    } catch (error) {
        console.log(error);
    }
}

const getWorks = async (req, res) => {
    try {

        const r = await Works.find({});
        
        res.send({
            msg:r
        })
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    postWorks,
    getWorks,
}
