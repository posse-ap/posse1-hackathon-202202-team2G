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
const choiceSet = [
  ['晴れ', '曇り', '雨', '雪', '風'],
  ['赤', '白', '黄', '青', '黒'],
  ['ポカリスエット', 'お水', 'エナジードリンク', 'お茶・コーヒー', '炭酸飲料'],
  ['バラエティー', 'ニュース', 'お笑い', 'ドラマ', '音楽'],
  ['ショッピング', '映画鑑賞', 'スポーツ', '読書', '寝る'],
]

// for(let i = 0; i < questions.length; i++) {
//   var choicesContent = 
//   '<div class="card">'
//   + `<p>${questions[i]}</p>`
//   + '<ul>';
//     choiceSet.forEach(function(selection) {
//       for(let k = 0; k < selection.length; k++) {
//         choicesContent += `<li id="choice-${k+1}-${k + 1}" input type = "button" value = "button">${selection[k]}</li>`;
//       }});
//   choicesContent += '</ul>';
//   document.getElementById('questionContents').insertAdjacentHTML('afterbegin', choicesContent);
// };

for(let i = 0; i < questions.length; i++) {
  let choicesContent = 
  '<div class="card">'
  + `<p>${questions[i]}</p>`
  + `<ul id="choice${i+1}">`
  + `<li id="choiced${i+1}-1">${choiceSet[i][0]}</li>`
  + `<li id="choiced${i+1}-2">${choiceSet[i][1]}</li>`
  + `<li id="choiced${i+1}-3">${choiceSet[i][2]}</li>`
  + `<li id="choiced${i+1}-4">${choiceSet[i][3]}</li>`
  + `<li id="choiced${i+1}-5">${choiceSet[i][4]}</li>`
  + '</ul>'
  +'</div>';
  document.getElementById('questionContents').insertAdjacentHTML('beforeend', choicesContent);
  // afterbeginにすると5問目から始まる
}

choiceSet.forEach(function(selection, index) {
for(let l = 0; l < selection.length; l++) {
  let selected =document.getElementById(`choiced${index+1}-${l+1}`);
  console.log(selected)
  selected.addEventListener('click', function() {
    selected.classList.add('change-color');
    document.getElementById(`choiced${index+1}-1`).style.pointerEvents = "none";
    document.getElementById(`choiced${index+1}-2`).style.pointerEvents = "none";
    document.getElementById(`choiced${index+1}-3`).style.pointerEvents = "none";
    document.getElementById(`choiced${index+1}-4`).style.pointerEvents = "none";
    document.getElementById(`choiced${index+1}-5`).style.pointerEvents = "none";
  })
  }
})

// ボタンをクリックした時の処理
// 色が変わる
// choiceSet.forEach(function(choices) {
//   for(let i = 1; i <= choices.length; i++) {
//     let selectChoice =document.getElementById(`choice-${i}`);
//     console.log(selectChoice);
//       selectChoice.addEventListener("click", function () {
//         selectChoice.classList.add("change-color");
//   })
// }
// });



//ジャンルごとの曲名を配列に入れる
//明るい
const positive = [
  ['C&K 『ドラマ』'],
  ['Penthouse『...恋に落ちたら』'],
  ['乃木坂46『ざぶんざざぶん』'],
  ['乃木坂46『ファンタスティック三食パン』'],
];

//落ち着いている
const calm = [
  ['enthouse『あなたゆずり』'],
  ['宇多田ヒカル『Traveling』'],
];

//激しい
const intense = [
  ['シンガーズハイ『daybreak』'],
  ['櫻坂46『なぜ恋をしてこなかったんだろう』'],
  ['日向坂46『青春の馬』'],
];

//泣ける
const cry = [
  ['日向坂46『まさか偶然…」'],
  ['乃木坂46『猫舌カモミールティー』'],
  ['Anly『カラノココロ』'],
];

//パーリー系
const party = [
  ['Awich『Gila Gila』'],
  ['Penthouse『Jukebox Driver』'],
];
