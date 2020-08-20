nb_floor = prompt("Combien d'étages veux-tu ?");

let i = nb_floor - 1;
let hash = "#";
let space = " ";

while (i >= 0) {
	console.log(space.repeat(i) + hash.repeat(nb_floor-i));
	i--;
}