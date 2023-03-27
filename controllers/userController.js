const User = require("../models/userModel");

const userController = {

  addUser: async (req, res,) => {
    try {
      const newUser = new User(req.body);
      const savedUser = await newUser.save();
      res.status(200).json(savedUser);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  getUsers: async (req, res,) => {
    try {
      const newUsers = await User.find();
      res.status(200).json(newUsers);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  getById: async (req, res,) => {
    try {
      const newUsers = await User.findById(req.params.id);
      res.status(200).json(newUsers);
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  updateUser: async (req, res,) => {
    try {
      const newUser = await User.findById(req.params.id);
      await newUser.updateOne({ $set: req.body });
      res.status(200).json("updated");
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  deleteUser: async (req, res,) => {
    try {
      // if (!await User.findByIdAndDelete(req.params.id)) {
      //   res.status(404).json("can't not find a user");
      // }
      await User.findByIdAndDelete(req.params.id)
      res.status(200).json('remove success')
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

};


module.exports = userController;

