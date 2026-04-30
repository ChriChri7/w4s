const libro = {
  titolo: "L'amica geniale",
  autore: "Elena Ferrante",
  annoDiPubblicazione: 2011,
  genere: "romanzo di formazione",
  numeroDiPagina: 331,
};

for (let key in libro) {
  console.log(`${key} -> ${libro[key]}`);
}
