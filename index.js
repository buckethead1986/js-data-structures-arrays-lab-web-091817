// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(cat) {
  drivers.push(cat);
}

function destructivelyPrependDriver(cat) {
  drivers.unshift(cat);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  return [...drivers, name];
}

function prependDriver(name) {
  return [name, ...drivers]
}

function removeLastDriver() {
  return drivers.slice(0, -1);
}

function removeFirstDriver() {
  return drivers.slice(1);
}
