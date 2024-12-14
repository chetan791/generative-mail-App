const { oAuth2Client } = require("../config/GoogleOAuthConfig");
const nodemailer = require("nodemailer");
const { userModel } = require("../Model/userModel");
const dotenv = require("dotenv").config();

const createToken = async (code) => {
  const { tokens } = await oAuth2Client.getToken(code);
  const userInfo = await fetch(
    "https://www.googleapis.com/oauth2/v1/userinfo",
    {
      method: "get",
      headers: {
        Authorization: `Bearer ${tokens.access_token}`,
      },
    }
  );
  // console.log(tokens.refresh_token);
  const currUserInfo = await userInfo.json();
  // return currUserInfo;

  const user = await userModel.findOne({ email: currUserInfo.email });

  if (!user) {
    const newUser = await userModel.create({
      name: currUserInfo.name,
      email: currUserInfo.email,
      refreshToken: tokens.refresh_token,
    });

    newUser.save();

    return newUser.email;
  } else {
    return user.email;
  }
};

const sendMail = async (
  email,
  refreshToken,
  accessToken,
  recipient,
  subject,
  message
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: email,
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: refreshToken,
      accessToken: accessToken,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: {
      name: "Generative Mail App",
      address: email,
    },
    to: recipient,
    subject: subject,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return `Email sent: ${info.response}`;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to send email");
  }
};

module.exports = { createToken, sendMail };
