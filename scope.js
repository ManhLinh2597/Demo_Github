function Animal(name, weight) {
    this.name = name
    this.weight = weight
}

function Chicken(name, weight, legs){
    Animal.call(this, name, weight)
    this.legs = legs
}

const manhLinh = new Chicken('Manh Linh', 90, 2)

console.log(manhLinh)