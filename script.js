'use strict';
// 設問の配列
const questions = [
  '今の天気は？',
  '今着ている服は？',
  '今の見たいものは？',
  '今観たいテレビは？',
  '今日の予定は？',
]

// 問題の選択肢の配列
const choices = [
  ['晴れ', '曇り', '雨', '雪', '風'],
  ['赤', '白', '黄', '青', '黒'],
  ['ポカリスエット', 'お水', 'エナジードリンク', 'お茶・コーヒー', '炭酸飲料'],
  ['バラエティー', 'ニュース', 'お笑い', 'ドラマ', '音楽'],
  ['ショッピング', '映画鑑賞', 'スポーツ', '読書', '寝る'],
]

for (let i =0; i < questions.length; i++) {
  let choicesContent = '<div class="card">'
  + `<p>questions[${i}]</p>`
  + '<ul>'
  + `<li id="choices${i}" input type = "button" value = "button>choices[${i}][${i}]</li>`
  +'</ul>'
}