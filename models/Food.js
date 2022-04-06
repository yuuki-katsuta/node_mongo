const mongoose = require('mongoose');

//食べ物のデータ構造を定義
const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, //nameなしだとエラー
    trim: true, //空白削除
    lowercase: true, //小文字
  },
  calories: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) throw new Error('マイナスのカロリーは存在しないよ');
    },
  },
});

const Food = mongoose.model('Food', FoodSchema);
module.exports = Food;
