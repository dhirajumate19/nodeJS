import mongoose from 'mongoose';
import { DBurl } from './config.js';

export const connectionDB = () => {
  mongoose
    .connect(`${DBurl}/githubclone`)
    .then(() => console.log('DB Connected!'));
};
