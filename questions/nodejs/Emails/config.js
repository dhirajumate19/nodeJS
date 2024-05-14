import "dotenv/config";
const { SENDER_EMAIL_ADDRESS, CLEINT_ID, CLEINT_SECRET, REFRESH_TOKEN } =
  process.env;
export const config = {
  senderEmail: SENDER_EMAIL_ADDRESS,
  client_id: CLEINT_ID,
  client_secret: CLEINT_SECRET,
  refresh_Token: REFRESH_TOKEN,
};
