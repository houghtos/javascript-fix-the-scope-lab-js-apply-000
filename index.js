var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  if (animal === "dog"){
    animal = 'cat'
  }
  return animal
}

function add2(n) {
  const two = 2
  return n + 2
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

var theFunk = funkyFunction()
theFunk.function()