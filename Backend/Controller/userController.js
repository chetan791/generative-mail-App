const { oAuth2Client } = require("../config/GoogleOAuthConfig");
const { userModel } = require("../Model/userModel");
const userService = require("../Service/userService");

const createToken = async (req, res) => {
  try {
    const { code } = req.body;
    // console.log("==>", code);
    const email = await userService.createToken(code);
    res.send(email);
  } catch (error) {
    res.send(error);
  }
};

const sendMail = async (req, res) => {
  try {
    const { email, recipient, subject, message } = req.body;
    console.log(email, recipient, subject, message);

    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    {
      const refreshToken = user.refreshToken;
      // Setting credentials and obtaining a new access token
      oAuth2Client.setCredentials({ refresh_token: refreshToken });
      const accessToken = await oAuth2Client.getAccessToken();

      // Calling the service function
      const result = await userService.sendMail(
        email,
        refreshToken,
        accessToken.token,
        recipient,
        subject,
        message
      );
      console.log(result);

      res.status(200).send({ message: "Mail sent successfully" });
    }

    res.send("hi");
  } catch (error) {
    console.error("Error in sendMail:", error.message);
    res.status(500).send({ error: error.message });
  }
};
module.exports = { createToken, sendMail };
