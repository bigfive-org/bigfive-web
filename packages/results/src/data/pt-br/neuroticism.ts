import { type TemplateDomain } from '../../types'

const neuroticism: TemplateDomain = {
  domain: 'N',
  title: 'Volatilidade Emocional',
  shortDescription: 'A Volatilidade Emocional refere-se à tendência de experimentar sentimentos negativos.',
  description: `A Volatilidade Emocional se refere à tendência de sentir emoções negativas. <br /><br />
Aqueles que pontuam alto em Volatilidade Emocional podem
experimentar principalmente um sentimento negativo específico, como ansiedade,
raiva ou depressão, mas geralmente vivenciam várias dessas emoções. <br /><br />
Pessoas com alta volatilidade emocional são muito reativas emocionalmente. Elas
respondem emocionalmente a eventos que não afetariam a maioria das pessoas, e
suas reações tendem a ser mais intensas do que o normal. Elas são mais
propensas a interpretar situações comuns como ameaçadoras e pequenas frustrações
como extremamente difíceis de lidar. <br /><br />
Suas reações emocionais negativas tendem a persistir por períodos anormalmente longos,
o que significa que frequentemente se encontram de mau humor. Esses problemas no controle
emocional podem prejudicar a capacidade de pensar com clareza, tomar decisões e lidar
de forma eficaz com o estresse.`,
  results: [
    {
      score: 'low', // não traduzir esta linha
      text: `Sua pontuação em Volatilidade Emocional é baixa, indicando que você é
excepcionalmente calmo, equilibrado e inabalável. Você não reage com
emoções intensas, mesmo em situações que a maioria das pessoas consideraria
estressantes.`
    },
    {
      score: 'neutral', // não traduzir esta linha
      text: `Sua pontuação em Volatilidade Emocional é média, indicando que seu nível de
reatividade emocional é semelhante ao da maioria das pessoas.
Situações estressantes e frustrantes o afetam, mas você geralmente consegue superar
esses sentimentos e lidar bem com essas situações.`
    },
    {
      score: 'high', // não traduzir esta linha
      text: `Sua pontuação em Volatilidade Emocional é alta, indicando que você se
irrita ou se entristece facilmente, mesmo com as exigências normais da
vida. As pessoas o consideram sensível e emocional.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Ansiedade',
      text: `O sistema de "luta ou fuga" do cérebro das pessoas ansiosas
é ativado com muita facilidade e frequência. Assim, indivíduos com alta
pontuação em Ansiedade frequentemente sentem que algo perigoso está prestes a acontecer.
Eles podem ter medo de situações específicas ou apenas serem mais apreensivos em geral.
Sentem-se tensos, nervosos e inquietos. Pessoas com baixa pontuação em Ansiedade são
geralmente calmas e destemidas.`
    },
    {
      facet: 2,
      title: 'Hostilidade',
      text: `Pessoas que pontuam alto em Hostilidade sentem-se furiosas quando 
      as coisas não acontecem como desejam. Elas são sensíveis à forma como são tratadas e
      sentem ressentimento e amargura quando acreditam estar sendo enganadas.
      Esta escala mede a tendência a sentir raiva; no entanto, a forma como a pessoa expressa
      irritação e hostilidade depende do seu nível de Socialização.
      Indivíduos com pontuação baixa raramente sentem ou expressam raiva.`
    },
    {
      facet: 3,
      title: 'Depressão',
      text: `Esta escala mede a tendência a sentir tristeza, desânimo
e desmotivação. Pessoas com pontuação alta nesta escala frequentemente têm pouca energia
e dificuldade em iniciar atividades. Já aquelas com pontuação baixa geralmente não apresentam
esses sentimentos depressivos.`
    },
    {
      facet: 4,
      title: 'Autoconsciência',
      text: `Indivíduos muito autoconscientes são sensíveis
ao que os outros pensam sobre eles. Sua preocupação com rejeição e
ridicularização faz com que se sintam tímidos e desconfortáveis em interações sociais.
Eles se embaraçam facilmente e frequentemente sentem vergonha. Seus medos de serem
criticados ou ridicularizados são exagerados e irreais, mas sua insegurança pode acabar
tornando esses medos uma profecia autorrealizável. Por outro lado, pessoas com baixa
pontuação não sofrem com a impressão errônea de que todos estão observando e julgando.
Elas não se sentem nervosas em situações sociais.`
    },
    {
      facet: 5,
      title: 'Impulsividade',
      text: `Pessoas com alta pontuação em Impulsividade sentem fortes desejos e
impulsos que têm dificuldade em resistir. Elas tendem a buscar prazeres imediatos
e recompensas de curto prazo, sem considerar as consequências a longo prazo.
Pessoas com pontuação baixa não experimentam desejos tão intensos e, consequentemente,
não sentem tanta tentação de exagerar ou perder o autocontrole.`
    },
    {
      facet: 6,
      title: 'Vulnerabilidade',
      text: `Pessoas com pontuação alta em Vulnerabilidade experimentam
pânico, confusão e sensação de impotência quando estão sob pressão ou estresse.
Já aquelas com pontuação baixa se sentem mais equilibradas, confiantes e racionais
mesmo em situações difíceis.`
    }
  ]
}

export default neuroticism
