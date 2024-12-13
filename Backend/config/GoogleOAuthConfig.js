const { google } = require("googleapis");
const dotenv = require("dotenv").config();

const oAuth2Client = new google.auth.OAuth2({
  clientId: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
});

module.exports = { oAuth2Client };
