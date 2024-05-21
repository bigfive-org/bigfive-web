module.exports = {
  domain: 'N', // do not change this line
  title: '神経症傾向',
  shortDescription: '神経症傾向は、否定的な感情を経験する傾向を指します。',
  description: `フロイトは元々、神経症という用語を
精神的な苦痛、感情的な苦しみ、および
日常生活の要求に効果的に対処できない状態を示すために使用しました。
彼は誰もがある程度の神経症の兆候を示すが、
私たちの苦しみの程度と具体的な症状は異なると提案しました。
今日では、神経症傾向は否定的な感情を経験する傾向を指します。
<br /><br />神経症傾向が高い人は、主に不安、怒り、または抑うつなどの特定の否定的な感情を
経験するかもしれませんが、これらの感情のいくつかを経験する可能性があります。
<br /><br />神経症傾向が高い人々は感情的に反応しやすいです。彼らはほとんどの人々には影響を与えない
出来事に対して感情的に反応し、その反応は通常よりも強烈です。彼らは普通の状況を
脅威として解釈し、些細な挫折を絶望的に困難なものと見なす傾向があります。
<br /><br />彼らの否定的な感情的反応は異常に長く続く傾向があり、しばしば悪い気分でいることを意味します。
これらの感情調節の問題は、神経症傾向が高い人の明確な思考、意思決定、
およびストレスに効果的に対処する能力を低下させる可能性があります。`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `あなたの神経症傾向のスコアは低く、非常に冷静で、
落ち着いており、動じないことを示しています。ほとんどの人が
ストレスの多い状況であると考える状況でも、あなたは
強い感情で反応しません。`
    },
    {
      score: 'neutral', // do not translate this line
      text: `あなたの神経症傾向のスコアは平均的で、感情的な反応性のレベルが
一般的な人口の典型であることを示しています。
ストレスの多い状況や挫折の状況は多少あなたを動揺させますが、
一般的にはこれらの感情を克服し、対処することができます。`
    },
    {
      score: 'high', // do not translate this line
      text: `あなたの神経症傾向のスコアは高く、ほとんどの人が
生活の通常の要求と考えることでも簡単に動揺することを示しています。
人々はあなたを敏感で感情的と見なします。`
    }
  ],
  facets: [
    {
      facet: 1,
      title: '不安',
      text: `不安な人々の脳の「戦うか逃げるか」システムは、
簡単にかつ頻繁に作動します。したがって、不安が高い人々は、
何か危険なことが起こりそうだと感じることが多いです。
彼らは特定の状況を恐れるか、一般的に恐れるかのいずれかです。
彼らは緊張し、そわそわし、神経質です。不安が低い人々は
一般的に冷静で恐れを感じません。`
    },
    {
      facet: 2,
      title: '怒り',
      text: `怒りのスコアが高い人々は、物事が自分の思い通りに
いかないと激怒します。彼らは公平に扱われることに敏感で、
不正を感じると憤慨し、苦々しく感じます。
この尺度は怒りを感じる傾向を測定します。人が怒りや敵意を
表現するかどうかは、その人の協調性のレベルに依存します。
低得点の人々はあまり怒りを感じたり、怒りやすくありません。`
    },
    {
      facet: 3,
      title: '抑うつ',
      text: `この尺度は、悲しみ、落胆、そして落ち込みやすさを感じる傾向を測定します。
高得点の人々はエネルギーが欠け、活動を開始するのが困難です。
低得点の人々はこれらの抑うつ感情をほとんど感じません。`
    },
    {
      facet: 4,
      title: '自意識',
      text: `自意識の高い人々は、他人が自分をどう思っているかに敏感です。
拒絶や嘲笑を恐れるため、他人の前で恥ずかしく感じたり不快に感じたりします。
彼らは簡単に恥ずかしくなり、しばしば恥を感じます。彼らが他人から批判されたり
からかわれたりすることを恐れるのは誇張されており非現実的ですが、
彼らのぎこちなさや不快感がこれらの恐れを自己成就的予言にする可能性があります。
対照的に、低得点の人々は誰もが自分を見て批判しているという
誤った印象に悩まされません。彼らは社交的な状況で緊張しません。`
    },
    {
      facet: 5,
      title: '衝動性',
      text: `衝動的な人々は、強い欲望や衝動を感じ、それに抵抗するのが難しいと感じます。
彼らは長期的な結果よりも短期的な快楽や報酬に向かう傾向があります。
低得点の人々は、強い抵抗できない欲望を感じることがなく、
その結果、過度にふけることに誘惑されることはありません。`
    },
    {
      facet: 6,
      title: '脆弱性',
      text: `脆弱性のスコアが高い人々は、
圧力やストレス下でパニック、混乱、無力感を経験します。
低得点の人々は、ストレスを感じるときにより落ち着いて自信があり、
明確に考えることができます。`
    }
  ]
}
