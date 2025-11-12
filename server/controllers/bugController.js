const Bug = require('../models/Bug');

// Create a new bug
exports.createBug = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const bug = await Bug.create({ title, description });
    res.status(201).json(bug);
  } catch (err) {
    next(err);
  }
};

// Get all bugs
exports.getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find().sort({ createdAt: -1 });
    res.status(200).json(bugs);
  } catch (err) {
    next(err);
  }
};

// Update bug status
exports.updateBug = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const bug = await Bug.findByIdAndUpdate(id, { status }, { new: true });
    if (!bug) return res.status(404).json({ message: 'Bug not found' });
    res.status(200).json(bug);
  } catch (err) {
    next(err);
  }
};

// Delete bug
exports.deleteBug = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bug = await Bug.findByIdAndDelete(id);
    if (!bug) return res.status(404).json({ message: 'Bug not found' });
    res.status(200).json({ message: 'Bug deleted successfully' });
  } catch (err) {
    next(err);
  }
};
