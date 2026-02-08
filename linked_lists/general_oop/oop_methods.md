# Methods of a Class

## Objectives
- Learn what a method is
- Learn how to define a method of a class in JavaScript

Now that we know how to define a class in JavaScript, we can start defining methods for it. A **method** is essentially a function tied to an instance of a class - it has access to whatever we provide for its arguments, as well as the attributes of the class (like what we defined using the `this` keyword in the constructor).

As a reminder, this is our Car class from the previous module so far:

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

We can create an instance of the Car class by calling its constructor, with the `new` keyword:

```js
var sampleCar = new Car('Honda', 'CR-Z', 2011, 'silver', '1G1AF1F57A7192174', true, 8000);
```

But what happens if we simply write out `console.log(sampleCar);`? Well, it gives us information, but...
```
Car {
  make: 'Honda',
  model: 'CR-Z',
  year: 2011,
  color: 'silver',
  vin: '1G1AF1F57A7192174',
  isUsed: true,
  value: 8000
}
```

... it's kind of messy. This is useful as a developer - we're getting every bit of information about this instance of Car - but if we're writing an application for an end-user, it seems a little overwhelming.

What if we combine what we know about formatting strings in JavaScript with some OOP knowledge, and we write a **method** for our class that will provide this information in a nicer format? A method is essentially a function associated with a class, that has access to information from one particular instance of a class. This is where the behavior we talked about earlier comes in (remember how we defined object oriented programming as combining data with behavior?) - the methods we write are the behaviors that the class can perform.

Inside our class definition, after the constructor, we'll write a method called `displayInfo()`. Methods go between the two curly braces that make up the body of the class definition, like so:

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

    displayInfo() {}
}
```

Now that you know where they go, we can actually put some code in the method itself.

A method is essentially a function that can access, use and modify the attributes of the instance we call it from, via the `this` keyword. Other than that, we can treat it using more or less the same rules that we follow for functions. For example, the following will return a string that has all of the core information about the car printed out neatly, in a way that'll be easier for a user to handle - maybe our application will produce a list of cars represented by these strings, and then the user can select one from the list to get more information or modify the data in some way.

```js
    displayInfo() {
        return `${this.year} ${this.make} ${this.model} (${this.color}) - $${this.value}`
    }
```

Now we can call the function inside our `console.log` statement, like `console.log(sampleCar.displayInfo());`, and we get back this:

```
2011 Honda CR-Z (silver) - $8000
```

Much easier to read for an end-user!

## What Else Can A Method Do?

The short answer is - pretty much anything. A method has access to any arguments passed to it when it's called, as well as any of the properties of the object it's a part of (via the `this` keyword). The typical assumption we make of methods though is that they are related to the object they're called from - they're the behavior that relates to a specific set of data. While you technically *can* write a method that doesn't interact with the object at all, it's not generally a good idea.

## Setting A Car's Price - the setPrice() method

Let's say our car dealership software should have the ability to change the price of a vehicle on the lot - the values of cars fluctuate, and if we have a used car that's been sitting around for a while and not getting any interest, we might want to change the price of the car in order to get it off the lot.

Technically speaking, we can just directly change the price property of the car after creating an instance of it, like so:


```js
var sampleCar = new Car('Honda', 'CR-Z', 2011, 'silver', '1G1AF1F57A7192174', true, 8000);
sampleCar.price = 7500;
```

... but this isn't always wise. What if we accidentally set the price to a negative number? We want to make money on cars we sell, not give them away with a cash bonus! Let's instead start a new method called `setPrice()`.

```js
    setPrice(newPrice) {
        
    }
```

Conceptually, this is easy enough - we just set `this.price` to the value of `newPrice`, like so:

```js
    setPrice(newPrice) {
        this.price = newPrice;
    }
```

... but we said earlier that we want to make sure that the price is positive. We can handle that with a conditional:

```js
    setPrice(newPrice) {
        if (newPrice > 0) {
            this.price = newPrice;
        }
    }
```

That's better. While we're here, though, we may as well go a step further. Let's make sure that the price is an integer, rather than a string or some other kind of data. We can do that by casting `newPrice` to an int.

```js
    setPrice(newPrice) {
        if (newPrice > 0) {
            this.price = parseInt(newPrice);
        }
    }
```

Now our car's new price is guaranteed to be a positive integer! Unless we do something like put a string in as the argument for newPrice... what happens then?

The process of making sure data is acceptable for a given use before actually working with it is known as​​ **validation**​. Getting too in-depth with validation immediately can get a little confusing - don't worry about trying to figure out every possible way that data can be incorrect for now. Do keep this in mind as you work, however, particularly when you start working on your own projects - before you start using data, make sure it's data you want to use:

- Is it the right *type* of data?
- If it's not the right type of data, can it at least be *converted* into the right type of data?
- Is the data in the right *range*? Is it too big, or too small?

### A Note For Non-JavaScript Languages

The behavior we've discussed above - the `setPrice()` method - is, as we mentioned, not strictly speaking necessary. Some other languages that introduce the idea of *private* or *protected* instance properties must use a method like this - they're typically referred to as **setters**. Similarly, you may see methods known as **getters** that simply return the value of a property. Again, these are not strictly speaking necessary in JavaScript, but you'll want to be at least vaguely aware of them for when you start working in other languages.

## Conclusion

Now that we've had a brief primer on writing methods for classes in JavaScript, we can start talking about the main focus of this unit: singly linked lists. The next chapter will introduce you to the theory behind them; once you establish some fundamental knowledge, we can start writing code.