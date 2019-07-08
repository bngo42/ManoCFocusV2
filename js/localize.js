let selectors = document.querySelectorAll('.lang-selector a');
let elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, i, b, a');
let localizer = {
   "FR" :[
      {
         key : "menu-stream",
         value: "LE DIRECT"
      },
      {
         key : "menu-about",
         value: "A PROPOS"
      },
      {
         key : "menu-social",
         value: "SOCIAL"
      },
      {
         key : "menu-partner",
         value: "NOS PARTENAIRES"
      },
      {
         key : "logo-title1",
         value: "STREAM CARITATIF"
      },
      {
         key : "logo-title2",
         value: "DIMANCHE 10 NOVEMBRE 2019"
      },
      {
         key : "title-stream",
         value: "SUIVEZ LE DIRECT"
      },
      {
         key : "money-pot",
         value: "La cagnotte sera disponible dans:"
      },
      {
         key : "donation-progress-title",
         value: "Suivez en direct la progression des donations:"
      },
      {
         key : "donation-help",
         value: "Vous souhaitez aider l'association en faisant un don ?"
      },
      {
         key : "donation-help-button",
         value: "FAIRE UN DON"
      },
      {
         key : "title-about",
         value: "A PROPOS"
      },
      {
         key : "title-paragraph-1",
         value: "Quel est le but de cet évènement ?"
      },
      {
         key : "content-paragraph-1",
         value: "Cet évènement qui se déroulera le 10 novembre 2019 a pour but, durant 12 heures, de récolter un maximum de fonds pour l'association Child Focus. Au programme de cette seconde édition, des jeux, des débats, des invités et tout plein de cadeaux à gagner !"
      },
      {
         key : "title-paragraph-2",
         value: "Qu'est-ce que Child Focus ?"
      },
      {
         key : "content-paragraph-2",
         value: "Child focus est une association qui œuvre pour retrouver les enfants disparus et lutter contre l’exploitation sexuelle des mineurs, que cela soit en ligne ou bien hors ligne."
      },
      {
         key : "title-paragraph-3",
         value: "Qui est Manonolita ?"
      },
      {
         key : "content-paragraph-3",
         value: "Jeune streameuse belge de 19 ans, elle rassemble ses spectateurs devant des emissions de jeux en tout genre et de débats sur différents thèmes. En plus du divertissement, elle a pour but de sensibiliser un maximum de personnes au harcèlement sur internet"
      },
      {
         key : "title-social",
         value: "VOUS EN PARLEZ SUR TWITTER"
      },
      {
         key : "social-description",
         value: "Envoyez vos messages avec le hastag #ManoChildFocus"
      },
      {
         key : "title-partner",
         value: "NOS PARTENAIRES"
      },
      {
         key : "partner-description",
         value: "Merci à tous nos partenaires de nous soutenir dans cet événement !"
      }
   ],
   "EN" :[
      {
         key : "menu-stream",
         value: "LIVE STREAM"
      },
      {
         key : "menu-about",
         value: "ABOUT"
      },
      {
         key : "menu-social",
         value: "SOCIAL"
      },
      {
         key : "menu-partner",
         value: "OUR PARTNERS"
      },
      {
         key : "logo-title1",
         value: "CHARITY STREAM"
      },
      {
         key : "logo-title2",
         value: "SUNDAY 10 NOVEMBER 2019"
      },
      {
         key : "title-stream",
         value: "WATCH THE LIVESTREAM"
      },
      {
         key : "money-pot",
         value: "The money pot will be available in:"
      },
      {
         key : "donation-progress-title",
         value: "Suivez en direct la progression des donations:"
      },
      {
         key : "donation-help",
         value: "You want to help this organization by making a donation ?"
      },
      {
         key : "donation-help-button",
         value: "DONATE !"
      },
      {
         key : "title-about",
         value: "ABOUT"
      },
      {
         key : "title-paragraph-1",
         value: "Quel est le but de cet évènement ?"
      },
      {
         key : "content-paragraph-1",
         value: "Cet évènement qui se déroulera le 10 novembre 2019 a pour but, durant 12 heures, de récolter un maximum de fonds pour l'association Child Focus. Au programme de cette seconde édition, des jeux, des débats, des invités ainsi que plein de cadeaux à gagner !"
      },
      {
         key : "title-paragraph-2",
         value: "Qu'est-ce que Child Focus ?"
      },
      {
         key : "content-paragraph-2",
         value: "Child focus est une association qui œuvre pour retrouver les enfants disparus et lutter contre l’exploitation sexuelle des mineurs, que cela soit en ligne ou hors ligne."
      },
      {
         key : "title-paragraph-3",
         value: "Qui est Manonolita ?"
      },
      {
         key : "content-paragraph-3",
         value: "Jeune streameuse belge de 19 ans, elle rassemble ses spectateurs devant des emissions de jeux en tout genre et de débats sur différents thèmes. En plus du divertissement, elle a pour but de sensibiliser un maximum de personnes au harcèlement sur internet"
      },
      {
         key : "title-social",
         value: "ON TWITTER"
      },
      {
         key : "social-description",
         value: "Send your message with the #ManoChildFocus hastag"
      },
      {
         key : "title-partner",
         value: "OUR PARTNERS"
      },
      {
         key : "partner-description",
         value: "Thanks to ours partners to support this event !"
      }
   ],
   "NL" :[
      {
         key : "menu-stream",
         value: "LIVE STREAM"
      },
      {
         key : "menu-about",
         value: "ABOUT"
      },
      {
         key : "menu-social",
         value: "SOCIAL"
      },
      {
         key : "menu-partner",
         value: "OUR PARTNERS"
      },
      {
         key : "logo-title1",
         value: "CHARITY STREAM"
      },
      {
         key : "logo-title2",
         value: "SUNDAY 10 NOVEMBER 2019"
      },
      {
         key : "title-stream",
         value: "SUIVEZ LE DIRECT"
      },
      {
         key : "money-pot",
         value: "La cagnotte sera disponible dans:"
      },
      {
         key : "donation-progress-title",
         value: "Suivez en direct la progression des donations:"
      },
      {
         key : "donation-help",
         value: "You want to help this organization with a donation ?"
      },
      {
         key : "donation-help-button",
         value: "DONATE !"
      },
      {
         key : "title-about",
         value: "ABOUT"
      },
      {
         key : "title-paragraph-1",
         value: "Quel est le but de cet évènement ?"
      },
      {
         key : "content-paragraph-1",
         value: "Cet évènement qui se déroulera le 10 novembre 2019 a pour but, durant 12 heures, de récolter un maximum de fonds pour l'association Child Focus. Au programme de cette seconde édition, des jeux, des débats, des invités et tout plein de cadeaux à gagner !"
      },
      {
         key : "title-paragraph-2",
         value: "Qu'est-ce que Child Focus ?"
      },
      {
         key : "content-paragraph-2",
         value: "Child focus est une association qui œuvre pour retrouver les enfants disparus et lutter contre l’exploitation sexuelle des mineurs en ligne et hors ligne."
      },
      {
         key : "title-paragraph-3",
         value: "Qui est Manonolita ?"
      },
      {
         key : "content-paragraph-3",
         value: "Jeune streameuse belge de 19 ans, elle rassemble ses spectateurs devant des emissions de jeux en tout genre et de débats sur différents thèmes. En plus du divertissement, elle a pour but de sensibiliser un maximum de personnes sur le harcèlement en ligne"
      },
      {
         key : "title-social",
         value: "SUR LES RÉSEAUX SOCIAUX"
      },
      {
         key : "social-description",
         value: "Send your message with the #ManoChildFocus hastag"
      },
      {
         key : "title-partner",
         value: "OUR PARTNERS"
      },
      {
         key : "partner-description",
         value: "Merci à tous nos partenaires de nous soutenir dans cet événement !"
      }
   ]
};
let currentLocal = "";
updateLocale(sessionStorage.getItem("langage") || "EN");

selectors.forEach(select => {
   select.addEventListener('click', e => {
      e.preventDefault();
      updateLocale(select.dataset.lang);
   });
});


function updateLocale(lang) {
   if (!lang || !localizer[lang] || lang == currentLocal)
      return ;
   elements.forEach(el => {
      if (el.dataset.local){
         let ret = getLocal(el.dataset.local, lang);
         if (ret){
            el.innerHTML = ret.value;
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
        ret = localizer[lang].find(l => { return l.key == key });
    }
    return ret;
}
