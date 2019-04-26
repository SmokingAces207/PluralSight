var repoFactory = function () {
    
    this.getRepo = function (repoType) {
        if (repoType === 'task') {
            // If this repo has already been created once, we just return it.
            // This is Caching, in theory
            if(this.taskRepo) {
                console.log('Retrieving from cache');
                return this.taskRepo;
                
            } else {
                // Otherwise create a new one
                var taskRepo = require('./taskReposity')();
                return taskRepo;
            }
        }
        if (repoType === 'user') {
            var userRepo = require('./userRepository')();
            return userRepo;
        }
        if (repoType === 'project') {
            var projectRepo = require('./projectRepository')();
            return projectRepo;
        }
    }
};