import Task from "../models/Task.model.js"

const getTasks = async (req, res) => {

    try {

        const task = await Task.find().populate('user')
        res.json(task)

    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error);
    }
}

const getTask = async (req, res) => {
    try {

        const id = req.params.id
        const task = await Task.findById(id).populate('user')

        if (!task) {
            return res.status(404).json({ message: "Task not found" })
        }
        res.json(task)



    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error);
    }
}

const postTask = async (req, res) => {
    try {

        const { title, description, date } = req.body

        const newTask = new Task({
            title,
            description,
            date: new Date(date),
            user: req.user.id
        })

        const savedTask = await newTask.save()
        res.json(savedTask)

    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error);
    }
}

const deleteTask = async (req, res) => {
    try {

        const id = req.params.id
        const task = await Task.findByIdAndDelete(id)

        if (!task) {
            return res.status(404).json({ message: "Task not found" })
        }
        res.send.status(200).json({ message: "Deleted Task" })


    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error);
    }
}

const updateTask = async (req, res) => {
    try {

        const id = req.params.id
        const task = await Task.findByIdAndUpdate(id, { new: true })

        if (!task) {
            return res.status(404).json({ message: "Task not found" })
        }

        const { title, description, date } = req.body

        const updateTask = {
            title,
            description,
            date,
            user: req.user.id
        }


        res.json(updateTask)

    } catch (error) {
        res.status(500).json({ message: error.message })
        console.log(error);
    }
}

export {
    getTasks,
    getTask,
    postTask,
    deleteTask,
    updateTask
}