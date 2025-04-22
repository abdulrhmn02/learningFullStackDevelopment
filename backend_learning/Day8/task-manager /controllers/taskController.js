const Task = require('../models/task');

const createTask =  async ( req , res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json(task);
    } catch (error) {
        res.status(400).json({error : error.message})   }
}


const getAllTasks = async ( req , res ) => {
    try {
        const tasks = await Task.find()
        res.status(201).json(tasks)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getTaskById = async (req , res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.status(201).json(task)
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

const updateTaskById = async (req , res ) =>{
    try {
        const task = await Task.findByIdAndUpdate(req.params.id , req.body, {
            new : true,
            runValidator : true
        } )
        if(!task)res.status(404).json({error : 'task not found'})
        res.json(task);
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

const deleteTaskById = async ( req , res )=> {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) res.status(404).json({error: 'task not found'})
            res.json({message : 'task deleted successfully '})
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}

module.exports = {
    createTask, getAllTasks , getTaskById , updateTaskById
}