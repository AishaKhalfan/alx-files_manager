const express = require('express');
const mongoose = require('mongoose');
//const User = require('./models/User');

module.exports = {
  postNew: (req, res) => {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).send({
        error: 'Missing email',
      });
    }

    if (!password) {
      return res.status(400).send({
        error: 'Missing password',
      });
    }

    const userExists = User.findOne({ email });
    if (userExists) {
      return res.status(400).send({
        error: 'Email already exists',
      });
    }

    const user = new User({
      email,
      password: mongoose.Types.Sha1(password),
    });

    user.save((err) => {
      if (err) {
        return res.status(500).send(err);
      }

      res.status(201).send({
        email,
        id: user.id,
      });
    });
  },
};
