let selectors = document.querySelectorAll('.lang-selector a');
let elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, i, b, a');
let localizer = [
      {
         key : "menu-stream",
         value: {
            "FR": "LE DIRECT",
            "EN": "LIVE",
            "NL": "LIVE",
         }
      },
      {
         key : "menu-streamers",
         value: {
            "FR": "LES STREAMERS",
            "EN": "STREAMERS",
            "NL": "STREAMERS",
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
            "NL": "SOCIAAL"
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
            "FR" : "STREAM CARITATIF - 9 & 10 NOVEMBRE 2019",
            "EN" : "CHARITY STREAM - NOVEMBER 9th & 10th 2019",
            "NL" : "CARRITATIEVE STREAM - 9 & 10 NOVEMBER 2019"
         }
      },
      {
         key : "logo-profit",
         value: {
            "FR" : "Au profit de l'association",
            "EN" : "Au profit de l'association EN",
            "NL" : "Au profit de l'association NL"
         }
      },
      {
         key : "title-stream",
         value: {
            "FR" : "SUIVEZ LE DIRECT",
            "EN" : "FOLLOW LIVE",
            "NL" : "VOLG LIVE"
         }
      },
      {
         key : "money-pot",
         value: {
            "FR" : "La cagnotte sera disponible dans:",
            "EN" : "The money pot will be available in:",
            "NL" : "De spaarpot zal beschikbaar zijn binnen:"
         }
      },
      {
         key : "donation-progress-title",
         value: {
            "FR" : "Suivez en direct la progression des donations:",
            "EN" : "Follow live the donation progression:",
            "NL" : "Volg live de vooruitgang van de schenkingen:"
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
            "EN" : "MAKE A DONATION",
            "NL" : "EEN GIFT DOEN"
         }
      },
      {
         key : "title-streamers",
         value: {
            "FR" : "LES STREAMERS",
            "EN" : "STREAMERS",
            "NL" : "STREAMERS"
         }
      },
      {
         key : "title-team",
         value: {
            "FR" : "L'ÉQUIPE",
            "EN" : "THE TEAM EN",
            "NL" : "THE TEAM NL"
         }
      },
      {
         key : "description1-team",
         value: {
            "FR" : "Découvrez l'équipe derrière cet événement",
            "EN" : "Découvrez l'équipe derrière cet événement EN",
            "NL" : "Découvrez l'équipe derrière cet événement NL"
         }
      },
      {
         key : "description2-team",
         value: {
            "FR" : "Ils co-organisent avec nous cet événement",
            "EN" : "Ils co-organisent avec nous cet événement EN",
            "NL" : "Ils co-organisent avec nous cet événement NL"
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
            "EN" : "What is the purpose of this event?",
            "NL" : "Wat is het doel van dit evenement?"
         }
      },
      {
         key : "content-paragraph-1",
         value: {
            "FR" : "Cet évènement qui se déroulera du 9 au 10 novembre 2019 a pour but de récolter un maximum de fonds pour l'association Child Focus. Au programme de cette seconde édition, des jeux, des débats, des invités et tout plein de cadeaux à gagner !",
            "EN" : "This goal of this event, taking place on November 9th & 10th, is to collect as many donations as possible for Child Focus. Program of this second edition: games, debates, guests and plenty of gifts to win",
            "NL" : "Dit evenement, dat zal plaatsvinden op 9 en 10 november 2019, heeft als doel om zoveel mogelijk schenkingen in te zamelen voor de Stichting Child Focus. Op het programma van deze tweede editie: games, debatten, gasten en geschenken die worden weggegeven"
         }
      },
      {
         key : "title-paragraph-2",
         value: {
            "FR" : "Qu'est-ce que Child Focus ?",
            "EN" : "What is Child Focus ?",
            "NL" : "Wie is Child Focus?"
         }
      },
      {
         key : "content-paragraph-2",
         value: {
            "FR" : "Child focus est une association qui œuvre pour retrouver les enfants disparus et lutter contre l’exploitation sexuelle des mineurs, que cela soit en ligne ou bien hors ligne.<br><br>Pour en savoir plus, rendez-vous sur le site internet de <a target='_blank' href='http://childfocus.be/fr'>Child Focus</a>",
            "EN" : "Child Focus is the center for missing and sexually exploited children (online and offline). Visit their <a target='_blank' href='http://childfocus.be/en'>website</a> for more information",
            "NL" : "Child Focus is de Stichting die zich inzet om vermiste kinderen terug te vinden en te strijden tegen de seksuele uitbuiting van minderjarigen, zowel online als offline. Meer info op de site van <a target='_blank' href='http://childfocus.be/en'>Child Focus</a>"
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
            "EN" : "As a young Belgian 19-years old streamer, she gathers people through games and debates about different themes. Next to entertainment, she also wants to raise awareness about online harrassment",
            "NL" : "Als 19-jarige Belgische streamer, brengt ze mensen samen via games en debatten over verschillende thema's. Naast ontspanning wil ze ook mensen sensibiliseren rond online intimidatie"
         }
      },
      {
         key : "title-social",
         value: {
            "FR" : "VOUS EN PARLEZ SUR TWITTER",
            "EN" : "YOU TALK ABOUT IT ON TWITTER",
            "NL" : "JE PRAAT EROVER OP TWITTER"
         }
      },
      {
         key : "social-description",
         value: {
            "FR" : "Envoyez vos messages avec le hashtag <a href='https://twitter.com/search?q=BeFriendsOnline' target='_blank'>#BeFriendsOnline</a>",
            "EN" : "Send messages with the hashtag <a href='https://twitter.com/search?q=BeFriendsOnline' target='_blank'>#BeFriendsOnline</a>",
            "NL" : "Stuur je berichten met de hashtag <a href='https://twitter.com/search?q=BeFriendsOnline' target='_blank'>#BeFriendsOnline</a>"
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
            "EN" : "Thanks to all of our partners for supporting us through this event!",
            "NL" : "Dank aan alle partners om ons te steunen bij dit evenement!"
         }
      }
];
let currentLocal = "";
let langUrl = getParameterByName("lang");
if (langUrl){
   let fetchedLang = langUrl.toUpperCase();
   updateLocale((fetchedLang == "FR" || fetchedLang == "EN" || fetchedLang == "NL") ? fetchedLang : "FR");
} else {
   updateLocale(sessionStorage.getItem("langage") || "FR");
}


selectors.forEach(select => {
   select.addEventListener('click', e => {
      e.preventDefault();
      updateLocale(select.dataset.lang);
   });
});

function getParameterByName(name, url) {
   if (!url) url = window.location.href;
   name = name.replace(/[\[\]]/g, '\\$&');
   var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
       results = regex.exec(url);
   if (!results) return null;
   if (!results[2]) return '';
   return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

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
   return (ret && ret.value && ret.value[lang]) ? ret.value[lang] : "";
}
