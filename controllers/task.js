const Task = require('../models/Task');
exports.create = async (req, res) => {
	const { taskProj, taskUser, taskTitle, taskStatus, taskDesc ,/*TaskuserID*/ } = req.body;
console.log(taskProj);
	try {
		const task = await Task.findOne({ taskTitle });
		if (task) {
			return res.status(400).json({
				errorMessage: `${task} already exists`,
			});
		}
		let newTask = new Task();
		newTask.taskProj = taskProj;
		newTask.taskUser = taskUser;
		newTask.taskTitle = taskTitle;
		newTask.taskStatus = taskStatus;
		newTask.taskDesc = taskDesc;
		// newTask.TaskuserID = TaskuserID;

		newTask = await newTask.save();
		res.status(200).json({
			task: newTask,
			successMessage: `${newTask.taskTitle} was created!`,
		});
	} catch (err) {
		console.log('task create error: ', err);
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};
exports.readAll = async (req, res) => {
	try {
		const tasks = await Task.find({});
		res.json({
			tasks
		});
	} catch (err) {
		console.log('task readAll error: ', err);
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};
exports.delete = async (req, res) => {
	try {
		   const taskId = req.params.taskId;
		   const deletedTask = await Task.findByIdAndDelete(taskId);

		   res.json(deletedTask);
	} catch (err) {
		   console.log(err, "taskController.delete error");
		   res.status(500).json({
				  errorMessage: "Please try again later",
		   });
	}
};

exports.update = async (req, res) => {
	const taskId = req.params.taskId;

	const {task}= req.body;

	const oldTask = await Task.findByIdAndUpdate(taskId, req.body);

	res.json({
		   successMessage: "task successfully updated",
	});
};


exports.read = async (req, res) => {
	try {
		   const taskId = req.params.taskId;
		   const task = await Task.findById(taskId);
		   res.json(task);
	} catch (err) {
		   console.log(err, "taskController.read error");
		   res.status(500).json({
				  errorMessage: "Please try again later",
		   });
	}
};