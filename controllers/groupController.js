const Group = require('../models/groupModel');
const User = require('../models/userModel');
let groups = {}; // In-memory groups

exports.createGroup = (req, res) => {
    const { id, title, description, imageURI } = req.body;
    const newGroup = new Group(id, title, description, imageURI);
    groups[id] = newGroup;
    res.status(201).json(newGroup);
};

exports.addUserToGroup = (req, res) => {
    const { groupId, userId } = req.body;
    const group = groups[groupId];
    if (!group) {
        return res.status(404).json({ message: "Group not found" });
    }
    const user = users[userId];
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    group.addUser(user);
    res.status(200).json(group);
};

exports.getGroup = (req, res) => {
    const { id } = req.params;
    const group = groups[id];
    if (group) {
        res.status(200).json(group);
    } else {
        res.status(404).json({ message: "Group not found" });
    }
};
