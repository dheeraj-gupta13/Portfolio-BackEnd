const express = require('express');
const Tags = require('../models/tags.model');
const Problem = require('../models/problem.model');

const postTags = async (req, res) => {
    try {
        const {
            id,
            allTags
        } = req.body;


        await Tags.updateOne({
            // id,
            allTags
        })
        
        res.send({
            msg:"Tags Updated"
        })
    } catch (error) {
        console.log(error);
    }
}

const getTags = async (req, res) => {
    try {
        const r = await Tags.find({});

        res.send({
            tags:r[0].allTags
        })
    } catch (error) {
        console.log(error);
    }
}

const addTag = async (req, res) => {
    try {

        const {tag} = req.query;

        const _tag_ = tag.split(" ");
        const newTag = [];
        _tag_.map((t) => {
            newTag.push(t.toLowerCase());
        })

        const _tag = newTag.join("");

        const r = await Tags.find({});
        console.log(r);

        let arr = r[0].allTags;

        let flag = false;
        arr.map((prev) => {


            const _prev_ = prev.split(" ");
            const newPrev = [];
            _prev_.map((p) => {
                newPrev.push(p.toLowerCase());
            })

            const _prev = newPrev.join("");

            console.log(_prev , _tag)
            if(_prev == _tag){
                flag = true;
            }
        })

        if(flag == false){
            arr.push(tag);
        }

        await Tags.updateOne({
            allTags:arr
        })

        res.send({
            tags:arr
        })
    } catch (error) {
        console.log(error);
    }
}


const format = (s) => {
    s.split("")
}

// search all the problems by given Tag
const getProblemsByTag = async (req, res) => {

    try {
        const {tag} = req.query;

        let quant = tag.split("-");
        let fromFrontEnd = quant.join("");
        
        const allProblems = await Problem.find({})
        let resArray = [];
        allProblems.map((obj)=> {
            obj.ProblemTags.map((problem) => {
                const _problem = problem.split(" ");

                let newArr = [];
                _problem.map((p) => {
                    newArr.push(p.toLowerCase())
                })

                let fromBackEnd = newArr.join("");
    
                console.log(fromFrontEnd, fromBackEnd)

                if(fromFrontEnd == fromBackEnd){
                    resArray.push(obj)
                }
            })
        })

        res.send({
            ans:resArray
        })

    } catch (error) {
        
    }
}

module.exports = {
    postTags,
    getTags,
    getProblemsByTag,
    addTag
}
