var repo = function () {
    
    var called = 0;
    
    var save = function (task) {
        called++;
        console.log('Saving ' + task + 
                    ' Called ' + called + ' times.');
    }
    
    console.log('Newing up task repo!');
    return {
        save: save
    }
}

// this along with main.js and taskHandler.js is an example of a working singleton on nodeJS.
// The magic happens here, where we execute the repo function as we return the module.
// Rather than returning the object and executing it in the other files (that would create several instances)
module.exports = repo();