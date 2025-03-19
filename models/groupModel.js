class Group {
    constructor(id, title, description, imageURI) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageURI = imageURI;
        this.users = [];
    }

    addUser(user) {
        this.users.push(user);
    }
}

module.exports = Group;
