const uuid = require("uuid");

module.exports = {


  friendlyName: 'Uuid generator',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: function () {
    // TODO
    return uuid.v4();
  }


};

