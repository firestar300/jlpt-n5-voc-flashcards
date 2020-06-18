const vocabulary = [
  {
    jp: {
      kana: 'ああ',
      kanji: '嗚呼',
    },
    fr: 'ah !, oh !, hey !',
  },
  {
    jp: {
      kana: 'あいさつする',
      kanji: '挨拶する',
    },
    fr: 'saluer',
  },
  {
    jp: {
      kana: 'あう',
      kanji: '会う',
    },
    fr: 'rencontrer, voir (une personne)',
  },
  {
    jp: {
      kana: 'あお',
      kanji: '青',
    },
    fr: 'bleu (le), vert (le)',
  },
  {
    jp: {
      kana: 'あおい',
      kanji: '青い',
    },
    fr: 'bleu, vert, inexpérimenté',
  },
  {
    jp: {
      kana: 'あか',
      kanji: '赤',
    },
    fr: 'rouge (le)',
  },
  {
    jp: {
      kana: 'あかい',
      kanji: '赤い',
    },
    fr: 'rouge',
  },
  {
    jp: {
      kana: 'あかるい',
      kanji: '明るい',
    },
    fr: 'clair',
  },
  {
    jp: {
      kana: 'あき',
      kanji: '秋',
    },
    fr: 'automne',
  },
  {
    jp: {
      kana: 'あく',
      kanji: '開く',
    },
    fr: 's\'ouvrir',
  },
  {
    jp: {
      kana: 'あける',
      kanji: '開ける',
    },
    fr: 'ouvrir',
  },
  {
    jp: {
      kana: 'あげる',
      kanji: '上げる',
    },
    fr: 'donner',
  },
  {
    jp: {
      kana: 'あさ',
      kanji: '朝',
    },
    fr: 'matin',
  },
  {
    jp: {
      kana: 'あさごはん',
      kanji: '朝ご飯',
    },
    fr: 'petit-dejeuner',
  },
  {
    jp: {
      kana: 'あさって',
      kanji: '明後日',
    },
    fr: 'après-demain',
  },
  {
    jp: {
      kana: 'あし',
      kanji: '足',
    },
    fr: 'jambe',
  },
  {
    jp: {
      kana: 'あし',
      kanji: '足',
    },
    fr: 'pied',
  },
  {
    jp: {
      kana: 'あした',
      kanji: '明日',
    },
    fr: 'demain',
  },
  {
    jp: {
      kana: 'あそこ',
      kanji: '彼処',
    },
    fr: 'là-bas (loin du locuteur et de l\'interlocuteur)',
  },
  {
    jp: {
      kana: 'あそび',
      kanji: '遊び',
    },
    fr: 'jeu',
  },
  {
    jp: {
      kana: 'あそぶ',
      kanji: '遊ぶ',
    },
    fr: 'jouer',
  },
  {
    jp: {
      kana: 'あたたかい',
      kanji: '温かい',
    },
    fr: 'tiède, chaud',
  },
  {
    jp: {
      kana: 'あたま',
      kanji: '頭',
    },
    fr: 'tête',
  },
  {
    jp: {
      kana: 'あたらしい',
      kanji: '新しい',
    },
    fr: 'nouveau',
  },
  {
    jp: {
      kana: 'あちら',
      kanji: '彼方',
    },
    fr: 'ce côté-là (loin du locuteur et de l\'interlocuteur)',
  },
  {
    jp: {
      kana: 'あつい',
      kanji: '暑い',
    },
    fr: 'chaud',
  },
  {
    jp: {
      kana: 'あつい',
      kanji: '厚い',
    },
    fr: 'épais, loird',
  },
  {
    jp: {
      kana: 'あっち',
      kanji: '彼方',
    },
    fr: 'ce côté-là (loin du locuteur et de l\'interlocuteur) (familier)',
  },
  {
    jp: {
      kana: 'あと',
      kanji: '後',
    },
    fr: 'après',
  },
  {
    jp: {
      kana: 'あなた',
      kanji: '貴方',
    },
    fr: 'tu, toi, ton (neutre)',
  },
  {
    jp: {
      kana: 'あに',
      kanji: '兄',
    },
    fr: 'grand-frère',
  },
  {
    jp: {
      kana: 'あね',
      kanji: '姉',
    },
    fr: 'grande-soeur',
  },
  {
    jp: {
      kana: 'あの',
      kanji: '',
    },
    fr: 'bien, donc...',
  },
  {
    jp: {
      kana: 'あの',
      kanji: '',
    },
    fr: 'ce (loin du locuteur et de l\'interlocuteur)',
  },
  {
    jp: {
      kana: 'アパート',
      kanji: '',
    },
    fr: 'appartement',
  },
  {
    jp: {
      kana: 'あびる',
      kanji: '浴びる',
    },
    fr: 'prendre une douche, prendre un bain, se dorer au soleil',
  },
  {
    jp: {
      kana: 'あぶない',
      kanji: '危ない',
    },
    fr: 'dangereux',
  },
  {
    jp: {
      kana: 'あまい',
      kanji: '甘い',
    },
    fr: 'doux, délicieux, sucré',
  },
  {
    jp: {
      kana: 'あまり',
      kanji: '余り',
    },
    fr: 'pas tellement (+négatif)',
  },
  {
    jp: {
      kana: 'あめ',
      kanji: '雨',
    },
    fr: 'pluie',
  },
  {
    jp: {
      kana: 'あめ',
      kanji: '飴',
    },
    fr: 'bonbon, sucrerie',
  },
  {
    jp: {
      kana: 'あらう',
      kanji: '洗う',
    },
    fr: 'laver',
  },
  {
    jp: {
      kana: 'ある',
      kanji: '',
    },
    fr: 'avoir, posséder',
  },
  {
    jp: {
      kana: 'ある',
      kanji: '',
    },
    fr: 'être, se trouver, exister',
  },
  {
    jp: {
      kana: 'あるく',
      kanji: '歩く',
    },
    fr: 'marcher',
  },
  {
    jp: {
      kana: 'あれ',
      kanji: '彼れ',
    },
    fr: 'ceci (loin du locuteur et de l\'interlocuteur)',
  },
  {
    jp: {
      kana: 'いただきます・あまり',
      kanji: '',
    },
    fr: 'excès',
  },
  {
    jp: {
      kana: 'いい・よい',
      kanji: '良い',
    },
    fr: 'plaisant, agréable, bien',
  },
  {
    jp: {
      kana: 'いいえ',
      kanji: '',
    },
    fr: 'non',
  },
  {
    jp: {
      kana: 'いう',
      kanji: '言う',
    },
    fr: 'dire',
  },
  {
    jp: {
      kana: 'いえ',
      kanji: '家',
    },
    fr: 'maison',
  },
  {
    jp: {
      kana: 'いく',
      kanji: '行く',
    },
    fr: 'aller',
  },
  {
    jp: {
      kana: 'いくつ',
      kanji: '幾つ',
    },
    fr: 'combien (quantité)',
  },
  {
    jp: {
      kana: 'いくら',
      kanji: '幾ら',
    },
    fr: 'combien (prix)',
  },
  {
    jp: {
      kana: 'いけ',
      kanji: '池',
    },
    fr: 'étang',
  },
  {
    jp: {
      kana: 'いし',
      kanji: '石',
    },
    fr: 'pierre, roc',
  },
  {
    jp: {
      kana: 'いしゃ',
      kanji: '医者',
    },
    fr: 'docteur, médecin',
  },
  {
    jp: {
      kana: 'いす',
      kanji: '椅子',
    },
    fr: 'chaise',
  },
  {
    jp: {
      kana: 'いそがしい',
      kanji: '忙しい',
    },
    fr: 'occupé',
  },
  {
    jp: {
      kana: 'いたい',
      kanji: '痛い',
    },
    fr: 'douleureux',
  },
  {
    jp: {
      kana: 'いただきます',
      kanji: '戴きます',
    },
    fr: 'merci pour ce repas (expression de gratitude avant de commencer à manger)',
  },
  {
    jp: {
      kana: 'いち',
      kanji: '一',
    },
    fr: 'un',
  },
  {
    jp: {
      kana: 'いちにち',
      kanji: '一日',
    },
    fr: 'un jour',
  },
  {
    jp: {
      kana: 'いちばん',
      kanji: '一番',
    },
    fr: 'meilleur, le premier, le numéro 1',
  },
]

const $answer = document.querySelector('.card__answer')

function showCard() {
  const $symbol = document.querySelector('.card__symbol')
  $answer.style.display = 'none'
  const index = Math.floor(Math.random() * ((vocabulary.length - 1) - 0 + 1)) + 0
  const isKana = Math.floor(Math.random() * (2 - 1 + 1)) + 1 === 1



  if (isKana) {
    $symbol.classList.remove('small')
    $symbol.innerHTML = `
      ${vocabulary[index].jp.kana}
      <div>${vocabulary[index].jp.kanji}</div>
    `

    $answer.innerText = vocabulary[index].fr
  } else {
    $symbol.classList.add('small')
    $symbol.innerHTML = `
      ${vocabulary[index].fr}
    `

    $answer.innerText = vocabulary[index].jp.kanji.length > 0 ? `${vocabulary[index].jp.kana} (${vocabulary[index].jp.kanji})` : vocabulary[index].jp.kana
  }
}

document.getElementById('js-change').addEventListener('click', showCard)

document.getElementById('js-reveal').addEventListener('click', function() {
  $answer.style.display = 'block'
})

showCard()