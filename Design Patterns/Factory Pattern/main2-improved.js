var Task = require('./task');

// The idea of this repoFactory is it will only load a resource if needed.
// In main.js you will see all resources being loaded.
// Handy practice for very large apps.
var repoFactory = require('./repoFactoryWithCache');
//var repoFactory = require('./repoFactory');

var task1 = new Task(repoFactory.getRepo('task').get(1));
var task2 = new Task(repoFactory.getRepo('task').get(2));

var user = repoFactory.getRepo('user').get(1);
var project = repoFactory.getRepo('project').get(1);
   
task1.user = user;
task1.project = project;

console.log(task1);
task1.save();