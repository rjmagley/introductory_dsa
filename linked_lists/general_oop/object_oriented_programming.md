# OOP in JavaScript

## Objectives
- Understand basic OOP principles and their implementation in JavaScript

## Review: Object Oriented Programming

Object oriented programming is a programming technique that focuses and relies on the implementation of **classes** - the blueprint for collecting a specific set of data together along with ways of accessing, manipulating and using that data for a specific purpose.

A simple way boiling down the complexities of OOP is to think of it as the art of combining *data* with *behavior* relating to that data. Keep this statement in mind as you read about and work with OOP - we are establishing data, and writing behavior relating to that data.

Even if you are not familiar with OOP, it has been lurking in the background in JavaScript. Consider a string, for example - a string is a collection of characters, which we consider data. This data, and information we can derive from the data (like the length of the string, accessible through `.length`) are what we know as **properties** of the class. The tools we use for working with a string, like `.slice()` and `.split()` are **methods** - they are functions associated with that class, used by members of that class (or what we know as **instances** of the class) to work with the data the class contains.

## JavaScript OOP Example - The Class Definition And Constructor

Let's build out a class in JavaScript for a theoretical application that helps manage cars at a car dealership. When our dealership acquires cars, data about those cars is fed into a database; when we need to manage that data, the data about each car is turned into an instance of our Car class that we'll create. To start, we define the class, similar to how we define a function:

```js
class Car {
    
}
```

The keyword `class` starts a class declaration; the word after it is the name of the class. Class names start with capital letters for each word in the class name - `Car`, `Employee`, `InfoPanel`, `DatabaseManager`, etc.

Now we add the constructor. The **constructor** is a special method of the class (we'll define methods in more detail in just a bit) that creates new instances of the class in memory. These can get very complicated, but for now we're going to keep it fairly simple. We're going to add several arguments to our constructor; the constructor will use those arguments to define **attributes** of our class.

```js
class Car {
    constructor(make, model, year, color, vin, isUsed, value) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.vin = vin;
        this.isUsed = isUsed;
        this.value = value;
    }
}
```

Every instance of `Car` that we create has a seperate set of attributes that define some core information about the physical car on the lot this data represents - the make, model and year of the car, the color of the car, the car's VIN (vehicle identification number), if the car is used or new, and the value of the car - either the price we bought the car from the manufacturer for, or amount we paid for the car from someone if we bought it used.

In the constructor, where it says `this.make = make`, the term `this` is very important. `this` essentially means "the specific instance of this class we are working with". What we are saying with this line is "the `make` attribute of this car is assigned the value for the `make` argument that we passed in to the constructor".

### The Relationship Between Constructor Arguments and Object Attributes
Many students get confused by examples like the above, because we're using terms like `make` and `model` twice - once as an argument to the constructor, and again as an attribute for the class. In our example, these two are named the same for convienence, but they do not *have* to have the same name. Look at this abstract example:

```js
class SampleClass {
    constructor(a, b, c) {
        this.x = a;
        this.y = b;
        this.z = c;
        this.v = null;
        this.w = a + b;
    }
}
```

The constructor for `SampleClass` takes in three arguments - `a`, `b` and `c`. Every instance of `SampleClass` has five attributes - `v`, `w`, `x`, `y` and `z`. The line `this.x = a` means that the particular instance of SampleClass we're creating has an attribute `x` that we are assigning the value of the argument `a` to. The name of the argument and the attribute do not have to match exactly; there may be some attributes that come from using the arguments in different ways, or some attributes that are automatically set to a specific value.

Here's another example showing why we might want to define attributes that don't come from the constructor's arguments directly - for this example, we're defining a class used to represent a rectangle drawn on the screen. The upper left corner of the rectangle exists at a specific x and y coordinate, and the rectangle has a height and a width.

```js
class Rectangle {
    constructor(xPosition, yPosition, height, width) {
        this.x = xPosition;
        this.y = yPosition;
        this.height = height;
        this.width = width;
        this.area = height * width;
    }
}
```

The constructor uses the terms `xPosition` and `yPosition` to help differentiate them from the `x` and `y` that are attributes of the class - we could use `x` instead of `xPosition` if we wanted to. The `area` attribute is calculated based on the height and the width - there's no need to provide the area as an argument, because the area of a rectangle is specifically calculated using the rectangle's height and width.

For our example, though, we can keep it simple - every attribute of every instance of our `Car` class comes directly from an argument to the constructor. We're explicitly using an example where the name for the argument and the name for an attribute of the class are the same so that we can get you used to the idea as soon as possible - it's a very common convention in many programming environments.

## Creating An Instance Of Car

To create an instance of our Car class, we call the constructor of the class using the `new` keyword. The constructor needs to be provided with all its arguments - `make`, `model`, `year`, etc. - otherwise they'll be left as `undefined`.

Let's say our dealership has bought a used 2011 Honda CR-Z from someone. It's not in the best shape, but it's a reasonable car - we bought it for eight thousand dollars. To represent this data, we'll pass it into the constructor for our Car class:

```js
var sampleCar = new Car('Honda', 'CR-Z', 2011, 'silver', '1G1AF1F57A7192174', true, 8000);
```

The variable `sampleCar` now contains an instance of our Car class with the given information - we can print out individual attributes of this object by using dot notation and the name of the attribute after the variable name `sampleCar`. If we run the line `console.log(sampleCar.vin);`, the JavaScript interpreter prints out `'1G1AF1F57A7192174'` - the VIN we provided to the constructor.

We can create another instance of Car by calling the constructor again, storing it in another variable (or adding it to a list, or making it the value of a key in an object) - we can create as many as we need to. Just remember that this data exists only in memory right now - it's not being permanently written to disk or stored in any other way. (You'll learn how to do that during your full-stack courses!)

In the next module, we'll discuss the concept of methods of our class, and demonstrate how they can be used.