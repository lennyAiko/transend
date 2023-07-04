const bcrypt = require("bcrypt");

module.exports = {


  friendlyName: 'Hash password',


  description: '',


  inputs: {

    password: {
      type: 'string',
      required: true,
    }

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
  
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(inputs.password, saltRounds);
    return hashedPassword;
  }


};

