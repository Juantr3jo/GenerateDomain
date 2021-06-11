


let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];


let name1  = Math.floor(Math.random() * pronoun.length);
let name2 = Math.floor(Math.random() * adj.length);
let name3 = Math.floor(Math.random() * noun.length);
let dominio= pronoun[name1]+adj[name2]+noun[name3] ;

console.log(dominio+".com");
document.getElementById("text").innerHTML = dominio+".com";