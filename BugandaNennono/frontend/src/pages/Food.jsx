import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Food(){
  const { t } = useLanguage()
  const [selectedDish, setSelectedDish] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: { en: 'All Foods', lg: 'Emmere Yonna' } },
    { id: 'staples', name: { en: 'Staple Foods', lg: 'Emmere Engeziwako' } },
    { id: 'meats', name: { en: 'Meat & Fish', lg: 'Enyama n\'Ebyenyanja' } },
    { id: 'sauces', name: { en: 'Sauces & Stews', lg: 'Ssosi n\'Enva' } },
    { id: 'drinks', name: { en: 'Drinks', lg: 'Ebyokunywa' } },
    { id: 'delicacies', name: { en: 'Seasonal Delicacies', lg: 'Ebirungo eby\'Ekiseera' } }
  ]

  const foods = [
    {
      id: 1,
      name: { en: 'Matooke', lg: 'Matooke' },
      category: 'staples',
      image: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=800',
      shortDesc: { en: 'The signature dish of Buganda - steamed green bananas', lg: 'Emmere enkulu ya Buganda - matooke agafumbibwa' },
      description: { 
        en: 'Matooke is the most iconic and beloved dish in Buganda. Made from a specific variety of green bananas called "matooke" (different from dessert bananas), this dish is central to Baganda culture and identity. The bananas are peeled, wrapped in banana leaves, and steamed until soft, then mashed to create a smooth, starchy staple.',
        lg: 'Matooke y\'emmere esinga okumanyika era okwagalwa mu Buganda. Ekolebwa ku ngeri ey\'enjawulo ey\'ebitooke ebirumwa "matooke", era emmere eno ye nsonga mu mbeera n\'obwangwa bwa Baganda.'
      },
      preparation: {
        en: 'The bananas are carefully peeled, wrapped in fresh banana leaves (ebisanja), and placed in a large pot (ensawo). Water is added at the bottom, and the pot is covered to steam for 2-3 hours. Once cooked, the bananas are mashed using a wooden paddle (omukono) while still wrapped in the leaves.',
        lg: 'Ebitooke bisengulibbwa n\'obwegendereza, bizingibwa mu bisanja ebipya, ne biteekebwa mu nsawo ennene. Amazzi gakongerebwa wansi, n\'ensawo ebikkibwa okufumba okumala essaawa 2-3.'
      },
      servingStyle: {
        en: 'Traditionally served on a fresh banana leaf and eaten with hands. It\'s typically accompanied by groundnut sauce, meat stew, or luwombo.',
        lg: 'Mu mpisa za Buganda, baweereddwa ku kisanja ekipya era baliibwa n\'engalo. Binywanyizibwa n\'obwogero oba ssobo y\'enyama.'
      },
      culturalSignificance: {
        en: 'No Muganda gathering or ceremony is complete without matooke. It\'s served at weddings, funerals, and all major celebrations. The dish represents hospitality and is a symbol of Buganda\'s agricultural heritage.',
        lg: 'Tewali lukiiko lwa Muganda luterekerwa awatali matooke. Gaweerezebwa ku mbaga, ku kuziika, ne ku mikolo gyonna egy\'omugaso.'
      }
    },
    {
      id: 2,
      name: { en: 'Luwombo', lg: 'Luwombo' },
      category: 'meats',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800',
      shortDesc: { en: 'Royal delicacy steamed in banana leaves', lg: 'Ekirungo ky\'obwakabaka ekifumbibwa mu bisanja' },
      description: { 
        en: 'Luwombo is a prestigious royal dish that was traditionally reserved for the Kabaka, royal family, and honoured guests. It consists of meat (chicken, beef, or goat), fish, or groundnut sauce wrapped in banana leaves and slowly steamed. The banana leaves impart a unique, earthy flavor that cannot be replicated.',
        lg: 'Luwombo y\'emmere ey\'ekitiibwa eyali ekuumirwa Kabaka, ab\'olulyo olw\'obwakabaka, n\'abagenyi ab\'ekitiibwa. Erina enyama (enkoko, ente, oba embuzi), ebyenyanja, oba obwogero ebizingibwa mu bisanja era ebifumbibwa mpola mpola.'
      },
      preparation: {
        en: 'The meat or sauce is seasoned with onions, tomatoes, and salt, then wrapped securely in banana leaves (creating a pouch called "oluwombo"). These parcels are placed in a large pot and steamed for several hours until the flavors meld together.',
        lg: 'Enyama oba ssobo ekolezebwa n\'akatungulu, ennyaanya, ne munnyo, n\'oluvannyuma bizingibwa obulungi mu bisanja (okukola ensawo eyitibwa "oluwombo"). Ensawo zino ziteekebwa mu nsawo ennene era zifumbibwa okumala essaawa nnyingi.'
      },
      servingStyle: {
        en: 'The luwombo is presented still wrapped, and is ceremoniously opened at the table. It\'s served with matooke, rice, or posho.',
        lg: 'Oluwombo luweerezebwa nga lukyazingiddwa, era lugguddwako ku mmeeza n\'ekitiibwa. Lunywanyizibwa ne matooke, omuceere, oba posho.'
      },
      culturalSignificance: {
        en: 'In traditional Buganda society, serving luwombo to guests was the highest form of respect. It demonstrated that the host valued the guest highly enough to prepare this labor-intensive dish.',
        lg: 'Mu mbeera za Buganda ez\'edda, okuweera abagenyi luwombo kwali engeri esinga ekitiibwa y\'okussibwa ekitiibwa. Kyalaga nti nannyini maka yassaayo omugaso eri omugenyi okutuukira w\'okutegeka emmere eno.'
      }
    },
    {
      id: 3,
      name: { en: 'Groundnut Sauce (Binyebwa)', lg: 'Obwogero (Binyebwa)' },
      category: 'sauces',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800',
      shortDesc: { en: 'Rich peanut sauce - the most common accompaniment', lg: 'Ssobo y\'ebinyebwa - ekisanyuso ekikozesebwa ennyo' },
      description: { 
        en: 'Groundnut sauce (also called peanut sauce or binyebwa) is the most popular accompaniment to matooke in Buganda. Made from roasted groundnuts that are pounded and cooked into a thick, creamy sauce, it provides essential protein and rich flavor to meals.',
        lg: 'Obwogero (era kiyitibwa binyebwa) y\'ekisanyuso ekisinga okukozesebwa ne matooke mu Buganda. Kikolebwa ku binyebwa ebikaliddwa ebikomeddwa era ebifumbiddwa okufuuka ssobo ennene, era kireeta puloteeni n\'obuwoomi mu mmere.'
      },
      preparation: {
        en: 'Groundnuts are roasted until golden brown, then ground to a fine paste using a traditional grinding stone (olubengo) or modern blender. The paste is cooked with water, onions, and salt until it thickens.',
        lg: 'Ebinyebwa bikalibwa okutuuka lwe bifuuka eby\'amaziga, n\'oluvannyuma bikomebwa okufuuka akakanda nga bakozesa ejjinja ery\'okusya (olubengo) oba ekikomo ekya kaakati.'
      },
      servingStyle: {
        en: 'Served generously over matooke. The sauce should be thick enough to coat the food but not so thick that it becomes pasty.',
        lg: 'Biweerezebwa ku matooke nga biwera. Ssobo esaana okuba ennene okutuukira w\'okubikka emmere naye so teya kunyiikirira nnyo.'
      },
      culturalSignificance: {
        en: 'Groundnuts are a major crop in Uganda, and groundnut sauce represents the agricultural prosperity of the region. It\'s considered a complete meal when served with matooke.',
        lg: 'Ebinyebwa by\'ebirime ebikulu mu Uganda, era obwogero bukiikirira obugagga bw\'ebyobulimi mu kitundu. Kitegeezebwa ng\'emmere entuufu bwe bunywanyizibwa ne matooke.'
      }
    },
    {
      id: 4,
      name: { en: 'Posho (Kawunga)', lg: 'Posho (Kawunga)' },
      category: 'staples',
      image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=800',
      shortDesc: { en: 'Cornmeal porridge - a filling staple food', lg: 'Obuzzi bwa kasooli - emmere ekutta enjala' },
      description: { 
        en: 'Posho (also called kawunga) is a thick cornmeal porridge that is a staple across East Africa. While not originally from Buganda, it has become an integral part of the Baganda diet due to its affordability and filling nature.',
        lg: 'Posho (era eyitibwa kawunga) y\'obuzzi obuzitowa obwa kasooli obuli emmere mu Africa y\'Ebuvanjuba. Wadde nga teyava Buganda, efuuse ekitundu ekikulu eky\'okulya kwa Baganda olw\'okuba ebbi era ekutta enjala.'
      },
      preparation: {
        en: 'Water is brought to a boil, then cornmeal (maize flour) is gradually added while stirring continuously with a wooden paddle to prevent lumps. The mixture is cooked until thick and can be shaped.',
        lg: 'Amazzi gatekebwa okufumba, n\'oluvannyuma obuzzi bwa kasooli (obufu bwa kasooli) bukongeddwako mpola mpola nga bukokolebwa n\'omukono gw\'omuti obutoba bitonko. Enteekateeka efumbirwa okutuuka lwe ezitowa era ne yeefaananako.'
      },
      servingStyle: {
        en: 'Served in a mound alongside beans, greens, or any sauce. Pieces are broken off and used to scoop up the accompanying dishes.',
        lg: 'Eweerezebwa ng\'entuumo wamu n\'ebijanjaalo, enva, oba ssosi yonna. Ebitundu bimenyebwako era bikozesebwa okukwata ebiryo ebinywanyisibwa.'
      },
      culturalSignificance: {
        en: 'Posho is often served in schools and at public gatherings due to its economy and ability to feed large groups. It represents practicality in Baganda culture.',
        lg: 'Posho eweerezebwa emirundi mingi mu masomero ne mu mikutu gy\'olukale olw\'obubbi bwayo n\'obusobozi bw\'okulisa abantu bangi. Ekiikirira obutuufu mu mbeera za Baganda.'
      }
    },
    {
      id: 5,
      name: { en: 'Nsenene (Grasshoppers)', lg: 'Ensenene' },
      category: 'delicacies',
      image: 'https://images.unsplash.com/photo-1566408669374-5a6d5dca1a62?w=800',
      shortDesc: { en: 'Seasonal delicacy - fried grasshoppers', lg: 'Ekirungo ky\'ekiseera - ensenene ezisikiridde' },
      description: { 
        en: 'Nsenene (grasshoppers) are a beloved seasonal delicacy in Buganda, appearing during the rainy seasons (typically November-December and March-May). These protein-rich insects are caught using light traps at night and are considered a genuine treat.',
        lg: 'Ensenene z\'ekirungo eky\'omugaso eky\'ekiseera mu Buganda, ezijja mu nkuba (emirundi mingi Novemba-Desemba ne Marchi-Meyi). Ebiwuka bino eby\'omugagga mu puloteeni bikwatibwa nga bakozesa emisana mu kiro era bitegeerwa ng\'ekijjanjalo.'
      },
      preparation: {
        en: 'Wings and legs are removed, then the grasshoppers are fried in their own fat with salt and onions until crispy. No oil is needed as they contain sufficient natural oils.',
        lg: 'Ebiwaawaatiro n\'amagulu biggibwako, n\'oluvannyuma ensenene zisikiridwa mu bbuto lyazo ne munnyo n\'akatungulu okutuuka lwe zifuuka enkakamu. Tewetaagibwa mafuta kubanga zirina amafuta amalunda.'
      },
      servingStyle: {
        en: 'Eaten as a snack or served as a side dish with meals. They are best enjoyed fresh and hot.',
        lg: 'Ziliibwa ng\'ekirungo oba ziweerezebwa ng\'ekisanyuso ne mmere. Zisinga okuba ennungi nga mpya era mbbugumu.'
      },
      culturalSignificance: {
        en: 'Nsenene season is eagerly anticipated, and catching them is a communal activity. They were traditionally given to in-laws as a sign of respect and goodwill.',
        lg: 'Ekiseera ky\'ensenene kilindirirwa nnyo, era okuzikwata y\'omulimu ogw\'awamu. Mu mpisa ez\'edda, zaweebwanga abako ng\'akabonero ak\'ekitiibwa n\'okukwagala.'
      }
    },
    {
      id: 6,
      name: { en: 'Nswaa (White Ants)', lg: 'Enswa' },
      category: 'delicacies',
      image: 'https://images.unsplash.com/photo-1566408669374-5a6d5dca1a62?w=800',
      shortDesc: { en: 'Flying termites - another seasonal treat', lg: 'Enswa - ekirungo ekirala eky\'ekiseera' },
      description: { 
        en: 'Nswaa (white ants or flying termites) are another cherished seasonal delicacy. They emerge from their mounds after heavy rains, usually in the early morning. Like grasshoppers, they are high in protein and fats.',
        lg: 'Enswa (oba enswa ezibuuka) z\'ekirungo ekirala eky\'ekiseera ekyagalwa. Zivaamu mu biswa byazo oluvannyuma lw\'enkuba empitirivu, emirundi mingi mu makya ag\'oluvanyuma. Nga ensenene, zirina puloteeni n\'amafuta mangi.'
      },
      preparation: {
        en: 'The wings are removed by gently rubbing the insects together. They can be eaten raw for a nutty flavor, or fried with salt until crispy.',
        lg: 'Ebiwaawaatiro biggibwako ng\'osisa ebiwuka awamu mpola. Ziyinza okuliibwa nga mbitale olw\'obuwoomi bw\'ebinyebwa, oba zisikiridwe ne munnyo okutuuka lwe zifuuka enkakamu.'
      },
      servingStyle: {
        en: 'Served as a snack or added to sauces for extra protein. Children especially love catching and eating them fresh.',
        lg: 'Ziweerezebwa ng\'ekirungo oba zikongeddwa mu ssobo olw\'okwongera puloteeni. Abaana basinga okwagala okuzikwata n\'okuzirya nga mpya.'
      },
      culturalSignificance: {
        en: 'The appearance of nswaa signals the changing of seasons and is cause for excitement, especially among children who wake early to collect them.',
        lg: 'Okuvaayo kw\'enswa kulaga okukyuka kw\'ebiseera era kireetera essanyu, ennyo mu baana abagolokoka ku makya obaakungaanya.'
      }
    },
    {
      id: 7,
      name: { en: 'Katogo', lg: 'Katogo' },
      category: 'staples',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800',
      shortDesc: { en: 'Mixed breakfast dish with matooke and offals', lg: 'Emmere y\'akasooka etabiddwa ne matooke n\'ebyenda' },
      description: { 
        en: 'Katogo is a popular breakfast dish in Buganda. It consists of matooke cooked together with beans, groundnuts, meat, or offals (tripe, liver, or intestines) in one pot, creating a hearty, filling meal.',
        lg: 'Katogo y\'emmere y\'akasooka emanyika mu Buganda. Erina matooke agafumbiddwa awamu n\'ebijanjaalo, ebinyebwa, enyama, oba ebyenda (endokwa, ekibumba, oba olubuto) mu nsawo emu, era eteekateekera emmere ekutta enjala.'
      },
      preparation: {
        en: 'All ingredients are placed in one pot with water and cooked until the matooke is soft and has absorbed the flavors of the other ingredients. The result is a thick, stew-like dish.',
        lg: 'Ebyetaagibwa byonna biteekebwa mu nsawo emu n\'amazzi era bifumbibwa okutuuka matooke lwe gatondera era lwe ganywa obuwoomi bw\'ebyetaagibwa ebirala. Ekivuddeyo y\'emmere ennene, efaanana ssobo.'
      },
      servingStyle: {
        en: 'Served hot, directly from the pot. It\'s a complete meal that doesn\'t require additional accompaniments.',
        lg: 'Eweerezebwa ng\'ebbugumu, butereevu okuva mu nsawo. Y\'emmere entuufu eteetaaga bisanyuso biryawo.'
      },
      culturalSignificance: {
        en: 'Katogo represents the Baganda philosophy of making the most of available ingredients. It\'s a practical, economical meal that ensures nothing goes to waste.',
        lg: 'Katogo ekiikirira endowooza ya Baganda ey\'okukozesaamu ebyetaagibwa ebiriwo. Y\'emmere etuufu, etali bbeeyi, era ekakasa nti tewali kyokozesebwa kifujjibwa.'
      }
    },
    {
      id: 8,
      name: { en: 'Sweet Potatoes (Lumonde)', lg: 'Lumonde' },
      category: 'staples',
      image: 'https://images.unsplash.com/photo-1596097635121-14b63b7a7451?w=800',
      shortDesc: { en: 'Roasted or boiled sweet potatoes', lg: 'Lumonde enzikidde oba enzitidde' },
      description: { 
        en: 'Sweet potatoes (lumonde) are a popular staple food in Buganda, often eaten for breakfast or as a snack. They can be boiled, roasted over charcoal, or fried. Different varieties have different colors and sweetness levels.',
        lg: 'Lumonde z\'emmere emanyika mu Buganda, emirundi mingi eliibwa ng\'emmere y\'akasooka oba ng\'ekirungo. Ziyinza okuzitibwa, okuzikibwa ku makala, oba okusikiridwa. Engeri ez\'enjawulo zirina langi ez\'enjawulo n\'okuba njeru.'
      },
      preparation: {
        en: 'For boiling, sweet potatoes are washed, peeled if desired, and boiled in water until tender. For roasting, they are placed directly on hot charcoal and turned regularly until cooked through.',
        lg: 'Okuzita, lumonde zinaazibwa, zisengulibbwa bwe kiweebwa okukiraba, era zizitibwa mu mazzi okutuuka lwe zitondera. Okuzika, ziteekebwa butereevu ku makala ag\'ebbugumu era zikyuusibwamu emirundi mingi okutuuka lwe zifumbika.'
      },
      servingStyle: {
        en: 'Eaten alone as a snack or served alongside tea for breakfast. They can also accompany main meals.',
        lg: 'Ziliibwa zokka ng\'ekirungo oba ziweerezebwa awamu ne caayi olw\'emmere y\'akasooka. Era ziyinza okubeera n\'emmere enkulu.'
      },
      culturalSignificance: {
        en: 'Sweet potatoes are a symbol of self-sufficiency in Buganda, as they can be grown in home gardens and provide reliable nutrition year-round.',
        lg: 'Lumonde z\'akabonero ak\'okwemalirira mu Buganda, kubanga ziyinza okulimibwa mu nnimiro za waka era ziweera okulya okulungi omwaka gwonna.'
      }
    },
    {
      id: 9,
      name: { en: 'Cassava (Muwogo)', lg: 'Muwogo' },
      category: 'staples',
      image: 'https://images.unsplash.com/photo-1598376308597-f7e15a3c4e04?w=800',
      shortDesc: { en: 'Versatile root vegetable - boiled, fried, or dried', lg: 'Emmere y\'ekikolo ey\'engeri nnyingi - enzitidde, enzikidde, oba enzalidde' },
      description: { 
        en: 'Cassava (muwogo) is a versatile root crop widely consumed in Buganda. It can be prepared in multiple ways: boiled and eaten with sauce, dried and ground into flour, or fried as chips. It\'s an important food security crop.',
        lg: 'Muwogo y\'ekirime eky\'ebikolo eky\'engeri nnyingi ekiliibwa ennyo mu Buganda. Kiyinza okutegekebwa mu ngeri nnyingi: okuzitibwa ne kuliibwa ne ssobo, okukalibwa ne kusigibwa okufuuka obufu, oba okusikiridwa ng\'ekitundu.'
      },
      preparation: {
        en: 'For boiling, cassava is peeled, cut into pieces, and boiled in salted water. For chips (mogo), it\'s cut into strips and deep-fried. Dried cassava can be ground into flour for porridge.',
        lg: 'Okuzita, muwogo gusengulibbwa, gutemetemebwa, era guzitibwa mu mazzi ag\'omunnyo. Olwa chips (mogo), gutemetemebwa era gusikiridwa mu mafuta mangi. Muwogo ogukaliddwa guyinza okusigibwa okufuuka obufu olw\'obuzzi.'
      },
      servingStyle: {
        en: 'Boiled cassava is served with tea, groundnut sauce, or beans. Cassava chips are a popular street food.',
        lg: 'Muwogo oguzitidde guweerezebwa ne caayi, obwogero, oba ebijanjaalo. Chips za muwogo z\'emmere emanyika ey\'oku nguudo.'
      },
      culturalSignificance: {
        en: 'Cassava is prized for its resilience - it can grow in poor soils and survive droughts, making it a reliable food source during difficult times.',
        lg: 'Muwogo guweebwa omugaso ennyo olw\'obugumu bwagwo - guyinza okukula mu ttaka ettibi era ne gwangaala mu kyeya, ekifuufu ekireeta okulya okulungi mu biseera ebizibu.'
      }
    },
    {
      id: 10,
      name: { en: 'Tonto (Banana Beer)', lg: 'Omwenge gw\'Ebitooke' },
      category: 'drinks',
      image: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=800',
      shortDesc: { en: 'Traditional banana beer', lg: 'Omwenge gw\'ekika egw\'ebitooke' },
      description: { 
        en: 'Tonto is a traditional alcoholic beverage made from fermented bananas. It has been brewed in Buganda for centuries and remains an important cultural drink, especially for ceremonies and celebrations.',
        lg: 'Omwenge gw\'ebitooke y\'omwenge gw\'edda ogw\'ekika ogukolebwa ku bitooke ebifuuse. Gufumbibwa mu Buganda okumala emyaka mibirivu era gukyali omwenge ogw\'omugaso ennyo ogw\'obuwangwa, ennyo olwa mikolo n\'embaga.'
      },
      preparation: {
        en: 'Ripe bananas are mashed and mixed with roasted sorghum or millet, then left to ferment for several days. The liquid is then strained and ready to drink.',
        lg: 'Ebitooke ebivunze bikomebwa era bitabibwa n\'obulo oba ettaama ebikaliddwa, n\'oluvannyuma bilekebwa okufuusa okumala ennaku nnyingi. Amazzi gasekebwa era ne gabeera nga gagala okunywedwa.'
      },
      servingStyle: {
        en: 'Traditionally served in gourds (endeku) and drunk through long straws (enseke). It\'s shared communally from a central pot.',
        lg: 'Mu mpisa, guweerezebwa mu ndeku era gunywedwa mu nseke empanvu. Gunywebwa awamu okuva mu nsawo ey\'omutwe.'
      },
      culturalSignificance: {
        en: 'Tonto plays a central role in traditional ceremonies, including marriage negotiations, funeral rites, and clan gatherings. Refusing a drink when offered can be considered disrespectful.',
        lg: 'Omwenge gw\'ebitooke gulina ekifo ekikulu mu mikolo gya mpisa, ng\'okuteesa embaga, empisa z\'okuziika, n\'olukuŋŋaana lw\'ebika. Okugaana okunywa bwe kuweebwa kuyinza okutegeerwa ng\'obutassaamu kitiibwa.'
      }
    },
    {
      id: 11,
      name: { en: 'Bushera', lg: 'Obushera' },
      category: 'drinks',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800',
      shortDesc: { en: 'Fermented millet beverage', lg: 'Ekyokunywa ky\'obulo ekifuuse' },
      description: { 
        en: 'Bushera is a nutritious fermented beverage made from millet or sorghum flour. It can be non-alcoholic (lightly fermented) or alcoholic (longer fermentation). It\'s rich in probiotics and has a slightly sour, refreshing taste.',
        lg: 'Obushera y\'ekyokunywa ekirimu ebyokulya ekikolebwa ku bufu bw\'obulo oba ettaama. Kiyinza okutabeeramu mwenge (okufuusa okutono) oba okuba n\'omwenge (okufuusa okuwanvu). Kirugamu puloteeni era kirina obuwoomi obukasamula n\'okuwummuliza.'
      },
      preparation: {
        en: 'Millet flour is mixed with water and left to ferment overnight or for several days. The longer it ferments, the more alcoholic it becomes. Sugar can be added for sweetness.',
        lg: 'Obufu bw\'obulo butabibwa n\'amazzi era bulekebwa okufuusa ekiro kyonna oba ennaku nnyingi. Bwe bufuusa okuwanvu, bwe bufuuka n\'omwenge mungi. Ssukkaali eyinza okukongeddwako olw\'obuwoomi.'
      },
      servingStyle: {
        en: 'Served chilled in cups or glasses. It\'s particularly refreshing on hot days and is often given to nursing mothers for its nutritional value.',
        lg: 'Kiweerezebwa ng\'ekinyooze mu kikopo oba gilaasi. Kiwummuliza ennyo ku nnaku ez\'ebbugumu era emirundi mingi kiweebwa abakyala abazizisa olw\'ebyokulya ebirimu.'
      },
      culturalSignificance: {
        en: 'Bushera represents the traditional knowledge of fermentation in Buganda. It\'s considered a health drink and is often recommended for building strength.',
        lg: 'Obushera bukiikirira amagezi ga mpisa ag\'okufuusa mu Buganda. Butegeerwa ng\'ekyokunywa eky\'obumalirivu era emirundi mingi kyakuyigirirwa olw\'okuzimba amaanyi.'
      }
    },
    {
      id: 12,
      name: { en: 'Nakati (African Nightshade)', lg: 'Enakati' },
      category: 'sauces',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800',
      shortDesc: { en: 'Nutritious leafy green vegetable', lg: 'Enva y\'ebikoola ey\'amaanyi' },
      description: { 
        en: 'Nakati (Solanum scabrum) is a popular leafy green vegetable in Buganda. It\'s highly nutritious, rich in iron and vitamins, and has a slightly bitter taste that is beloved in traditional cuisine.',
        lg: 'Enakati (Solanum scabrum) y\'enva y\'ebikoola emanyika mu Buganda. Erina ebyokulya bingi, erugamu byuma n\'eby\'ekizuubu, era erina obukaawa obutono obwagalwa mu mmere y\'empisa.'
      },
      preparation: {
        en: 'The leaves are washed thoroughly, then sautéed with onions, tomatoes, and sometimes groundnut paste. They can also be steamed with just a little water and salt.',
        lg: 'Ebikoola binaazibwa obulungi, n\'oluvannyuma bifumbibwa n\'akatungulu, ennyaanya, era oluusi n\'akakanda k\'ebinyebwa. Byayinza era okufumbibwa n\'amazzi amatono ne munnyo.'
      },
      servingStyle: {
        en: 'Served as a side dish with matooke, posho, or rice. It adds color and nutrition to any meal.',
        lg: 'Biweerezebwa ng\'ekisanyuso ne matooke, posho, oba omuceere. Byongera langi n\'ebyokulya ku mmere yonna.'
      },
      culturalSignificance: {
        en: 'Indigenous vegetables like nakati are experiencing a revival as people rediscover their nutritional and cultural value.',
        lg: 'Enva ez\'ekika ng\'enakati zijja kulabikira ddala nga abantu bazizuula nnyiniira ebyokulya n\'omugaso ogw\'obuwangwa.'
      }
    }
  ]

  const filteredFoods = activeCategory === 'all' 
    ? foods 
    : foods.filter(f => f.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-amber-700 via-amber-600 to-orange-700 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t({ en: 'Traditional Buganda Cuisine', lg: 'Emmere y\'Empisa eza Buganda' })}
          </h1>
          <p className="text-xl text-amber-100 max-w-3xl">
            {t({ 
              en: 'Explore the rich culinary traditions of Buganda - from the iconic matooke to the royal luwombo and seasonal delicacies that have defined our culture for centuries.', 
              lg: 'Zuula empisa z\'okulya ezigagga eza Buganda - okuva ku matooke ag\'ekitiibwa okutuuka ku luwombo olw\'obwakabaka n\'ebirungo eby\'ekiseera ebitegekedde obuwangwa bwaffe okumala emyaka mibirivu.' 
            })}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-50 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t({ en: 'Food Culture in Buganda', lg: 'Obuwangwa bw\'Emmere mu Buganda' })}
              </h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="mb-4">
                  {t({ 
                    en: 'Traditional Ganda food is central to social life and ceremonies. Every important occasion - from weddings to funerals, from clan gatherings to royal celebrations - features specific dishes that have been prepared the same way for generations.',
                    lg: 'Emmere ya Ganda y\'empisa ye nsonga mu bulamu bw\'awamu n\'emikolo. Buli mukolo omukulu - okuva ku mbaga okutuuka ku kuziika, okuva ku lukuŋŋaana lw\'ebika okutuuka ku mbaga z\'obwakabaka - erina emmere ey\'enjawulo etegekeddwa mu ngeri y\'emu okumala emirembe.'
                  })}
                </p>
                <p>
                  {t({ 
                    en: 'The preparation and sharing of food is an expression of hospitality, respect, and cultural identity. Meals are typically eaten communally, with family members gathered around a shared dish, using the right hand to eat.',
                    lg: 'Okutegeka n\'okugabana emmere y\'ekika eky\'okunyumiriza abagenyi, ekitiibwa, n\'obuwangwa. Emmere emirundi mingi eliibwa awamu, n\'ab\'omu nnyumba bakuŋŋaanyiziddwa okwetoloola esowaani ey\'awamu, nga bakozesa omukono gw\'okudduyo okulya.'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-amber-100 border border-gray-200'
              }`}
            >
              {t(cat.name)}
            </button>
          ))}
        </div>

        {/* Foods Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredFoods.map((food) => (
            <div 
              key={food.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100"
              onClick={() => setSelectedDish(food)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={food.image}
                  alt={t(food.name)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(food.name.en)
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{t(food.name)}</h3>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full">
                    {t(categories.find(c => c.id === food.category)?.name || { en: food.category, lg: food.category })}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">{t(food.shortDesc)}</p>
                <span className="text-amber-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
                  {t({ en: 'Learn Recipe', lg: 'Yiga Okufumba' })}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Eating Etiquette Section */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6">
            {t({ en: 'Traditional Eating Etiquette', lg: 'Empisa z\'Okulya ez\'Edda' })}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 rounded-xl p-5">
              <h3 className="font-semibold mb-2">{t({ en: 'Wash Your Hands', lg: 'Naaza Engalo zo' })}</h3>
              <p className="text-amber-100 text-sm">
                {t({ en: 'Always wash hands before and after eating. Traditionally, a basin of water is brought to the table.', lg: 'Bulijjo naaza engalo zo nga tonnalya era ng\'omaze okulya. Mu mpisa, ekibiina ky\'amazzi kireeteebwa ku mmeeza.' })}
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-5">
              <h3 className="font-semibold mb-2">{t({ en: 'Use Right Hand', lg: 'Kozesa Omukono gw\'Oludduyo' })}</h3>
              <p className="text-amber-100 text-sm">
                {t({ en: 'Food is eaten with the right hand. Using the left hand is considered impolite.', lg: 'Emmere eliibwa n\'omukono gw\'oludduyo. Okukozesa omukono gw\'okubambo kitegeezebwa ng\'obutassibwa kitiibwa.' })}
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-5">
              <h3 className="font-semibold mb-2">{t({ en: 'Share Communally', lg: 'Gabana n\'Abalala' })}</h3>
              <p className="text-amber-100 text-sm">
                {t({ en: 'Meals are shared from a common dish, promoting unity and togetherness.', lg: 'Emmere egabanyizibwa okuva mu sowanyi ey\'awamu, nga kuzzaamu obumu n\'okubeera awamu.' })}
              </p>
            </div>
            <div className="bg-white/10 rounded-xl p-5">
              <h3 className="font-semibold mb-2">{t({ en: 'Respect Elders', lg: 'Ssamu Ekitiibwa Abakulu' })}</h3>
              <p className="text-amber-100 text-sm">
                {t({ en: 'Elders are served first and begin eating before others. Children wait for adults to start.', lg: 'Abakulu baweerezebwa abasooka era batandika okulya abalala nga bakyalindirira. Abaana balindirira abakulu okutandika.' })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Food Detail Modal */}
      {selectedDish && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDish(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedDish.image}
                alt={t(selectedDish.name)}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full mb-2 inline-block">
                  {t(categories.find(c => c.id === selectedDish.category)?.name || { en: selectedDish.category, lg: selectedDish.category })}
                </span>
                <h2 className="text-3xl font-bold text-white">{t(selectedDish.name)}</h2>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t({ en: 'About This Dish', lg: 'Ebikwata ku Mmere Eno' })}
                </h3>
                <p className="text-gray-700">{t(selectedDish.description)}</p>
              </div>

              <div className="bg-amber-50 rounded-xl p-4">
                <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  {t({ en: 'Preparation', lg: 'Okutegeka' })}
                </h4>
                <p className="text-amber-800">{t(selectedDish.preparation)}</p>
              </div>

              <div className="bg-emerald-50 rounded-xl p-4">
                <h4 className="font-semibold text-emerald-900 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  {t({ en: 'Serving Style', lg: 'Engeri y\'Okuweereza' })}
                </h4>
                <p className="text-emerald-800">{t(selectedDish.servingStyle)}</p>
              </div>

              <div className="bg-purple-50 rounded-xl p-4">
                <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  {t({ en: 'Cultural Significance', lg: 'Omugaso gw\'Obuwangwa' })}
                </h4>
                <p className="text-purple-800">{t(selectedDish.culturalSignificance)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
