const express = require('express');
const app = express();
const foodModel = require('../models/Food');

//json形式
app.use(express.json());

//データ取得
app.get('/foods', async (req, res) => {
  //foodModelにあるデータをすべて返す
  const foods = await foodModel.find({});
  try {
    res.send(foods);
  } catch (err) {
    res.status(500).send(err);
  }
});
//作成
app.post('/food', async (req, res) => {
  //foodModelにあるデータをすべて返す
  const food = new foodModel(req.body);
  try {
    await food.save();
    res.send(food);
  } catch (err) {
    res.status(500).send(err);
  }
});
//部分修正
app.patch('/food/:id', async (req, res) => {
  try {
    // ID(req.params.id)のデータに対して、req.bodyの内容で書き換える
    await foodModel.findByIdAndUpdate(req.params.id, req.body);
    await foodModel.save();
  } catch (err) {
    res.status(500).send(err);
  }
});
//削除
app.delete('/food/:id', async (req, res) => {
  try {
    await foodModel.findByIdAndDelete(req.params.id);
  } catch (err) {
    res.status(500).send(err);
  }
});
module.exports = app;
