import "dotenv/config";

const { PORT = 3000, DB_URL, DB_PORT } = process.env;

export const port = PORT;
export const DBurl = `${DB_URL}:${DB_PORT}`;
