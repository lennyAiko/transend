module.exports = async function (req, res, proceed) {

  const {email} = req.allParams();
  
  try {
    let userRecord = await User.findOne({ email: email.toLowerCase() });
    if (!userRecord) {
      res.status(404).json({
        error: `${email} does not exist`
      });
    } else {
      return proceed();
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
