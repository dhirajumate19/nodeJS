import "dotenv/config";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import { config } from "./config.js";

// Initialize OAuth2Client with your credentials
const oAuth2Client = new google.auth.OAuth2(
  config.client_id,
  config.client_secret
);
console.log("config", config);
// Set the refresh token obtained during the authorization process
oAuth2Client.setCredentials({
  refresh_token: config.refresh_Token,
});

// Create a transporter with OAuth2
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: config.senderEmail,
    clientId: config.client_id,
    clientSecret: config.client_secret,
    refreshToken: config.refresh_Token,
    accessToken: oAuth2Client.getAccessToken(),
  },
});

// Send mail function
const sendMail = async (mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Example usage
const mailOptions = {
  from: `Hello Mighty Your System is block`,
  to: config.senderEmail,
  bcc: "siddharthjain322@gmail.com, dhiraju1999@gmail.com, darshanapande30@gmail.com",
  subject: "Welcome Email",
  text: "Do not Open this link Click Here otherwise your stystem will hang and may be you will lose your data ",
};

sendMail(mailOptions);
