const express = require('express');
const Home = require('../models/home.model');

const postHomeDetails = async (req, res) => {
    try {
        const {navHeading, title, subTitle, description, jargons } = req.body;

            await Home.updateOne({
                navHeading,
                title,
                subTitle,
                description,
                jargons
            })
        

        res.send({
            msg:"Home details added"
        })
    } catch (error) {
        console.log(error);
    }
}

const getHomeDetails = async (req, res) => {
    console.log("Get Home")
    try {

        const {navHeading } = req.query;
        
        var ans = {};
        const r = await Home.find({});
        ans = r[0];
        console.log(ans);
        
        res.send({
            msg:ans
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    postHomeDetails,
    getHomeDetails
}
