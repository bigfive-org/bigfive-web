module.exports = {
  domain: 'N', // do not change this line
  title: 'Neuroticizmus',
  shortDescription: 'A neuroticizmus a negatív érzések megélésére való hajlamot jelenti.',
  description: `Freud eredetileg a neurózis kifejezést használta egy olyan állapot leírására,
amelyet mentális zavarok, érzelmi szenvedés és a normális életkörülményekkel való hatékony megküzdés képtelensége jellemez. Azt javasolta, hogy mindenki mutat valamilyen neurózis jeleit, de különbözünk a szenvedés mértékében és a zavarok konkrét tüneteiben.
Manapság a neuroticizmus a negatív érzések megélésére való hajlamot jelenti. <br /><br />Azok, akik magas pontszámot érnek el a neuroticizmusban, elsősorban egy specifikus negatív érzést, például szorongást, haragot vagy depressziót élhetnek át, de valószínűleg több ilyen érzelmet is megélnek. <br /><br />A magas neuroticizmusú emberek érzelmileg reaktívak. Érzelmileg reagálnak olyan eseményekre, amelyek a legtöbb embert nem érintenék, és reakcióik általában intenzívebbek a normálnál. Valószínűbb, hogy az átlagos helyzeteket fenyegetőnek értékelik, és a kisebb frusztrációkat reménytelenül nehéznek látják. <br /><br />Negatív érzelmi reakcióik szokatlanul hosszú ideig tartanak, ami azt jelenti, hogy gyakran rossz hangulatban vannak. Ezek az érzelmi szabályozási problémák csökkenthetik a neurotikusok tisztán gondolkodási, döntéshozatali és stresszel való hatékony megküzdési képességét.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: 'A neuroticizmus pontszámod alacsony, ami azt jelzi, hogy rendkívül nyugodt, higgadt és rendíthetetlen vagy. Nem reagálsz intenzív érzelmekkel, még azokra a helyzetekre sem, amelyeket a legtöbb ember stresszesnek tartana.'
    },
    {
      score: 'neutral', // do not translate this line
      text: `A neuroticizmus pontszámod átlagos, ami azt jelzi, hogy érzelmi reaktivitásod a lakosság általános szintjének felel meg.
A stresszes és frusztráló helyzetek valamelyest nyugtalanítanak, de általában képes vagy túllépni ezeken az érzéseken és megbirkózni ezekkel a helyzetekkel.`
    },
    {
      score: 'high', // do not translate this line
      text: 'A neuroticizmus pontszámod magas, ami azt jelzi, hogy könnyen feldúlttá válsz, még az általános életkörülmények normális követelményei miatt is. Az emberek érzékenynek és érzelmesnek tartanak.'
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Szorongás',
      text: `A szorongó egyének agyának "harcolj vagy menekülj" rendszere túl könnyen és túl gyakran kapcsol be. Ezért a magas szorongású emberek gyakran úgy érzik, hogy valami veszélyes fog történni.
Félhetnek specifikus helyzetektől vagy általánosságban félelmetesek lehetnek.
Feszültnek, idegesnek és nyugtalannak érzik magukat. Az alacsony szorongású emberek általában nyugodtak és félelemmentesek.`
    },
    {
      facet: 2,
      title: 'Harag',
      text: `A magas haragpontszámot elérő személyek dühöt éreznek, amikor a dolgok nem mennek a tervük szerint. Érzékenyek az igazságos bánásmódra, és neheztelést és keserűséget éreznek, amikor úgy érzik, hogy becsapják őket.
Ez a skála a düh érzésére való hajlamot méri; hogy a személy kifejezi-e bosszúságát és ellenségességét, az az egyén barátságosságának szintjétől függ. Az alacsony pontszámot elérők nem gyakran vagy könnyen dühösek.`
    },
    {
      facet: 3,
      title: 'Depresszió',
      text: 'Ez a skála a szomorúság, elkeseredettség és csüggedés érzésére való hajlamot méri. A magas pontszámot elérőknek hiányzik az energia, és nehezen kezdik el a tevékenységeket. Az alacsony pontszámot elérők mentesek ezektől a depresszív érzésektől.'
    },
    {
      facet: 4,
      title: 'Öntudatosság',
      text: 'Az öntudatos egyének érzékenyek arra, hogy mások mit gondolnak róluk. Az elutasítástól és gúnytól való félelmük miatt félénknek és kényelmetlenül érzik magukat mások körül. Könnyen zavarba jönnek, és gyakran érzik magukat szégyenkezve. Félelmük, hogy mások kritizálni fogják őket vagy kinevetik őket, túlzott és irreális, de ügyetlenségük és kényelmetlenségük ezek a félelmek önbeteljesítő jóslattá válhatnak. Az alacsony pontszámot elérők ezzel szemben nem szenvednek a téves benyomástól, hogy mindenki figyeli és ítéli őket. Nem érzik magukat idegesnek társas helyzetekben.'
    },
    {
      facet: 5,
      title: 'Mértéktelenség',
      text: 'A mértéktelen egyének erős vágyakat és késztetéseket éreznek, amelyeket nehezen tudnak ellenállni. Hajlamosak a rövid távú örömökre és jutalmakra összpontosítani, nem pedig a hosszú távú következményekre. Az alacsony pontszámot elérők nem tapasztalnak erős, ellenállhatatlan vágyakat, és következésképpen nem érzik kísértésnek, hogy túlfogyasszanak.'
    },
    {
      facet: 6,
      title: 'Sebezhetőség',
      text: 'A magas pontszámot elérők pánikot, zavartságot és tehetetlenséget éreznek, amikor nyomás vagy stressz alatt vannak. Az alacsony pontszámot elérők nyugodtabbnak, magabiztosabbnak és tisztán gondolkodónak érzik magukat stresszhelyzetben.'
    }
  ]
}
