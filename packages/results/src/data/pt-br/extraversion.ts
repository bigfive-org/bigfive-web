import { type TemplateDomain } from '../../types'

const extraversion: TemplateDomain = {
  domain: 'E',
  title: 'Extroversão',
  shortDescription: 'A Extroversão é caracterizada por um envolvimento marcante com o mundo externo.',
  description: `Extrovertidos gostam de estar com outras pessoas, são cheios de energia e
frequentemente experimentam emoções positivas. Eles tendem a ser entusiasmados,
orientados para a ação e são indivíduos propensos a dizer "Sim!" ou "Vamos lá!"
quando surge uma oportunidade de diversão. Em grupos, gostam de falar,
se impor e chamar a atenção para si mesmos.
<br /><br />
Introvertidos não possuem o mesmo nível de entusiasmo, energia e atividade dos
extrovertidos. Eles tendem a ser quietos, reservados, deliberados e
menos envolvidos no mundo social. Sua falta de envolvimento social
não deve ser interpretada como timidez ou depressão; o
introvertido simplesmente precisa de menos estímulo do que um extrovertido e prefere
ficar sozinho. <br /><br />A independência e a reserva do introvertido
às vezes são confundidas com falta de simpatia ou arrogância. Na realidade, um
introvertido que pontua alto na dimensão de afabilidade pode não buscar a companhia dos outros,
mas será bastante agradável quando abordado.`,
  results: [
    {
      score: 'low', // não traduzir esta linha
      text: `Sua pontuação em Extroversão é baixa, indicando que você é
introvertido, reservado e quieto. Você aprecia a solidão e atividades
solitárias. Sua socialização tende a ser restrita a poucos amigos próximos.`
    },
    {
      score: 'neutral', // não traduzir esta linha
      text: `Sua pontuação em Extroversão é média, indicando que você não é
nem um solitário retraído nem uma pessoa extremamente falante. Você gosta de
passar tempo com os outros, mas também aprecia momentos sozinho.`
    },
    {
      score: 'high', // não traduzir esta linha
      text: `Sua pontuação em Extroversão é alta, indicando que você é
sociável, extrovertido, enérgico e animado. Você prefere estar cercado
por pessoas a maior parte do tempo.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Afabilidade',
      text: `Pessoas com alta Afabilidade genuinamente gostam dos outros e
demonstram abertamente sentimentos positivos em relação às pessoas. Elas fazem
amizades rapidamente e formam relações íntimas com facilidade.
Pessoas com pontuação baixa em Afabilidade não são necessariamente frias
ou hostis, mas não buscam ativamente os outros e são percebidas
como distantes e reservadas.`
    },
    {
      facet: 2,
      title: 'Gregariedade',
      text: `Pessoas altamente gregárias acham a companhia dos
outros estimulante e recompensadora. Elas gostam da
agitação de multidões. Pessoas com pontuação baixa tendem a se sentir sobrecarregadas por
grandes grupos e, por isso, evitam ativamente multidões. Elas não necessariamente
desgostam de estar com outras pessoas, mas sua necessidade de privacidade e
tempo sozinhas é muito maior do que a daqueles que pontuam alto nesta escala.`
    },
    {
      facet: 3,
      title: 'Assertividade',
      text: `Pessoas com pontuação alta em Assertividade gostam de falar,
tomar a iniciativa e direcionar as atividades dos outros. Elas tendem a ser
líderes nos grupos. Pessoas com pontuação baixa falam pouco e deixam
os outros conduzirem as atividades do grupo.`
    },
    {
      facet: 4,
      title: 'Nível de Atividade',
      text: `Indivíduos ativos levam uma vida agitada e dinâmica.
Eles se movimentam rapidamente, com energia e vigor, e se envolvem em muitas atividades.
Pessoas com pontuação baixa nesta escala têm um ritmo mais lento e
relaxado.`
    },
    {
      facet: 5,
      title: 'Busca por Estímulos',
      text: `Pessoas com pontuação alta nesta escala se entediam facilmente
sem altos níveis de estímulo. Elas adoram luzes brilhantes e a agitação da vida urbana.
São propensas a correr riscos e buscar emoções fortes. Pessoas com pontuação baixa
se sentem sobrecarregadas por ruídos e confusão e evitam experiências radicais.`
    },
    {
      facet: 6,
      title: 'Entusiasmo',
      text: `Esta escala mede o humor positivo e
os sentimentos de felicidade, e não emoções negativas (que fazem parte do domínio
do Volatilidade Emocional). Pessoas com pontuação alta nesta escala costumam
experimentar uma ampla gama de emoções positivas, incluindo felicidade,
entusiasmo, otimismo e alegria. Pessoas com pontuação baixa não são tão propensas
a esses estados de ânimo elevados.`
    }
  ]
}

export default extraversion
