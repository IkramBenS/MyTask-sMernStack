const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        taskProj: {
            type: String,
            required: true,
        },
        taskUser: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },
        taskTitle: {
            type: String,
            required: true,
        },
        taskStatus: {
            type: String,
            required: true,

        },
        taskDesc: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
