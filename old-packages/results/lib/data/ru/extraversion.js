module.exports = {
  domain: 'E',
  title: 'Экстраверсия',
  shortDescription: 'Экстраверсия характеризует высокую вовлеченность внешним миром.',
  description: `Экстраверты с удовольствием проводят время с другими, полны энергии и
часто испытывают позитивные эмоции. Они склонны к энтузиазму, ориентированы на действие, и
с большей вероятностью скажут "Да" возможностям, которые принесут им
удовольствие. Они любят общаться с большими группами людей, пробиваться вперед и привлекать внимание к себе. 
<br /><br />
Интровертам не хватает оживленности, энергии и уровня активности экстравертов. Они склонны
быть тихими, сдержанными, осторожными и оторванными от социальной активности. Однако нехватка социальной вовлеченности
не говорит о застенчивости или депрессии; интроверту просто нужно меньше стимуляции, чем
экстраверту, и проще проводить время в одиночестве. <br /><br />Независимость и сдержанность интроверта иногда
воспринимается как недружелюбное или высокомерное поведение. В реальности, интроверт,
имеющий высокие баллы по шкале доброжелательности, не будет активно общаться с другими, но окажется
приятным в общении человеком.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: `Ваш уровень Экстраверсии низкий, что говорит о том, что Вы – интровертный,
сдержанный и тихий человек. Вы наслаждаетесь одиночеством и предпочитаете деятельность наедине
с собой. Вам проще общаться с несколькими близкими друзьями, чем с большим окружением.`
    },
    {
      score: 'neutral', // do not translate this line
      text: `Ваш уровень Экстраверсии низкий, что говорит о том, что Вы – амбиверт.
Вы наслаждаетесь времяпрепровождением с другими, но также любите оставаться наедине с собой.`
    },
    {
      score: 'high', // do not translate this line
      text: `Ваш уровень Экстраверсии высокий, что говорит о том, что Вы –
социальный, общительный, энергичный и оживленный человек. Вы предпочитаете находиться среди людей
большую часть времени.`
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Дружелюбие',
      text: `Дружелюбные люди искренне любят других людей и открыто демонстрируют позитивные
      эмоции к другим. Они быстро заводят друзей и им легко формировать близкие, интимные отношения.
      Люди с низким результатом не обязательно недружелюбны, но они не
      сильно тянутся к друзим и воспринимаются как отдалённые и сдержанные.`
    },
    {
      facet: 2,
      title: 'Общительность',
      text: `Общительные люди находят пребывание в компании других
стимулирующим и вознаграждающим занятием, а восхищение толпы вызывает у них взаимные чувства.
Люди с низким результатом быстро выгорают при общении, а потому стараются избегать
больших скоплений людей. Хотя они могут находить приятным нахождение с людьми, их потребность
в приватности и времени для себя сильнее, чем у людей с высокими показателями.`
    },
    {
      facet: 3,
      title: 'Напористость',
      text: `Люди с высокой напористостью любят говорить о вещах в открытую, брать на себя
ответственность и управлять активностью других. Они склонны быть лидерами в группах.
Люди с низкими результатами не склонны много говорить, позволяют другим брать контроль 
и чаще следуют чужим интересам.`
    },
    {
      facet: 4,
      title: 'Уровень активности',
      text: `Активные люди живут в быстром темпе и ведут занятую жизнь.
Они быстро, энергично и активно передвигаются, а также вовлечены во многие виды занятий.
Люди с низкими показателями по этой шкале живут в более медленном, расслабленном темпе. `
    },
    {
      facet: 5,
      title: 'Стремление к восхищению',
      text: `Люди с высоким результатом по этой шкале легко поддаются скуке,
не получая высокого уровня стимуляции. Они любят яркий свет, шум и суетливую атмосферу.
Они также более склонны брать риски и жаждут острых ощущений. Люди с низким результатом
истощены шумом и волнением, и не особо любят яркие ощущения.`
    },
    {
      facet: 6,
      title: 'Бодрость',
      text: `Эта шкала измеряет преобладание позитивных эмоций (в противовес Нейротизму).
Как правило, люди с высоким результатом по этой шкале испытывают широкий спектр
позитивных эмоций, включая счастье, энтузиазм, оптимизм и веселье. Люди с низким
результатом менее склонны к таким энергичным, душевным настроениям.`
    }
  ]
}
