module.exports = {
  friendlyName: "Forgot",

  description: "Forgot password.",

  inputs: {
    email: {
      type: "string",
      required: true,
      isEmail: true,
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
  },

  fn: async function (inputs, exits) {
    let userRecord = await User.findOne({ email: inputs.email.toLowerCase() });

    if (!userRecord) {
      return exits.notFound;
    }

    const payload = {
      id: userRecord.id,
      email: userRecord.email,
      password: userRecord.password,
    };

    const forget_token = await jwToken.magic(payload);

    return exits.success({ reset: forget_token });
  },
};
