module.exports = {
  domain: 'N', // do not change this line
  title: 'Nörotisizm (Neuroticism)',
  shortDescription: 'Nörotisizm, olumsuz duygular yaşama eğilimini ifade eder.',
  description: `Freud, başlangıçta nevroz terimini zihinsel sıkıntı, duygusal acı ve
hayatın normal talepleriyle etkili bir şekilde başa çıkamama durumu olarak tanımlamıştır. Herkesin bazı nevroz belirtileri gösterdiğini, ancak acı çekme derecemiz ve belirli sıkıntı semptomlarımız açısından farklılık gösterdiğimizi öne sürmüştür. Bugün nörotisizm, olumsuz duygular yaşama eğilimini ifade eder. <br /><br />Nörotisizmde yüksek puan alanlar,
özellikle kaygı, öfke veya depresyon gibi belirli bir olumsuz duygu yaşama eğilimindedir, ancak bu duyguların birkaçını yaşama olasılıkları yüksektir. <br /><br />Nörotisizmde yüksek puan alan kişiler duygusal olarak reaktiftirler. Çoğu insanı etkilemeyecek olaylara duygusal olarak tepki verirler ve tepkileri normalden daha yoğundur. Sıradan durumları tehdit edici olarak yorumlama ve küçük hayal kırıklıklarını umutsuzca zor olarak görme olasılıkları daha yüksektir. <br /><br />Olumsuz duygusal
tepkileri, alışılmadık derecede uzun süre devam etme eğilimindedir, bu da genellikle kötü bir ruh halinde oldukları anlamına gelir. Bu duygusal düzenleme sorunları, nörotik bir kişinin net düşünme, karar verme ve stresle etkili bir şekilde başa çıkma yeteneğini azaltabilir.`,
  results: [
    {
      score: 'low', // do not translate this line
      text: 'Nörotisizm puanınız düşük, bu da son derece sakin, soğukkanlı ve zorluklarla başa çıkabilen biri olduğunuzu gösteriyor. Çoğu insanın stresli olarak tanımlayacağı durumlara bile yoğun duygularla tepki vermezsiniz.'
    },
    {
      score: 'neutral', // do not translate this line
      text: 'Nörotisizm puanınız ortalama, bu da duygusal tepkilerinizin genel nüfusun tipik düzeyinde olduğunu gösterir. Stresli ve hayal kırıklığı yaratan durumlar sizi biraz rahatsız eder, ancak genellikle bu duyguların üstesinden gelebilir ve bu durumlarla başa çıkabilirsiniz.'
    },
    {
      score: 'high', // do not translate this line
      text: 'Nörotisizm puanınız yüksek, bu da yaşamın normal talepleriyle bile kolayca üzüldüğünüzü gösterir. İnsanlar sizi hassas ve duygusal biri olarak değerlendirir.'
    }
  ],
  facets: [
    {
      facet: 1,
      title: 'Kaygı',
      text: 'Kaygılı bireylerin beyinlerinin "savaş ya da kaç" sistemi çok kolay ve çok sık devreye girer. Bu nedenle, kaygısı yüksek olan insanlar genellikle tehlikeli bir şeyin olacağı hissine kapılırlar. Belirli durumlardan korkabilirler veya genel olarak korkulu olabilirler. Gergin, huzursuz ve sinirli hissederler. Kaygı düzeyi düşük olan kişiler genellikle sakin ve korkusuzdur.'
    },
    {
      facet: 2,
      title: 'Öfke',
      text: 'Öfke düzeyi yüksek olan kişiler, işler istedikleri gibi gitmediğinde öfkelenirler. Adil muamele görme konusunda hassastırlar ve haksızlığa uğradıklarında kızgın ve kırgın hissederler. Bu ölçek, öfkelenme eğilimini ölçer; kişinin kızgınlık ve düşmanlık gösterip göstermemesi, bireyin Uyumluluk düzeyine bağlıdır. Düşük puan alanlar, sık veya kolayca öfkelenmezler.'
    },
    {
      facet: 3,
      title: 'Depresyon',
      text: 'Bu ölçek, üzgün, mutsuz ve cesareti kırılmış hissetme eğilimini ölçer. Yüksek puan alanlar enerjiden yoksundur ve faaliyetlere başlamakta zorlanırlar. Düşük puan alanlar ise bu depresif duygulardan genellikle uzaktırlar.'
    },
    {
      facet: 4,
      title: 'Öz Bilinç',
      text: 'Öz bilinçli bireyler, başkalarının onlar hakkında ne düşündüklerine karşı duyarlıdırlar. Reddedilme ve alay edilme endişeleri, onların başkaları yanında utangaç ve rahatsız hissetmelerine neden olur. Kolayca utanırlar ve sık sık mahcup olurlar. Başkalarının onları eleştireceği veya alay edeceği korkuları abartılı ve gerçek dışıdır, ancak bu korkular, onların sakarlıkları ve rahatsızlıkları nedeniyle kendini gerçekleştiren bir kehanet haline gelebilir. Düşük puan alanlar ise, herkesin onları izlediği ve yargıladığı gibi yanlış bir izlenimden muzdarip değillerdir. Sosyal ortamlarda sinirlenmezler.'
    },
    {
      facet: 5,
      title: 'Ölçüsüzlük',
      text: 'Ölçüsüz bireyler, direnmekte zorlandıkları güçlü istekler ve dürtüler hissederler. Kısa vadeli zevklere ve ödüllere yönelme eğilimindedirler, uzun vadeli sonuçlardan ziyade. Düşük puan alanlar ise güçlü, karşı konulamaz istekler hissetmezler ve dolayısıyla aşırıya kaçma eğiliminde değillerdir.'
    },
    {
      facet: 6,
      title: 'Güçsüzlük',
      text: 'Güçsüzlükte yüksek puan alanlar, baskı veya stres altında panik, kafa karışıklığı ve çaresizlik hissederler. Düşük puan alanlar ise stres altında daha dengeli, kendine güvenen ve net düşünen kişiler olarak hissederler.'
    }
  ]
}
