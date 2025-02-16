class LeaderInfo {
  constructor(about, cabinet, allegations) {
    this.about = about;
    this.cabinet = cabinet;
    this.allegations = allegations;
  }
}

class Leader {
  constructor(img, name, position, info) {
    this.img = img;
    this.name = name;
    this.position = position;
    this.info = info;
  }
}

const leaders = [
  new Leader('./src/img/Leaders/Tafawa-Balewa.png', 'Tafawa Balewa (1957-1959)', 'Prime Minister', new LeaderInfo(
    'Data yet to be uploaded', 
    'Data yet to be uploaded', 
    'Data yet to be uploaded'
  )),

  new Leader('./src/img/Leaders/Tafawa-Balewa-2.png', 'Tafawa Balewa (1959-1964)', 'Prime Minister', new LeaderInfo(
    'Data yet to be uploaded', 
    'Data yet to be uploaded', 
    'Data yet to be uploaded'
  )),
  
  new Leader('./src/img/Leaders/Nnamdi-Azikiwe.png', 'Nnamdi Azikiwe (1963-1966)', 'President', new LeaderInfo(
    `<p>Nnamdi Azikiwe was a Nigerian statesman and political leader who served as the first President of Nigeria from 1963 to 1966. He was a leading figure in the country's struggle for independence from British colonial rule.</p>
    <h4>Early Life and Education</h4>
    <p>Azikiwe was born on November 16, 1904, in Zungeru, Nigeria. He studied at Hope Waddell Training College in Calabar and later at Lincoln University in the United States.</p>
    <h4>Career</h4>
    <p>Azikiwe began his career as a journalist and later became involved in politics. He was a founding member of the National Council of Nigeria and the Cameroons (NCNC) and played a key role in the country's transition to independence.</p>
    <h4>Presidency</h4>
    <p>Azikiwe became the first President of Nigeria in 1963, following the country's transition from a British colony to a federal republic. During his presidency, he focused on promoting national unity and economic development.</p>
    <h4>Legacy</h4>
    <p>Azikiwe is remembered as a pioneering figure in Nigerian politics and a champion of African independence. He died on May 11, 1996.</p>`, 

    `<p></p>
    <p></p> 
    <p></p>`, 

    `<a href="">Allegation 1</a>
    <a href="">Allegation 2</a>
    <a href="">Allegation 3</a>
    <a href="">Allegation 4</a>`
  )),

  new Leader('./src/img/Leaders/Yakubu-Gowon.png', 'Yakubu Gowon (1966-1975)', 'Head of State', new LeaderInfo(
    `<p>Yakubu Gowon is a Nigerian politician and former military head of state. He ruled Nigeria from August 1, 1966, to July 29, 1975.</p>
     <h4>Early Life and Education</h4>
     <p>Gowon was born on October 19, 1934, in Kanke, Plateau State, Nigeria. He attended St. Bartholomew's School in Wusasa, Zaria, and later the Government College in Zaria.</p>
     <h4>Military Career</h4>
     <p>Gowon joined the Nigerian Army in 1954 and rose through the ranks. He attended the Royal Military Academy Sandhurst in the United Kingdom and later the Staff College in Camberley.</p>
     <h4>Presidency</h4>
     <p>Gowon became Nigeria's head of state after the assassination of Aguiyi-Ironsi. He played a key role in the Nigerian Civil War, also known as the Biafran War. His government implemented several policies, including the creation of 12 states and the establishment of the Nigerian National Oil Corporation.</p>
     <h4>Overthrow and Later Life</h4>
     <p>Gowon was overthrown in a bloodless coup on July 29, 1975, while attending an Organization of African Unity (OAU) summit in Kampala, Uganda. He went into exile in the United Kingdom, where he studied political science and international relations at the University of Warwick. Gowon later returned to Nigeria and has remained active in politics.</p>`, 

     `<p>Nelson Bossman Soroh</p> 
    <p>Michael Ayinde Adelanwa</p> 
    <p>Brig. Hassan U. Katsina</p>`, 

    `<a href="https://en.m.wikipedia.org/wiki/Yakubu_Gowon">Allegation 1</a>
    <a href="https://en.m.wikipedia.org/wiki/Olusegun_Obasanjo">Allegation 2</a>
    <a href="https://en.m.wikipedia.org/wiki/Theophilus_Danjuma">Allegation 3</a>
    <a href="https://en.m.wikipedia.org/wiki/Dikko_affair">Allegation 4</a>`
  )),

  new Leader('./src/img/Leaders/Murtala-Mohammed.png', 'Murtala Mohammed (1975-1976)', 'Head of State', new LeaderInfo(
    `<p>Murtala Mohammed was a Nigerian military officer and politician who served as the head of state from July 30, 1975, until his assassination on February 13, 1976.</p>
    <h4>Early Life and Education</h4>
    <p>Mohammed was born on November 8, 1938, in Kano, Nigeria. He attended the Kano Middle School and later the Government College in Kano.</p>
    <h4>Military Career</h4>
    <p>Mohammed joined the Nigerian Army in 1958 and rose through the ranks. He attended the Royal Military Academy Sandhurst in the United Kingdom and later the Nigerian Defence Academy.</p>
    <h4>Presidency</h4>
    <p>Mohammed seized power in a bloodless coup on July 30, 1975, overthrowing Yakubu Gowon. During his presidency, he implemented several policies, including the creation of seven new states, the reorganization of the federal government, and the establishment of a new constitution drafting committee.</p>
    <h4>Assassination</h4>
    <p>Mohammed was assassinated on February 13, 1976, in Lagos, Nigeria, during a failed coup attempt led by Lt. Col. Bukar Dimka.</p>
    <h4>Legacy</h4>
    <p>Mohammed is remembered for his efforts to reorganize the Nigerian government and economy. He also played a key role in the African liberation struggle, supporting anti-colonial movements across the continent.</p>`, 

    `<p></p> 
    <p></p>
    <p></p>`, 

    `<a href="">Allegation 1</a>
    <a href="">Allegation 2</a>
    <a href="">Allegation 3</a>
    <a href="">Allegation 4</a>`
  )),

  new Leader('./src/img/Leaders/Obasanjo-2.png', 'Olusegun Obasanjo (1976-1979)', 'Head of State', new LeaderInfo(
    `<p>Olusegun Obasanjo is a Nigerian politician and former military head of state. He ruled Nigeria from February 13, 1976, to October 1, 1979.</p>
    <h4>Early Life and Education</h4>
    <p>Obasanjo was born on March 5, 1937, in Abeokuta, Ogun State, Nigeria. He attended the Baptist Boys' High School in Abeokuta and later the Royal Military Academy Sandhurst in the United Kingdom.</p>
    <h4>Military Career</h4>
    <p>Obasanjo joined the Nigerian Army in 1958 and rose through the ranks. He played a key role in the Nigerian Civil War and later became the chief of staff at the Supreme Headquarters.</p>
    <h4>Presidency</h4>
    <p>Obasanjo became Nigeria's head of state after the assassination of Murtala Mohammed. During his presidency, he implemented several policies, including the establishment of a new constitution, the creation of 19 states, and the transition to civilian rule.</p>
    <h4>Transition to Civilian Rule</h4>
    <p>Obasanjo voluntarily transferred power to a civilian government on October 1, 1979, marking the beginning of Nigeria's Second Republic.</p>
    <h4>Later Life and Politics</h4>
    <p>Obasanjo was imprisoned for three years by the regime of Sani Abacha. After his release, he became a prominent figure in Nigerian politics and eventually became the President of Nigeria again from 1999 to 2007.</p>`, 

    `<p>Maj. Gen. O.A. Obada</p> 
    <p>Lieut. Col. M. Bulled</p>
    <p>Lieut. Col. Muktar Mohammed</p>`, 

    `<a href="https://en.m.wikipedia.org/wiki/Olusegun_Obasanjo">Allegation 1</a>`
  )),

  new Leader('./src/img/Leaders/Shehu_Shagari.png', 'Shehu Shagari (1979-1983)', 'President', new LeaderInfo(
    `<p>Shehu Shagari was a Nigerian politician who served as the President of Nigeria's Second Republic from October 1, 1979, to December 31, 1983.</p>
    <h4>Early Life and Education</h4>
    <p>Shagari was born on February 25, 1925, in Shagari, Sokoto State, Nigeria. He attended the Yabo Elementary School and later the Sokoto Middle School.</p>
    <h4>Political Career</h4>
    <p>Shagari began his political career in the 1950s, serving as a member of the Northern Nigeria House of Assembly. He later became the Minister of Economic Development and then the Minister of Finance.</p>
    <h4>Presidency</h4>
    <p>Shagari won the 1979 presidential election and became Nigeria's president. During his presidency, he focused on improving the country's economy, infrastructure, and education system.</p>
    <h4>Challenges and Overthrow</h4>
    <p>Shagari's presidency was marked by economic challenges, including a decline in oil prices and a rise in inflation. He was overthrown in a military coup on December 31, 1983, led by Muhammadu Buhari.</p>
    <h4>Later Life</h4>
    <p>Shagari died on December 28, 2018, at the age of 93.</p>`, 

    `<p>Adamu Ciroma</p>
    <p>Ibrahim Musa Gusau</p> 
    <p>Richard Akinjide</p>`, 

    `<a href="https://amp.theguardian.com/world/2019/jan/09/shehu-shagari-obituary">Allegation 1</a>
    <a href="https://saharareporters.com/2019/05/06/buhari-appoints-maitama-yusuf-%E2%80%94-same-man-he-accused-corruption-80s-%E2%80%94-board-railway">Allegation 2</a>
    <a href="https://saharareporters.com/2019/05/06/buhari-appoints-maitama-yusuf-%E2%80%94-same-man-he-accused-corruption-80s-%E2%80%94-board-railway">Allegation 3</a>
    <a href="https://www.upi.com/amp/Archives/1984/08/18/Former-finance-minister-to-go-on-trial-for-alleged-corruption/1262461649600/">Allegation 4</a>
    <a href="https://en.m.wikipedia.org/wiki/Umaru_Dikko">Allegation 5</a>`
  )),

  new Leader('./src/img/Leaders/Buhari-2.png', 'Muhammadu Buhari (1983-1985)', 'President', new LeaderInfo(
    `<p>Muhammadu Buhari is a Nigerian politician and former military head of state. He ruled Nigeria from December 31, 1983, to August 27, 1985.</p>
    <h4>Early Life and Education</h4>
    <p>Buhari was born on December 17, 1942, in Daura, Katsina State, Nigeria. He attended the Katsina Provincial Secondary School and later the Nigerian Military Training College.</p>
    <h4>Military Career</h4>
    <p>Buhari joined the Nigerian Army in 1962 and rose through the ranks. He played a key role in the Nigerian Civil War and later became the Governor of North-Eastern State.</p>
    <h4>Presidency</h4>
    <p>Buhari seized power in a military coup on December 31, 1983, overthrowing Shehu Shagari. During his presidency, he implemented several policies, including the War Against Indiscipline (WAI) and the establishment of the National Security Organization (NSO).</p>
    <h4>Overthrow and Later Life</h4>
    <p>Buhari was overthrown in a military coup on August 27, 1985, led by Ibrahim Babangida. He later became a politician and won the presidential election in 2015, becoming the President of Nigeria for a second time.</p>`, 

    `<p>Allison Madueke</p>
    <p>Mohammed Sani Sami</p>
    <p>Jeremiah Useni</p>`, 

    `<a href="https://www.premiumtimesng.com/news/617309-uk-charges-ex-petroleum-minister-diezani-alison-madueke-for-corruption.html?tztc=1">Allegation 1</a>
    <a href="https://www.efcc.gov.ng/efcc/news-and-information/news-release/281-efcc-docks-mahammed-sani-over-possession-of-counterfeit-2-1m">Allegation 2</a>
    <a href="https://thestreetjournal.org/uk-court-seizes-2m-cash-linked-to-former-abacha-minister-jeremiah-useni/">Allegation 3</a>
    <a href="https://dailytrust.com/the-many-troubles-of-david-mark/">Allegation 4</a>`
  )),

  new Leader('./src/img/Leaders/Babangida.png', 'Ibrahim Babangida (1985-1993)', 'Head of State', new LeaderInfo(
    `<p>Ibrahim Babangida is a Nigerian politician and former military head of state. He ruled Nigeria from August 27, 1985, to August 26, 1993.</p>
    <h4>Early Life and Education</h4>
    <p>Babangida was born on August 17, 1941, in Minna, Niger State, Nigeria. He attended the Government College in Bida and later the Nigerian Military Training College.</p>
    <h4>Military Career</h4>
    <p>Babangida joined the Nigerian Army in 1962 and rose through the ranks. He played a key role in several military coups, including the 1983 coup that brought Muhammadu Buhari to power.</p>
    <h4>Presidency</h4>
    <p>Babangida seized power in a military coup on August 27, 1985, overthrowing Muhammadu Buhari. During his presidency, he implemented several policies, including the Structural Adjustment Programme (SAP) and the establishment of the National Orientation Agency.</p>
    <h4>Transition to Civilian Rule</h4>
    <p>Babangida's government conducted elections in 1992, which were won by Moshood Abiola. However, Babangida annulled the election results, leading to widespread protests and his eventual resignation on August 26, 1993.</p>
    <h4>Later Life</h4>
    <p>After leaving office, Babangida retired to his farm in Minna. He has remained active in Nigerian politics and has been involved in several peace initiatives.</p>`, 

    `<p>Samson Ojo</p>
    <p>Robert Akonobi</p>
    <p>Herbert Eze</p>`, 

    `<a href="https://en.m.wikipedia.org/wiki/Jonah_David_Jang">Allegation 1</a>
    <a href="https://military-history.fandom.com/wiki/Eben_Ibim_Princewill#cite_note-1">Allegation 2</a>
    <a href="https://en.m.wikipedia.org/wiki/Jonah_David_Jang">Allegation 3</a>
    <a href="https://www.bbc.com/news/world-africa-66582585.amp">Allegation 4</a>
    <a href="https://en.m.wikipedia.org/wiki/Abdulfatah_Ahmed">Allegation 5</a>
    <a href="https://dailytrust.com/the-many-troubles-of-david-mark/">Allegation 6</a>
    <a href="https://icpc.gov.ng/2022/12/15/icpc-arraigns-civil-servant-for-extortion-forgery-and-more/">Allegation 7</a>
    <a href="https://en.wikipedia.org/wiki/Lawan_Gwadabe">Allegation 8</a>
    <a href="https://en.m.wikipedia.org/wiki/Bode_George">Allegation 9</a>`
  )),

  new Leader('./src/img/Leaders/Shonekan.png', 'Ernest Shonekan (1993)', 'Head of State', new LeaderInfo(
    `<p>Ernest Shonekan is a Nigerian politician and businessman who served as the Head of State of Nigeria from August 26, 1993, to November 17, 1993.</p>
    <h4>Early Life and Education</h4>
    <p>Shonekan was born on May 9, 1936, in Lagos, Nigeria. He attended the CMS Grammar School in Lagos and later the University of London.</p>
    <h4>Career</h4>
    <p>Shonekan began his career in the corporate world, working for several companies, including the United African Company (UAC). He later became the chairman of the UAC.</p>
    <h4>Presidency</h4>
    <p>Shonekan was appointed as the Head of State by Ibrahim Babangida, who resigned on August 26, 1993. However, his government was short-lived, and he was overthrown by Sani Abacha on November 17, 1993.</p>
    <h4>Later Life</h4>
    <p>After leaving office, Shonekan returned to the private sector. He has remained active in Nigerian politics and has been involved in several initiatives aimed at promoting democracy and good governance.</p>`, 
    
    `<p>Ogbonnaya Onu</p>
    <p>Abubakar Saleh Michika</p>
    <p>Akpan Isemin</p>`, 

    `<a>Allegation 1</a>
    <a>Allegation 1</a>
    <a>Allegation 1</a>`
  )),

  new Leader('./src/img/Leaders/Sani_Abacha.png', 'Sani Abacha (1993-1998)', 'Head of State', new LeaderInfo(
    `<p>Sani Abacha was a Nigerian military officer and politician who served as the Head of State of Nigeria from November 17, 1993, to June 8, 1998.</p>
    <h4>Early Life and Education</h4>
    <p>Abacha was born on September 20, 1943, in Kano, Nigeria. He attended the Nigerian Military Training College and later the Nigerian Defence Academy.</p>
    <h4>Military Career</h4>
    <p>Abacha joined the Nigerian Army in 1962 and rose through the ranks. He played a key role in several military coups, including the 1983 coup that brought Muhammadu Buhari to power.</p>
    <h4>Presidency</h4>
    <p>Abacha seized power in a military coup on November 17, 1993, overthrowing Ernest Shonekan. During his presidency, he implemented several policies, including the establishment of the National Council of States and the creation of six new states.</p>
    <p>Abacha's government was notorious for its human rights abuses, including the execution of Ken Saro-Wiwa, a prominent environmental activist, and the imprisonment of Moshood Abiola, the winner of the 1993 presidential election.</p>
    <h4>Death</h4>
    <p>Abacha died on June 8, 1998, while still in office. He was succeeded by Abdulsalami Abubakar.</p>`, 

    `<p>Anthoni Obi</p>
    <p>Ahmadu Hussaini</p>
    <p>John Ebiye</p>`, 

    `<a href="https://en.m.wikipedia.org/wiki/Paul_Obi">Allegation 1</a>
    <a href="https://en.m.wikipedia.org/wiki/Abdulrasheed_Bawa">Allegation 2</a>
    <a href="https://en.m.wikipedia.org/wiki/Amen_Edore_Oyakhire>Allegation 3</a>
    <a href="https://en.m.wikipedia.org/wiki/Jibril_Yakubu">Allegation 4</a>`
  )),

  new Leader('./src/img/Leaders/Abubakar.png', 'Abdulsalami Abubakar (1998-1999)', 'Head of State', new LeaderInfo(
    `<p>Abdulsalami Abubakar is a Nigerian military officer and politician who served as the Head of State of Nigeria from June 9, 1998, to May 29, 1999.</p>
    <h4>Early Life and Education</h4>
    <p>Abubakar was born on June 13, 1942, in Minna, Niger State, Nigeria. He attended the Nigerian Military Training College and later the Nigerian Defence Academy.</p>
    <h4>Military Career</h4>
    <p>Abubakar joined the Nigerian Army in 1963 and rose through the ranks. He played a key role in several military operations, including the Nigerian Civil War.</p>
    <h4>Presidency</h4>
    <p>Abubakar seized power after the death of Sani Abacha on June 8, 1998. During his presidency, he implemented several reforms, including the establishment of a new constitution and the transition to civilian rule.</p>
    <h4>Transition to Civilian Rule</h4>
    <p>Abubakar's government conducted elections in 1999, which were won by Olusegun Obasanjo. Abubakar handed over power to Obasanjo on May 29, 1999, marking the beginning of Nigeria's Fourth Republic.</p>
    <h4>Later Life</h4>
    <p>After leaving office, Abubakar retired to his farm in Minna. He has remained active in Nigerian politics and has been involved in several peace initiatives.</p>`, 
    
    `<p>General Abdulsalam Abubakar</p>
    <p>Rear Admiral Mike Akhigbe</p>
    <p>Air Vice Marshal Adamu Musa Daggash</p>`, 

    `<a href="https://saharareporters.com/2012/11/16/halliburton-bribery-scam-million-dollar-bribes-were-wired-abdulsalami-abubakar-julius">Allegation 1</a>
    <a href="https://en.m.wikipedia.org/wiki/Ishaya_Bamaiyi">Allegation 2</a>
    <a href="https://saharareporters.com/2022/10/06/court-refuses-ex-army-chief-jeremiah-useni-access-ps2million-stolen-during-late-dictator">Allegation 3</a>
    <a href="https://en.m.wikipedia.org/wiki/Bashir_Salihi_Magashi">Allegation 4</a>`
  )),

  new Leader('./src/img/Leaders/Obasanjo.png', 'Olusegun Obasanjo (1999-2007)', 'President', new LeaderInfo(
    `<p>Olusegun Obasanjo is a Nigerian politician and former military head of state. He served as the President of Nigeria from May 29, 1999, to May 29, 2007.</p>
    <h4>Early Life and Education</h4>
    <p>Obasanjo was born on March 5, 1937, in Abeokuta, Ogun State, Nigeria. He attended the Baptist Boys' High School in Abeokuta and later the Royal Military Academy Sandhurst in the United Kingdom.</p>
    <h4>Military Career</h4>
    <p>Obasanjo joined the Nigerian Army in 1958 and rose through the ranks. He played a key role in the Nigerian Civil War and later became the head of state from 1976 to 1979.</p>
    <h4>Presidency</h4>
    <p>Obasanjo won the 1999 presidential election and became Nigeria's president. During his presidency, he implemented several policies, including the establishment of the Economic and Financial Crimes Commission (EFCC) and the National Health Insurance Scheme (NHIS).</p>
    <h4>Re-election and Later Life</h4>
    <p>Obasanjo was re-elected in 2003 and served a second term as president. He handed over power to Umaru Musa Yar'Adua on May 29, 2007. After leaving office, Obasanjo remained active in Nigerian politics and has been involved in several international organizations.</p>`,

    `<p>Adamu Bello</p>
    <p>Femi Fani-Kayode</p>
    <p>Idris Waziri</p>`, 

    `<a href="https://www.globalwitness.org/en/blog/meet-nigerias-opposition-leader/">Allegation 1</a>
    <a href="https://en.m.wikipedia.org/wiki/Adamu_Bello">Allegation 2</a>
    <a href="https://en.m.wikipedia.org/wiki/Femi_Fani-Kayode">Allegation 3</a>
    <a href="https://en.m.wikipedia.org/wiki/Cornelius_Adebayo">Allegation 4</a>
    <a href="https://en.m.wikipedia.org/wiki/Rabiu_Kwankwaso">Allegation 5</a>
    <a href="https://en.m.wikipedia.org/wiki/Fabian_Osuji">Allegation 6</a>
    <a href="https://en.m.wikipedia.org/wiki/Iyorchia_Ayu">Allegation 7</a>
    <a href="https://en.m.wikipedia.org/wiki/Iyorchia_Ayu">Allegation 8</a>
    <a href="https://en.m.wikipedia.org/wiki/Broderick_Bozimo">Allegation 9</a>
    <a href="https://en.m.wikipedia.org/wiki/Femi_Fani-Kayode">Allegation 10</a>
    <a href="https://en.m.wikipedia.org/wiki/Cornelius_Adebayo">Allegation 11</a>
    <a href="https://en.m.wikipedia.org/wiki/Cornelius_Adebayo">Allegation 12</a>
    <a href="https://www.globalwitness.org/en/blog/meet-nigerias-opposition-leader/">Allegation 13</a>
    <a href="https://en.m.wikipedia.org/wiki/Adamu_Bello">Allegation 14</a>
    <a href="https://en.m.wikipedia.org/wiki/Haliru_Mohammed_Bello">Allegation 15</a>
    <a href="https://en.m.wikipedia.org/wiki/Iyorchia_Ayu">Allegation 16</a>
    <a href="https://en.m.wikipedia.org/wiki/Sunday_Afolabi_(politician)">Allegation 17</a>
    <a href="https://en.m.wikipedia.org/wiki/Mohammed_Shata">Allegation 18</a>
    <a href="https://en.m.wikipedia.org/wiki/Anthony_Anenih">Allegation 19</a>`
  )),

  new Leader('./src/img/Leaders/Yar Adua.png', `Umaru Musa Yar'Adua (2007-2010)`, 'President', new LeaderInfo(
    `<p>Umaru Musa Yar'Adua was a Nigerian politician who served as the President of Nigeria from May 29, 2007, until his death on May 5, 2010.</p>
    <h4>Early Life and Education</h4>
    <p>Yar'Adua was born on August 16, 1951, in Katsina, Katsina State, Nigeria. He attended the Government College in Keffi and later the Ahmadu Bello University in Zaria.</p>
    <h4>Political Career</h4>
    <p>Yar'Adua began his political career in the 1990s, serving as a member of the House of Representatives. He later became the Governor of Katsina State from 1999 to 2007.</p>
    <h4>Presidency</h4>
    <p>Yar'Adua won the 2007 presidential election and became Nigeria's president. During his presidency, he implemented several policies, including the establishment of the Ministry of Niger Delta Affairs and the introduction of the Seven-Point Agenda.</p>
    <h4>Illness and Death</h4>
    <p>Yar'Adua suffered from a heart condition and was hospitalized in Saudi Arabia for several months. He died on May 5, 2010, at the age of 58.</p>`,

    `<p>Babatunde Omotoba</p>
    <p>Charles Ugwuh</p>
    <p>Achike Udenwa</p>`, 

    `<a href="https://en.m.wikipedia.org/wiki/Goodluck_Jonathan">Allegation 1</a>
    <a href="https://en.m.wikipedia.org/wiki/Adenike_Grange">Allegation 2</a>
    <a href="https://en.m.wikipedia.org/wiki/Diezani_Alison-Madueke">Allegation 3</a>
    <a href="https://en.m.wikipedia.org/wiki/Ufot_Ekaette">Allegation 4</a>
    <a href="https://en.m.wikipedia.org/wiki/Rilwanu_Lukman">Allegation 5</a>
    <a href="https://en.m.wikipedia.org/wiki/Diezani_Alison-Madueke">Allegation 6</a>`
  )),

  new Leader('./src/img/Leaders/Goodluck-Jonathan.png', 'Goodluck Jonathan (2010-2015)', 'President', new LeaderInfo(
    `<p>Goodluck Jonathan is a Nigerian politician who served as the President of Nigeria from May 6, 2010, to May 29, 2015.</p>
    <h4>Early Life and Education</h4>
    <p>Jonathan was born on November 20, 1957, in Otuoke, Bayelsa State, Nigeria. He attended the Mater Dei High School in Imo State and later the University of Port Harcourt.</p>
    <h4>Political Career</h4>
    <p>Jonathan began his political career in the 1990s, serving as the Deputy Governor of Bayelsa State. He later became the Governor of Bayelsa State from 2005 to 2007.</p>
    <h4>Presidency</h4>
    <p>Jonathan became Nigeria's president after the death of Umaru Musa Yar'Adua. He won the 2011 presidential election and served a full term as president. During his presidency, he implemented several policies, including the establishment of the Subsidy Reinvestment and Empowerment Programme (SURE-P) and the introduction of the Almajiri education system.</p>
    <h4>Election Loss and Later Life</h4>
    <p>Jonathan lost the 2015 presidential election to Muhammadu Buhari. He conceded defeat and handed over power to Buhari on May 29, 2015. After leaving office, Jonathan established the Goodluck Jonathan Foundation, which focuses on promoting democracy, peace, and development in Africa.</p>`,

    `<p>Bukar Tijani</p>
    <p>Mohammed Bello Adoke</p>
    <p>Stella Oduah-Ogiemwonyi</p>`, 

    `<a href="https://en.m.wikipedia.org/wiki/Mohammed_Bello_Adoke">Allegation 1</a>
    <a href="https://en.m.wikipedia.org/wiki/Diezani_Alison-Madueke">Allegation 2</a>
    <a href="https://en.m.wikipedia.org/wiki/Bashir_Yuguda">Allegation 3</a>
    <a href="https://en.m.wikipedia.org/wiki/Diezani_Alison-Madueke">Allegation 4</a>
    <a href="https://en.m.wikipedia.org/wiki/Goodluck_Jonathan">Allegation 5</a>`
  )),

  new Leader('./src/img/Leaders/Buhari.png', 'Muhammadu Buhari (2015-2023)', 'President', new LeaderInfo(
    `<p>Muhammadu Buhari is a Nigerian politician who served as the President of Nigeria from May 29, 2015, to May 29, 2023.</p>
    <h4>Early Life and Education</h4>
    <p>Buhari was born on December 17, 1942, in Daura, Katsina State, Nigeria. He attended the Katsina Provincial Secondary School and later the Nigerian Military Training College.</p>
    <h4>Military Career</h4>
    <p>Buhari joined the Nigerian Army in 1962 and rose through the ranks. He played a key role in several military operations, including the Nigerian Civil War.</p>
    <h4>Presidency (1983-1985)</h4>
    <p>Buhari first became Nigeria's head of state in 1983, after a military coup. He ruled until 1985, when he was overthrown by Ibrahim Babangida.</p>
    <h4>Presidency (2015-2023)</h4>
    <p>Buhari first became Nigeria's head of state in 1983, after a military coup. He ruled until 1985, when he was overthrown by Ibrahim Babangida.Buhari won the 2015 presidential election and became Nigeria's president. He was re-elected in 2019. During his presidency, he implemented several policies, including the establishment of the Presidential Committee on the Northeast Initiative (PCNI) and the introduction of the Treasury Single Account (TSA) system.</p>
    <h4>Legacy and Later Life</h4>
    <p>Buhari's presidency was marked by efforts to combat corruption, terrorism, and economic instability. He handed over power to Bola Tinubu on May 29, 2023.</p>`,

    `<p>Sabo Nanono</p>
    <p>Mustapha Baba Shehuri</p>
    <p>Hadi Sirika</p>`, 

    `<a href="https://en.m.wikipedia.org/wiki/Muhammadu_Buhari">Allegation 1</a>
    <a href="https://en.m.wikipedia.org/wiki/Yemi_Osinbajo">Allegation 2</a>
    <a href="https://en.m.wikipedia.org/wiki/Isa_Ali_Pantami">Allegation 3</a>
    <a href=" https://en.m.wikipedia.org/wiki/Bashir_Salihi_Magashi">Allegation 4</a>
    <a href="https://en.m.wikipedia.org/wiki/Lai_Mohammed">Allegation 5</a>
    <a href="https://en.m.wikipedia.org/wiki/Abubakar_Malami">Allegation 6</a>
    <a href="https://en.m.wikipedia.org/wiki/Timipre_Sylva">Allegation 7</a>
    <a href="https://en.m.wikipedia.org/wiki/Ogbonnaya_Onu">Allegation 8</a>
    <a href="https://en.m.wikipedia.org/wiki/Rotimi_Amaechi">Allegation 9</a>
    <a href="https://en.m.wikipedia.org/wiki/Babatunde_Fashola"></a>`
  )),
  
  new Leader('./src/img/Leaders/Tinubu.png', 'Bola Tinubu (2023-present)', 'President', new LeaderInfo(
    `<p>Bola Tinubu is a Nigerian politician who has been serving as the President of Nigeria since May 29, 2023.</p>
    <h4>Early Life and Education</h4>
    <p>Tinubu was born on March 29, 1952, in Lagos, Nigeria. He attended Richard J. Daley College in Chicago and later graduated from Chicago State University.</p>
    <h4>Political Career</h4>
    <p>Tinubu began his political career in the 1990s, serving as a senator and later as the Governor of Lagos State from 1999 to 2007.</p>
    <h4>Presidency</h4>
    <p>Tinubu won the 2023 presidential election and became Nigeria's president. His presidency is focused on addressing Nigeria's economic, security, and infrastructure challenges.</p>
    <h4>Agenda and Policies</h4>
    <p>Tinubu's administration has outlined several key policies, including the expansion of infrastructure development, improvement of security, and promotion of economic growth.</p>
    <p>As the current president, Tinubu's presidency is still unfolding, and his legacy is being written.</p>`, 

    `<p>Abubakar Kyari</p>
    <p>Aliyu Sabi Abdullahi</p>
    <p>Hannatu Musawa</p>`, 

    `<a href="https://saharareporters.com/2022/06/08/corruption-allegations-against-tinubu-linger-70-year-old-ex-lagos-governor-becomes-ruling">Allegation 1</a>
    <a href="https://en.m.wikipedia.org/wiki/Nyesom_Wike">Allegation 2</a>
    <a href="https://en.m.wikipedia.org/wiki/Betta_Edu">Allegation 3</a>
    <a href="https://en.m.wikipedia.org/wiki/Heineken_Lokpobiri">Allegation 4</a>
    <a href="https://en.m.wikipedia.org/wiki/David_Umahi">Allegations</a>`
  )),
  // Add more leader objects as needed
];

export { Leader, LeaderInfo, leaders };