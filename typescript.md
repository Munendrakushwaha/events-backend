<h2>Introduction to TypeScript</h2>

TypeScript is a statically typed superset of JavaScript designed to make JavaScript development more robust and maintainable. It introduces the concept of static types to JavaScript, allowing developers to specify types for variables, function parameters, and return values.

<h3>Basic Types in TypeScript</h3>

<h4>1. Primitive Types</h4>

- Boolean Type

The boolean type represents logical values, either true or false. It's commonly used to store conditions or boolean flags in code.

    let isDone: boolean = false;

- Number Type

TypeScript's number type supports both integer and floating-point numbers.

    let decimal: number = 6;
    let pi: number = 3.14;

- String Type

The string type deals with textual data, representing sequences of characters.

    let name: string = "TypeScript";

- Array Type

Arrays in TypeScript are collections of elements of the same type denoted by square brackets [].

    let numbers: number[] = [1, 2, 3, 4];

<h4>2. Other Types</h4>

- Tuple Type

Tuples are arrays with a fixed number of elements, each potentially of different types.

    let tuple: [string, number] = ["hello", 10];

- Enum Type

Enums allow the creation of a set of named constants, making code more readable.

    enum Color {
        Red,
        Green,
        Blue,
    }
    let c: Color = Color.Green;

- Any Type

The any type allows variables to hold values of any type, providing flexibility but losing some of TypeScript's benefits.

    let notSure: any = 4;
    notSure = "maybe a string instead";

- Void Type

The void type represents the absence of a type, commonly used as the return type for functions that do not return a value.

    function sayHello(): void {
    console.log("Hello!");
    }

<h4>Variables and Type Declarations</h4>
In TypeScript, variables can be explicitly typed or their types can be inferred by the compiler.

    let message: string = "Hello, TypeScript!"; // Variable 'message' is explicitly typed as a string.

    let numberValue = 10; // TypeScript infers the type as 'number' based on the assigned value.

<h2>Classes in TypeScript</h2>

Classes in TypeScript allow you to define blueprints for objects, encapsulating both data and behavior. They offer a structured way to create reusable components and promote object-oriented programming principles.

<h3>Class Declaration</h3>

A class consists of properties and methods. It uses the class keyword followed by the class name. Here's an example:

    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        greet() {
            return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
        }
        }

        let person1 = new Person("Alice", 25);
        console.log(person1.greet());

In the above example:

- Person is a class with properties name and age.
- The constructor is a special method used for initializing object properties when an instance of the class is created using the new keyword.
- greet() is a method within the class Person that returns a greeting message.

<h3>Inheritance</h3>
In TypeScript, classes support inheritance using the extends keyword. This allows a subclass (derived class) to inherit properties and methods from a superclass (base class)

    class Employee extends Person {
        role: string;

        constructor(name: string, age: number, role: string) {
            super(name, age); // Calling the constructor of the superclass
            this.role = role;
        }

        getRole() {
            return `I am an ${this.role}.`;
        }
    }

        let employee1 = new Employee("Bob", 30, "Engineer");
        console.log(employee1.greet());
        console.log(employee1.getRole());

In the above example:

- Employee extends the Person class, inheriting its properties and methods.
- The super() method calls the constructor of the superclass (Person).

<h3>Access Modifiers</h3>
TypeScript provides access modifiers like public, private, and protected to control the accessibility of class members.

    class Animal {
        private name: string;

        constructor(name: string) {
            this.name = name;
        }

        getName() {
            return this.name; // Accessible only within the class
        }
        }

Here, name is marked as private, making it accessible only within the Animal class. The getName() method can access the name property because it's within the same class.

<h3>Interfaces in TypeScript</h3>
Interfaces in TypeScript define the structure of an object and its types. They provide a way to define contracts within your codebase.

<h3>Interface Declaration</h3>

An interface declares the shape that an object must adhere to, specifying properties, methods, and their types.

    interface Shape {
        color: string;
        area(): number;
        }

        class Circle implements Shape {
        color: string;
        radius: number;

        constructor(color: string, radius: number) {
            this.color = color;
            this.radius = radius;
        }

        area() {
            return Math.PI * this.radius ** 2;
        }
        }

        let circle = new Circle("red", 5);
        console.log(circle.area());

Here, the Shape interface specifies that any object implementing it must have a color property of type string and an area() method that returns a number.

<h3>Extending Interfaces</h3>
Interfaces can extend other interfaces to inherit their members, allowing for composition and reusability.

    interface Person {
        name: string;
        age: number;
        }

        interface Employee extends Person {
        role: string;
        }

        let employee: Employee = {
        name: "Alice",
        age: 25,
        role: "Manager",
        };

The Employee interface extends the Person interface, inheriting the name and age properties while adding its own role property.
