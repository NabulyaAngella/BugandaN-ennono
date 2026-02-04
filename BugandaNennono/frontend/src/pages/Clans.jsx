import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function Clans(){
  const { t } = useLanguage()
  const [selectedClan, setSelectedClan] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const clans = [
    { 
      id: 1,
      totem: { en: 'Ffumbe (Civet Cat)', lg: 'Ffumbe' }, 
      leader: { en: 'Omutaka Walusimbi Mbirozankya Yusuf Kigumba', lg: 'Omutaka Walusimbi Mbirozankya Yusuf Kigumba' }, 
      motto: { en: 'Kasolo ki? Ffumbe, Kasolo ki? Ffumbe, Kasolo ki? Ffumbe. Galinnya galinnya e bakka e bakka basengejja, e bakka banywa omwenge kakozaakoza, tolikoza mu lw\'effumbe.', lg: 'Kasolo ki? Ffumbe, Kasolo ki? Ffumbe, Kasolo ki? Ffumbe. Galinnya galinnya e bakka e bakka basengejja, e bakka banywa omwenge kakozaakoza, tolikoza mu lw\'effumbe.' },
      description: { en: 'The Ffumbe (Civet Cat) clan is one of the most prominent clans in Buganda. This clan played a significant role in the coronation ceremonies of the Kabaka. The clan head is responsible for making the royal drums and maintaining the sacred traditions of the kingdom Jean-Baptiste Walusimbi from this clan was one of the Uganda Martyrs.', lg: 'Ekika ky\'Effumbe kye kimu ku bika eby\'ekitiibwa ennyo mu Buganda. Ekika kino kyalina ekifo ky\'omugaso ennyo mu mikolo gy\'okutikka Kabaka.' },
      image: 'https://buganda.or.ug/wp-content/uploads/2025/01/ffumbe-clan.jpg',
      akabbiro: { en: 'Ngo (Leopard)', lg: 'Ngo' },
      historicalSite: { en: 'Ggomba, Busiro', lg: 'Ggomba, Busiro' }
    },
    { 
      id: 2,
      totem: { en: 'Nkima (Monkey)', lg: 'Nkima' }, 
      leader: { en: 'Omutaka Walusansa', lg: 'Omutaka Walusansa' }, 
      motto: { en: 'Enkima bw\'erya essubi erirya n\'ekimyu.', lg: 'Enkima bw\'erya essubi erirya n\'ekimyu.' },
      description: { en: 'The Nkima (Monkey) clan is the maternal clan of the current Kabaka, Ronald Muwenda Mutebi II. His mother, Namasole Sarah Nalule Kisosonkole, belonged to this clan. This is significant because the Kabaka belongs to his mother\'s clan rather than the royal clan.', lg: 'Ekika ky\'Enkima ye kika kya maama wa Kabaka akulira, Ronald Muwenda Mutebi II. Namasole Sarah Nalule Kisosonkole yali wa kika kino.' },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZwdUdWnquZX51ca5V7RXxEzqLJB-ujVeU9Q&s',
      akabbiro: { en: 'Kkobe (Yam)', lg: 'Kkobe' },
      historicalSite: { en: 'Bukesa, Kyadondo', lg: 'Bukesa, Kyadondo' }
    },
    { 
      id: 3,
      totem: { en: 'Nte (Cow)', lg: 'Nte' }, 
      leader: { en: 'Omutaka Katongole', lg: 'Omutaka Katongole' }, 
      motto: { en: 'Ekyuma nkiridde n\'omukembe ngulidde. Wante taliiko kubi mbadde ngaleeta omusumba n\'agayiwa.', lg: 'Ekyuma nkiridde n\'omukembe ngulidde. Wante taliiko kubi mbadde ngaleeta omusumba n\'agayiwa.' },
      description: { en: 'The Nte (Cow) clan is one of the largest and most influential clans in Buganda. Members of this clan traditionally held important positions in cattle rearing and agricultural activities. The cow represents wealth, prosperity, and sustenance in Buganda culture.', lg: 'Ekika ky\'Ente kye kimu ku bika ebikulu ennyo mu Buganda. Abantu b\'ekika kino baali abakulu mu kulunda ente n\'ebyobulimi.' },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbvVe2E8wpFyz-YSAAdR3CYELCSlm0hm7LQA&s',
      akabbiro: { en: 'Ngabi (Bushbuck)', lg: 'Ngabi' },
      historicalSite: { en: 'Kkooki, Buddu', lg: 'Kkooki, Buddu' }
    },
    { 
      id: 4,
      totem: { en: 'Mpologoma (Lion)', lg: 'Mpologoma' }, 
      leader: { en: 'Omutaka Ssebuganda Namuguzi Wilson Ndawula', lg: 'Omutaka Ssebuganda Namuguzi Wilson Ndawula' }, 
      motto: { en: 'Ssebuganda Namuguzi omutaka w\'e lwada kyagaba tasaaga. Ssebuganda Namuguzi bwaba anaatabaala asabira ku kyoto, Ssebuganda Namuguzi akaabbira kasagga. Ssebuganda Namuguzi atambula masajja. Ggwe mpagi ggwe luwaga.', lg: 'Ssebuganda Namuguzi omutaka w\'e lwada kyagaba tasaaga. Ssebuganda Namuguzi bwaba anaatabaala asabira ku kyoto, Ssebuganda Namuguzi akaabbira kasagga. Ssebuganda Namuguzi atambula masajja. Ggwe mpagi ggwe luwaga.' },
      description: { en: 'The Mpologoma (Lion) clan represents strength, courage, and royalty. Members of this clan were traditionally warriors and protectors of the kingdom. The lion symbolizes the power and majesty of Buganda.', lg: 'Ekika ky\'Empologoma kikiikirira amaanyi, obuvumu, n\'obwami. Abantu b\'ekika kino baali abalwanyi n\'abakuumi b\'obwakabaka.' },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSUvc1eGxj7RwisrpjqESNU92mBPWckKgcNw&s',
      akabbiro: { en: 'Ngo (Leopard)', lg: 'Ngo' },
      historicalSite: { en: 'Lwada, Busiro', lg: 'Lwada, Busiro' }
    },
    { 
      id: 5,
      totem: { en: 'Njovu (Elephant)', lg: 'Njovu' }, 
      leader: { en: 'Omutaka Mukalo David Ssesanga', lg: 'Omutaka Mukalo David Ssesanga' }, 
      motto: { en: 'Nsimbye amasanga, Nakate ajja! Batte mugamba, tungulako emu, bbiri ku lwayi, ssatu ku kitooke. Ssiba mbutanta nempasasa mbutantabu', lg: 'Nsimbye amasanga, Nakate ajja! Batte mugamba, tungulako emu, bbiri ku lwayi, ssatu ku kitooke. Ssiba mbutanta nempasasa mbutantabu' },
      description: { en: 'The Njovu (Elephant) clan is known for its wisdom and strength. The elephant represents memory, intelligence, and power in Buganda culture. This clan has produced many notable leaders and intellectuals throughout history.', lg: 'Ekika ky\'Enjovu kimanyiddwa olw\'amagezi n\'amaanyi. Enjovu ekiikirira okujjukira, amagezi, n\'amaanyi mu mbeera za Buganda.' },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1puqkyuyY0lazPQxtqkrqijzJgtqx2Dt5ZQ&s',
      akabbiro: { en: 'Nsamba', lg: 'Nsamba' },
      historicalSite: { en: 'Masaka', lg: 'Masaka' }
    },
    { 
      id: 6,
      totem: { en: 'Mbogo (Buffalo)', lg: 'Mbogo' }, 
      leader: { en: 'Omutaka Kayiira Gajuule Fredrick David Kasibante', lg: 'Omutaka Kayiira Gajuule Fredrick David Kasibante' }, 
      motto: { en: 'Kadagado Kadagado Kadagado kaagwa, aka Namagembe tonkwatako ng\'olidde embogo, zonna Mbogo, yaaaaaaaa', lg: 'Kadagado Kadagado Kadagado kaagwa, aka Namagembe tonkwatako ng\'olidde embogo, zonna Mbogo, yaaaaaaaa' },
      description: { en: 'The Mbogo (Buffalo) clan is associated with strength and resilience. The buffalo is revered for its power and tenacity. This clan has been instrumental in preserving many of Buganda\'s traditional practices.', lg: 'Ekika ky\'Embogo kisomosebwa ku maanyi n\'obugumu. Embogo ekwatiddwa ekitiibwa olw\'amaanyi gaayo n\'obugumiikiriza.' },
      image: 'https://buganda.or.ug/wp-content/uploads/2025/01/mbogo-clan.jpg',
      akabbiro: { en: 'Njaza', lg: 'Njaza' },
      historicalSite: { en: 'Namagembe', lg: 'Namagembe' }
    },
    { 
      id: 7,
      totem: { en: 'Ngeye (Colobus Monkey)', lg: 'Ngeye' }, 
      leader: { en: 'Omutaka Kasujja Kyesimba Kakande Kibirige Sheba', lg: 'Omutaka Kasujja Kyesimba Kakande Kibirige Sheba' }, 
      motto: { en: 'Tatuula tatuula asuulumba busuulumbi ttutu, ttutu lifumita likyali tto', lg: 'Tatuula tatuula asuulumba busuulumbi ttutu, ttutu lifumita likyali tto' },
      description: { en: 'The Ngeye (Colobus Monkey) clan is known for its beautiful black and white totem animal. This clan traditionally provided the royal robes made from colobus monkey skins, which were worn during important ceremonies.', lg: 'Ekika ky\'Engeye kimanyiddwa olw\'ekisolo kyakyo ekirabika bulungi ennyo. Ekika kino kyaweereza engoye z\'obwakabaka ezikolebwa ku ddiba ly\'engeye.' },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW78FyAMlqw_tVzsiEaiRETWL959jezhHE6w&s',
      akabbiro: { en: 'Nkula', lg: 'Nkula' },
      historicalSite: { en: 'Busiro', lg: 'Busiro' }
    },
    { 
      id: 8,
      totem: { en: 'Lugave (Pangolin)', lg: 'Lugave' }, 
      leader: { en: 'Omutaka Ndugwa Grace Ssemakula', lg: 'Omutaka Ndugwa Grace Ssemakula' }, 
      motto: { en: 'Lwa Ndugwa lwa Katende bwabirya bwempoza, sseruku lulengejja, Simanyi lunangwira? Bw\'ompa akwala ako ng\'ebbanja liwedde.', lg: 'Lwa Ndugwa lwa Katende bwabirya bwempoza, sseruku lulengejja, Simanyi lunangwira? Bw\'ompa akwala ako ng\'ebbanja liwedde.' },
      description: { en: 'The Lugave (Pangolin) clan is one of the most respected clans. The pangolin is a sacred and protected animal. Joseph Mulwanyamuli Ssemwogerere, a former Prime Minister (Katikkiro) of Buganda, belongs to this clan.', lg: 'Ekika ky\'Olugave kye kimu ku bika ebisingira okussibwa ekitiibwa. Olugave y\'ekisolo ekitukuvu era ekikuumibwa.' },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMpvxjdG-VbWI8FID0GZr1cboqqcDonGRVA&s',
      akabbiro: { en: 'Nsenene (Grasshopper)', lg: 'Nsenene' },
      historicalSite: { en: 'Katende', lg: 'Katende' }
    },
    { 
      id: 9,
      totem: { en: 'Mutima (Heart)', lg: 'Mutima' }, 
      leader: { en: 'Omutaka Nakirembeka Allan Waliggo', lg: 'Omutaka Nakirembeka Allan Waliggo' }, 
      motto: { en: 'Kaababembe, lw\'abaaga ente omutima ssirya haa haa haa.', lg: 'Kaababembe, lw\'abaaga ente omutima ssirya haa haa haa.' },
      description: { en: 'The Mutima (Heart) clan is unique in that its totem is not an animal but a body organ - the heart. The current Katikkiro (Prime Minister), Charles Peter Mayiga, and a former Katikkiro, Joash Mayanja Nkangi, belong to this clan. The heart represents love, courage, and the center of life.', lg: 'Ekika ky\'Omutima kya njawulo kubanga omusenge wakyo si kisolo wabula ekitundu ky\'omubiri - omutima. Katikkiro ali ku ntebe, Charles Peter Mayiga, wa kika kino.' },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdMROm2VhUcTMSdw8V4Uu7vIXZDEarCTfIGQ&s',
      akabbiro: { en: 'Butiko (Mushroom)', lg: 'Butiko' },
      historicalSite: { en: 'Mengo', lg: 'Mengo' }
    },
    { 
      id: 10,
      totem: { en: 'Mmamba Gabunga (Lungfish)', lg: 'Mmamba Gabunga' }, 
      leader: { en: 'Omutaka Gabunga Mubiru Zziikwa', lg: 'Omutaka Gabunga Mubiru Zziikwa' }, 
      motto: { en: 'Sirya mmamba amazzi nnywa. Sirya mmamba amazzi nnywa. Eno ssi mmamba nnamakaka. Ggwendisanga mu menvu n\'ebikuta alibirya. Akalya kokka ke keetenda obulyampola.', lg: 'Sirya mmamba amazzi nnywa. Sirya mmamba amazzi nnywa. Eno ssi mmamba nnamakaka. Ggwendisanga mu menvu n\'ebikuta alibirya. Akalya kokka ke keetenda obulyampola.' },
      description: { en: 'The Mmamba Gabunga (Lungfish) clan is one of the naval clans of Buganda. The Gabunga is the traditional Admiral of the Buganda fleet, responsible for all activities on Lake Victoria. This clan maintains the royal canoes and manages water-related ceremonies.', lg: 'Ekika ky\'Emmamba Gabunga kye kimu ku bika eby\'amazzi mu Buganda. Gabunga ye mukulu w\'amagali g\'obwakabaka, ayimiridde ebikolwa byonna ku Nnyanja Vikotoria.' },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbwVpbq8B5Z7V__BovW6oqPWbbYNu17CMwkA&s',
      akabbiro: { en: 'Nsenene', lg: 'Nsenene' },
      historicalSite: { en: 'Ssese Islands', lg: 'Ebizinga bya Ssese' }
    },
    { 
      id: 11,
      totem: { en: 'Nkejje (Small Fish)', lg: 'Nkejje' }, 
      leader: { en: 'Omutaka Kikwata Ronald Mugolo', lg: 'Omutaka Kikwata Ronald Mugolo' }, 
      motto: { en: 'Kiiso, kiiso kiiso kya mbuzi kirekerera omussi nekitunuulira omubaazi tungulako emu osuule mu kyoto abazzukulu bawulire evvumbe x3.', lg: 'Kiiso, kiiso kiiso kya mbuzi kirekerera omussi nekitunuulira omubaazi tungulako emu osuule mu kyoto abazzukulu bawulire evvumbe x3.' },
      description: { en: 'The Nkejje (Small Fish) clan is another aquatic clan in Buganda. The nkejje fish is an important food source in the region and this clan has traditionally been involved in fishing activities on Lake Victoria.', lg: 'Ekika ky\'Enkejje kye kika ekirala eky\'amazzi mu Buganda. Enkejje ye ky\'emmere eky\'omugaso mu kitundu kino.' },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2h_8WJMYtw0q3LdvRdM00cC9rT3IjqUU36w&s',
      akabbiro: { en: 'Kayovu', lg: 'Kayovu' },
      historicalSite: { en: 'Lake Victoria shores', lg: 'Embalama za Nnyanja Vikotoria' }
    },
    { 
      id: 12,
      totem: { en: 'Nswaswa (Oribi)', lg: 'Nswaswa' }, 
      leader: { en: 'Omutaka Mayengo', lg: 'Omutaka Mayengo' }, 
      motto: { en: 'Mayengo ttutu', lg: 'Mayengo ttutu' },
      description: { en: 'The Nswaswa (Oribi) clan has the oribi antelope as its totem. This small antelope is known for its speed and agility. The clan has contributed significantly to Buganda\'s cultural preservation.', lg: 'Ekika ky\'Enswa swa kirina enswa swa ng\'omusenge gwakyo. Enswa swa ya njawulo olw\'embiro zaayo n\'okuba nkwakulukwaku.' },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg74D-66noXwuSJ-PXE7N8BjXRwkS6CvFP8w&s',
      akabbiro: { en: 'Njaza', lg: 'Njaza' },
      historicalSite: { en: 'Busujju', lg: 'Busujju' }
    },
    { 
      id: 13,
      totem: { en: 'Nnyonyi Nakinsige (Crested Crane)', lg: 'Nnyonyi Nakinsige' }, 
      leader: { en: 'Omutaka Kyeyune Fred Mayegga', lg: 'Omutaka Kyeyune Fred Mayegga' }, 
      motto: { en: 'Ono ssimwana kijjolooto, bw\'ali wa nnyonyi abuuse majwala akonkomadde ku kyoto, yeerabidde be batta. Kyesulluta yesuluuta bwesuluusi. Anti awalalira waggulu, bw\'ali wa nnyonyi abuuse.', lg: 'Ono ssimwana kijjolooto, bw\'ali wa nnyonyi abuuse majwala akonkomadde ku kyoto, yeerabidde be batta. Kyesulluta yesuluuta bwesuluusi. Anti awalalira waggulu, bw\'ali wa nnyonyi abuuse.' },
      description: { en: 'The Nnyonyi Nakinsige (Crested Crane) clan has the grey crowned crane as its totem - the same bird that is Uganda\'s national symbol. This clan is associated with beauty, grace, and national pride.', lg: 'Ekika ky\'Ennyonyi Nakinsige kirina nnyonyi nakinsige ng\'omusenge - nnyonyi y\'emu eyali akabonero ka Uganda. Ekika kino kisomosebwa ku bulungi, ekisa, n\'okwenyumiriza eggwanga.' },
      image: 'https://buganda.or.ug/wp-content/uploads/2025/01/nnyonyi-nakinsige-clan.jpg',
      akabbiro: { en: 'Nsenene', lg: 'Nsenene' },
      historicalSite: { en: 'Kyaddondo', lg: 'Kyaddondo' }
    },
    { 
      id: 14,
      totem: { en: 'Ngabi Nnyunga (Bushbuck)', lg: 'Ngabi Nnyunga' }, 
      leader: { en: 'Omutaka Kannyana Kiwana Daniel', lg: 'Omutaka Kannyana Kiwana Daniel' }, 
      motto: { en: 'Kakube akamenye, abayunga tunnakayunga, yunga, yunga.', lg: 'Kakube akamenye, abayunga tunnakayunga, yunga, yunga.' },
      description: { en: 'The Ngabi Nnyunga (Bushbuck) clan has a variant of the bushbuck antelope as its totem. The bushbuck is known for its beautiful coat and its shy nature in the wild.', lg: 'Ekika ky\'Engabi Nnyunga kirina engabi y\'ekika ekirala ng\'omusenge gwakyo. Engabi emanyiddwa olw\'olusu lwayo olulungi.' },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ98c-LRorQU3yDskdfTGJRBzzGqNYJ45X5GA&s',
      akabbiro: { en: 'Nte', lg: 'Nte' },
      historicalSite: { en: 'Busiro', lg: 'Busiro' }
    },
    { 
      id: 15,
      totem: { en: 'Nkusu (Parrot)', lg: 'Nkusu' }, 
      leader: { en: 'Omutaka Ssenkusu Ssonja Kiyindi Peter', lg: 'Omutaka Ssenkusu Ssonja Kiyindi Peter' }, 
      motto: { en: 'Kyana kya nkusu kirya, kyana kya nkusu kirya kyegiringijja bwe kigwa wansi tekidda waggulu. Be bakwasa Kabaka engogeza ng\'atuuzibwa ku namulondo.', lg: 'Kyana kya nkusu kirya, kyana kya nkusu kirya kyegiringijja bwe kigwa wansi tekidda waggulu. Be bakwasa Kabaka engogeza ng\'atuuzibwa ku namulondo.' },
      description: { en: 'The Nkusu (Parrot) clan plays a crucial role in coronation ceremonies. They are responsible for presenting the Kabaka with the engogeza (royal spear) when he ascends to the throne. This is one of the most important ceremonial duties in the kingdom.', lg: 'Ekika ky\'Enkusu kirina ekifo ekikulu mu mikolo gy\'okutikka Kabaka. Beebazibwa okuwa Kabaka engogeza (effumu ly\'obwakabaka) ng\'alinnya ku ntebe.' },
      image: 'https://buganda.or.ug/wp-content/uploads/2025/03/Nkusu-Clan.jpg',
      akabbiro: { en: 'Kasanke', lg: 'Kasanke' },
      historicalSite: { en: 'Busiro', lg: 'Busiro' }
    },
    { 
      id: 16,
      totem: { en: 'Musu (Edible Rat)', lg: 'Musu' }, 
      leader: { en: 'Omutaka Muyingo Samuel Bulega', lg: 'Omutaka Muyingo Samuel Bulega' }, 
      motto: { en: 'Kivu Kivu, Kivu kyajja okuluma n\'okutwaalana.', lg: 'Kivu Kivu, Kivu kyajja okuluma n\'okutwaalana.' },
      description: { en: 'The Musu (Edible Rat) clan is the clan of the current Queen (Nnabagereka), Sylvia Nagginda. The musu is a small rodent that was traditionally an important source of protein in Buganda.', lg: 'Ekika ky\'Omusu kye kika kya Nnabagereka akulira, Sylvia Nagginda. Omusu y\'ekisolo ekitono ekyali ekikulu mu kulya mu Buganda.' },
      image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinklqVtBEmzUlDpJoFQs58lI_nRdmF8OfseHslgPj7TQirqMyYmG8UDprb2b3VpIRZRZlhHjvUfhwsz_WcfyTcKrM0WUeG64BChc6KoDS-PtjFrz1RoTZmQYcp6Krue-lHHX1dp_zTOL0SMCpxL_BWJ7KyIlfX6uqB4xfTKevfJgD6IqjqWP4c9Jgk/s1600/download%20(3).jpeg',
      akabbiro: { en: 'Kayovu', lg: 'Kayovu' },
      historicalSite: { en: 'Busiro', lg: 'Busiro' }
    },
    { 
      id: 17,
      totem: { en: 'Mpeewo (Antelope)', lg: 'Mpeewo' }, 
      leader: { en: 'Omutaka Kiggye Henry Kkulubya', lg: 'Omutaka Kiggye Henry Kkulubya' }, 
      motto: { en: 'Ba lwampiima bagenda ne kkungu ejjinja lino terinyeenya terinyeenya, terinyeenya kali mu tteeke kali mu tteeke.', lg: 'Ba lwampiima bagenda ne kkungu ejjinja lino terinyeenya terinyeenya, terinyeenya kali mu tteeke kali mu tteeke.' },
      description: { en: 'The Mpeewo (Antelope) clan has a type of antelope as its totem. This clan is known for its steadfastness and resilience, as reflected in their motto about the unmovable stone.', lg: 'Ekika ky\'Empeewo kirina empeewo ng\'omusenge gwakyo. Ekika kino kimanyiddwa olw\'obugumu bwakyo n\'okunywerera.' },
      image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=800',
      akabbiro: { en: 'Nsenene', lg: 'Nsenene' },
      historicalSite: { en: 'Busiro', lg: 'Busiro' }
    },
    { 
      id: 18,
      totem: { en: 'Kiwere (Hippopotamus)', lg: 'Kiwere' }, 
      leader: { en: 'Omutaka Luwonko Mbaale Zamuwanga James', lg: 'Omutaka Luwonko Mbaale Zamuwanga James' }, 
      motto: { en: 'Gulanda Gulanda, omuddo gulanda gulunda gwannya omuddo. Alimulisa omukka ndimutta, bw\'alidda ngadissa.', lg: 'Gulanda Gulanda, omuddo gulanda gulunda gwannya omuddo. Alimulisa omukka ndimutta, bw\'alidda ngadissa.' },
      description: { en: 'The Kiwere (Hippopotamus) clan is one of the aquatic clans of Buganda. The hippopotamus is associated with power and the waters of Lake Victoria. This clan traditionally had responsibilities related to water bodies.', lg: 'Ekika ky\'Ekiwere kye kimu ku bika eby\'amazzi mu Buganda. Ekiwere kisomosebwa ku maanyi n\'amazzi ga Nnyanja Vikotoria.' },
      image: 'https://animalfactguide.com/wp-content/uploads/2020/12/hippo.jpg',
      akabbiro: { en: 'Nvubu', lg: 'Nvubu' },
      historicalSite: { en: 'Lake Victoria', lg: 'Nnyanja Vikotoria' }
    },
    { 
      id: 19,
      totem: { en: 'Njaza (Reedbuck)', lg: 'Njaza' }, 
      leader: { en: 'Omutaka Kitanda', lg: 'Omutaka Kitanda' }, 
      motto: { en: 'Akaana k\'enjaza alikatta alikaliwa, Ssendabanyolo tantama. Ow\'omuggo aliguta.', lg: 'Akaana k\'enjaza alikatta alikaliwa, Ssendabanyolo tantama. Ow\'omuggo aliguta.' },
      description: { en: 'The Njaza (Reedbuck) clan has the reedbuck antelope as its totem. This graceful animal is often found in swampy areas and near water bodies in Uganda.', lg: 'Ekika ky\'Enjaza kirina enjaza ng\'omusenge gwakyo. Ekisolo kino ekirabika bulungi kisangibwa mu bifo eby\'amazzi mangi.' },
      image: 'https://buganda.or.ug/wp-content/uploads/2025/03/Njaza-Clan.jpg',
      akabbiro: { en: 'Mbogo', lg: 'Mbogo' },
      historicalSite: { en: 'Buddu', lg: 'Buddu' }
    },
    { 
      id: 20,
      totem: { en: 'Mbwa (Dog)', lg: 'Mbwa' }, 
      leader: { en: 'Omutaka Mutasingwa Kakonge Yowasi', lg: 'Omutaka Mutasingwa Kakonge Yowasi' }, 
      motto: { en: 'Ntegereza, Ntegereza abataka kye baatukola.', lg: 'Ntegereza, Ntegereza abataka kye baatukola.' },
      description: { en: 'The Mbwa (Dog) clan has the dog as its totem. Dogs have been loyal companions to the Baganda for centuries, and this clan is associated with loyalty, protection, and companionship.', lg: 'Ekika ky\'Embwa kirina embwa ng\'omusenge gwakyo. Embwa zibadde mikwano emirungi eri Baganda okumala emyaka mingi.' },
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShY8iv48s9DWlNz6s5uOf4Gtc18KKYxQDHHg&s',
      akabbiro: { en: 'Kibe', lg: 'Kibe' },
      historicalSite: { en: 'Kyaddondo', lg: 'Kyaddondo' }
    }
  ]

  const filteredClans = clans.filter(clan => 
    clan.totem.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
    clan.leader.en.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedClans = filteredClans.slice().sort((a, b) => 
    a.totem.en.localeCompare(b.totem.en, 'en', { sensitivity: 'base' })
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-royal-700 via-royal-600 to-royal-800 text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t({ en: 'The Clans of Buganda', lg: 'Ebika bya Buganda' })}
          </h1>
          <p className="text-xl text-royal-100 max-w-3xl">
            {t({ 
              en: 'Discover the rich heritage of Buganda\'s 52+ clans, each with unique totems, traditions, and roles in preserving the kingdom\'s culture.', 
              lg: 'Zuula obugagga bw\'ebika bya Buganda ebisukka mu 52, buli kimu n\'emisenge gyakyo, empisa, n\'ekifo mu kukuuma obuwangwa bw\'obwakabaka.' 
            })}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Clan System Explanation */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-gray-100">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-royal-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-8 h-8 text-royal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t({ en: 'The Clan System (Obuka)', lg: 'Enkola y\'Ebika (Obuka)' })}
              </h2>
              <div className="prose prose-lg text-gray-700 max-w-none">
                <p className="mb-4">
                  {t({ 
                    en: 'Buganda society is organized around a strong, patrilineal clan system, with over 52 recognized clans. The kingdom has a rich culture and is made up of these clans, whose heads are known as the Abataka. Every Muganda belongs to a clan, which is passed down from the father.', 
                    lg: 'Embeera y\'Obuganda eteekebwateekebwa ku nkola y\'ebika ey\'amaanyi, n\'ebika ebisukka mu 52 ebiweebwa ekitiibwa. Obwakabaka bulina obuwangwa obugagga era bukolebwa ku bika bino, be bakubiriza babimanyiddwa nga Abataka. Buli Muganda ali mu kika, ekiweebwa okuva eri kitaawe.' 
                  })}
                </p>
                <p className="mb-4">
                  {t({ 
                    en: 'However, it is only the Kabaka who belongs to his mother\'s clan rather than the royal clan (Olulyo Olulangira). Other princes and princesses belong to the royal clan, Abalangira, which is unique in that it has no totem.', 
                    lg: 'Naye, Kabaka yekka abeera mu kika kya nnyina so si mu kika ky\'obwakabaka (Olulyo Olulangira). Abalangira abalala n\'Abambejja bali mu kika ky\'obwakabaka, Abalangira, ekika eky\'enjawulo kubanga tekirina musenge.' 
                  })}
                </p>
                <p>
                  {t({ 
                    en: 'Each clan has a principal totem (omuziro) and a minor totem (akabbiro), which members are traditionally forbidden from eating. Clan heads (Abataka) are crucial custodians of heritage and lineage.', 
                    lg: 'Buli kika kirina omusenge omukulu (omuziro) n\'omusenge omutono (akabbiro), abantu b\'ekika tebakkirizibwa kulya. Abakubiriza b\'ebika (Abataka) be bakuumi ab\'omugaso ennyo ab\'obusika n\'olunyiriri.' 
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-royal-500 to-royal-600 rounded-xl p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">52+</div>
            <div className="text-royal-100">{t({ en: 'Clans', lg: 'Ebika' })}</div>
          </div>
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">18</div>
            <div className="text-amber-100">{t({ en: 'Counties', lg: 'Amasaza' })}</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">600+</div>
            <div className="text-emerald-100">{t({ en: 'Years of History', lg: 'Emyaka gy\'Ebyafaayo' })}</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white text-center">
            <div className="text-4xl font-bold mb-2">9M+</div>
            <div className="text-purple-100">{t({ en: 'Baganda People', lg: 'Abantu ba Baganda' })}</div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <input
              type="text"
              placeholder={t({ en: 'Search clans by name or leader...', lg: 'Noonya ebika ku linnya oba omukulembeze...' })}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-royal-500 focus:border-transparent"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Clans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sortedClans.map((clan) => (
            <div 
              key={clan.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100"
              onClick={() => setSelectedClan(clan)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={clan.image}
                  alt={t(clan.totem)}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(clan.totem.en)
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">{t(clan.totem)}</h3>
                  <p className="text-white/80 text-sm">{t(clan.leader)}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">{t(clan.description)}</p>
                <div className="flex items-center justify-between text-xs">
                  <span className="bg-royal-100 text-royal-700 px-3 py-1 rounded-full">
                    {t({ en: 'Akabbiro:', lg: 'Akabbiro:' })} {t(clan.akabbiro)}
                  </span>
                  <span className="text-royal-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t({ en: 'Learn More', lg: 'Yiga Ebisingawo' })}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500">
          {/* {t({ en: `Showing ${sortedClans.length} of 52+ clans`, lg: `Okulaga ${sortedClans.length} mu bika 52+` })} */}
        </p>
      </div>

      {/* Clan Detail Modal */}
      {selectedClan && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedClan(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64">
              <img
                src={selectedClan.image}
                alt={t(selectedClan.totem)}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <button
                onClick={() => setSelectedClan(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-3xl font-bold text-white mb-2">{t(selectedClan.totem)}</h2>
                <p className="text-white/90">{t(selectedClan.leader)}</p>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t({ en: 'About This Clan', lg: 'Ebikwata ku Kika Kino' })}
                </h3>
                <p className="text-gray-700">{t(selectedClan.description)}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-royal-50 rounded-xl p-4">
                  <h4 className="font-semibold text-royal-900 mb-1">
                    {t({ en: 'Principal Totem (Omuziro)', lg: 'Omusenge Omukulu (Omuziro)' })}
                  </h4>
                  <p className="text-royal-700">{t(selectedClan.totem)}</p>
                </div>
                <div className="bg-amber-50 rounded-xl p-4">
                  <h4 className="font-semibold text-amber-900 mb-1">
                    {t({ en: 'Minor Totem (Akabbiro)', lg: 'Omusenge Omutono (Akabbiro)' })}
                  </h4>
                  <p className="text-amber-700">{t(selectedClan.akabbiro)}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {t({ en: 'Clan Motto (Oluguudo)', lg: 'Ekyokulabirako ky\'Ekika (Oluguudo)' })}
                </h4>
                <p className="text-gray-700 italic">"{t(selectedClan.motto)}"</p>
              </div>

              <div className="bg-emerald-50 rounded-xl p-4">
                <h4 className="font-semibold text-emerald-900 mb-1">
                  {t({ en: 'Historical Site', lg: 'Ekifo ky\'Ebyafaayo' })}
                </h4>
                <p className="text-emerald-700">{t(selectedClan.historicalSite)}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
