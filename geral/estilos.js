
const links = [
    { "rel": "stylesheet" , "href": "/css/geral.css"},
    { "rel": "stylesheet" , "href": "/css/reset.css"},
   { "rel": "stylesheet" , "href": "/css/responsividade.css"}
];

links.forEach(link => {
    const L = document.createElement('link');
    L.rel = link.rel;
    L.href = link.href;
    document.head.appendChild(L);
});