module.exports = {
  friendlyName: "Reset",

  description: "Reset password.",

  inputs: {
    token: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },

  exits: {
    success: {
      statusCode: 200,
      description: "This is the description for success",
    },

    notFound: {
      statusCode: 404,
      description: "This is a description for when user is not found",
    },

    badCombo: {
      statusCode: 401,
      description: "This is a description for any wrong value sent",
    },
  },

  fn: async function (inputs, exits) {
    const verified = await jwToken.magicVerify(
      inputs.token,
      async (err, decode) => {
        if (err || !decode) {
          return exits.badCombo("Invalid token");
        }

        return decode;
      }
    );

    if (verified) {
      let userRecord = await User.findOne({ email: verified.email });
      if (!userRecord) {
        return exits.notFound({ message: `${verified.email} does not exist` });
      }

      if (!(await bcrypt.compare(inputs.password, userRecord.password))) {
        await User.updateOne({ email: verified.email }).set({
          password: await sails.helpers.hashPassword(inputs.password),
        });

        return exits.success({ message: "Password changed successfully" });
      } else {
        return exits.badCombo("Invalid password");
      }
    } else {
      return exits.badCombo("Invalid");
    }
  },
};
