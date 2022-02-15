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
  // 設問重ねる処理
  let question = document.getElementsByClassName('card');
  window.onload = question[0].style.display = 'block';
  // console.log(selected)
  selected.addEventListener('click', function() {
    selected.classList.add('change-color');
    document.getElementById(`choiced${index+1}-1`).style.pointerEvents = "none";
    document.getElementById(`choiced${index+1}-2`).style.pointerEvents = "none";
    document.getElementById(`choiced${index+1}-3`).style.pointerEvents = "none";
    document.getElementById(`choiced${index+1}-4`).style.pointerEvents = "none";
    document.getElementById(`choiced${index+1}-5`).style.pointerEvents = "none";
      setTimeout(() => {
        question[index].style.display = 'none';
        question[index+1].style.display = 'block';
      }, 500);
  })
  }
})

let diagnosisStart = document.getElementById('diagnosisStartButton');
let answerBox = document.getElementById('answer');
diagnosisStart.addEventListener('click', function() {
  answerBox.classList.add("showBox");
})

//ジャンルごとの曲名を配列に入れる
//明るい Aタイプ
const positive = [
  ['C&K 『ドラマ』','https://www.youtube.com/embed/NszvNJe0a84'],
  ['Penthouse『...恋に落ちたら』','https://www.youtube.com/embed/4TLlnTKeEqI'],
  ['乃木坂46『ざぶんざざぶん』','https://www.youtube.com/embed/wOx5oAbzKKs'],
  ['乃木坂46『ファンタスティック三食パン』','https://www.youtube.com/embed/0mx5q66rwuI'],
  ['ベリーグッドマン『ハイライト』',"https://www.youtube.com/embed/CSwUEGFroDg"],
  ['Twice『FANCY』',"https://www.youtube.com/embed/kOHB85vDuow"],
  ['Official髭男dism『I LOVE』',"https://www.youtube.com/embed/bt8wNQJaKAk"],
  ['YMO『君に、胸キュン。』',"https://www.youtube.com/embed/24bRSUeITXc"],
  ['YELLOW MAGIC ORCHESTRA『RYDEEN』',"https://www.youtube.com/embed/nB5g2cUM2FQ"],
  ['MISIA『THE GLORY DAY』',"https://www.youtube.com/embed/Ecv7tI03kJY"],
  ['Celtic Woman 『You Raise Me Up』',"https://www.youtube.com/embed/Yfwlj0gba_k" ],
  ['藤原さくら『かわいい』',"https://www.youtube.com/embed/bSd2Xnx6GtM"],
  ['GOT the beat『Step Back』',"https://www.youtube.com/embed/Eq1_WPnzvKw"],
  ['BENEE『Glitter』',"https://www.youtube.com/embed/D3gmU0GOTXI"],
  ['Anne-Marrie『2002』',"https://www.youtube.com/embed/Il-an3K9pjg"],
  ['藤井風『燃えよ』',"https://www.youtube.com/embed/FNCfUdZlAKc"],
  ['岡本真夜『アララの呪文』',"https://www.youtube.com/embed/RGyTLYU7O_g"],
  ['おジャ魔女どれみ オープニング『おジャ魔女カーニバル!!』',"https://www.youtube.com/embed/gM5yKQfdlk8"],
  ['ＧＯ-ＧＯ たまごっち！『たまごっち! オープニング主題歌』',"https://www.youtube.com/embed/w2-AKWQsRIA"],
  ['緑黄色社会『キャラクター』',"https://www.youtube.com/embed/ulforNn47PM"]
];

//落ち着いている Bタイプ
const calm = [
  ['enthouse『あなたゆずり』'],
  ['宇多田ヒカル『Traveling』'],
  ['Ochunism『グラス』'],
  ['Billy Joel『Honesty』'],
  ['槇原敬之『どんなときも』'],
  ['BTS『The Truth Untold』'],
  ['제이유나 (J.UNA)『Butterfly (알고있지만, OST』'],
  ['小田和正『I LOVE YOU』'],
  ['dodo『era it』'],
  ['aiko『瞳』'],
  ['岡崎体育『エクレア』'],
  ['AAAMYYY『HOME』'],
  ['Alesia Cara『Scraps to your bautiful』'],
  ['宮川彬良『ゆうがたクインテットオープニング』']
  ['kojikoji 『いつかのDAYS』'],
  ['iri『COME BACK TO MY CITY』']
  ['King Gnu『サマーレインダイバー』']
  ['miwa『結』']
  ['桐谷健太『海の声』']
];

