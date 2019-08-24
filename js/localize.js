let selectors = document.querySelectorAll('.lang-selector a');
let elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, i, b, a');
let localizer = [
      {
         key : "menu-stream",
         value: {
            "FR": "LE DIRECT",
            "EN": "LIVE STREAM",
            "NL": "leven",
         }
      },
      {
         key : "menu-about",
         value: {
            "FR": "A PROPOS",
            "EN": "ABOUT",
            "NL": "OVER"
         }
      },
      {
         key : "menu-social",
         value: {
            "FR": "SOCIAL",
            "EN": "SOCIAL",
            "NL": "OP SOCIALE NETWERKEN"
         }
      },
      {
         key : "menu-partner",
         value: {
            "FR" : "NOS PARTENAIRES",
            "EN" : "OUR PARTNERS",
            "NL" : "ONZE PARTNERS"
         }
      },
      {
         key : "logo-title1",
         value: {
            "FR" : "STREAM CARITATIF",
            "EN" : "CHARITY STREAM",
            "NL" : "LIEFDADIGHEIDSSTROOM"
         }
      },
      {
         key : "logo-title2",
         value: {
            "FR" : "9 & 10 NOVEMBRE 2019",
            "EN" : "9 & 10 NOVEMBER 2019",
            "NL" : "9 & 10 NOVEMBER 2019"
         }
      },
      {
         key : "title-stream",
         value: {
            "FR" : "SUIVEZ LE DIRECT",
            "EN" : "WATCH THE LIVESTREAM",
            "NL" : "VOLG DIRECT"
         }
      },
      {
         key : "money-pot",
         value: {
            "FR" : "La cagnotte sera disponible dans:",
            "EN" : "The money pot will be available in:",
            "NL" : "De pot is beschikbaar in:"
         }
      },
      {
         key : "donation-progress-title",
         value: {
            "FR" : "Suivez en direct la progression des donations:",
            "EN" : "Follow the donate progression:",
            "NL" : "Volg de voortgang van de donaties live:"
         }
      },
      {
         key : "donation-help",
         value: {
            "FR" : "Vous souhaitez aider l'association en faisant un don ?",
            "EN" : "You want to help this organization by making a donation ?",
            "NL" : "Wil je de vereniging helpen door een donatie te doen?"
         }
      },
      {
         key : "donation-help-button",
         value: {
            "FR" : "FAIRE UN DON",
            "EN" : "DONATE !",
            "NL" : "SCHENKEN !"
         }
      },
      {
         key : "title-about",
         value: {
            "FR" : "A PROPOS",
            "EN" : "ABOUT",
            "NL" : "OVER"
         }
      },
      {
         key : "title-paragraph-1",
         value: {
            "FR" : "Quel est le but de cet évènement ?",
            "EN" : "What is the goal of this event ?",
            "NL" : "Wat is het doel van dit evenement?"
         }
      },
      {
         key : "content-paragraph-1",
         value: {
            "FR" : "Cet évènement qui se déroulera du 9 au 10 novembre 2019 a pour but de récolter un maximum de fonds pour l'association Child Focus. Au programme de cette seconde édition, des jeux, des débats, des invités et tout plein de cadeaux à gagner !",
            "EN" : "This event start on November 9th and end on November 10th 2019. The goal is to raise a maximum of funds for the Child Focus association. Games, debates, guests and lots of prizes to win!",
            "NL" : "Dit evenement, dat plaatsvindt op 10 november 2019, heeft als doel 12 uur om maximaal fondsen te werven voor de Child Focus-associatie. Het programma van deze tweede editie, games, debatten, gasten en heel veel cadeaus om te winnen!"
         }
      },
      {
         key : "title-paragraph-2",
         value: {
            "FR" : "Qu'est-ce que Child Focus ?",
            "EN" : "What is Child Focus ?",
            "NL" : "Wat is Child Focus?"
         }
      },
      {
         key : "content-paragraph-2",
         value: {
            "FR" : "Child focus est une association qui œuvre pour retrouver les enfants disparus et lutter contre l’exploitation sexuelle des mineurs, que cela soit en ligne ou bien hors ligne.<br><br>Pour en savoir plus, rendez vous sur le site internet de <a target='_blank' href='http://childfocus.be/fr'>Child Focus</a>",
            "EN" : "Child Focus is an association working to find missing children and to fight the sexual exploitation of minors, whether online or offline.<br><br>Learn more by visiting the <a target='_blank' href='http://childfocus.be/en'>Child Focus website</a>",
            "NL" : "Child Focus is een vereniging die zich bezighoudt met het vinden van vermiste kinderen en het bestrijden van seksuele uitbuiting van minderjarigen, online of offline.<br><br>Bezoek voor meer informatie de <a target='_blank' href='http://childfocus.be/nl'>Child Focus-website</a>"
         }
      },
      {
         key : "title-paragraph-3",
         value: {
            "FR" : "Qui est Manonolita ?",
            "EN" : "Who is Manonolita ?",
            "NL" : "Wie is Manonolita?"
         }
      },
      {
         key : "content-paragraph-3",
         value: {
            "FR" : "Jeune streameuse belge de 19 ans, elle rassemble ses spectateurs devant des emissions de jeux en tout genre et de débats sur différents thèmes. En plus du divertissement, elle a pour but de sensibiliser un maximum de personnes au harcèlement sur internet",
            "EN" : "Manonolita is a young 19-year-old Belgian streamer, she brings her audience to all kinds of games shows and debates on different themes. In addition to entertainment, it aims to educate as many people as possible about online harassment",
            "NL" : "Jonge 19-jarige Belgische streamer, verzamelt haar publiek voor allerhande gameshows en debatten over verschillende thema's. Naast entertainment wil het zoveel mogelijk mensen informeren over online intimidatie"
         }
      },
      {
         key : "title-social",
         value: {
            "FR" : "VOUS EN PARLEZ SUR TWITTER",
            "EN" : "ON TWITTER",
            "NL" : "OP SOCIALE NETWERKEN"
         }
      },
      {
         key : "social-description",
         value: {
            "FR" : "Envoyez vos messages avec le hastag #ManoChildFocus",
            "EN" : "Send your message with the #ManoChildFocus hastag",
            "NL" : "Stuur je berichten met de hashtag #manochildfocus"
         }
      },
      {
         key : "title-partner",
         value: {
            "FR" : "NOS PARTENAIRES",
            "EN" : "OUR PARTNERS",
            "NL" : "ONZE PARTNERS"
         }
      },
      {
         key : "partner-description",
         value: {
            "FR" : "Merci à tous nos partenaires de nous soutenir dans cet événement !",
            "EN" : "Thanks to ours partners to support this event !",
            "NL" : "Bedankt aan al onze partners voor het steunen van ons in dit evenement!"
         }
      }
];
let currentLocal = "";
updateLocale(sessionStorage.getItem("langage") || "FR");

selectors.forEach(select => {
   select.addEventListener('click', e => {
      e.preventDefault();
      updateLocale(select.dataset.lang);
   });
});


function updateLocale(lang) {
   if (!lang || lang == currentLocal)
      return ;
   elements.forEach(el => {
      if (el.dataset.local){
         let ret = getLocal(el.dataset.local, lang);
         if (ret){
            el.innerHTML = ret;
         } else {
            console.warn(`no data found for ${el.dataset.local}`);
         }
      }
   });
   currentLocal = lang;
   sessionStorage.setItem("langage", lang);
}

function getLocal(key, lang) {
    let ret = null;
    if (key) {
        ret = localizer.find(l => { return l.key == key });
    }
    return ret.value[lang];
}
