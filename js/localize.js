let elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, i, b, a');
let localizer = [
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
       key : "NA",
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
       value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc porta dolor non felis tristique gravida.Nullam eu scelerisque tellus, quis viverra augue. In hac habitasse platea dictumst. Quisque eros tellus, feugiat at lorem in, fringilla mattis dui. Proin faucibus, velit ut varius tempor, orci quam pharetra tellus, ut sodales neque nisi non velit. Sed et facilisis felis. Etiam porta nibh vel ipsum tristique, eu tempor turpis efficitur. Duis bibendum tristique rutrum."
    },
    {
        key : "title-paragraph-2",
        value: "Qu'est-ce que Child Focus ?"
    },
    {
        key : "content-paragraph-2",
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc porta dolor non felis tristique gravida.Nullam eu scelerisque tellus, quis viverra augue. In hac habitasse platea dictumst. Quisque eros tellus, feugiat at lorem in, fringilla mattis dui. Proin faucibus, velit ut varius tempor, orci quam pharetra tellus, ut sodales neque nisi non velit. Sed et facilisis felis. Etiam porta nibh vel ipsum tristique, eu tempor turpis efficitur. Duis bibendum tristique rutrum."
    },
    {
        key : "title-paragraph-3",
        value: "Qui est Manonolita ?"
    },
    {
        key : "content-paragraph-3",
        value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc porta dolor non felis tristique gravida.Nullam eu scelerisque tellus, quis viverra augue. In hac habitasse platea dictumst. Quisque eros tellus, feugiat at lorem in, fringilla mattis dui. Proin faucibus, velit ut varius tempor, orci quam pharetra tellus, ut sodales neque nisi non velit. Sed et facilisis felis. Etiam porta nibh vel ipsum tristique, eu tempor turpis efficitur. Duis bibendum tristique rutrum."
    },
    {
       key : "title-social",
       value: "SUR LES RÉSEAUX SOCIAUX"
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
 ];


updateLocale();

function updateLocale() {
    elements.forEach(el => {
        if (el.dataset.local){
            let ret = getLocal(el.dataset.local);
            if (ret){
                el.innerHTML = ret.value;
            } else {
                console.warn(`no data found for ${el.dataset.local}`);
            }
        }
    });
}

function getLocal(key) {
    let ret = null;
    if (key) {
        ret = localizer.find(l => { return l.key == key });
    }
    return ret;
}
