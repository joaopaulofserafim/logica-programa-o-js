
const links = [
    { "rel": "stylesheet" , "href": "/src/css/reset.css"},
    { "rel": "stylesheet" , "href": "/src/css/geral.css"},
   { "rel": "stylesheet" , "href": "/src/css/responsividade.css"}
];

links.forEach(link => {
    const L = document.createElement('link');
    L.rel = link.rel;
    L.href = link.href;
    document.head.appendChild(L);
});