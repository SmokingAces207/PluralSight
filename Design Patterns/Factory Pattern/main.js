var Task = require('./task');
var taskRepo = require('./taskReposity');
var userRepo = require('./userReposity');
var projectRepo = require('./projectReposity');

var task1 = new Task(taskRepo.get(1));

var user = userRepo.get(1);
var project = projectRepo.get(1);

                     
task1.user = user;
task1.project = project;

console.log(task1);
task1.save();