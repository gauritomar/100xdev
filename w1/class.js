class Animal {
    constructor(name, legCount, speaks) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    static myType() {
        console.log("Animal");
    }

    speak() {
        console.log(`this ${this.name} makes the noise: ${this.speaks}`);
    }
}

let dog1 = {
    name: "dog",
    legCount: 4,
    speaks: "bow bow"
}

console.log(Animal.myType());
let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow meow");

cat.speak();