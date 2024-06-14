// src/routes/api/posts.js
import fs from 'fs';

const environmentalKeywords = ["Klima", "Umwelt", "Nachhaltigkeit", "Energieeffizienz", "Ressourcenverbrauch", "Abfallmanagement", "Umweltverschmutzung", "Umweltschutz", "Ressourcenschonung", "CO2-Fußabdruck"];
const socialKeywords = ["Soziale Verantwortung", "Vielfalt", "Inklusion", "Menschenrechte", "Arbeitsbedingungen", "Gesundheit und Sicherheit am Arbeitsplatz", "Gemeinschaftsengagement", "Mitarbeiterengagement", "Gesundheit", "Diversity", "Arbeitskultur"];
const governanceKeywords = ["Ethik", "Governance", "Unternehmensführung", "Compliance", "Richtlinien", "Integrität", "Verantwortung", "Transparenz"];

// Read the dataset
const linkedinPosts =[
    {
      "urn": "urn:li:activity:7184549159159427072",
      "text": "Let`s build the „Future Jedi`s“\n\nDo we really need Jedi`s in the insurance industry? \n\nDo we need motivated, open-minded colleagues to shape the future of insurance?\n\nDo we need new \"future skills\" to grow?\n\nThank you for future oriented Companies and Senior Insurance Managers, who support our #InTa mission!\n\nAllianz Helvetia Insurance Group Acredia Versicherung AG MetLife UNION Biztosító Gothaer Merkur Versicherung ARAG SE, Direktion für Österreich Coface AXA Swiss Re Zavarovalnica Sava Österreichische Hagelversicherung VVaG  \n",
      "title": "Let`s build the „Future Jedi`s“",
      "url": "https://www.linkedin.com/pulse/lets-build-future-jedis-erika-krizsan-vyjgf",
      "postedAtTimestamp": 1712930002012,
      "postedAtISO": "2024-04-12T13:53:22.012Z",
      "timeSincePosted": "2mo",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAABKEFpMBk8Kt-ieQ1kFqn0GmGo0q5LBCm2s?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABKEFpMBk8Kt-ieQ1kFqn0GmGo0q5LBCm2s",
      "authorProfileId": "ACoAABKEFpMBk8Kt-ieQ1kFqn0GmGo0q5LBCm2s",
      "authorHeadline": "\"Helping Innovation Happen Through Education & Collaboration\"",
      "authorFullName": "Erika Krizsan",
      "image": "https://media.licdn.com/dms/image/D4D12AQHXaYtwOBO71A/article-cover_image-shrink_600_2000/0/1712928632591?e=1723680000&v=beta&t=ixyEMOiH-OqhxJUIoth3sxipUz-m6h2dkRA1iLdyYdM"
    },
    {
      "urn": "urn:li:activity:7173418295369285632",
      "text": "Tolles Projekt-Kick-off #oneSAP bei der Merkur Versicherung in Graz. 👍💪\n\nadesso orange Austria GmbH \n\n#adessoorangeaustria #S4HANATransformation #bestteamever #sapinsurance #adesso",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7173418295369285632?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7173418295369285632%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1710276197283,
      "postedAtISO": "2024-03-12T20:43:17.283Z",
      "timeSincePosted": "3mo",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAAAp6nRMB-NfCuYvZFJJrfOoPA73ZeDPGy1o?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAp6nRMB-NfCuYvZFJJrfOoPA73ZeDPGy1o",
      "authorProfileId": "ACoAAAp6nRMB-NfCuYvZFJJrfOoPA73ZeDPGy1o",
      "authorHeadline": "We transform your system landscape 🍊to the next level 💪",
      "authorFullName": "Johann Grafl",
      "image": "https://media.licdn.com/dms/image/D4D22AQFSLVSyl8a6EQ/feedshare-shrink_2048_1536/0/1710276195114?e=1721260800&v=beta&t=_cmQs6feTPzEktumYGeJSf4zchRxUzWG1ju5CyQw4a4"
    },
    {
      "urn": "urn:li:activity:7120335845936480256",
      "text": "One Day , exhibited at Merkurversicherung, Graz",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7120335845936480256?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7120335845936480256%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1697620355114,
      "postedAtISO": "2023-10-18T09:12:35.114Z",
      "timeSincePosted": "8mo",
      "isRepost": true,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAAC_gHIQBu8Hp6gAgP4KUvw11RhQjNXMv-q4?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC_gHIQBu8Hp6gAgP4KUvw11RhQjNXMv-q4",
      "authorProfileId": "ACoAAC_gHIQBu8Hp6gAgP4KUvw11RhQjNXMv-q4",
      "authorHeadline": "Künstler bei Asma Art- selbständig",
      "authorFullName": "Asma Kocjan",
      "image": "https://media.licdn.com/dms/image/D4E22AQFwAwWwdcnM7A/feedshare-shrink_2048_1536/0/1697620290232?e=1721260800&v=beta&t=aJ3LBpSBlpD1by57LqHjn8Y6Mwfts463NP1JcU_5ATk"
    },
    {
      "urn": "urn:li:activity:7115971156427313153",
      "text": "Thank you Merkur Versicherung for hosting us and our great Alliances Amazon Web Services (AWS) and Red Hat for their partnership and innovative ideas in co-creation. #wearekyndryl #theheartofprogress #strongertogether\nGünther Matouschek Maria Kirschner Christian Kudler Günter Kugler Gina Wong Leslie Kittredge Bindu Oleti Nina Kny Razvan Ghita Danijela Radinkovic",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7115971156427313153?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7115971156427313153%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1696579732043,
      "postedAtISO": "2023-10-06T08:08:52.043Z",
      "timeSincePosted": "9mo",
      "isRepost": true,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAACgDfasBpiSQSqgpSnFKfqkcLLuHvqrY80Y?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACgDfasBpiSQSqgpSnFKfqkcLLuHvqrY80Y",
      "authorProfileId": "ACoAACgDfasBpiSQSqgpSnFKfqkcLLuHvqrY80Y",
      "authorHeadline": "Associate Director, Field Marketing, Kyndryl Alps",
      "authorFullName": "Harald Spranger",
      "image": "https://media.licdn.com/dms/image/D4D22AQED2t9sgmUwxA/feedshare-shrink_2048_1536/0/1696542613052?e=1721260800&v=beta&t=xzErGQ_f56-nhpsluhOmuHfWb3EvafPTLnbn7JkP2mM"
    },
    {
      "urn": "urn:li:activity:7115621654097014784",
      "text": "Yes, it makes a difference! 💚 \n#charity #aac2023 #agileconference #agilemindset  ",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7115621654097014784?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7115621654097014784%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1696496404194,
      "postedAtISO": "2023-10-05T09:00:04.194Z",
      "timeSincePosted": "9mo",
      "isRepost": true,
      "authorType": "Company",
      "authorProfileUrl": "https://www.linkedin.com/company/jipp-it/",
      "authorProfileId": "jipp-it",
      "authorFollowersCount": "1K",
      "authorFullName": "JIPP.IT",
      "image": "https://media.licdn.com/dms/image/D4D22AQET4KNAR4UL0g/feedshare-shrink_2048_1536/0/1695930689365?e=1721260800&v=beta&t=aOoL88HDBoMU4lnlXO7IuHImmX-Z2gzzHcdx67Wwk2A"
    },
    {
      "urn": "urn:li:activity:7177983094950400000",
      "text": "#Malnutrition can increase the development of #geriatric #syndromes and contribute to a #higher #prevalence of #falls and #osteoporoticfractures, leading to #lossofindependence and an increased rate of institutionalization.\n\nFurthermore, malnutrition is also a #modifiable #risk #factor, but one that can be identified and #optimized preoperatively through screening procedures, thereby minimizing the individual risk of complications.\n\nLet's try to act more instead of just reacting. \n\nThanks to Hilfswerk Österreich Hilfswerk Steiermark and Regina Roller-Wirnsberger for their comment (see below) on this so important topic on the news #ZIB ORF .\n\nWe (dieOrthopaeden) try to consider these risks at our #Kompetenzzentrum #OrthoGeriatrie and minimize them.The interdisciplinary approach of #GeriatricMedicine and #OrthopedicSurgery is needed. \n\n#teamworkmakesthedreamwork #spinesurgery #electivesurgery Junge Geriatrie Privatklinik Graz Ragnitz | PremiQaMed Group PremiQaMed Group #interdisciplinaryapproach Merkur Versicherung UNIQA Insurance Group\n\nInteresting articles and studies for that topic: \nOrthopäde 2022 . 51:81–90 https://lnkd.in/drtuRnjZ\nActa Orthop. 2021 Jun;92(3):358-363. doi:10.1080/17453674.2021.1882092. \nNutrients. 2022 Jul 29;14(15):3123. doi: 10.3390/nu14153123.\n\nhttps://lnkd.in/dTDw4KRA",
      "title": "Mangelernährung im Alter - ZIB 13:00 vom 22.03.2024 vom 22.03.2024 um 13:00 Uhr",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7177983094950400000?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7177983094950400000%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1711364530313,
      "postedAtISO": "2024-03-25T11:02:10.313Z",
      "timeSincePosted": "2mo",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAACVwkxUBuCMLBPIhE-BkjCnAyUhjNYfLuvE?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACVwkxUBuCMLBPIhE-BkjCnAyUhjNYfLuvE",
      "authorProfileId": "ACoAACVwkxUBuCMLBPIhE-BkjCnAyUhjNYfLuvE",
      "authorHeadline": "Spine and Orthopedic Surgeon | Focus: Spine and Orthogeriatrics | Interventional Pain Management SSIPM | EAMA-Member",
      "authorFullName": "dr. med. Leo Kronberger",
      "image": "https://media.licdn.com/dms/image/sync/D4D27AQF90HFtlxcvng/articleshare-shrink_800/0/1711391058016?e=1718960400&v=beta&t=SyXuL1mVOz7jnH3yv4HYd3HNrpMJw9yunUCLhokiRsM"
    },
    {
      "urn": "urn:li:activity:7109949188490043392",
      "text": "I believe on \"lifelong learning\"!\n\nMy mission is to motivate young Talents to \"love\" insurance & innovation! Every day is new opportunity to learn something new. \nWelcome New #InTa Members Merkur Versicherung Gothaer @DAS Biztosito \n\nToday by our #InTa Digital Lounge we learned a lot about AI & Insurance industry. \n\nThank you Pedro de Sousa Avelino from FWD Insurance & Yannick Even from Swiss Re to support our #InTa mission to shape the future of insurance together.\n\nMotiveted, open-minded Talents are the future of our industry. If we show insights, use-cases, it`s sure, they will transfer new opportunities in their organisation.\n\nDo you know, who won our Digital Quiz?  \"I\" is the wright answer! Congratulation Savannah! ",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7109949188490043392?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7109949188490043392%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1695143983004,
      "postedAtISO": "2023-09-19T17:19:43.004Z",
      "timeSincePosted": "9mo",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAABKEFpMBk8Kt-ieQ1kFqn0GmGo0q5LBCm2s?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABKEFpMBk8Kt-ieQ1kFqn0GmGo0q5LBCm2s",
      "authorProfileId": "ACoAABKEFpMBk8Kt-ieQ1kFqn0GmGo0q5LBCm2s",
      "authorHeadline": "\"Helping Innovation Happen Through Education & Collaboration\"",
      "authorFullName": "Erika Krizsan",
      "image": "https://media.licdn.com/dms/image/D4E22AQGQf1WeJ_OFMw/feedshare-shrink_2048_1536/0/1695143982047?e=1721260800&v=beta&t=QEITfdrqWhBTFUuadKxdi23D9DXcXuBQCrG_whOt8nM"
    },
    {
      "urn": "urn:li:activity:7121083977741807617",
      "text": "Look at This - new legend- Exhibition ar Merkur Versicherung Ingo Hofmann",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7121083977741807617?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7121083977741807617%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1697798723636,
      "postedAtISO": "2023-10-20T10:45:23.636Z",
      "timeSincePosted": "8mo",
      "isRepost": true,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAAC_gHIQBu8Hp6gAgP4KUvw11RhQjNXMv-q4?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC_gHIQBu8Hp6gAgP4KUvw11RhQjNXMv-q4",
      "authorProfileId": "ACoAAC_gHIQBu8Hp6gAgP4KUvw11RhQjNXMv-q4",
      "authorHeadline": "Künstler bei Asma Art- selbständig",
      "authorFullName": "Asma Kocjan",
      "image": "https://media.licdn.com/dms/image/D4E22AQG37IG5DO_k0A/feedshare-shrink_2048_1536/0/1697798592417?e=1721260800&v=beta&t=QynawDbTE4eU9XvIGEFnZX52xJI3mk1xIg7nlRjekQE"
    },
    {
      "urn": "urn:li:activity:7081925050752208897",
      "text": "1 year Merkur Versicherung  & hopefully many more happy years to come 💚 #teammerkur #anniversary #bestteam #happy",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7081925050752208897?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7081925050752208897%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1688462507904,
      "postedAtISO": "2023-07-04T09:21:47.904Z",
      "timeSincePosted": "1yr",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAAAhqHokB0VfEQo3743Mi6rB22KhzDxCKY8M?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAhqHokB0VfEQo3743Mi6rB22KhzDxCKY8M",
      "authorProfileId": "ACoAAAhqHokB0VfEQo3743Mi6rB22KhzDxCKY8M",
      "authorHeadline": "Attitude is a little thing that makes a big difference",
      "authorFullName": "Alexandra Fölzer-Nuñez",
      "image": "https://media.licdn.com/dms/image/D4D22AQGOCfZ8CloIQg/feedshare-shrink_2048_1536/0/1688462506987?e=1721260800&v=beta&t=11DxYKWH03kzgKc5OXJjrXjJKNpCmof6WvK9XCQJ6Bg"
    },
    {
      "urn": "urn:li:activity:7073987589485031424",
      "text": "Curious to learn how one of the most conservative industries – insurance – can reinvent itself and leverage data beyond pricing policies and paying out claims?\n \nLook no further: In the latest episode of the Data Democratization Podcast 🎧 you can hear from Daniela Pak-Graf about her journey at Merkur Innovation Lab:\n \n🔹 How data is an essential driver for innovation in various business units\n🔹 How data access needs to be managed under GDPR\n🔹 How #syntheticdata solves a lot of challenges around data anonymization\n🔹 How sophisticated statistics is often already enough to create real business impact\n🔹 How AI/ML can be leveraged nevertheless\n🔹 How data sharing with third parties opens up new business opportunities\n \nMerkur Versicherung is the oldest insurance company in Austria (started in 1798!) and it’s a true honor to work with such an organization and to support their data driven innovation journey with #syntheticdata\n \nListen in your browser ▶️ https://bit.ly/3MEiweG\nSpotify ▶️ https://bit.ly/3C3fPOS\nApple ▶️ https://bit.ly/3IQ7X7i",
      "title": "Synthetic data for impact: how to innovate in health insurance with Daniela Pak-Graf, Merkur Innovation Lab",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7073987589485031424?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7073987589485031424%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1686570069667,
      "postedAtISO": "2023-06-12T11:41:09.667Z",
      "timeSincePosted": "1yr",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAAAGagw8BdI1jAF2nv3KqxNbULAZb20lUm-g?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAGagw8BdI1jAF2nv3KqxNbULAZb20lUm-g",
      "authorProfileId": "ACoAAAGagw8BdI1jAF2nv3KqxNbULAZb20lUm-g",
      "authorHeadline": "CEO @ MOSTLY AI | AI & Machine Learning | Serial Entrepreneur | Business Angel",
      "authorFullName": "Tobias Hann",
      "image": "https://media.licdn.com/dms/image/sync/D4E27AQGc89iDDWDGmw/articleshare-shrink_800/0/1711463717193?e=1718960400&v=beta&t=HCbYfkrBXAwMUzQhULM8n7oSMh2lpvtuUhcCarbwGCo"
    },
    {
      "urn": "urn:li:activity:7077216563753304064",
      "text": "🎙️ Looking for fresh perspectives? Don't miss the newest episode of the Data Democratization Podcast, hosted by Alexandra Ebert. Join the conversation as Alexandra interviews Daniela Pak-Graf, the managing director of Merkur Versicherung Innovation Lab.\n\nGain insights into Daniela's groundbreaking work in the traditionally cautious field of health insurance. Discover how she is harnessing cutting-edge technologies and implementing effective data management strategies to drive innovation. Start listening now! 👉 https://hubs.ly/Q01VdPvF0\n.\n.\n.\n#healthinsurance #innovation #AI #syntheticdata #podcast #health #insurance #data #ML #dataprivacy",
      "title": "How to innovate in health insurance with Daniela Pak-Graf (Merkur Innovation Lab) - DDP E41",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7077216563753304064?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7077216563753304064%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1687339917124,
      "postedAtISO": "2023-06-21T09:31:57.124Z",
      "timeSincePosted": "1yr",
      "isRepost": false,
      "authorType": "Company",
      "authorProfileUrl": "https://www.linkedin.com/company/mostlyai/",
      "authorProfileId": "mostlyai",
      "authorFollowersCount": "14K",
      "authorFullName": "MOSTLY AI",
      "image": "https://media.licdn.com/dms/image/sync/D4D10AQH-QHucdtTeZg/image-shrink_1280/0/1687339917061?e=1718960400&v=beta&t=Ak3hflNNKF1l89UM89E-RlIAbYw18P4RxhvpoZxuMbE"
    },
    {
      "urn": "urn:li:activity:7118620192338755584",
      "text": "Dolce Vita 120 x 100 cm | 2023\nAcrylic-collage-technique on canvas, exhibited at Merkur Versicherung  , Conrad- von Hötzendorfstr. 84, 8010  Graz\n#art #artwork #artist #artforhome #artforcollectors #artforinterieurs #interieur #collageartwork Christian Kladiva Ingo Hofmann",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7118620192338755584?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7118620192338755584%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1697211311421,
      "postedAtISO": "2023-10-13T15:35:11.421Z",
      "timeSincePosted": "8mo",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAAC_gHIQBu8Hp6gAgP4KUvw11RhQjNXMv-q4?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC_gHIQBu8Hp6gAgP4KUvw11RhQjNXMv-q4",
      "authorProfileId": "ACoAAC_gHIQBu8Hp6gAgP4KUvw11RhQjNXMv-q4",
      "authorHeadline": "Künstler bei Asma Art- selbständig",
      "authorFullName": "Asma Kocjan",
      "image": "https://media.licdn.com/dms/image/D4E22AQEWCwHXCJtUhQ/feedshare-shrink_2048_1536/0/1697211309219?e=1721260800&v=beta&t=zOPmHCKVJW0HacMbmHwUUxu_IqzKejQIk2NmCmoJQIs"
    },
    {
      "urn": "urn:li:activity:7112737653216714752",
      "text": "My sister is losing her nerves over this app 😫. Her additional health insurance Merkur Versicherung allows her to submit doctor’s bills, but she constantly loses track of what bills were covered and what not 😡.\n\nBecause once she goes back from the details, the whole list is collapsed again! Resulting in a complete loss of orientation and multiple submissions of the same invoice.\n\nThey could solve that by saving the position after you opened the pdf.\n\nAsk yourself for your app design:\n🤔 Is it clear where I am?\n🤔 Is it obvious where to go next, and how to go back?\n🤔 Is progress clearly shown?\n\nThis will help to put your users in control with a clear Navigation.\n\nWhen was the last time you lost your temper, because you lost orientation on a website or app?\n\nNavigation also stands for the final letter in ACTION, my acronym around the six essential criteria for a good UI design. To learn about the other ones, view my profile or this site: https://lnkd.in/dvPRqVQP\n\n#uiDesign #uxDesign #uiDesignCheck",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7112737653216714752?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7112737653216714752%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1695808804802,
      "postedAtISO": "2023-09-27T10:00:04.802Z",
      "timeSincePosted": "9mo",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAAEDWoAUBeZjnITjT5BPz4kXB8cbSwpJTD38?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEDWoAUBeZjnITjT5BPz4kXB8cbSwpJTD38",
      "authorProfileId": "ACoAAEDWoAUBeZjnITjT5BPz4kXB8cbSwpJTD38",
      "authorHeadline": "Helping UI & Web Designers get most out of Typography",
      "authorFullName": "Oliver Schöndorfer",
      "image": "https://media.licdn.com/dms/image/D4D05AQGe49SMcmAp7w/feedshare-thumbnail_720_1280/0/1695280771125?e=1718960400&v=beta&t=AwkzYrixiFQecrknVW0wq2ewwxGOPfIY8BAvzlBXbZU"
    },
    {
      "urn": "urn:li:activity:7081590625111801858",
      "text": "Ich habe einen neuen Job und arbeite jetzt als Geschäftsführerin bei Merkur Immobilien bei Merkur Versicherung.",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7081590625111801858?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7081590625111801858%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1688382774618,
      "postedAtISO": "2023-07-03T11:12:54.618Z",
      "timeSincePosted": "1yr",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAAEHqw-wBRrjdYYXgV-2ypGSFyYaHWjODQYc?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEHqw-wBRrjdYYXgV-2ypGSFyYaHWjODQYc",
      "authorProfileId": "ACoAAEHqw-wBRrjdYYXgV-2ypGSFyYaHWjODQYc",
      "authorHeadline": "Geschäftsführerin bei Merkur Immobilien",
      "authorFullName": "Susanne Rettl-Gell"
    },
    {
      "urn": "urn:li:activity:7203424781524779008",
      "text": "Ich habe einen neuen Job und arbeite jetzt als Senior Personalentwicklung bei Merkur Versicherung. ",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7203424781524779008?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7203424781524779008%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1717430301076,
      "postedAtISO": "2024-06-03T15:58:21.076Z",
      "timeSincePosted": "1w",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAABUDJMoBhTe80UbiVQShYZ4JkVi39ZPbvnM?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABUDJMoBhTe80UbiVQShYZ4JkVi39ZPbvnM",
      "authorProfileId": "ACoAABUDJMoBhTe80UbiVQShYZ4JkVi39ZPbvnM",
      "authorHeadline": "Personalentwicklung / Training / Coaching",
      "authorFullName": "Claudia Pukl"
    },
    {
      "urn": "urn:li:activity:7174763591227564032",
      "text": "Ich habe einen neuen Job und arbeite jetzt als Key-Account-Manager bei Merkur Versicherung. ",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7174763591227564032?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7174763591227564032%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1710596940810,
      "postedAtISO": "2024-03-16T13:49:00.810Z",
      "timeSincePosted": "3mo",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAAEGSNWcB7ULhjiVo4S1C0MyX6q-jpG8k9Uo?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEGSNWcB7ULhjiVo4S1C0MyX6q-jpG8k9Uo",
      "authorProfileId": "ACoAAEGSNWcB7ULhjiVo4S1C0MyX6q-jpG8k9Uo",
      "authorHeadline": "\"Sei stärker als deine stärkste Ausrede\"",
      "authorFullName": "Jochen Kajba"
    },
    {
      "urn": "urn:li:activity:7158871075282403329",
      "text": "Ich habe einen neuen Job und arbeite jetzt als Vertriebscoach - Region Süd bei Merkur Versicherung.",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7158871075282403329?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7158871075282403329%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1706807869740,
      "postedAtISO": "2024-02-01T17:17:49.740Z",
      "timeSincePosted": "4mo",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAAByb39sBJyd86QPY6BAz4dIG7omSDg3zbxs?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAByb39sBJyd86QPY6BAz4dIG7omSDg3zbxs",
      "authorProfileId": "ACoAAByb39sBJyd86QPY6BAz4dIG7omSDg3zbxs",
      "authorHeadline": "Vertriebscoach - Region Süd",
      "authorFullName": "Christian Sereinigg"
    },
    {
      "urn": "urn:li:activity:7080659488961159168",
      "text": "4.672 Tage 😮 \n\n4.672 Tage lang bei einem Unternehmen angestellt zu sein ist heute nicht mehr selbstverständlich. \n4.672 Tage lang auf dieses Unternehmen stolz zu sein ist es auch nicht.\n\nHeute war offiziell mein letzter Tag als Angestellter bei der Merkur Versicherung. Und jetzt sitze ich hier, lasse die letzten fast 13 Jahre Revue passieren und frage mich, wer hier gerade Zwiebeln schneidet?\n\nRückblickend auf diese 4.672 Tage ist klar: Die Merkur hat mich geprägt, sie hat mich verändert, sie hat mich beruflich zu dem gemacht der ich heute bin. Und weil ich sehr zufrieden bin mit dem, der ich heute bin kann ich voller Überzeugung DANKE sagen:\n\n- Danke liebe Merkur für diese 4.672 Tage\n- Danke an alle MitarbeiterInnen und KollegInnen, insbesondere in 'meinem' Bereich Finanzwesen. Es war eine fantastische gemeinsame Zeit. Neben dem weinenden Auge gibt es hier auch ein lachendes. Denn ich bin brutal stolz, dass mit meiner Nachfolgerin Dr. Andrea Ruth K. nunmehr erstmal in der 225jährigen Merkur Geschichte eine Frau den gesamten Finanzbereich leitet\n- Danke an alle AbteilungsleiterInnen und BereichsleiterInnen mit denen ich 4.672 Tage lang unsere Merkur weiterentwickeln durfte. Immer dran denken: Kanban kann man, muss man aber nicht\n- Danke auch an diejenigen Vorstände, die mir in den Jahren vertraut haben, mir die Möglichkeit gaben mich zu entfalten und meine Meinung immer wertschätzten\n- Danke auch an den Aufsichtsrat um Herrn Lechner und Frau Dr. Wiedernig für das bis zuletzt in mich gesetzte Vertrauen. Leider entwickeln sich die Dinge nicht immer wie geplant. Aber so ist das Leben 😉 \n- Danke auch an alle externen Stakeholder und Partner, die mich über die Jahre begleitet haben. Hier insbesondere Thomas Smrekar von der KPMG\n- und last but not least auch Dank an die FMA Finanzmarktaufsicht Österreich für die Gute und stets faire Zusammenarbeit sowie das wertschätzende Exit-Gespräch \n\nIm Fussball öffnet jedes Jahr am 1. Juli der Transfermarkt. Eine aufregende Zeit für tausende Profis auf der Suche nach neuen Herausforderungen oder auch einfach einer neuen Chance. Dieses Jahr betrete also ich zeitgleich den Arbeitsmarkt. Was die Zukunft bringen wird? Dazu schon bald mehr .-)\n\nKommenden Montag wird es übrigens eine kleine Abschiedsfeier geben. Wer kommen möchte, aber noch nicht über die diversen informellen Kanäle über Ort und Zeit informiert wurde, schreibt mir hier einfach eine kurze Nachricht 🚂 \n\nhttps://lnkd.in/dzDVwWeG\n\nps: ich weiß, das war jetzt lang und fad. Musste aber sein. Nächstes mal wird es wieder lustiger. Versprochen\n\n#teammerkur #abschied #finanzwesen #ICH911 #hashtag ",
      "title": "Web Link",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7080659488961159168?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7080659488961159168%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1688160774460,
      "postedAtISO": "2023-06-30T21:32:54.460Z",
      "timeSincePosted": "1yr",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAAEOaa70BzbJ6-6g1seGp77c9sode7xHi0bE?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEOaa70BzbJ6-6g1seGp77c9sode7xHi0bE",
      "authorProfileId": "ACoAAEOaa70BzbJ6-6g1seGp77c9sode7xHi0bE",
      "authorHeadline": "Wirtschaftsprüfer, Steuerberater, Mitglied in der Hall of Fame of Accountants, Hansa!",
      "authorFullName": "Martin Ohde",
      "image": "https://media.licdn.com/dms/image/sync/D4D27AQF1gxAXgnU_FQ/articleshare-shrink_800/0/1711359650924?e=1718960400&v=beta&t=BmeCcDGSg76Ny4tNH1rWUx-jtGOraQvPmQJ8f7GGO-I"
    },
    {
      "urn": "urn:li:activity:7104779028422701058",
      "text": "Seit September verstärke ich das #teammerkur und freue mich sehr als Senior Recruiter & Employer Branding Specialist neue Talente für die Merkur Versicherung zu gewinnen. ",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7104779028422701058?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7104779028422701058%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1693911320787,
      "postedAtISO": "2023-09-05T10:55:20.787Z",
      "timeSincePosted": "10mo",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAAB2kYPABcM2Z0aqvHHIjC7U02tsxw_hMKzA?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAB2kYPABcM2Z0aqvHHIjC7U02tsxw_hMKzA",
      "authorProfileId": "ACoAAB2kYPABcM2Z0aqvHHIjC7U02tsxw_hMKzA",
      "authorHeadline": "Senior Recruiter & Employer Branding Specialist bei Merkur Versichung",
      "authorFullName": "Martin Auer"
    },
    {
      "urn": "urn:li:activity:7147884893362974721",
      "text": "Ich habe einen neuen Job und arbeite jetzt als Vertriebscoach bei Merkur Versicherung. ",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7147884893362974721?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7147884893362974721%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1704188559857,
      "postedAtISO": "2024-01-02T09:42:39.857Z",
      "timeSincePosted": "5mo",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAADD_eJwBTeFU2v7rsVVNrSqvWhThghH1zuU?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADD_eJwBTeFU2v7rsVVNrSqvWhThghH1zuU",
      "authorProfileId": "ACoAADD_eJwBTeFU2v7rsVVNrSqvWhThghH1zuU",
      "authorHeadline": "Erfolg im Vertrieb mit maßgeschneidertem Coaching",
      "authorFullName": "Zlatan Djekic"
    },
    {
      "urn": "urn:li:activity:7206554958052093952",
      "text": "Ausgezeichnet! Gestern haben wir von MOMENTUM Wien gemeinsam mit ForumF (und dessen Founder Peter Neubauer) sowie in Kooperation mit dem renommierten Finanz-Marketing Verband Österreich die Finance Marketer of the year Awards verliehen. Das Online Voting hat vier mehr als würdige Sieger hervorgebracht, nämlich Barbara Bleier-Serentschy (Volksbank Wien), Sabine Pfeffer (UNIQA Insurance Group), Martina Maurer (BAWAG Group), Katharina Herzog (money:care). Mit dem Sonderpreis der Jury für Sustainable Finance Marketing ausgezeichnet wurde Nina Schellnegger (Merkur Versicherung). ",
      "title": "Die Finance Marketer of the year 2023 sind Barbara Bleier-Serentschy (Volksbank Wien), Sabine Pfeffer (UNIQA), Martina Maurer (BAWAG), Katharina Herzog (money:care) und Nina Schellnegger (Merkur Versicherung)",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7206554958052093952?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7206554958052093952%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1718176593316,
      "postedAtISO": "2024-06-12T07:16:33.316Z",
      "timeSincePosted": "2d",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAAAVIiK0BGuevNBq17kkf56Oxhf8OopmJZn4?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAVIiK0BGuevNBq17kkf56Oxhf8OopmJZn4",
      "authorProfileId": "ACoAAAVIiK0BGuevNBq17kkf56Oxhf8OopmJZn4",
      "authorHeadline": "Geschäftsführender Gesellschafter bei MOMENTUM Wien",
      "authorFullName": "Maximilian Mondel",
      "image": "https://media.licdn.com/dms/image/sync/D4D27AQG8Rknnv2d2aw/articleshare-shrink_800/0/1718174006289?e=1718960400&v=beta&t=VzoNIN_8mLW1Ug4NLyYJw9qcam-zhhWuCOuksfL6iuY"
    },
    {
      "urn": "urn:li:activity:7183531523998900226",
      "text": "Ich habe einen neuen Job und arbeite jetzt als Versicherungsvertreterin bei Merkur Versicherung.",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7183531523998900226?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7183531523998900226%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1712687378883,
      "postedAtISO": "2024-04-09T18:29:38.883Z",
      "timeSincePosted": "2mo",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAAElMtNsBcisxVcONamv4rpu0jh9wvhrt2ns?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAElMtNsBcisxVcONamv4rpu0jh9wvhrt2ns",
      "authorProfileId": "ACoAAElMtNsBcisxVcONamv4rpu0jh9wvhrt2ns",
      "authorHeadline": "Versicherungsberaterin",
      "authorFullName": "Eszter Mesko"
    },
    {
      "urn": "urn:li:activity:7206585689985949696",
      "text": "🔥 DIM INSIGHTS 🔥\n \nHeute ist es wieder soweit: Der Universitätslehrgang Digital Innovation Modelling (DIM) findet gerade statt!\nUnd es dreht sich alles um das Thema Business Modelling. 🚀\n \nIm Unicorn Start-up & Innovation Hub an der UNI for LIFE in #Graz arbeiten Studierende gemeinsam mit Unternehmen in Kleingruppen an realen Innovationsprojekten. \n\nInnovationscoaches der #isn führen die Studierenden und Vertreter:innen der teilnehmenden Unternehmen von Kleine Zeitung, Stadt Graz und Merkur Versicherung mit ihrer Expertise durch die komplette Workshop-Reihe – moderiert von Katharina Ehrenmüller.\n\nEine spannende Entwicklungsreise von der Idee zur Innovation! 🚀\n\n#DigitalInnovation #DIM #Workshop 🔸 Bernhard Weber 🔸 Dr. Reinhard Willfort 🔸 Victoria Wallner 🔸 Laura Hartinger (vormals Sahin)",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7206585689985949696?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7206585689985949696%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1718183920380,
      "postedAtISO": "2024-06-12T09:18:40.380Z",
      "timeSincePosted": "1d",
      "isRepost": false,
      "authorType": "Company",
      "authorProfileUrl": "https://www.linkedin.com/company/innovation-service-network/",
      "authorProfileId": "innovation-service-network",
      "authorFollowersCount": "1K",
      "authorFullName": "innovation service network - isn",
      "image": "https://media.licdn.com/dms/image/D4D22AQFv7pD_7GTW1Q/feedshare-shrink_2048_1536/0/1718183918212?e=1721260800&v=beta&t=pA23sfsvcltHlGzgzWVKkuv4D8b_b1BS6sNQTs-tjR4"
    },
    {
      "urn": "urn:li:activity:7074113296085245952",
      "text": "",
      "title": "RisikomanagerIn (w/m/d) - Quantitative Risikomodelle & Investment Analytics",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7074113296085245952?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7074113296085245952%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1686600040456,
      "postedAtISO": "2023-06-12T20:00:40.456Z",
      "timeSincePosted": "1yr",
      "isRepost": true,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAACPbjwQB7K7MNhwRl6PluFYz07Fm_P-cj0g?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACPbjwQB7K7MNhwRl6PluFYz07Fm_P-cj0g",
      "authorProfileId": "ACoAACPbjwQB7K7MNhwRl6PluFYz07Fm_P-cj0g",
      "authorHeadline": "Portfoliomanagerin bei Metis Invest GmbH mit Expertise in Rechnungswesen und Controlling",
      "authorFullName": "Barbara Klammer",
      "image": "https://media.licdn.com/dms/image/sync/D5627AQFn6xFe_wNJKA/articleshare-shrink_800/0/1712137339749?e=1718960400&v=beta&t=8OI0u9JcGDpo8fMvRgEnRmI_358oZZnhhjczggWc-w0"
    },
    {
      "urn": "urn:li:activity:7148424774975721472",
      "text": "Ich habe einen neuen Job und arbeite jetzt als Vertriebscoach bei Merkur Versicherung. ",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7148424774975721472?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7148424774975721472%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1704317277664,
      "postedAtISO": "2024-01-03T21:27:57.664Z",
      "timeSincePosted": "5mo",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAABw0HXkBiKsak9RCue58Fsy5qbQkCRMotys?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABw0HXkBiKsak9RCue58Fsy5qbQkCRMotys",
      "authorProfileId": "ACoAABw0HXkBiKsak9RCue58Fsy5qbQkCRMotys",
      "authorHeadline": "Vertriebscoach Region West",
      "authorFullName": "Semir Ramakic"
    },
    {
      "urn": "urn:li:activity:7181311971328155649",
      "text": "Ich habe einen neuen Job und arbeite jetzt als Versicherungsvertreter bei Merkur Versicherung.",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7181311971328155649?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7181311971328155649%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1712158196289,
      "postedAtISO": "2024-04-03T15:29:56.289Z",
      "timeSincePosted": "2mo",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAAB9bi2QBaLEW-i8JSMAj2p8cmDEso_3cZd0?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAB9bi2QBaLEW-i8JSMAj2p8cmDEso_3cZd0",
      "authorProfileId": "ACoAAB9bi2QBaLEW-i8JSMAj2p8cmDEso_3cZd0",
      "authorHeadline": "Versicherer",
      "authorFullName": "Manuel Filippi"
    },
    {
      "urn": "urn:li:activity:7127288568384794625",
      "text": "I'm thrilled to announce that I have taken on the role of Head of Internal Revision at Merkur Versicherung. I want to express my sincere gratitude to both my old and new colleagues and friends who have been with me on this journey. A big thank you to the entire #teammerkur for the warm welcome and your support so far. I look forward to our continued collaboration with confidence, and I'm excited about what the future holds. It's great to be a part of the #merkurfamily. \n#happy #audit #insurance #oneteam #teammerkur #since1798",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7127288568384794625?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7127288568384794625%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1699278013321,
      "postedAtISO": "2023-11-06T13:40:13.321Z",
      "timeSincePosted": "7mo",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAABZ2OnEBpaM9Rziy0AheE2oU-ykmKlXJstU?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABZ2OnEBpaM9Rziy0AheE2oU-ykmKlXJstU",
      "authorProfileId": "ACoAABZ2OnEBpaM9Rziy0AheE2oU-ykmKlXJstU",
      "authorHeadline": "#teammerkur #interne_revision",
      "authorFullName": "Dr. Arleta Rasmussen",
      "image": "https://media.licdn.com/dms/image/D4D22AQEO65BEOSObuQ/feedshare-shrink_2048_1536/0/1699278012525?e=1721260800&v=beta&t=8fY3sg8GoSS5-_6F28L0VcyggF-pJ16tzrYL9LWOQHM"
    },
    {
      "urn": "urn:li:activity:7198960676462059521",
      "text": "🔥 DIM INSIGHTS 🔥 \nHeute dreht sich alles um das Thema Prototyping \n \nIm Rahmen des Universitätskurses Digital Innovation Modelling DIM, der von Bernhard Weber und Dr. Reinhard Willfort an der UNI for LIFE geleitet wird, arbeiten Studierende gemeinsam mit Unternehmen in Kleingruppen an realen Innovationsprojekten. Innovationscoaches unterstützen dabei, Produkte, Prozesse und Dienstleistungen neu zu denken und eigene Ideen einzubringen. \n \nDie Teilnehmenden lernen dabei Ideen und Innovationspotenziale zu entwickeln und diese in Geschäftsmodelle zu übersetzen. \n \nBegleitet von Innovationscoaches gehen Studierenden und Vertreter:innen der teilnehmenden Unternehmen durch die komplette Workshop-Reihe, bringen ihre Kompetenzen und Kreativität ein um neues entstehen zu lassen – moderiert von Katharina Ehrenmüller. \n \nZiel ist es Prototypen und strategische Maßnahmen zu erarbeiten, die dann präsentiert werden, um sie im unternehmerischen Alltag umzusetzen. \n \nFokus des heutigen Workshops: Prototypen bauen, testen und Feedback einholen 🤖\n \nFolgende Unternehmen dürfen wir herzlich begrüßen: \n❇️ Kleine Zeitung \n❇️ Stadt Graz \n❇️ Merkur Versicherung \n \n#DigitalInnovation #DIM #Workshop #isn 🔸 Unicorn Start-up & Innovation Hub 🔸 Victoria Wallner 🔸 Laura Hartinger (vormals Sahin)   \n",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7198960676462059521?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7198960676462059521%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1716365975490,
      "postedAtISO": "2024-05-22T08:19:35.490Z",
      "timeSincePosted": "3w",
      "isRepost": false,
      "authorType": "Company",
      "authorProfileUrl": "https://www.linkedin.com/company/innovation-service-network/",
      "authorProfileId": "innovation-service-network",
      "authorFollowersCount": "1K",
      "authorFullName": "innovation service network - isn",
      "image": "https://media.licdn.com/dms/image/D4D22AQHk6_kyyVga2A/feedshare-shrink_2048_1536/0/1716365973612?e=1721260800&v=beta&t=mw8OMXWOm2Kx_jfsHsRRoqxf5yJ_mPuyIuofp1i-Pt4"
    },
    {
      "urn": "urn:li:activity:7154065260319031297",
      "text": "Der langjährige AXA-Manager Peter Knaus wechselt zur ERGO Group AG. Er wird dort als Vorstand für das Individualgeschäft Komposit starten, in dem der Versicherer sein Gewerbe- und Industriegeschäft gebündelt hat. Außerdem:  AXA XL und Merkur Versicherung.\n",
      "title": "Axa-Manager Knaus wechselt zu Ergo",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7154065260319031297?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7154065260319031297%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1705662074165,
      "postedAtISO": "2024-01-19T11:01:14.165Z",
      "timeSincePosted": "5mo",
      "isRepost": false,
      "authorType": "Company",
      "authorProfileUrl": "https://www.linkedin.com/company/versicherungsmonitor/",
      "authorProfileId": "versicherungsmonitor",
      "authorFollowersCount": "24K",
      "authorFullName": "Versicherungsmonitor",
      "image": "https://media.licdn.com/dms/image/sync/D4E10AQETA4cGhXr9Vw/image-shrink_1280/0/1705662074151?e=1718960400&v=beta&t=9du-20XvwNA5_TYq_OZ0n-IV1WXc9MV4zwGClZ64zXs"
    },
    {
      "urn": "urn:li:activity:7204179461200601088",
      "text": "Danke an die Merkur Versicherung für die Gastfreunschaft!",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7204179461200601088?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7204179461200601088%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1717610230732,
      "postedAtISO": "2024-06-05T17:57:10.732Z",
      "timeSincePosted": "1w",
      "isRepost": true,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAAAqvNaIBMGa-qMv98CMvNq94DQekLeraprY?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAqvNaIBMGa-qMv98CMvNq94DQekLeraprY",
      "authorProfileId": "ACoAAAqvNaIBMGa-qMv98CMvNq94DQekLeraprY",
      "authorHeadline": "--",
      "authorFullName": "Silvia Kelemen Weihs"
    },
    {
      "urn": "urn:li:activity:7091973342303272960",
      "text": "Ich habe einen neuen Job und arbeite jetzt als Vertriebscoach bei Merkur Versicherung.\n\nMit großer Begeisterung werde ich mein Fachwissen und meine Erfahrung einbringen, um das Vertriebsteam auf seinem erfolgreichen Weg zu unterstützen.\n\nAuf eine gute Zusammenarbeit! \n#vertrieb #vertriebscoach #teammerkur",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7091973342303272960?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7091973342303272960%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1690858207298,
      "postedAtISO": "2023-08-01T02:50:07.298Z",
      "timeSincePosted": "11mo",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAAC-y1f0BlNewDTYPr0NhJ3SiOfZ8joLPP-U?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAC-y1f0BlNewDTYPr0NhJ3SiOfZ8joLPP-U",
      "authorProfileId": "ACoAAC-y1f0BlNewDTYPr0NhJ3SiOfZ8joLPP-U",
      "authorHeadline": "Versicherungsprofi & Fintech Enthusiast",
      "authorFullName": "Mathias Strickner"
    },
    {
      "urn": "urn:li:activity:7206574277251280897",
      "text": "Übernahmen in der Krise – sogenannte Distressed M&A - standen im Mittelpunkt des Themenabends des CFO Club Styria und Deloitte in den Räumlichkeiten der Merkur Versicherung. \nNach der Begrüßung durch Andreas Gaugg, Vorstandsmitglied Merkur Versicherung AG, gab Markus Pellet den mehr als 30 Teilnehmer:innen einen kompakten Überblick über den M&A-Markt und beleuchtete aktuelle Trends. „Neben anderen Faktoren wie etwa die Megatrends Digitalisierung und Nachhaltigkeit fungiert insbesondere Distressed M&A als aktueller Treiber von Transaktionen.“ Anschließend zeigte Elke Napokoj (bpv Huegel) Insolvenzeröffnungsgründe, Arten von Insolvenzverfahren sowie Risiken eines Unternehmens- oder Beteiligungserwerbs von einem insolvenzgefährdeten Veräußerer auf.\n\nDas Thema des Abends war auch Inhalt der angeregten Gespräche der anwesenden Gäste. Unter ihnen waren Thomas Possert (Energie Steiermark AG), FH JOANNEUM-Geschäftsführer Martin Payer, Paul Fraissler (XAL), Werner Jurasek (Kastner & Öhler), Klaus Urwanisch (Knill Energy Holding GmbH), Markus Brein (voestalpine Metal Engineering GmbH) und Manfred GEIGER (BKS BANK).\n \nMehr zu unserem Financial Advisory-Schwerpunkt: https://lnkd.in/dHVk9Cfu\n\n#Rabel_Partner #Deloitte #Graz #FinancialAdvisory #mergersandacquisitions  #Event #News",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7206574277251280897?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7206574277251280897%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1718181199372,
      "postedAtISO": "2024-06-12T08:33:19.372Z",
      "timeSincePosted": "2d",
      "isRepost": false,
      "authorType": "Company",
      "authorProfileUrl": "https://www.linkedin.com/company/rabelpartner/",
      "authorProfileId": "rabelpartner",
      "authorFollowersCount": "3K",
      "authorFullName": "Rabel_Partner",
      "image": "https://media.licdn.com/dms/image/D4D22AQHSqAqjOv6oow/feedshare-shrink_2048_1536/0/1718181192764?e=1721260800&v=beta&t=ahYaoQ-EZh9GCd9aeKDhgWBE1fcT7Xv4jdztxpQjiUA"
    },
    {
      "urn": "urn:li:activity:7183378604699828224",
      "text": "So schaut das „Wunder Mensch“ aus…\n\nIch staunte als ich heute von 2 Mitarbeiterinnen aus der Personalentwicklung der Merkur Versicherung freundlich empfangen wurde.\n\nMein Gesprächspartner Harald Gorucan war kurzfristig verhindert und organisierte mir diesen charmanten Ersatz - DANKE!\n\nJanine Amschl und Doris Amtmann gaben mir einen guten Einblick in die aktuellen PE Themen, mit denen Sie beschäftigt sind. \n\nIch durfte die eine oder andere Neuigkeit aus der Welt des WIFI Steiermark erzählen.\n\nEs freut mich, dass wir nicht nur mit der Erkenntnis der gemeinsamen Unternehmensfarbe, sondern auch mit der Idee der Kooperation auseinandergegangen sind!",
      "url": "https://www.linkedin.com/feed/update/urn:li:activity:7183378604699828224?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7183378604699828224%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29",
      "postedAtTimestamp": 1712650920081,
      "postedAtISO": "2024-04-09T08:22:00.081Z",
      "timeSincePosted": "2mo",
      "isRepost": false,
      "authorType": "Person",
      "authorProfileUrl": "https://www.linkedin.com/in/ACoAACEsrDsB7Wnj2D1J1Zwre44n19L7FVsCwoc?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACEsrDsB7Wnj2D1J1Zwre44n19L7FVsCwoc",
      "authorProfileId": "ACoAACEsrDsB7Wnj2D1J1Zwre44n19L7FVsCwoc",
      "authorHeadline": "Firmen-intern-Training und KAM",
      "authorFullName": "David Schütze"
    }
  ]


export async function GET() {
    // Map through posts and categorize them
    const categorizedPosts = linkedinPosts.map(post => {
        let category = 'Other';
        const text = post.text.toLowerCase();

        if (environmentalKeywords.some(keyword => text.includes(keyword.toLowerCase()))) {
            category = 'Environmental';
        } else if (socialKeywords.some(keyword => text.includes(keyword.toLowerCase()))) {
            category = 'Social';
        } else if (governanceKeywords.some(keyword => text.includes(keyword.toLowerCase()))) {
            category = 'Governance';
        }

        return { ...post, category };
    });

    // Set headers for CORS and content type
    const headers = new Headers({
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
    });

    // Return the categorized posts
    return new Response(JSON.stringify(categorizedPosts), {
        status: 200,
        headers: headers
    });
}
