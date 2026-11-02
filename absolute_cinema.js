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
const filme4 = new filme(
  "Duna: Parte 2",
  2024,
  "Denis Villeneuve",
  "14 Anos",
  "Ficção Científica/Aventura",
);
const filme5 = new filme(
  "Duna: Messias",
  2026,
  "Denis Villeneuve",
  "14 Anos",
  "Ficção Científica/Drama",
);
const filme6 = new filme(
  "John Wick",
  2014,
  "Chad Stahelski",
  "16 Anos",
  "Ação/Thriller",
);

const filme7 = new filme(
  "John Wick: Chapter 2",
  2017,
  "Chad Stahelski",
  "16 Anos",
  "Ação/Thriller",
);

const filme8 = new filme(
  "John Wick: Chapter 3 - Parabellum",
  2019,
  "Chad Stahelski",
  "16 Anos",
  "Ação/Thriller",
);
const filme9 = new filme(
  "Prisoners",
  2013,
  "Denis Villeneuve",
  "16 Anos",
  "Thriller/Drama",
);
const filme10 = new filme(
  "The Hunt",
  2012,
  "Thomas Vinterberg",
  "14 Anos",
  "Drama",
);
const filme11 = new filme(
  "But I'm a Cheerleader",
  1999,
  "Jamie Babbit",
  "14 Anos",
  "Comédia/Romance",
);
const filme12 = new filme(
  "Hereditário",
  2018,
  "Ari Aster",
  "16 Anos",
  "Terror/Drama",
);

const filme13 = new filme(
  "Midsommar",
  2019,
  "Ari Aster",
  "18 Anos",
  "Terror/Drama",
);

const filme14 = new filme(
  "Longlegs",
  2024,
  "Osgood Perkins",
  "18 Anos",
  "Terror/Thriller",
);
const filme15 = new filme(
  "Gente Grande",
  2010,
  "Dennis Dugan",
  "12 Anos",
  "Comédia",
);
const filme16 = new filme(
  "Corra!",
  2017,
  "Jordan Peele",
  "14 Anos",
  "Terror/Thriller",
);

const filme17 = new filme(
  "Túmulo dos Vagalumes",
  1988,
  "Isao Takahata",
  "12 Anos",
  "Animação/Drama",
);
const filme18 = new filme(
  "Ponyo",
  2008,
  "Hayao Miyazaki",
  "Livre",
  "Animação/Fantasia",
);

const filme19 = new filme(
  "A Viagem de Chihiro",
  2001,
  "Hayao Miyazaki",
  "Livre",
  "Animação/Fantasia",
);

const filme20 = new filme(
  "Meu Amigo Totoro",
  1988,
  "Hayao Miyazaki",
  "Livre",
  "Animação/Fantasia",
);
const filme21 = new filme(
  "Festa da Salsicha",
  2016,
  "Conrad Vernon e Greg Tiernan",
  "16 Anos",
  "Animação/Comédia",
);
const filme22 = new filme(
  "La La Land",
  2016,
  "Damien Chazelle",
  "livre",
  "Comédia/Drama",
);


const listaDefilmes = [
  filme1,
  filme2,
  filme3,
  filme4,
  filme5,
  filme6,
  filme7,
  filme8,
  filme9,
  filme10,
  filme11,
  filme12,
  filme13,
  filme14,
  filme15,
  filme16,
  filme17,
  filme18,
  filme19,
  filme20,
  filme21,
  filme22,
];

class Combo {
  constructor(nome, itens, valor) {
    this.nome = nome;
    this.itens = itens;
    this.valor = valor;
  }
}

const combo0 = new Combo("Combo Individual", "1 Pipoca P + 1 Refri 500ml", 25.00);
const combo1 = new Combo("Combo Duplo", "1 Pipoca M + 2 Refris 500ml", 45.00);
const combo2 = new Combo("Combo Mega", "1 Pipoca G + 2 Refris 1L", 60.00);
const combo3 = new Combo("Combo Família", "2 Pipocas G + 4 Refris 500ml", 85.00);

const listaDeCombos = [combo1, combo2, combo3, combo4];



while (acao_usuario !== 0) {
  if (acao_usuario === 1) {
    for (let i = 0; i < listaDefilmes.length; i++) {
      console.log(listaDefilmes[i]);
    }
  }
  else if(acao_usuario === 2){

    let ingressos_comprados = parseInt(prompt("quantos ingressos deseja comprar?"))
    let valor_ingresso = (ingressos_comprados)*30
    console.log(valor_ingresso)
  }
  else{
     for (let i = 0; i < listaDeCombos.length; i++) {
      console.log(listaDeCombos[i]);}

       let r = parseInt(prompt("qual combo voce deseja comprar? insira o numero do combo"))

      let combo_comprado = listaDeCombos[r]


     
     }
    




  acao_usuario = parseInt(
    prompt(
      "insira 0 para sair do sistema, 1 para ver o catalogo de filmes, 2 para acessar a secao de ingressos e 3 para acessar os combos ",
    ),
  );





  }

