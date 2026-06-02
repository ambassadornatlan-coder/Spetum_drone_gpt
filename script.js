
const translations={
en:{
title:'Intelligence in the Air. Precision on the Ground.',
sub:'Advanced Geospatial Intelligence, Sensor Integration and Fixed‑Wing UAV Solutions.'
},
cz:{
title:'Inteligence ve vzduchu. Přesnost na zemi.',
sub:'Pokročilé geoprostorové technologie, integrace senzorů a řešení UAV.'
}
};

document.getElementById('enBtn').onclick=()=>{
heroTitle.textContent=translations.en.title;
heroSub.textContent=translations.en.sub;
};

document.getElementById('czBtn').onclick=()=>{
heroTitle.textContent=translations.cz.title;
heroSub.textContent=translations.cz.sub;
};

window.addEventListener('scroll',()=>{
document.querySelector('.hero-bg').style.transform=
`translateY(${window.scrollY*0.15}px)`;
});
