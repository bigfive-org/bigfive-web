import { type TemplateDomain } from '../../types'

const conscientiousness: TemplateDomain = {
  domain: 'C',
  title: 'Realização',
  shortDescription: 'A Realização diz respeito à forma como controlamos, regulamos e direcionamos nossos impulsos.',
  description: `Indivíduos impulsivos podem ser vistos pelos outros como divertidos,
extrovertidos e cheios de energia. 
<br /><br />
No entanto, agir por impulso pode levar a problemas de diversas formas.
O comportamento impulsivo, mesmo quando não é seriamente destrutivo,
reduz a eficácia de uma pessoa de maneira significativa.
Agir impulsivamente impede a consideração de cursos alternativos de ação,
alguns dos quais poderiam ser mais sábios do que a escolha impulsiva.
A impulsividade também desvia as pessoas de projetos que exigem sequências organizadas de etapas.
As realizações de uma pessoa impulsiva são, portanto, pequenas, dispersas e inconsistentes.
<br /><br />
Uma característica da inteligência, é a capacidade de pensar sobre as
consequências futuras antes de agir por impulso. A atividade inteligente
envolve contemplar objetivos de longo prazo, organizar e planejar rotas
para alcançar esses objetivos e persistir mesmo diante de impulsos
momentâneos contrários. A ideia de que a inteligência envolve controle dos
impulsos é bem representada pelo termo prudência, um rótulo alternativo para
o domínio da Realização. Ser prudente significa tanto ser sábio quanto cauteloso.
<br /><br />
Pessoas que pontuam alto na escala de Realização são percebidas pelos outros
como inteligentes. Evitam problemas e alcançam altos níveis de sucesso por
meio de planejamento intencional e persistência. Eles também são vistos de
forma positiva pelos outros como inteligentes e confiáveis. Por outro lado,
podem ser perfeccionistas compulsivos e viciados em trabalho.
Além disso, indivíduos extremamente realizados podem ser vistos como rigorosos
e entediantes.
<br /><br />
Pessoas com baixa realização podem ser criticadas por sua falta de confiabilidade,
ambição e incapacidade de seguir regras, mas experimentarão muitos prazeres
momentâneos e nunca serão chamadas de rígidas.`,
  results: [
    {
      score: 'low', // não traduzir esta linha
      text: `Sua pontuação em Realização é baixa, indicando que você gosta de viver
o momento e fazer o que lhe agrada agora. Seu trabalho tende a ser
descuidado e desorganizado.`
    },
    {
      score: 'neutral', // não traduzir esta linha
      text: `Sua pontuação em Realização é média. Isso significa que você é
razoavelmente confiável, organizado e autocontrolado.`
    },
    {
      score: 'high', // não traduzir esta linha
      text: `Sua pontuação em Realização é alta. Isso significa que você estabelece
metas claras e as persegue com determinação. As pessoas o consideram
confiável e trabalhador.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Autoeficácia',
      text: `Autoeficácia descreve a crença na própria capacidade
de realizar tarefas. Pessoas com pontuação alta acreditam que têm a inteligência
(senso comum), determinação e autocontrole necessários para alcançar o sucesso.
Pessoas com pontuação baixa não se sentem eficazes e podem ter a sensação de que
não têm controle sobre suas vidas.`
    },
    {
      facet: 2,
      title: 'Organização',
      text: `Pessoas com pontuação alta em organização são
bem-organizadas. Elas gostam de viver de acordo com rotinas e horários. Elas
fazem listas e planejam suas atividades. Pessoas com pontuação baixa tendem a ser
desorganizadas e dispersas.`
    },
    {
      facet: 3,
      title: 'Senso de Dever',
      text: `Esta escala reflete a força do senso de
dever e obrigação de uma pessoa. Aqueles que pontuam alto nesta escala têm um forte
senso de obrigação moral. Pessoas com pontuação baixa acham que contratos, regras e
regulamentos são muito restritivos. Elas podem ser vistas como pouco confiáveis ou
até irresponsáveis.`
    },
    {
      facet: 4,
      title: 'Busca por Realização',
      text: `Indivíduos que pontuam alto nesta
escala se esforçam muito para alcançar a excelência. Seu desejo de serem reconhecidos
como bem-sucedidos os mantém focados em seus objetivos ambiciosos. Eles costumam ter
um forte senso de direção na vida, mas pontuações extremamente altas podem
indicar obsessão pelo trabalho. Pessoas com pontuação baixa estão satisfeitas
com o mínimo esforço e podem ser vistas pelos outros
como preguiçosas.`
    },
    {
      facet: 5,
      title: 'Autodisciplina',
      text: `Autodisciplina - o que muitas pessoas chamam de
força de vontade - refere-se à capacidade de persistir em tarefas difíceis ou desagradáveis
até sua conclusão. Pessoas com alta autodisciplina
conseguem superar a relutância em começar tarefas e manter o foco apesar
das distrações. Aqueles com baixa autodisciplina procrastinam e têm pouca
capacidade de seguir adiante, frequentemente falhando em concluir tarefas -
mesmo aquelas que desejam muito terminar.`
    },
    {
      facet: 6,
      title: 'Deliberação',
      text: `Deliberação descreve a disposição de
pensar nas possibilidades antes de agir. Pessoas com pontuação alta em Deliberação
demoram para tomar decisões. Pessoas com pontuação baixa costumam dizer ou fazer
a primeira coisa que vem à mente, sem considerar alternativas e as
possíveis consequências dessas alternativas.`
    }
  ]
}

export default conscientiousness
