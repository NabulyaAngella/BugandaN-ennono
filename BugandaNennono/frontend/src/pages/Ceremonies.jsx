import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router-dom'

export default function Ceremonies(){
  const { t } = useLanguage()
  const [selectedCeremony, setSelectedCeremony] = useState(null)
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = [
    { id: 'All', name: { en: 'All Ceremonies', lg: 'Emikolo Gyonna' } },
    { id: 'Royal', name: { en: 'Royal Ceremonies', lg: 'Emikolo gy\'Obwakabaka' } },
    { id: 'Life', name: { en: 'Life Events', lg: 'Ebiseera by\'Obulamu' } },
    { id: 'Cultural', name: { en: 'Cultural Festivals', lg: 'Embaga z\'Obuwangwa' } },
    { id: 'Sacred', name: { en: 'Sacred Sites', lg: 'Ebifo Ebitukuvu' } }
  ]

  const ceremonies = [
    // Original ceremonies preserved
    {
      id: '1',
      category: 'Royal',
      title: { en: 'Coronation Ceremony', lg: 'Okukkaaza Kabaka' },
      image: 'https://buganda.or.ug/wp-content/uploads/2024/01/kabaka-coronation.jpg',
      date: { en: 'Varies (Major royal event)', lg: 'Eteekawo (Ekifo ky\'obukulu)' },
      location: { en: 'Naggalabi, Buddo', lg: 'Naggalabi, Buddo' },
      description: {
        en: 'The coronation of a new Kabaka is one of the most significant ceremonies in Buganda. This elaborate ritual takes place at Naggalabi, Buddo, and symbolizes the continuity and restoration of the kingdom. The ceremony involves sacred rituals, traditional performances, and the blessing of the new monarch by religious and cultural leaders.',
        lg: 'Okukakasibwa kwa Kabaka omupya kwekimu mu mikolo eggwa ku Naggalabi, Buddo, nga kireetera obutereevu n\'obutebenkevu mu Buganda. Emikolo gino gyokolwa mu nkola z\'osezewalire, okukubaganya okunywezo, n\'okukebya Kabaka omupya ng\'abakubira ba kika n\'abakakafu.'
      },
      significance: {
        en: 'This ceremony represents the legitimate ascension of royal authority and connects the new ruler spiritually and politically to his predecessors. It reaffirms the cultural identity and sacred nature of the monarchy in Buganda.',
        lg: 'Okukkaaza kino kiragako Kabaka omupya okuteekawo emboozi y\'okubikwa, era okukwata ku kika kyakwe ekya kwekinnyo. Ekiranye okukuuma empisa z\'Buganda n\'obulamu bw\'abalangira.'
      },
      activities: [
        { en: 'Sacred rituals at burial sites', lg: 'Emikolo mu bifo by\'omuterekeza' },
        { en: 'Blessing by elders and priests', lg: 'Okukebya Kabaka ng\'abakulu n\'abakakafu' },
        { en: 'Traditional processions and celebrations', lg: 'Okuwayo n\'emikolo gy\'okukuza' },
        { en: 'Oaths and vows to the kingdom', lg: 'Okukwata ku mboozi z\'okuteekawo obwakabaka' }
      ]
    },
    {
      id: '2',
      category: 'Life',
      title: { en: 'Marriage Customs (Okwanjula)', lg: 'Okwanjula' },
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=400&fit=crop',
      date: { en: 'Throughout the year', lg: 'Buli omwaka' },
      location: { en: 'Family homes and community venues', lg: 'Mu masooli n\'ebifo by\'omukutu' },
      description: {
        en: 'Traditional Ganda marriage customs involve several important stages. The Okwanjula (introduction ceremony) is a key event where the groom\'s family officially visits the bride\'s home with gifts, introductions are made, and negotiations begin. This is followed by other ceremonies including the bride price negotiations and the actual wedding celebration.',
        lg: 'Emikolo z\'okukola omukolo eri bakyala gizingira mu biseera ebingi. Okwanjula (okumaalira) kiri mu mikolo eggwa nnyo, mu kino omuryango gwomugumba gwaaza ku musolo n\'ebintu ebyamuwalawalire, era abasajja b\'omuryango gwakazi banonya ebiragiro eby\'omuwendo.'
      },
      significance: {
        en: 'These ceremonies strengthen family bonds, honor the bride\'s family, and establish the social legitimacy of the union. They are deeply rooted in Buganda\'s cultural values of respect, community, and the importance of family alliances.',
        lg: 'Emikolo gino gigikwata mu bantu, era ekuuma empisa z\'obwavu n\'okukuza okukwata mu maka. Kino nkola z\'okusinga mu Buganda, era zigikwata ku buwalawafu, mu nsi, n\'okukwata mu maka.'
      },
      activities: [
        { en: 'Okwanjula (introduction ceremony)', lg: 'Okwanjula (okumaalira)' },
        { en: 'Bride price negotiations', lg: 'Okukubaganya ku miseere' },
        { en: 'Gift exchanges and presentations', lg: 'Okuwala n\'okutteekawo ekintu' },
        { en: 'Wedding feasts and celebrations', lg: 'Emikolo gy\'okuteekawo emmere n\'okukuza' }
      ]
    },
    {
      id: '3',
      category: 'Life',
      title: { en: 'Funeral Rites (Okuzikka)', lg: 'Okuzikka' },
      image: 'https://images.unsplash.com/photo-1531279550271-23c2a92f2cbc?w=800&h=400&fit=crop',
      date: { en: 'Upon death (varies by status)', lg: 'Okufa okufuddemu' },
      location: { en: 'Family compounds and burial grounds', lg: 'Mu masooli n\'ebifo by\'omuterekeza' },
      description: {
        en: 'Funeral rites in Buganda are elaborate and deeply spiritual affairs. When a person, especially a notable or royal member, passes away, specific rituals and burial procedures are performed to honor the deceased and maintain their spiritual connection with the living. These ceremonies can last for several weeks and involve the entire community.',
        lg: 'Emikolo gy\'abafu mu Buganda nzikirizza nnyo era eriko mu kigazi. Obuyita bwokufa, lwaki lwaki omusajja oba omuwala omukulu, emikolo egy\'okubikka n\'ebifo by\'omuterekeza bikolebwa okukuuma okufa, era okukwata ku nkola z\'abakadde.'
      },
      significance: {
        en: 'These ceremonies ensure a peaceful transition to the afterlife and maintain the bond between the living and the dead. They reflect the Ganda belief in the continuity of life through spiritual connection with ancestors.',
        lg: 'Emikolo gino egiwa abafu okutula n\'okufa mu bulungi, era ekukwata okutwalira awamu okukuuma abafu. Kino nkola z\'okukuuma obulamu mu kigazi n\'okukwata ku nkolo z\'abakadde.'
      },
      activities: [
        { en: 'Preparation and preservation of the body', lg: 'Okuteekawo okufa n\'okukuuma omubiri' },
        { en: 'Mourning periods and vigils', lg: 'Emikolo gy\'okukila n\'okukuumanya' },
        { en: 'Burial ceremonies', lg: 'Okubikka' },
        { en: 'Last funeral rites (Okwabya olumbe)', lg: 'Okwabya olumbe' }
      ]
    },
    {
      id: '4',
      category: 'Life',
      title: { en: 'Naming Ceremonies (Okuwala Abaana)', lg: 'Okuwala Abaana' },
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=400&fit=crop',
      date: { en: 'Weeks after birth', lg: 'Essita ze kulimva' },
      location: { en: 'Family homes and shrines', lg: 'Mu masooli n\'ebifo by\'abakubira' },
      description: {
        en: 'The naming of children in Buganda is a significant ceremony done according to their clan lineage and specific family customs. Names are carefully chosen to reflect family heritage, ancestral connections, and the values the family wishes to instill. The naming ceremony is accompanied by blessings and sometimes ritual celebrations.',
        lg: 'Okutegeeza amannya g\'abaana kukolebwa ng\'ekika kyabwe n\'emirimu egy\'enkola z\'omaka. Amannya gankubaganya n\'obuwangwa bw\'ekika, abakadde ba omuryango, n\'emyo gye muryango giriina okukuza mu baana.'
      },
      significance: {
        en: 'Names in Buganda carry deep meaning and establish a child\'s identity within their clan. This ceremony affirms family ties, honors ancestors, and places the child within the continuum of their lineage.',
        lg: 'Amannya mu Buganda akukwata nnyo ku mirimu n\'okukuza kika ky\'omwana. Emikolo gino egiragako okukuuma ekika, okukuza abakadde, n\'okumala omwana mu nkola z\'abakadde be.'
      },
      activities: [
        { en: 'Name selection based on clan', lg: 'Okokulaganya erinnya ng\'ekika' },
        { en: 'Blessings by family elders', lg: 'Okukebya omwana ng\'abakulu b\'omuryango' },
        { en: 'Ritual purification ceremonies', lg: 'Emikolo gy\'okuteekawo omwana' },
        { en: 'Community celebration and feasting', lg: 'Emikolo gy\'okukuza n\'okuteekawo emmere' }
      ]
    },
    {
      id: '5',
      category: 'Sacred',
      title: { en: 'Kasubi Tombs', lg: 'Amasiro g\'e Kasubi' },
      image: 'https://buganda.or.ug/wp-content/uploads/2024/01/kasubi-tombs.jpg',
      date: { en: 'Ancient site, ongoing ceremonies', lg: 'Ekifo ekyakuuma, emikolo egitera' },
      location: { en: 'Kasubi, Kampala', lg: 'Kasubi, Kampala' },
      description: {
        en: 'The Kasubi Tombs are the most sacred burial site in Buganda, housing the remains of several past Kabakas including Mutesa I, Mwanga II, Daudi Chwa II, and Mutesa II. This UNESCO World Heritage Site features traditional Ganda architecture with natural materials and intricate craftsmanship. The tombs represent the spiritual center of Buganda\'s royal lineage.',
        lg: 'Kasubi nkifo ekisookerwako eky\'obukubira bw\'Abalangira mu Buganda. Ebifo bino bizigira ababaka abaali ba Buganda ng\'e Mutesa I, Mwanga II, Daudi Chwa II, ne Mutesa II. Kino kifo kiri mu bigabo by\'okusinga mu nsi, era kyakozesebwa emikolo gy\'ababaka.'
      },
      significance: {
        en: 'Kasubi Tombs hold immense spiritual and cultural significance for all Baganda people. They serve as a connection to the ancestral past and are a testament to Buganda\'s architectural and cultural heritage. The site was partially destroyed by fire in 2010 and is currently being restored through the Ettoffaali initiative.',
        lg: 'Kasubi amakulu nnyo mu kigazi ky\'abantu ba Buganda. Ebifo bino bikwata mu kigazi n\'okukuuma obuwangwa bw\'Buganda. Emikolo gy\'okukubira n\'okukagwa kolebwa mu kifo kino mu bulungi n\'mu kusinga.'
      },
      activities: [
        { en: 'Pilgrimage and visitation', lg: 'Okukuja n\'okukubaganya' },
        { en: 'Ceremonial prayers and blessings', lg: 'Okusaba n\'okukebya' },
        { en: 'Cultural preservation and education', lg: 'Okukuuma obuwangwa n\'okuyigiriza' },
        { en: 'Royal anniversary commemorations', lg: 'Okukiikira emikolo gy\'ababaka' }
      ]
    },
    // New ceremonies added
    {
      id: '6',
      category: 'Royal',
      title: { en: 'Kabaka\'s Birthday Run', lg: 'Okuzibuka kwa Kabaka' },
      image: 'https://buganda.or.ug/wp-content/uploads/2024/01/kabaka-run.jpg',
      date: { en: 'April (Annually)', lg: 'Apuli (Buli mwaka)' },
      location: { en: 'Kampala and surrounding areas', lg: 'Kampala n\'ebitundu ebyetoolodde' },
      description: {
        en: 'The Kabaka Birthday Run is an annual event held to celebrate the birthday of His Majesty the Kabaka of Buganda, Ronald Muwenda Mutebi II. Started in 2014, this marathon brings together millions of Baganda and supporters from across Uganda and the diaspora. The event promotes health, unity, and cultural pride while raising funds for various charitable causes.',
        lg: 'Okuzibuka kwa Kabaka y\'ekikolo ekikolebwa buli mwaka okukuza amazaalibwa ga Ssabasajja Kabaka wa Buganda, Ronald Muwenda Mutebi II. Eno marathon ekuŋŋaanya Baganda n\'abayambi okuva mu Uganda yonna n\'abali mu mawanga. Ekikolo kino kisinzira ku bulamu, obumu, n\'okwenyumirizaamu ku buwangwa.'
      },
      significance: {
        en: 'The run has become one of the largest annual gatherings in Uganda, demonstrating the enduring loyalty of the Baganda to their king and kingdom. It promotes health awareness and raises funds for causes such as education, healthcare, and cultural preservation.',
        lg: 'Okuzibuka kuno kufuuse ekimu ku nkuŋŋaana ennene ennyo mu Uganda, nga kiraga obwesigwa bwa Baganda eri Kabaka waabwe n\'Obwakabaka bwaabwe. Kisinzira ku bulamu era kisasuliza ensimbi ez\'okuyamba ebyenjigiriza, ebyobulamu, n\'okukuuma obuwangwa.'
      },
      activities: [
        { en: 'Marathon and fun run', lg: 'Okuzibuka n\'okudda' },
        { en: 'Cultural performances', lg: 'Emizannyo gy\'obuwangwa' },
        { en: 'Royal address by the Kabaka', lg: 'Okwogera kwa Kabaka' },
        { en: 'Health awareness campaigns', lg: 'Okutegereza ku byobulamu' }
      ]
    },
    {
      id: '7',
      category: 'Cultural',
      title: { en: 'Buganda Kingdom Day (Kabaka\'s Coronation Anniversary)', lg: 'Olunaku lwa Buganda' },
      image: 'https://buganda.or.ug/wp-content/uploads/2024/01/buganda-day.jpg',
      date: { en: 'July 31 (Annually)', lg: '31 Julaayi (Buli mwaka)' },
      location: { en: 'Bulange, Mengo', lg: 'Bulange, Mengo' },
      description: {
        en: 'Buganda Kingdom Day commemorates the coronation of Kabaka Ronald Muwenda Mutebi II on July 31, 1993, which marked the restoration of the Buganda Kingdom after 27 years of abolition. This is a public holiday in Buganda and features grand celebrations at Bulange, the kingdom\'s administrative headquarters.',
        lg: 'Olunaku lwa Buganda lukijukira okutikkibwa kwa Kabaka Ronald Muwenda Mutebi II nga 31 Julaayi 1993, kyeyali ekiraga okuzibwa kw\'Obwakabaka bwa Buganda oluvannyuma lw\'emyaka 27 nga busaziddwamu. Luno lwe lunaku olw\'ekisumuluzo mu Buganda era lulina emikolo emigazi e Bulange.'
      },
      significance: {
        en: 'This day celebrates the restoration of Buganda\'s cultural identity and autonomy. It is a moment of reflection on the kingdom\'s resilience and continued relevance in modern Uganda. The celebration includes addresses by the Kabaka, cultural performances, and recognition of distinguished citizens.',
        lg: 'Olunaku luno lukuza okuzibwa kw\'obuwangwa n\'obwetoloze bwa Buganda. Kwe kiseera ky\'okufumiitiriza ku bugumikiriza bw\'obwakabaka n\'okugumira kwakwo mu Uganda ey\'olweelero. Okukuza kuno kulimu okwogera kwa Kabaka, emizannyo gy\'obuwangwa, n\'okutendereza abantu abakola bulungi.'
      },
      activities: [
        { en: 'State address by the Kabaka', lg: 'Okwogera kwa Kabaka' },
        { en: 'Traditional dance performances', lg: 'Okuzina emizannyo gy\'obuwangwa' },
        { en: 'Awards and honors', lg: 'Ebisakaalu n\'okutendereza' },
        { en: 'Processions and parades', lg: 'Okutambula n\'ebisaanyizo' }
      ]
    },
    {
      id: '8',
      category: 'Life',
      title: { en: 'Twins Ceremony (Okwalula Abalongo)', lg: 'Okwalula Abalongo' },
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=400&fit=crop',
      date: { en: 'After birth of twins', lg: 'Oluvannyuma lw\'okuzaala abalongo' },
      location: { en: 'Family home', lg: 'Eka' },
      description: {
        en: 'The birth of twins in Buganda is considered a special blessing and is marked by unique ceremonies and celebrations. The Okwalula Abalongo ceremony involves special songs, dances, and rituals that honor the parents and the twins. Twins are given special names: the firstborn is called Wasswa (male) or Babirye (female), and the second is Kato (male) or Nakato (female).',
        lg: 'Okuzaala abalongo mu Buganda kitwlibwa ng\'omukisa omutukuvu era kulagibwa n\'emikolo n\'okukuza okw\'enjawulo. Emikolo gya Okwalula Abalongo gyeemyebwa ennyimba, okuzina, n\'emikolo egitendereza abazadde n\'abalongo. Abalongo bawa amannya ag\'enjawulo: eyasooka ayitibwa Wasswa (omulenzi) oba Babirye (omuwala), owa bubiri ye Kato (omulenzi) oba Nakato (omuwala).'
      },
      significance: {
        en: 'Twins are believed to possess special spiritual powers and their birth is seen as a divine gift. The ceremony helps integrate the twins into the community and honors the spiritual significance of their birth. The parents, especially the father, receive special titles (Ssaalongo and Nnalongo).',
        lg: 'Abalongo bakiririzibwa okulina amaanyi ag\'omwoyo ag\'enjawulo era okuzaalibwa kwabwe kulabibwa ng\'ekirabo kya Katonda. Emikolo giyamba okuyingiza abalongo mu kitundu era kutendereza omugaso gw\'omwoyo ogw\'okuzaalibwa kwabwe. Abazadde, ennyo ennyo kitaabwe, bafuna ebitiibwa eby\'enjawulo (Ssaalongo ne Nnalongo).'
      },
      activities: [
        { en: 'Special songs for twins (Ennyimba z\'abalongo)', lg: 'Ennyimba z\'abalongo' },
        { en: 'Traditional dances', lg: 'Okuzina empisa' },
        { en: 'Naming ceremony', lg: 'Okuwala abalongo' },
        { en: 'Community feasting', lg: 'Okuteekawo emmere y\'ekitundu' }
      ]
    },
    {
      id: '9',
      category: 'Life',
      title: { en: 'Heir Ceremony (Okwalula Omusika)', lg: 'Okwalula Omusika' },
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&h=400&fit=crop',
      date: { en: 'After funeral rites', lg: 'Oluvannyuma lw\'okuzikka' },
      location: { en: 'Family compound', lg: 'Eka y\'omuka' },
      description: {
        en: 'Okwalula Omusika is the ceremony of installing an heir after the death of a family head. This important ritual ensures the continuity of family leadership and the proper transfer of responsibilities, property, and cultural obligations. The heir is formally presented to the clan and community.',
        lg: 'Okwalula Omusika y\'emikolo gy\'okuteekawo omusika oluvannyuma lw\'okufa kw\'omukulu w\'omuka. Emikolo gino egy\'omugaso gikakasa obukulembeze bw\'omuka okugenda mu maaso n\'okusikirizibwa kw\'obuvunaanyizibwa, ebintu, n\'obuvunaanyizibwa bw\'obuwangwa. Omusika ategeezebwa eri kika n\'ekitundu.'
      },
      significance: {
        en: 'This ceremony maintains social order and ensures that family traditions, property, and responsibilities are passed on properly. It also helps resolve potential disputes about succession and clarifies the new family structure.',
        lg: 'Emikolo gino gikuuma enkola y\'obutonde era gikakasa nti empisa z\'omuka, ebintu, n\'obuvunaanyizibwa bisikirizibwa bulungi. Era giyamba okugonjoola ennyombo eziyinza okuba ku kusikirizibwa era gitegeeza enkola empya y\'omuka.'
      },
      activities: [
        { en: 'Presentation of the heir to clan', lg: 'Okuteekawo omusika eri kika' },
        { en: 'Transfer of responsibilities', lg: 'Okusikirizibwa kw\'obuvunaanyizibwa' },
        { en: 'Blessings from elders', lg: 'Okukebya okuva eri abakadde' },
        { en: 'Community recognition', lg: 'Okutendereza kw\'ekitundu' }
      ]
    },
    {
      id: '10',
      category: 'Sacred',
      title: { en: 'Lubiri Palace (Twekobe)', lg: 'Lubiri (Twekobe)' },
      image: 'https://buganda.or.ug/wp-content/uploads/2024/01/lubiri-palace.jpg',
      date: { en: 'Historical site', lg: 'Ekifo ky\'ebyafaayo' },
      location: { en: 'Mengo, Kampala', lg: 'Mengo, Kampala' },
      description: {
        en: 'The Lubiri Palace, also known as Twekobe, is the official residence of the Kabaka of Buganda. Built in 1922, this palace complex includes the royal residence, ceremonial grounds, and the underground prison where Kabaka Mutesa II was confined during the 1966 crisis. The palace is a symbol of Buganda\'s royal heritage and resilience.',
        lg: 'Lubiri, era ayitibwa Twekobe, y\'ekisulo ekya bulijjo ekya Kabaka wa Buganda. Yazimbibwa mu 1922, ekizimbe kino kyetoolodde ekisulo ky\'obwakabaka, ekifo ky\'emikolo, n\'ekkomera wansi w\'ettaka mwe yaggalibwa Kabaka Mutesa II mu biseera by\'obuzibu bya 1966. Lubiri kikola akabonero ak\'obusika bw\'obwakabaka bwa Buganda n\'obugumikiriza.'
      },
      significance: {
        en: 'Lubiri stands as a testament to Buganda\'s enduring monarchy and its turbulent history with the central government. It hosts major royal ceremonies and state functions. The underground prison tours offer visitors a glimpse into the kingdom\'s difficult past.',
        lg: 'Lubiri yeyimirira ng\'obujulirwa bw\'obwakabaka bwa Buganda obunywevu n\'ebyafaayo byabwo ebisigazsa ne gavumenti ekulu. Enyumba ey\'ekoma y\'abantu abakulu n\'emikolo gy\'eggwanga. Okutambula mu kkomera wansi w\'ettaka kuwa abakylayi okutunuulira ebyafaayo ebizibu by\'obwakabaka.'
      },
      activities: [
        { en: 'Royal ceremonies and state functions', lg: 'Emikolo gy\'obwakabaka n\'eby\'eggwanga' },
        { en: 'Underground prison tours', lg: 'Okutambula mu kkomera' },
        { en: 'Historical exhibitions', lg: 'Okulabisilako ebyafaayo' },
        { en: 'Cultural events', lg: 'Emikolo gy\'obuwangwa' }
      ]
    },
    {
      id: '11',
      category: 'Sacred',
      title: { en: 'Wamala Tombs', lg: 'Amasiro g\'e Wamala' },
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=400&fit=crop',
      date: { en: 'Historical site', lg: 'Ekifo ky\'ebyafaayo' },
      location: { en: 'Nansana, Wakiso District', lg: 'Nansana, Wakiso' },
      description: {
        en: 'The Wamala Tombs are the burial site of Kabaka Suuna II, the 29th Kabaka of Buganda who ruled from 1836 to 1856. This sacred site features traditional Ganda architecture and offers insight into pre-colonial Buganda. The tombs are maintained by spiritual custodians who perform regular rituals.',
        lg: 'Amasiro g\'e Wamala ge kifo ky\'okuzikkirwa Kabaka Suuna II, Kabaka ow\'29 wa Buganda eyafuga okuva 1836 okutuuka 1856. Ekifo kino ekitukuvu kirabika eby\'okuzimba eby\'empisa za Baganda era kiwa okumanya ku Buganda ey\'emabega. Amasiro gakuumibwa bakuumi ab\'omwoyo abakola emikolo ey\'obutongole.'
      },
      significance: {
        en: 'Wamala Tombs represent an important link to Buganda\'s pre-colonial history. Kabaka Suuna II is remembered for expanding the kingdom and for being the father of Kabaka Mutesa I, who welcomed the first European explorers to Buganda.',
        lg: 'Amasiro g\'e Wamala gakiikirira enkolagana ennungi eri ebyafaayo bya Buganda eby\'emabega. Kabaka Suuna II ajjukirwa olw\'okwongera obwakabaka era olw\'okuba kitaabwe Kabaka Mutesa I, eyasembeza abanoonyi ab\'Obuzungu abasooka okujja mu Buganda.'
      },
      activities: [
        { en: 'Guided cultural tours', lg: 'Okutambula n\'omukulembezi w\'obuwangwa' },
        { en: 'Historical education', lg: 'Okuyigirizibwa ebyafaayo' },
        { en: 'Traditional rituals', lg: 'Emikolo gy\'empisa' },
        { en: 'Cultural performances', lg: 'Emizannyo gy\'obuwangwa' }
      ]
    },
    {
      id: '12',
      category: 'Sacred',
      title: { en: 'Naggalabi (Buddo Coronation Site)', lg: 'Naggalabi (Buddo)' },
      image: 'https://images.unsplash.com/photo-1580894732930-0babd100d356?w=800&h=400&fit=crop',
      date: { en: 'Coronation ceremonies', lg: 'Emikolo gy\'okutikkibwa' },
      location: { en: 'Buddo, Wakiso District', lg: 'Buddo, Wakiso' },
      description: {
        en: 'Naggalabi in Buddo is the sacred coronation site where all Kabakas of Buganda have been crowned. This ancient hill holds deep spiritual significance as the place where Kabaka Kintu, the founder of Buganda, is believed to have performed the first coronation rituals. The site features sacred shrines and coronation artifacts.',
        lg: 'Naggalabi e Buddo y\'ekifo ekitukuvu eky\'okutikkibwa mwe bakabaka bonna ba Buganda batikkiddwa. Olusozi luno olw\'edda lulina omugaso munene ogw\'omwoyo nga kifo mwe Kabaka Kintu, eyatandise Buganda, akiririzibwa okukoledde emikolo egy\'okutikkibwa egyasooka. Ekifo kirabika ebifo ebitukuvu n\'ebintu eby\'okutikkibwa.'
      },
      significance: {
        en: 'Naggalabi is considered the spiritual birthplace of Buganda\'s monarchy. Every coronation must take place here to be considered legitimate. The site connects each new Kabaka to the founding traditions of the kingdom and to all previous rulers.',
        lg: 'Naggalabi kitwlibwa ng\'ekifo mwe wazaalibwa obwakabaka bwa Buganda mu mwoyo. Buli kutikkibwa kw\'olubeerera kukolebwa wano okukiririzibwako. Ekifo kino kiyunga buli Kabaka omupya ku mpisa ez\'okutandika obwakabaka n\'abafuzi bonna ab\'emabega.'
      },
      activities: [
        { en: 'Royal coronation ceremonies', lg: 'Emikolo gy\'okutikkibwa obwakabaka' },
        { en: 'Pilgrimage visits', lg: 'Okukuja okulamya' },
        { en: 'Cultural education', lg: 'Okuyigirizibwa obuwangwa' },
        { en: 'Traditional rituals', lg: 'Emikolo gy\'empisa' }
      ]
    },
    {
      id: '13',
      category: 'Cultural',
      title: { en: 'Barkcloth Making (Okukomaga Olubugo)', lg: 'Okukomaga Olubugo' },
      image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&h=400&fit=crop',
      date: { en: 'Year-round tradition', lg: 'Empisa ey\'omwaka gwonna' },
      location: { en: 'Various locations in Buganda', lg: 'Ebifo eby\'enjawulo mu Buganda' },
      description: {
        en: 'Barkcloth making is an ancient Baganda craft recognized by UNESCO as an Intangible Cultural Heritage of Humanity. The cloth is made from the inner bark of the Mutuba tree (Ficus natalensis) through a process of beating and stretching. Barkcloth was the traditional textile of Buganda before the introduction of cotton and remains important in ceremonies.',
        lg: 'Okukomaga olubugo y\'obubuuzi obw\'edda obwa Baganda obutegeezeddwako UNESCO ng\'Obusika bw\'Obuwangwa obw\'Abantu. Olubugo lukolebwa okuva mu kibikka kya muti Mutuba (Ficus natalensis) mu nkola y\'okukuba n\'okunyuuza. Olubugo lwali ngoye y\'empisa y\'Abaganda nga kkotoni tennatandika era lukiwa omugaso mu mikolo.'
      },
      significance: {
        en: 'Barkcloth represents Buganda\'s ingenuity and connection to nature. It is still used in traditional ceremonies, especially funerals, coronations, and cultural events. The craft is being preserved and promoted as both a cultural treasure and economic opportunity.',
        lg: 'Olubugo lukiikirira obumanyi bwa Baganda n\'enkolagana n\'obutonde. Lukikolelbwako mu mikolo gy\'empisa, ennyo ennyo okuzikka, okutikkibwa, n\'emikolo gy\'obuwangwa. Obubuuzi buno bukuumibwa era butandisibwa ng\'obugagga bw\'obuwangwa n\'omikisa gy\'ebyenfuna.'
      },
      activities: [
        { en: 'Traditional bark harvesting', lg: 'Okusala ekikibba ky\'empisa' },
        { en: 'Beating and processing', lg: 'Okukuba n\'okutegeka' },
        { en: 'Cultural demonstrations', lg: 'Okulabisilako obuwangwa' },
        { en: 'Barkcloth product creation', lg: 'Okukola ebintu by\'olubugo' }
      ]
    },
    {
      id: '14',
      category: 'Cultural',
      title: { en: 'Traditional Music & Dance (Bakisimba, Nankasa)', lg: 'Ennyimba n\'Okuzina (Bakisimba, Nankasa)' },
      image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&h=400&fit=crop',
      date: { en: 'Cultural events and celebrations', lg: 'Emikolo gy\'obuwangwa n\'okukuza' },
      location: { en: 'Throughout Buganda', lg: 'Buganda yonna' },
      description: {
        en: 'Buganda has a rich tradition of music and dance. Bakisimba and Nankasa are the most famous traditional dances, performed to the rhythm of drums (engoma). The amadinda (xylophone) is another important instrument. These performances are integral to weddings, coronations, and other cultural celebrations.',
        lg: 'Buganda erina empisa ennungi ennyo ez\'ennyimba n\'okuzina. Bakisimba ne Nankasa ze mizannyo gy\'empisa emanyiddwa ennyo, ezinibwa ku mpuliziganya y\'engoma. Amadinda (akaaba) y\'ekintu ekirala eky\'omugaso. Emizannyo gino giri mu bufumbo, okutikkibwa, n\'okukuza okuddala okw\'obuwangwa.'
      },
      significance: {
        en: 'Traditional music and dance preserve Buganda\'s oral history, values, and artistic expression. The complex rhythms and movements tell stories of kings, wars, love, and daily life. These art forms continue to evolve while maintaining their cultural essence.',
        lg: 'Ennyimba n\'okuzina eby\'empisa bikuuma ebyafaayo bya Buganda eby\'omu kamwa, emizizo, n\'okwoleka obukuŋgu. Empuliziganya n\'entambula ezizibu binyumya nnyiriri z\'abakabaka, entalo, okwagala, n\'obulamu obwa bulijjo. Ebikola by\'obukuŋgu bino biyongera okulekulana nga bikuuma obuwangwa bwabyo.'
      },
      activities: [
        { en: 'Bakisimba and Nankasa dances', lg: 'Okuzina Bakisimba ne Nankasa' },
        { en: 'Drum performances (Engoma)', lg: 'Okukuba engoma' },
        { en: 'Amadinda (xylophone) music', lg: 'Ennyimba z\'amadinda' },
        { en: 'Cultural storytelling', lg: 'Okunyumya engero z\'obuwangwa' }
      ]
    }
  ]

  const filteredCeremonies = activeCategory === 'All' 
    ? ceremonies 
    : ceremonies.filter(c => c.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-royal-800 via-royal-700 to-royal-900 text-white py-24 px-4">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t({ en: 'Ceremonies of Buganda', lg: 'Emikolo gy\'Buganda' })}
          </h1>
          <p className="text-xl md:text-2xl text-royal-100 max-w-3xl mx-auto">
            {t({ 
              en: 'Sacred rituals, royal traditions, and cultural celebrations that have defined our heritage for over 600 years', 
              lg: 'Emikolo egitukuvu, empisa z\'obwakabaka, n\'okukuza obuwangwa ebitegedde obusika bwaffe okumala emyaka esukka mu 600' 
            })}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition ${
                activeCategory === category.id
                  ? 'bg-royal-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-royal-50 border border-gray-200'
              }`}
            >
              {t(category.name)}
            </button>
          ))}
        </div>

        {/* Ceremonies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCeremonies.map(ceremony => (
            <div 
              key={ceremony.id}
              onClick={() => setSelectedCeremony(ceremony)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-48">
                <img 
                  src={ceremony.image} 
                  alt={t(ceremony.title)}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1604999333679-b86d54738315?w=800&h=400&fit=crop'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-royal-500/80 text-white text-xs rounded-full mb-2">
                    {t(categories.find(c => c.id === ceremony.category)?.name || { en: ceremony.category, lg: ceremony.category })}
                  </span>
                  <h3 className="text-xl font-bold text-white">{t(ceremony.title)}</h3>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>{t(ceremony.location)}</span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">{t(ceremony.description)}</p>
                <button className="mt-4 text-royal-600 font-medium text-sm flex items-center gap-1 hover:text-royal-700">
                  {t({ en: 'Learn More', lg: 'Manya Ebisingawo' })}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedCeremony && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedCeremony(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto my-8"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img 
                src={selectedCeremony.image} 
                alt={t(selectedCeremony.title)}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1604999333679-b86d54738315?w=800&h=400&fit=crop'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <button
                onClick={() => setSelectedCeremony(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition"
              >
                ✕
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-royal-500 text-white text-sm rounded-full mb-2">
                  {t(categories.find(c => c.id === selectedCeremony.category)?.name || { en: selectedCeremony.category, lg: selectedCeremony.category })}
                </span>
                <h2 className="text-3xl font-bold text-white">{t(selectedCeremony.title)}</h2>
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-royal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{t(selectedCeremony.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-royal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span>{t(selectedCeremony.location)}</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">{t(selectedCeremony.description)}</p>

              <div className="bg-royal-50 rounded-xl p-5 mb-6">
                <h3 className="text-lg font-bold text-royal-900 mb-2">{t({ en: 'Cultural Significance', lg: 'Omugaso gw\'Obuwangwa' })}</h3>
                <p className="text-royal-800">{t(selectedCeremony.significance)}</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{t({ en: 'Key Activities & Rituals', lg: 'Ebikolwa n\'Emikolo Ebikulu' })}</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {selectedCeremony.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                      <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center text-gold-600">
                        ✓
                      </div>
                      <span className="text-gray-700">{t(activity)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tour CTA */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {t({ en: 'Experience Buganda\'s Sacred Traditions', lg: 'Manya Empisa Entukuvu za Buganda' })}
          </h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            {t({ 
              en: 'Book a cultural tour to visit sacred sites, witness traditional ceremonies, and immerse yourself in the rich heritage of the Kingdom of Buganda.', 
              lg: 'Wandiika okutambula kw\'obuwangwa okukyala ebifo ebitukuvu, okulaba emikolo gy\'empisa, n\'okwenyigira mu busika obugagga obw\'Obwakabaka bwa Buganda.'
            })}
          </p>
          <Link 
            to="/tours" 
            className="inline-block px-8 py-4 bg-white text-amber-600 rounded-xl font-bold hover:bg-amber-50 transition transform hover:scale-105 shadow-lg"
          >
            {t({ en: 'Book a Cultural Tour', lg: 'Wandiika Okutambula kw\'Obuwangwa' })}
          </Link>
        </div>
      </div>
    </div>
  )
}
