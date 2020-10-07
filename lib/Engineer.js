const Employee = require("./Employee");

// following code to define and export the Engineer class


class Engineer extends Employee{
    constructor(name, id, email, github){
       super(name, id, email);
       this.github = github;
    }
    getRole (){
        return "Engineer"
    }
    getGithub() {
        return this.github
    }
}

module.exports = Engineer;