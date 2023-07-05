module.exports = {


  friendlyName: 'View',


  description: 'View user.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {

    return this.req.profile

  }


};
