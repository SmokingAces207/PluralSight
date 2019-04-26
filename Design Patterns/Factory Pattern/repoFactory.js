var repoFactory = function () {
    
    this.getRepo = function (repoType) {
        if (repoType === 'task') {
            var taskRepo = require('./taskReposity')();
            return taskRepo;
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

module.exports = new repoFactory;