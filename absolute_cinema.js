console.log("ola, seja muito bem vindo! o que gostaria de fazer?");

let acao_usuario = parseInt(
  prompt(
    "insira 0 para sair do sistema, 1 para ver o catalogo de filmes, 2 para acessar a secao de ingressos e 3 para acessar os combos ",
  ),
);

class filme {
  constructor(Titulo, Ano, Diretor, CI, Genero) {
    this.Titulo = Titulo;
    this.Ano = Ano;
    this.Diretor = Diretor;
    this.CI = CI;
    this.Genero = Genero;
  }
}
const filme1 = new filme(
  "Donnie Darko",
  2001,
  "Richard Kelly",
  "14 Anos",
  "Ficcao cientifica/Thriller",
);
const filme2 = new filme(
  "Sociedade dos Poetas Mortos",
  1989,
  "Peter Weir",
  "12 Anos",
  "Comedia/Drama",
);
const filme3 = new filme(
  "Brilho Eterno de uma Mente sem Lembrancas",
  2004,
  "Michel Gondry",
  "14 anos",
  "Drama/Romance",
);
const filme4 = new Filme(
  "Duna: Parte 2",
  2024,
  "Denis Villeneuve",
  "14 Anos",
  "Ficção Científica/Aventura",
);
const filme5 = new Filme(
  "Duna: Messias",
  2026,
  "Denis Villeneuve",
  "14 Anos",
  "Ficção Científica/Drama",
);
const filme6 = new Filme(
  "John Wick",
  2014,
  "Chad Stahelski",
  "16 Anos",
  "Ação/Thriller",
);

const filme7 = new Filme(
  "John Wick: Chapter 2",
  2017,
  "Chad Stahelski",
  "16 Anos",
  "Ação/Thriller",
);

const filme8 = new Filme(
  "John Wick: Chapter 3 - Parabellum",
  2019,
  "Chad Stahelski",
  "16 Anos",
  "Ação/Thriller",
);
const filme9 = new Filme(
  "Prisoners",
  2013,
  "Denis Villeneuve",
  "16 Anos",
  "Thriller/Drama",
);
const filme10 = new Filme(
  "The Hunt",
  2012,
  "Thomas Vinterberg",
  "14 Anos",
  "Drama",
);
const filme11 = new Filme(
  "But I'm a Cheerleader",
  1999,
  "Jamie Babbit",
  "14 Anos",
  "Comédia/Romance",
);
const filme12 = new Filme(
  "Hereditário",
  2018,
  "Ari Aster",
  "16 Anos",
  "Terror/Drama",
);

const filme13 = new Filme(
  "Midsommar",
  2019,
  "Ari Aster",
  "18 Anos",
  "Terror/Drama",
);

const filme14 = new Filme(
  "Longlegs",
  2024,
  "Osgood Perkins",
  "18 Anos",
  "Terror/Thriller",
);
const filme15 = new Filme(
  "Gente Grande",
  2010,
  "Dennis Dugan",
  "12 Anos",
  "Comédia",
);
const filme16 = new Filme(
  "Corra!",
  2017,
  "Jordan Peele",
  "14 Anos",
  "Terror/Thriller",
);

const filme17 = new Filme(
  "Túmulo dos Vagalumes",
  1988,
  "Isao Takahata",
  "12 Anos",
  "Animação/Drama",
);
const filme18 = new Filme(
  "Ponyo",
  2008,
  "Hayao Miyazaki",
  "Livre",
  "Animação/Fantasia",
);

const filme19 = new Filme(
  "A Viagem de Chihiro",
  2001,
  "Hayao Miyazaki",
  "Livre",
  "Animação/Fantasia",
);

const filme20 = new Filme(
  "Meu Amigo Totoro",
  1988,
  "Hayao Miyazaki",
  "Livre",
  "Animação/Fantasia",
);
const filme21 = new Filme(
  "Festa da Salsicha",
  2016,
  "Conrad Vernon e Greg Tiernan",
  "16 Anos",
  "Animação/Comédia",
);









while (acao_usuario != 0){}


