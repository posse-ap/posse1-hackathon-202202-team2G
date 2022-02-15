'use strict';
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