//激しい Cタイプ
const intense = [
  ['シンガーズハイ『daybreak』','https://www.youtube.com/embed/WyiJQNTJLxU'],
  ['櫻坂46『なぜ恋をしてこなかったんだろう』','https://www.youtube.com/embed/S4gEJIyLHlM'],
  ['日向坂46『青春の馬』','https://www.youtube.com/embed/hZQzmzXjJB0'],
  ['48『Tik Tok Winter 2021』','https://www.youtube.com/embed/uu7-hj2pd-g'],
  ['三浦大知『Blizered』','https://www.youtube.com/embed/YqllOJ7ut10'],
  ['Aespa『Savage』','https://www.youtube.com/embed/WPdWvnAAurg'],
  ['ITZY『DALLA DALLA』','https://www.youtube.com/embed/pNfTK39k55U'],
  ['Vaundy『不可抗力』','https://www.youtube.com/embed/Gbz2C2gQREI'],
  ['ちゃんみな 『ハレンチ』','https://www.youtube.com/embed/L3P0LgwuPPo'],
  ['Ayase『よくばり』','https://www.youtube.com/embed/RXRrsrjy3_8'],
  ["B'z『Ultra Soul』",'https://www.youtube.com/embed/ygyOtMnNvCg'],
  ['THE YELLOW MONKEY『JAM』','https://www.youtube.com/embed/xv55yyNxCuE'],
  ["L'Arc～en～Ciel『HONEY』",'https://www.youtube.com/embed/WmM-KTcG3QY'],
  ['DOES『バクチ・ダンサー』','https://www.youtube.com/embed/aaIBgixsgNc'],
  ['THE BLUE HEARTS『TRAIN-TRAIN』','https://www.youtube.com/embed/I68t-vJZinc'],
  ['AgustD『Daechwita』','https://www.youtube.com/embed/qGjAWJ2zWWI'],
  ['millnium parade『2992』','https://www.youtube.com/embed/ujG6WPubX_Y'],
  ['Bish『ぴょ』','https://www.youtube.com/embed/JfESGv8cdxo'],
  ['Doja Cat『Boss Bitch』','https://www.youtube.com/embed/RsW66teC0BQ'],
  ['椎名林檎『本能』','https://www.youtube.com/embed/ECxBHhMc7oI'],
];

//泣ける Dタイプ
const cry = [
  ['日向坂46『まさか偶然…」','https://www.youtube.com/embed/WoaDD6ZWo78'],
  ['乃木坂46『猫舌カモミールティー』','https://www.youtube.com/embed/dIqN5XgIhFQ'],
  ['Anly『カラノココロ』','https://www.youtube.com/embed/rtLbtquPkUo'],
  ['川嶋あい『旅立ちの日に・・・』','https://www.youtube.com/embed/DlO308doIyU'],
  ['槇原敬之『もう恋なんてしない』','https://www.youtube.com/embed/naz0-szzYXk'],
  ['Charlie Puth『We Don’t Talk Anymore』','https://www.youtube.com/embed/3AtDnEC4zak"'],
  ['Lauv『changes』','https://www.youtube.com/embed/pPAAFMtDUzo'],
  ['ONE OK ROCK『Wasted Nights』','https://www.youtube.com/embed/2M3jN5VTsIY'],
  ['back number『水平線』','https://www.youtube.com/embed/iqEr3P78fz8'],
  ['米津玄師『アイネクライネ』','https://www.youtube.com/embed/-EKxzId_Sj4'],
  ['小田和正『緑の日々』','https://www.youtube.com/embed/64Ki7h3lz4A'],
  ['大澤誉志幸『そして僕は途方に暮れる』','https://www.youtube.com/embed/Re8l4a48R70'],
  ['斉藤由貴『卒業』','https://www.youtube.com/embed/oSqTaVzqPIk'],
  ['島谷ひとみ『春待人/Camellia-カメリア-』','https://www.youtube.com/embed/dzx35IEGNu8'],
  ['島谷ひとみ『恋の雫』','https://www.youtube.com/embed/eyPwgabpCWg'],
  ['mom『マスク』','https://www.youtube.com/embed/-DQKXxYsWDE'],
  ['Bon Iver『iMi』','https://www.youtube.com/embed/htyVjHr2_m8'],
  ['Tempalay『革命前夜』','https://www.youtube.com/embed/219q3PhaYuE'],
  ['秋川雅史『千の風になって』','https://www.youtube.com/embed/yqzCwcL9xDc'],
  ['星野源feat.PUNPEE『さらしもの』','https://www.youtube.com/embed/H6QFLov4WUA']
];

