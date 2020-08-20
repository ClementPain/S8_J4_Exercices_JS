const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

let renting;

books.forEach((item) => {
  if (item.rented === 0) {
    renting+=1;
  }
})

if (renting === 0) {
  console.log("Tous les livres ont été empruntés au moins une fois");
} else {
  console.log("Certains livres n'ont jamais été empruntés");
}


console.log("Quel est livre le plus emprunté ?");

let most_rented = books[0]

books.forEach((item) => {
  if (item.rented > most_rented.rented) {
    most_rented = item;
  }
})

console.log(most_rented.title);


console.log("Quel est le livre le moins emprunté ?")

let less_rented = books[0]

books.forEach((item) => {
  if (item.rented < less_rented.rented) {
    less_rented = item;
  }
})

console.log(less_rented.title);


console.log("Le livre avec l'ID 873495 est :");

books.forEach((item) => {
  if (item.id == 873495) {
    console.log(item.title);
  }
})


console.log("La liste des livres sans le numéro 133712 :");

books.forEach((item, index) => {
  if (item.id == 133712) {
    books.splice(index, 1);
  }
})

console.log(books);


console.log("La liste des livres triés par ordre alphabétique :");

let newArray = [];

books.forEach((item) => {
  newArray.push(item.title);
})

newArray = newArray.sort();
let sortedArray = []

newArray.forEach((item) => {
  books.forEach((book) => {
    if (book.title === item) {
      sortedArray.push(item);
    }
  })
})

console.log(sortedArray);