var Task = require('./task');

// This repoFactory ussage is improved upon.
// It is tidier
var repoFactory = require('./repoFactoryImproved');

var task1 = new Task(repoFactory.task.get(1));
var task2 = new Task(repoFactory.task.get(2));

var user = repoFactory.user.get(1);
var project = repoFactory.user.get(1);
   
task1.user = user;
task1.project = project;

console.log(task1);
task1.save();