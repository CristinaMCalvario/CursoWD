//string o cadenas

const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web";
const producto2 = "MOnitor de 50 pulgadas";

console.log(tweet.length);//
console.log(producto2);

//IndexOf
/* Busca una palabra */
console.log(tweet.indexOf('JavaScript')); //retoorna la posición
console.log(tweet.indexOf('Javat'));// Si no la encuentra retorna -1

//include
//retorna true o false
console.log(tweet.includes('JavaScript'));
console.log(tweet.includes('Javat'));

