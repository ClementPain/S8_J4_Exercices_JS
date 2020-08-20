nb_user = prompt("De quel nombre veux-tu calculer la factorielle ?");
let result = nb_user;

if (nb_user === 0 || nb_user ===1) {
	console.log(1);
}

while (nb_user > 1) {
	nb_user--;
	result = result * nb_user;
}

console.log(result)