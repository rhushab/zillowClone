import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('CONNECTED!');
  })
  .catch(() => {
    console.log('ERROR!');
  });
const app = express();
app.listen(3000, () => {
  console.log('running on 3000');
});