//パーリー系 Eタイプ
const party = [
  ['Awich『Gila Gila』'],
  ['Penthouse『Jukebox Driver』'],
  ['TAXI feat. tofubeats『NOA』'],
  ['RADIO FISH『PERFECT HUMAN』'],
  ['平井堅『POP STAR』'],
  ['Suchmos『STAY TUNE』'],
  ['島谷ひとみ『Perseus-ペルセウス-』'],
  // ['Zara Larsson『Ain't my fault』'],
  ['「24K MAGIC」 BY BRUNO MARS'],
  ['「LOVE ME NOW」BY JOHN LEGEND'],
  ['「STAY」 BY ZEDD ＆ ALEISSA CARA'],
  ['「SIDE TO SIDE」 BY ARIANA GRANDE ft. NICKI MINAJ'],
  ['「THE CURE」 BY LADY GAGA'],
  // ['「SAY YOU WON'T LET GO」 BY JAMES ARTHUR'],
  ['「CHAINED TO THE RHYTHM」 BY KATY PERRY ft. SKIP MARLEY'],
  ['Bebe Rexha『No broken hearts』'],
  ['Ariana Grande『no tears to cry』'],
  ['CHAI『N.E.O』'],
  ['STUTS&松たか子『Presence I』'],
  ['『Tones And I『Fly Away』']
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
// console.log(positive[0][1]);//配列からurlを取得
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
      new_element.innerText = `${positive[0][0]}`;
      // 指定した要素の中の末尾に挿入
      result_element.appendChild(new_element);

      let new_url = 
      `<iframe height="315" src=${positive[0][1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`
      +' </iframe>';
      document.getElementById('url').insertAdjacentHTML('beforeend', new_url);

    } else if( typeBNum > typeANum && typeBNum > typeCNum && typeBNum > typeDNum && typeBNum > typeENum ) {
      //もしもBの方が多かったらBタイプをシャッフルしたものの一つ目を表示
      new_element.innerText = `${calm[0][0]}`;
      // 指定した要素の中の末尾に挿入
      result_element.appendChild(new_element);

      let new_url = 
      `<iframe height="315" src=${calm[0][1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`
      +' </iframe>';
      document.getElementById('url').insertAdjacentHTML('beforeend', new_url);

    }else if( typeCNum > typeANum && typeCNum > typeBNum && typeCNum > typeDNum && typeCNum > typeENum ) {
      //もしもCの方が多かったらCタイプをシャッフルしたものの一つ目を表示
      new_element.innerText = `${intense[0][0]}`;
      // 指定した要素の中の末尾に挿入
      result_element.appendChild(new_element);

      let new_url = 
      `<iframe height="315" src=${intense[0][1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`
      +' </iframe>';
      document.getElementById('url').insertAdjacentHTML('beforeend', new_url);

    }else if( typeDNum > typeANum && typeDNum > typeBNum && typeDNum > typeCNum && typeDNum > typeENum ) {
      //もしもDの方が多かったらDタイプをシャッフルしたものの一つ目を表示
      new_element.innerText = `${cry[0][0]}`;
      // 指定した要素の中の末尾に挿入
      result_element.appendChild(new_element);

      let new_url = 
      `<iframe height="315" src=${cry[0][1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`
      +' </iframe>';
      document.getElementById('url').insertAdjacentHTML('beforeend', new_url);

    }else if( typeENum > typeANum && typeENum > typeBNum && typeENum > typeCNum && typeENum > typeDNum ) {
      //もしもEの方が多かったらEタイプをシャッフルしたものの一つ目を表示
      new_element.innerText = `${party[0][0]}`;
      // 指定した要素の中の末尾に挿入
      result_element.appendChild(new_element);

      let new_url = 
      `<iframe height="315" src=${party[0][1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`
      +' </iframe>';
      document.getElementById('url').insertAdjacentHTML('beforeend', new_url);

    }else {
      //どこのジャンルにも属さない場合
      //５つのジャンルを１つの配列に結合
      var all = positive.concat(calm,intense,cry,party);
      //その配列をシャッフルする
      shuffle(all);
      //一つ目を表示
      new_element.innerText = `${all[0][0]}`;
      // 指定した要素の中の末尾に挿入
      result_element.appendChild(new_element);

      let new_url = 
      `<iframe height="315" src=${all[0][1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`
      +' </iframe>';
      document.getElementById('url').insertAdjacentHTML('beforeend', new_url);
    }
  }
  });
  });
