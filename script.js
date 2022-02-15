'use strict';
//選択肢ボタンの配列
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
  + `<li id="choiced${i+1}-1"><label><input type="checkbox" name="q01" class="typeA"> ${choiceSet[i][0]}</label></li>`
  + `<li id="choiced${i+1}-2"><label><input type="checkbox" name="q02" class="typeB"> ${choiceSet[i][1]}</label></li>`
  + `<li id="choiced${i+1}-3"><label><input type="checkbox" name="q03" class="typeC"> ${choiceSet[i][2]}</label></li>`
  + `<li id="choiced${i+1}-4"><label><input type="checkbox" name="q04" class="typeD"> ${choiceSet[i][3]}</label></li>`
  + `<li id="choiced${i+1}-5"><label><input type="checkbox" name="q05" class="typeE"> ${choiceSet[i][4]}</label></li>`
  + '</ul>'
  +'</div>';
  document.getElementById('questionContents').insertAdjacentHTML('beforeend', choicesContent);
  // afterbeginにすると5問目から始まる
}

choiceSet.forEach(function(selection, index) {
for(let l = 0; l < selection.length; l++) {
  let selected =document.getElementById(`choiced${index+1}-${l+1}`);
  // console.log(selected)
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

//ジャンルごとの曲名を配列に入れる
//明るい Aタイプ
const positive = [
  ['C&K 『ドラマ』'],
  ['Penthouse『...恋に落ちたら』'],
  ['乃木坂46『ざぶんざざぶん』'],
  ['乃木坂46『ファンタスティック三食パン』'],
];

//落ち着いている Bタイプ
const calm = [
  ['enthouse『あなたゆずり』'],
  ['宇多田ヒカル『Traveling』'],
];

//激しい Cタイプ
const intense = [
  ['シンガーズハイ『daybreak』'],
  ['櫻坂46『なぜ恋をしてこなかったんだろう』'],
  ['日向坂46『青春の馬』'],
];

//泣ける Dタイプ
const cry = [
  ['日向坂46『まさか偶然…」'],
  ['乃木坂46『猫舌カモミールティー』'],
  ['Anly『カラノココロ』'],
];

//パーリー系 Eタイプ
const party = [
  ['Awich『Gila Gila』'],
  ['Penthouse『Jukebox Driver』'],
];


//配列をシャッフルする関数（Fisher-Yates shuffle）
function shuffle(arr){ 
  for (let k = arr.length - 1; k > 0; k--){
    const j = Math.floor(Math.random() * (k + 1));
    [arr[j],arr[k]] = [arr[k],arr[j]];
  }
}
//下で呼び出しテスト、これで呼び出しできるの確認済み
shuffle(positive);
shuffle(calm);
shuffle(intense);
shuffle(cry);
shuffle(party);
// console.log(positive);
// console.log(positive[0]);
// console.log(calm);
// console.log(intense);
// console.log(cry);
// console.log(party);


//どの値がチェックされたかをカウントする
//カウントされた値の合計値を基に条件分岐
//if文に条件分岐された各々のジャンル先でシャッフル関数発火させる

$(function(){
  //ボタンがクリックされた時
  $("button").click(function(){
   
  //問題数を取得
  var qNum = questions.length;
  // id属性で要素を取得
  var result_element = document.getElementById('result');
  // 新しいHTML要素を作成
  let new_element = document.createElement('p');

  // console.log(result_element);
  // console.log(new_element);

  if( $("ul li input:checked").length < qNum ){
  //全てチェックしていなかったらアラートを出す
    alert("未回答の問題があります");
  } else {
  //チェックされているinputの数を取得
    var typeANum = $(".typeA:checked").length,
    typeBNum = $(".typeB:checked").length,
    typeCNum = $(".typeC:checked").length,
    typeDNum = $(".typeD:checked").length,
    typeENum = $(".typeE:checked").length;

    if( typeANum > typeBNum && typeANum > typeCNum && typeANum > typeDNum && typeANum >typeENum ) {
      //もしもAが最も多かったらAタイプをシャッフルしたものの一つ目を表示
      new_element.innerText = `${positive[0]}`;
      // 指定した要素の中の末尾に挿入
      result_element.appendChild(new_element);

    } else if( typeBNum > typeANum && typeBNum > typeCNum && typeBNum > typeDNum && typeBNum > typeENum ) {
      //もしもBの方が多かったらBタイプをシャッフルしたものの一つ目を表示
      new_element.innerText = `${calm[0]}`;
      // 指定した要素の中の末尾に挿入
      result_element.appendChild(new_element);

    }else if( typeCNum > typeANum && typeCNum > typeBNum && typeCNum > typeDNum && typeCNum > typeENum ) {
      //もしもCの方が多かったらCタイプをシャッフルしたものの一つ目を表示
      new_element.innerText = `${intense[0]}`;
      // 指定した要素の中の末尾に挿入
      result_element.appendChild(new_element);

    }else if( typeDNum > typeANum && typeDNum > typeBNum && typeDNum > typeCNum && typeDNum > typeENum ) {
      //もしもDの方が多かったらDタイプをシャッフルしたものの一つ目を表示
      new_element.innerText = `${cry[0]}`;
      // 指定した要素の中の末尾に挿入
      result_element.appendChild(new_element);
      
    }else if( typeENum > typeANum && typeENum > typeBNum && typeENum > typeCNum && typeENum > typeDNum ) {
      //もしもEの方が多かったらEタイプをシャッフルしたものの一つ目を表示
      new_element.innerText = `${party[0]}`;
      // 指定した要素の中の末尾に挿入
      result_element.appendChild(new_element);

    }else {
      //どこのジャンルにも属さない場合
      //５つのジャンルを１つの配列に入れる
      var all = [];
      all.push(positive);
      all.push(calm);
      all.push(intense);
      all.push(cry);
      all.push(party);
      //その配列をシャッフルする
      shuffle(all);
      //一つ目を表示
      new_element.innerText = `${all[0]}`;
      // 指定した要素の中の末尾に挿入
      result_element.appendChild(new_element);
    }
  }
  });
  });
