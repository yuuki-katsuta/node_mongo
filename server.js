const express = require('express');
const mongoose = require('mongoose');
const app = express();

const foodRouter = require('./routes/foodRoutes');
app.use(foodRouter);
//DB接続
mongoose
  .connect(
    'mongodb+srv://yuuuki-code:ky331144@cluster0.ck0yi.mongodb.net/food?retryWrites=true&w=majority'
  )
  .then(() => console.log('DB接続'))
  .catch((error) => console.log(error));

app.listen(3000, () => {
  console.log('接続');
});
