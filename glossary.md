# Glossary

The following is a list of terms that you may wish to refer to as you read. Some of these entries are just definitions; others contain more in-depth examples used to explain the topic.

## algorithm

A series of instructions that operate on a given input to produce a desired output. Any well-defined series of steps that you follow one by one to reach a given endpoint can be considered an algorithm. In computer science, we think of an algorithm as a function (or series of functions) that, given X (a parameter, or multiple parameters), will always produce Y. You may hear the term "algorithm" used to mean "any problem solvable with programming", which isn't entirely false but *does* gloss over the important details a bit.

## API

Application programming interface. The term API can have two meanings,
    - a connection to some software that other software can access; the most common example being an API endpoint online, where you can send a request to a specific address and get back a response (typically in JSON format).
    - the documentation that refers to how the above connection works; more properly referred to as an "API specification".

Typically as a web developer, the term API most frequently refers to a version of the first definition - a server running online that accepts requests and serves appropriate responses. If someone were to ask you to "look up information on the GitHub API", they probably want you to figure out how that API works - how to authenticate with it, what requests you can make of it, etc.

Other applications also have APIs, however - for example, your operating system on your computer has an API that allows other programs to easily draw windows on the screen, access files from the hard drive, etc. If your OS didn't offer an API for these tasks, every developer or organization would have to figure out how to do these things independently.

An example of how this was a problem can be found in early 90s graphics acceleration hardware - many companies were producing hardware, and developers had to choose which hardware they wanted their software to support. It was not infeasible that, say, a popular game just didn't support your 3D accelerator card. The introduction and support of OpenGL and DirectX made this generally a solved problem.

Finally, it's worth noting that occasionally "API" can just be a shorthand for "documentation on how the API works" - a reference for how a certain software API works. If you were working on a project in Java, and you had to work with the String class but weren't entirely sure what it could or couldn't do, you'd want to go look at the Java API's information on the String class - https://docs.oracle.com/javase/8/docs/api/java/lang/String.html

## argument

Data provided to a function when it is called. The term used for what's established when we're actually writing the function is a *parameter*. For example, look at the following code snippet:

function sample_function(x, y, z) {
    return (x / y) + z;
}

sample_function(8, 3, 21);

The terms x, y and z in the function definition are parameters. The values 8, 3 and 21 are arguments.

## brute force

A brute force approach to a problem is simply one that tries all the possible combinations/permutations/etc. for a problem, then returns the "best" one. Brute force algorithms are frequently rather slow and inefficient, because they'll look at possibilities that are obviously non-ideal - but, given enough time, they're guaranteed to find the correct result.

A classic problem that is solvable (but in a very non-optimal way) with a brute force algorithm is the traveling salesman problem (https://en.wikipedia.org/wiki/Travelling_salesman_problem) - it's very easy to write a brute force algorithm that will check every possible route. But there are two problems:

- Imagine a traveling saleman problem involving the cities Seattle, Los Angeles, Chicago, Kansas City, New York City, Miami, Philadelphia and Boston.

(cities.png)

A brute force approach will look at every possible route - there are 40,320 of them - and will even consider routes that are immediately nonsensical, like a route containing a path that goes from Seattle to New York City, to Los Angeles, to Boston, to Miami, to Philadelphia. A human looking at this knows it's going to be inefficient:

(cities2.png)

You can tell by looking at this that not only is it kind of silly to zigzag across the continent like this, but the lines drawn go almost right over Chicago and Kansas City without touching them! The brute-force approach won't even consider this, however - it will just check every single possibility.

- Speaking of every single possibility, with eight cities there are 40,320 possibilities. With nine, there are 362,880 - with ten, we're already at 3,628,800. Even for exceptionally fast computers, trying to compute the most efficient path between more than 20 or so cities by testing *every* path becomes effectively infeasible. This has a big-O time complexity of n!, which is overwhelming.

The solution to this is *dynamic programming* - taking a large problem and dividing it up into smaller sub-problems. A human being looking at the map will know that the best solution probably has a route from Philadephia to New York City to Boston (or perhaps the other way around). A solution using dynamic programming is one that will group cities that are close together into a single chunk, then try to find routes between those chunks. It may still have quite a few routes to check, but it will reduce the number of overall computations made.

## deterministic

Producing the same output given the same input. A function that adds two numbers together and returns the result is a simple example of a deterministic function; two plus two always equals four.

A deterministic function doesn't rely on random numbers, network calls, etc. - if you give a deterministic function X and Y as arguments, it will *always* return Z, no matter when or where you call it.

## ECMAScript

JavaScript's proper name - the ECMAScript standard is maintained by a group known as Ecma International ("ECMA" used to stand for European Computer Manufacturers Association, but changed names). We still call it "JavaScript" because that's what everyone else calls it - when the language was introduced in 1995, Java was the language in demand, and naming this new scripting language JavaScript was basically a marketing scheme.

Please do not confuse Java with JavaScript. They have *no relation* beyond the name.

ECMAScript is frequently shortened to "ES", especially when adding a version number, like ES6 or ES2021.

## edge case

An edge case, informally defined, is a situation or input (or 'case') that a given function or algorithm should be able to handle, even if it's not something that the algorithm in its most basic form handles.

A typical strategy when writing code is to first get down a function that solves a problem. You then see what inputs you can give that function that should be able to be handled in a sane way, or should at least produce a reasonable output of some kind, and test those. If they work, great! If your code now starts failing, you have an edge case that you need to account for.

Writing a function that catches every single edge case in its first version can be challenging - it's a skill that you'll slowly develop over time. Sometimes you only discover the edge cases of a function long after writing it, when using it elsewhere in your project. This is normal! Don't let it bother you.

(Technically speaking there are other kinds of special cases - boundary cases, corner cases, etc. that have specific definitions, but informally most people will identify all these as an "edge case".)

## immutable

Unable to be changed or modified. Some types of data in many languages are immutable - strings are a frequent example. You cannot change individual characters of a string. You can, however, create new strings involving that string, or sections of that string.

Something being immutable doesn't mean the variable storing that data can't be set to something else, either - it's just the data itself that can't be modified. Many languages have the concept of defining a variable as being unable to be changed - this is typically known as a "constant". Mind, a constant that is a mutable data type can frequently have its contents changed! Pretty weird!

The opposite of immutable is mutable.

## memoization

The process of storing the result of expensive-to-compute deterministic function calls. This is *not* a typo for "memorization".

## method

A function associated with instances of a particular class.

The difference between a method and a function is that a function stands alone, while a method is defined as part of a class, and is typically called via instances of that class. For example (in JavaScript) strings have a `.includes()` method we can call on a string that will return true or false depending on if the argument given to `.includes()` is present in the string.

```
> let sample_string = "It's a beautiful day in the neighborhood!"
undefined
> sample_string.includes("ful day")
true
> sample_string.includes("fulday")
false
```

If we wanted to write a seperate function to perform this task, it would need two arguments - the string to check, and the string containing what we're looking for. Given that we'd only be checking strings to see if they include other strings, it makes the most sense to just make it a method of the string class itself.

## variable

A name for a location where we store data.

We frequently say the variable itself stores the data as a shorthand, although that's not *entirely* technically accurate - the variable acts as a reference to where a given unit of data can be read from memory. But in most situations, particularly as a more junior programmer, this distinction doesn't matter.