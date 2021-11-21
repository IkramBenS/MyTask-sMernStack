const Task = require('../models/Task');
exports.create = async (req, res) => {
	const { taskProj, taskUser, taskTitle, taskStatus, taskDesc /* userid */ } = req.body;
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
		
		newTask = await newTask.save();
		res.status(200).json({
			task: newTask,
			successMessage: `${newTask.task} was created!`,
		});
	} catch (err) {
		console.log('task create error: ', err);
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};
