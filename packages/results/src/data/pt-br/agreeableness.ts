import { type TemplateDomain } from '../../types'

const agreeableness: TemplateDomain = {
  domain: 'A',
  title: 'Socialização',
  shortDescription: 'A Socialização reflete diferenças individuais na preocupação com a cooperação e a harmonia social. Indivíduos sociáveis valorizam o bom relacionamento com os outros.',
  description: `A Socialização reflete diferenças individuais na preocupação com a cooperação e a harmonia social.
Indivíduos sociáveis valorizam o bom relacionamento com os outros.<br /><br />
Eles são, portanto, atenciosos, amigáveis,
generosos, prestativos e dispostos a comprometer seus interesses
em favor dos outros. Pessoas sociáveis também têm uma visão otimista
da natureza humana. Elas acreditam que as pessoas são, em essência, honestas,
decentes e confiáveis. <br /><br />
Indivíduos menos sociáveis colocam seus próprios interesses acima da convivência
harmoniosa com os outros. Eles geralmente não se preocupam com o bem-estar dos outros e,
portanto, raramente se esforçam para ajudar outras pessoas.
Às vezes, seu ceticismo em relação às intenções alheias os torna
suspeitosos, pouco amigáveis e pouco cooperativos.
<br /><br />
A Socialização pode ser vantajosa para alcançar e manter
popularidade. Por outro lado, a socialização pode ser menos útil em situações
que exigem decisões duras ou objetivas.`,
  results: [
    {
      score: 'low', // não traduzir esta linha
      text: `Sua pontuação em Socialização é baixa, indicando pouca preocupação
com as necessidades dos outros em comparação com as suas próprias. As pessoas o veem
como uma pessoa rígida, crítica e inflexível.`
    },
    {
      score: 'neutral', // não traduzir esta linha
      text: `Seu nível de Socialização é médio, indicando alguma preocupação
com as necessidades dos outros, mas, em geral, sem disposição para se sacrificar
por eles.`
    },
    {
      score: 'high', // não traduzir esta linha
      text: `Seu alto nível de Socialização indica um forte interesse
nas necessidades e no bem-estar dos outros. Você é uma pessoa agradável, simpática
e cooperativa.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Confiança',
      text: `Uma pessoa com alta confiança acredita que a maioria das pessoas
é justa, honesta e tem boas intenções. Pessoas com baixa confiança
veem os outros como egoístas, manipuladores e potencialmente perigosos.`
    },
    {
      facet: 2,
      title: 'Retidão',
      text: `Pessoas com pontuação alta nesta escala não veem necessidade de
fingimento ou manipulação ao lidar com os outros e, portanto, são
francas, diretas e sinceras. Pessoas com pontuação baixa acreditam que
um certo grau de dissimulação nas relações sociais é necessário. 
Pessoas sinceras são mais fáceis de se relacionar, enquanto aquelas mais reservadas
tendem a ser vistas como menos acessíveis. No entanto, isso não significa que
pessoas de pontuação baixa sejam sem princípios ou imorais; elas são apenas mais cautelosas
e menos dispostas a revelar toda a verdade abertamente.`
    },
    {
      facet: 3,
      title: 'Altruísmo',
      text: `Pessoas altruístas acham genuinamente gratificante ajudar os outros.
Consequentemente, estão geralmente dispostas a auxiliar aqueles que precisam.
Elas veem ajudar os outros como uma forma de realização pessoal, em vez de
sacrifício. Pessoas com pontuação baixa nesta escala não sentem grande satisfação
em ajudar os necessitados. Para elas, pedidos de ajuda parecem um incômodo
em vez de uma oportunidade de realização pessoal.`
    },
    {
      facet: 4,
      title: 'Cooperação',
      text: `Indivíduos com pontuação alta nesta escala
evitam confrontos. Eles estão dispostos a ceder ou negar suas próprias
necessidades para manter boas relações com os outros. Já aqueles com
pontuação baixa são mais propensos a impor sua vontade e intimidar os outros
para conseguir o que desejam.`
    },
    {
      facet: 5,
      title: 'Modéstia',
      text: `Pessoas com pontuação alta nesta escala não gostam de afirmar
que são melhores do que os outros. Em alguns casos, essa atitude pode estar
relacionada à baixa autoconfiança ou autoestima. No entanto, algumas pessoas com
alta autoestima consideram a falta de modéstia inadequada. Indivíduos que
se descrevem como superiores tendem a ser vistos pelos outros como arrogantes.`
    },
    {
      facet: 6,
      title: 'Empatia',
      text: `Pessoas com pontuação alta nesta escala são
sensíveis e compassivas. Elas se colocam no lugar dos outros e se
emocionam facilmente com o sofrimento humano. Já pessoas com pontuação baixa
não são tão afetadas por esses sentimentos e se orgulham de fazer julgamentos
objetivos, baseados na razão. Elas se preocupam mais com a verdade e a justiça
imparcial do que com a compaixão.`
    }
  ]
}

export default agreeableness
