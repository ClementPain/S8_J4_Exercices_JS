const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Voici les entrepreneurs nés dans les années 70");

let newArray = [];

entrepreneurs.forEach((item) => {
	if(item.year >= 1970 && item.year < 1980) {
		newArray.push(item);
	}
})

console.log(newArray);


console.log("Voici les prénoms et noms des entrepreneurs");

newArray = [];

entrepreneurs.forEach((item) =>{
		newArray.push(item.first + " " + item.last);
})

console.log(newArray);


console.log("Voici l'âge des entrepreneurs :");

newArray = [];
let age_entrepreneur

entrepreneurs.forEach((item) =>{
	age_entrepreneur = 2020 - item.year
	newArray.push(item.first + " " + item.last + " => " + age_entrepreneur + " ans");
})

console.log(newArray);



console.log("Voici les entrepreneurs par ordre alphabétique :");

newArray = [];

entrepreneurs.forEach((item) => {
	newArray.push(item.last);
})

newArray = newArray.sort();

let sortedArray = []

newArray.forEach((item) => {
	entrepreneurs.forEach((items_e) => {
		if (items_e.last === item) {
			sortedArray.push(items_e);
		}
	})
})

console.log(sortedArray);