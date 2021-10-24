const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
    {
        project: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },
    },
    { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
