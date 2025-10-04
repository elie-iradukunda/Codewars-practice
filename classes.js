class Students {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Inherited class
class GraduateStudent extends Students {
    constructor(name, age, degree) {
        super(name, age); // Call parent constructor
        this.degree = degree;
    }
}

// Create objects and console them
const student1 = new Students("Alice", 20);
console.log(student1);

const gradStudent1 = new GraduateStudent("Bob", 25, "MSc Computer Science");
console.log(gradStudent1);