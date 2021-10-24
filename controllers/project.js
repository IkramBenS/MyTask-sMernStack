const Project = require('../models/Project');
exports.create = async (req, res) => {
	const { project } = req.body;

	try {
		const projectExist = await Project.findOne({ project });
		if (projectExist) {
			return res.status(400).json({
				errorMessage: `${project} already exists`,
			});
		}
		let newProject = new Project();
		newProject.project = project;
		newProject = await newProject.save();
		res.status(200).json({
			project: newProject,
			successMessage: `${newProject.project} was created!`,
		});
	} catch (err) {
		console.log('project create error: ', err);
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};

exports.readAll = async (req, res) => {
	try {
		const projects = await Project.find({});
		res.json({
			projects
		});
	} catch (err) {
		console.log('project readAll error: ', err);
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};

exports.read = async (req, res) => {
	try {
		   const projectId = req.params.projectId;
		   const proj = await Project.findById(projectId);
		   res.json(proj);
	} catch (err) {
		   console.log(err, "projectController.read error");
		   res.status(500).json({
				  errorMessage: "Please try again later",
		   });
	}
};


exports.update = async (req, res) => {
	const projectId = req.params.projectId;

	const {project}= req.body;

	const oldProject = await Project.findByIdAndUpdate(projectId, req.body);

	res.json({
		   successMessage: "project successfully updated",
	});
};


exports.delete = async (req, res) => {
	try {
		   const projectId = req.params.projectId;
		   const deletedProject = await Project.findByIdAndDelete(projectId);

		   res.json(deletedProject);
	} catch (err) {
		   console.log(err, "projectController.delete error");
		   res.status(500).json({
				  errorMessage: "Please try again later",
		   });
	}
};
