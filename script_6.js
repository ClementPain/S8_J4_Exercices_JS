
word = prompt("Chaîne ARN :");
let newArrayWord = [];

if (word.length%3 != 0) {
	console.log("Le format saisi ne correspond pas");
}
else {
	let i = 0;
	
	while (i<word.length) {
		newArrayWord.push(word[i] + word[i+1] + word[i+2]);
		i+=3;
	}
}

let ProtArray = []
let quit = 0

newArrayWord.forEach((item) => {
	switch(item) {
		case "UCU":
		case "UCC":
		case "UCA":
		case "UCG":
		case "AGU": 
		case "AGC":
			ProtArray.push("Sérine");
			break;
		case "CCU":
		case "CCC":
		case "CCA":
		case "CCG":
			ProtArray.push("Proline");
			break;
		case "UUA":
		case "UUG":
			ProtArray.push("Leucine");
			break;
		case "UUU":
		case "UUC":
			ProtArray.push("Phénylalanine");
			break;
		case "CGU":
		case "CGC":
		case "CGA":
		case "CGG":
		case "AGA": 
		case "AGG":
			ProtArray.push("Arginine");
			break;
		case "UAU": 
		case "UAC":
			ProtArray.push("Tyrosine");
			break;
		default:
      console.log("La chaîne de protéine n'existe pas");
      quit = 1;
      break;
	}
})

if (quit === 0) {
	console.log(ProtArray.join("-"))
}