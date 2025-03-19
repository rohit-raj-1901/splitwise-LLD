const User = require('../models/userModel');
let users = {}; // In-memory users

exports.createUser = (req, res) => {
    const { id, name, imageURI, bio } = req.body;
    const newUser = new User(id, name, imageURI, bio);
    users[id] = newUser;
    res.status(201).json(newUser);
};

exports.getUser = (req, res) => {
    const { id } = req.params;
    const user = users[id];
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};
