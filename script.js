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
  ['C&K 『ドラマ』'],
  ['Penthouse『...恋に落ちたら』'],
  ['乃木坂46『ざぶんざざぶん』'],
  ['乃木坂46『ファンタスティック三食パン』'],
  ['ベリーグッドマン『ハイライト』'],
  ['Twice『FANCY』'],
  ['Official髭男dism『I LOVE』'],
  ['YMO『君に、胸キュン。』'],
  ['YMO『ライディーン』'],
  ['MISIA『THE GLORY DAY』'],
  ['ケルティック・ウーマン 『You Raise Me Up』'],
  ['藤原さくら『かわいい』'],
  ['GOT the beat『Step Back』'],
  ['BENEE『Glitter』'],
  ['Anne-Marrie『2002』'],
  ['藤井風『燃えよ』'],
  ['岡本真夜『アララの呪文』'],
  ['おジャ魔女どれみ オープニング『おジャ魔女カーニバル!!』'],
  ['ＧＯ-ＧＯ たまごっち！『たまごっち! オープニング主題歌』'],
  ['緑黄色社会『キャラクター』']
  ['C&K 『ドラマ』','https://www.youtube.com/embed/NszvNJe0a84'],
  ['Penthouse『...恋に落ちたら』','https://www.youtube.com/watch?v=4TLlnTKeEqI'],
  ['乃木坂46『ざぶんざざぶん』','https://www.youtube.com/watch?v=wOx5oAbzKKs'],
  ['乃木坂46『ファンタスティック三食パン』','https://www.youtube.com/watch?v=0mx5q66rwuI'],
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
  ['シンガーズハイ『daybreak』'],
  ['櫻坂46『なぜ恋をしてこなかったんだろう』'],
  ['日向坂46『青春の馬』'],
  ['48『Tik Tok Winter 2021』'],
  ['三浦大知『Blizered』'],
  ['Aespa『Savage』'],
  ['ITZY『DALLA DALLA』'],
  ['Vaundy『不可抗力』'],
  ['ちゃんみな 『ハレンチ』'],
  ['Ayase『よくばり』'],
  // ['B'z『Ultra Soul』'],
  ['THE YELLOW MONKEY『JAM』'],
  // [' L'Arc～en～Ciel『HONEY』'],
  ['DOES『バクチ・ダンサー』'],
  ['THE BLUE HEARTS『TRAIN-TRAIN』'],
  ['AgustD『Daechwita』'],
  ['millnium parade『2992』'],
  ['Bish『ぴょ』'],
  ['Doja Cat『Boss Bitch』'],
  ['椎名林檎『本能』'],
];

//泣ける Dタイプ
const cry = [
  ['日向坂46『まさか偶然…」'],
  ['乃木坂46『猫舌カモミールティー』'],
  ['Anly『カラノココロ』'],
  ['川嶋あい『旅立ちの日に・・・』']
  ['槇原敬之『もう恋なんてしない』']
  ['Charlie Puth『We Don’t Talk Anymore』']
  ['Lauv - changes']
  ['ONE OK ROCK『Wasted Nights』']
  ['back number『水平線』']
  ['米津玄師『アイネクライネ』']
  ['小田和正『緑の日々』']
  ['大澤誉志幸『そして僕は途方に暮れる』']
  ['斉藤由貴『卒業』']
  ['島谷ひとみ『春待人/Camellia-カメリア-』']
  ['島谷ひとみ『恋の雫』']
  ['mom『マスク』']
  ['Bon Iver『iMi』']
  ['Tempalay『革命前夜』']
  ['秋川雅史『千の風になって』']
  ['星野源feat.PUNPEE『さらしもの』']
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
      new_element.innerText = `${positive[0][0]}`;
      // 指定した要素の中の末尾に挿入
      result_element.appendChild(new_element);

      let new_url = 
      `<iframe width="560" height="315" src=${positive[0][1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`
      +' </iframe>';
      document.getElementById('url').insertAdjacentHTML('beforeend', new_url);

    } else if( typeBNum > typeANum && typeBNum > typeCNum && typeBNum > typeDNum && typeBNum > typeENum ) {
      //もしもBの方が多かったらBタイプをシャッフルしたものの一つ目を表示
      new_element.innerText = `${calm[0][0]}`;
      // 指定した要素の中の末尾に挿入
      result_element.appendChild(new_element);

      let new_url = 
      `<iframe width="560" height="315" src=${calm[0][1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`
      +' </iframe>';
      document.getElementById('url').insertAdjacentHTML('beforeend', new_url);

    }else if( typeCNum > typeANum && typeCNum > typeBNum && typeCNum > typeDNum && typeCNum > typeENum ) {
      //もしもCの方が多かったらCタイプをシャッフルしたものの一つ目を表示
      new_element.innerText = `${intense[0][0]}`;
      // 指定した要素の中の末尾に挿入
      result_element.appendChild(new_element);

      let new_url = 
      `<iframe width="560" height="315" src=${intense[0][1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`
      +' </iframe>';
      document.getElementById('url').insertAdjacentHTML('beforeend', new_url);

    }else if( typeDNum > typeANum && typeDNum > typeBNum && typeDNum > typeCNum && typeDNum > typeENum ) {
      //もしもDの方が多かったらDタイプをシャッフルしたものの一つ目を表示
      new_element.innerText = `${cry[0][0]}`;
      // 指定した要素の中の末尾に挿入
      result_element.appendChild(new_element);

      let new_url = 
      `<iframe width="560" height="315" src=${cry[0][1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`
      +' </iframe>';
      document.getElementById('url').insertAdjacentHTML('beforeend', new_url);

    }else if( typeENum > typeANum && typeENum > typeBNum && typeENum > typeCNum && typeENum > typeDNum ) {
      //もしもEの方が多かったらEタイプをシャッフルしたものの一つ目を表示
      new_element.innerText = `${party[0][0]}`;
      // 指定した要素の中の末尾に挿入
      result_element.appendChild(new_element);

      let new_url = 
      `<iframe width="560" height="315" src=${party[0][1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`
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
      `<iframe width="560" height="315" src=${all[0][1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`
      +' </iframe>';
      document.getElementById('url').insertAdjacentHTML('beforeend', new_url);
    }
  }
  });
  });
  // <iframe width="560" height="315" src=`${party[0][1]}` title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
  // </iframe>


  // let new_url = 
  // `<iframe width="560" height="315" src=${party[0][1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>`
  // +' </iframe>';
  // document.getElementById('url').insertAdjacentHTML('beforeend', new_url);
 





// // id属性で要素を取得
// var result_url = document.getElementById('url');
// // 新しいHTML要素を作成
// let new_url = document.createElement('iframe');
// new_url.style.width = "560";
// new_url.style.height = "315";

// // 選ばれた配列のURLを取得してそれを入れる
// new_url.src = `${party[0][1]}`;
// // 指定した要素の中の末尾に挿入
// result_url.appendChild(new_url);