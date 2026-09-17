import { type TemplateDomain } from '../../types'

const openness: TemplateDomain = {
  domain: 'O',
  title: 'Abertura à Experiência',
  shortDescription: 'A Abertura à Experiência descreve uma dimensão do estilo cognitivo que distingue pessoas imaginativas e criativas de pessoas práticas e convencionais.',
  description: `Pessoas abertas são intelectualmente curiosas,
apreciam a arte e são sensíveis à beleza. Tendem a ser,
comparadas às pessoas fechadas, mais conscientes de seus sentimentos. Tendem a
pensar e agir de maneira individualista e não conformista.
Intelectuais normalmente pontuam alto em Abertura à Experiência;
consequentemente, esse fator também já foi chamado de Cultura ou
Intelecto. <br /><br />No entanto, o Intelecto provavelmente é melhor considerado como um aspecto da abertura
à experiência. As pontuações em Abertura à Experiência têm apenas uma relação moderada
com os anos de escolaridade e com os resultados em testes de inteligência padrão.
<br /><br />
Outra característica do estilo cognitivo aberto é a facilidade para pensar
em símbolos e abstrações distantes da experiência concreta. Dependendo das
habilidades intelectuais específicas do indivíduo, essa cognição simbólica pode
assumir a forma de pensamento matemático, lógico ou geométrico, uso artístico e
metafórico da linguagem, composição ou interpretação musical, ou uma das
muitas artes visuais ou performáticas.
<br /><br />
Pessoas com pontuações baixas em Abertura à Experiência tendem a ter interesses
estreitos e comuns. Elas preferem o simples, direto e óbvio ao
complexo, ambíguo e sutil. Podem ver as artes e as ciências com
desconfiança, considerando essas áreas como abstratas ou sem utilidade prática.
Pessoas fechadas preferem a familiaridade à novidade; são conservadoras e
resistentes à mudança.`,
  results: [
    {
      score: 'low', // não traduzir esta linha
      text: `Sua pontuação em Abertura à Experiência é baixa, indicando que você gosta de pensar em
termos simples e diretos. Outros o descrevem como uma pessoa prática,
pés no chão e conservadora.`
    },
    {
      score: 'neutral', // não traduzir esta linha
      text: `Sua pontuação em Abertura à Experiência é média, indicando que você aprecia
a tradição, mas está disposto a experimentar coisas novas. Seu pensamento não é
simples nem complexo. Para os outros, você parece ser uma pessoa bem-educada,
mas não necessariamente intelectual.`
    },
    {
      score: 'high', // não traduzir esta linha
      text: `Sua pontuação em Abertura à Experiência é alta, indicando que você gosta de novidade,
variedade e mudança. Você é curioso, imaginativo e criativo.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Imaginação',
      text: `Para indivíduos imaginativos, o mundo real é
frequentemente muito simples e comum. Pessoas com pontuação alta nessa escala usam a fantasia como
uma forma de criar um mundo mais rico e interessante. Pessoas com pontuação baixa
são mais orientadas para os fatos do que para a fantasia.`
    },
    {
      facet: 2,
      title: 'Sensibilidade Estética',
      text: `Pessoas com pontuação alta nesta escala amam a beleza, tanto na
arte quanto na natureza. Elas se envolvem e se absorvem facilmente em eventos artísticos
e naturais. Elas não são necessariamente treinadas ou talentosas artisticamente,
embora muitas sejam. As características definidoras desta escala são
o interesse e a apreciação pela beleza natural e artificial.
Pessoas com pontuação baixa carecem de sensibilidade estética e interesse pelas artes.`
    },
    {
      facet: 3,
      title: 'Emotividade',
      text: `Pessoas com alta pontuação em Emotividade têm bom acesso
e consciência de seus próprios sentimentos. Pessoas com pontuação baixa são menos conscientes
de seus sentimentos e tendem a não expressar suas emoções abertamente.`
    },
    {
      facet: 4,
      title: 'Busca por Novidades',
      text: `Pessoas com alta pontuação em Busca por Novidades estão ansiosas para
experimentar novas atividades, viajar para lugares estrangeiros e viver novas experiências.
Elas acham a familiaridade e a rotina entediantes e mudarão até o caminho para casa
só porque é diferente. Pessoas com pontuação baixa tendem a se sentir
desconfortáveis com mudanças e preferem rotinas familiares.`
    },
    {
      facet: 5,
      title: 'Interesse por Ideias',
      text: `O Interesse por Ideias e a Sensibilidade Estética são os dois aspectos
mais importantes e centrais da Abertura à Experiência. Pessoas com alta pontuação
em Interesse por Ideias adoram brincar com ideias. São abertas a novas e incomuns
perspectivas e gostam de debater questões intelectuais. Gostam de enigmas, quebra-cabeças
e desafios mentais. Pessoas com pontuação baixa em Interesse por Ideias preferem lidar com
pessoas ou objetos em vez de ideias. Elas consideram os exercícios intelectuais
uma perda de tempo. O Interesse por Ideias não deve ser confundido com inteligência.
O Interesse por Ideias é um estilo intelectual, não uma capacidade intelectual, embora
pessoas com pontuação alta em Interesse por Ideias obtenham pontuações ligeiramente mais altas
do que as de pontuação baixa em testes de inteligência padronizados.`
    },
    {
      facet: 6,
      title: 'Liberalismo',
      text: `O liberalismo psicológico refere-se à prontidão para
desafiar a autoridade, as convenções e os valores tradicionais. Em sua forma
mais extrema, o liberalismo psicológico pode até representar hostilidade
aberta às regras, simpatia pelos infratores da lei e amor pela ambiguidade,
caos e desordem. Os conservadores psicológicos preferem a segurança e
a estabilidade proporcionadas pela conformidade com a tradição. O liberalismo
e o conservadorismo psicológicos não são idênticos à afiliação política, mas certamente
inclinam os indivíduos para certos partidos políticos.`
    }
  ]
}

export default openness
