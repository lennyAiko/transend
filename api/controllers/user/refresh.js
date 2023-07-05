module.exports = {


  friendlyName: 'Refresh',


  description: 'Refresh user.',


  inputs: {

    refresh: {
      type: 'string',
      required: true
    }

  },


  exits: {

    success: {
      statusCode: 200,
      description: 'Description for when token is valid'
    },

    invalidToken: {
      statusCode: 401,
      description: 'Description for when token is invalid'
    }

  },


  fn: async function (inputs, exits) {

    let tokenRecord = await TokenStore.findOne({ refreshToken: inputs.refresh })
    
    if (!tokenRecord) {
      return exits.invalidToken({ error: "Invalid Refresh Token"})
    }

    jwToken.verifyRefresh(inputs.refresh, async function(err, decode) {
      if (err || !decode) {
        return exits.invalidToken({ error: "Invalid Refresh Token"})
      }
      const signPayload = {
        id: decode.user.id,
        name: decode.user.name,
        email: decode.user.email,
      };
      const newAccess = jwToken.refresh({ user: signPayload, issuer: sails.config.issuer || process.env.ISSUER })
      await TokenStore.updateOne({ email: decode.user.email }).set({
        token: newAccess,
      });
      return exits.success({ access: newAccess })
    })
    return;

  }

};
