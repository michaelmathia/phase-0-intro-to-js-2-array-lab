// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    console.log(cats.push(name));
}

function destructivelyPrependCat(name) {
    console.log(cats.unshift(name));
}

function destructivelyRemoveLastCat() {
    console.log(cats.pop());
}

function destructivelyRemoveFirstCat() {
    console.log(cats.shift());
}

function appendCat(name) {
    return [...cats, name];
}

console.log(appendCat("Broom"));

function prependCat(name) {
    return [name, ...cats];
}

console.log(prependCat("Arnold"));

function removeLastCat() {
    return cats.slice(0, 2);
}

console.log(removeLastCat());

function removeFirstCat() {
    return cats.slice(1);
}

console.log(removeFirstCat());