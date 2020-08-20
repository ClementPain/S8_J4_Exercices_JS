sentence_user = prompt("Pose ta question au bot ado");


if(sentence_user.toLowerCase().includes('fortnite')) {
	console.log("on s' fait une partie soum-soum ?");
}
else if (sentence_user[sentence_user.length - 1] == "?") {
	console.log("Ouais ouais...");
}
else if (sentence_user==="") {
	console.log("t'es en PLS ?");
}
else if (sentence_user === sentence_user.toUpperCase()) {
	console.log("Pwa, calme-toi...");
}

else {
	console.log("balek");
}