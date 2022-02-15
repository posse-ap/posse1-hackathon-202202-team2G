'use strict';
//選択肢ボタンの配列
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
// console.log(calm);
// console.log(intense);
// console.log(cry);
// console.log(party);


//どの値がチェックされたかをカウントする
//カウントされた値の合計値を基に条件分岐
//if文に条件分岐された各々のジャンル先でシャッフル関数発火させる
//もしもどこのジャンルにも属さない場合、５つのジャンルを１つの配列に入れ、その配列をシャッフルするように出力する（else文)
function count1(){
  var thisCount1 = 0;
      thisCount1 = thisCount1 + 1;
}
function count2(){
  var thisCount2 = 0;
      thisCount2 = thisCount2 + 1;
}
function count3(){
  var thisCount3 = 0;
      thisCount3 = thisCount3 + 1;
}
function count4(){
  var thisCount4 = 0;
      thisCount4 = thisCount4 + 1;
}
function count5(){
  var thisCount5 = 0;
      thisCount5 = thisCount5 + 1;
}

console.log(thisCount1);
console.log(thisCount2);
console.log(thisCount3);
console.log(thisCount4);
console.log(thisCount5);