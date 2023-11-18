import mongoose, { Schema } from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            trim: true
        },
        description:{
            type: String,
            required: true,
            trim: true
        },
        date:{
            type: Date
        },
        user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    {
        timestamps:true
    }
)

const Task = mongoose.model('Task', taskSchema, 'Task')

export default Task;