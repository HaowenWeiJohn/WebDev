// var generateName = require("sillyname");

import generateName from "sillyname";
import superheroes, { randomSuperhero } from "superheroes";

var sillyName = generateName();
const heroName = randomSuperhero();

console.log(`My name is ${sillyName}`);
console.log(`My superhero name is ${heroName}`);