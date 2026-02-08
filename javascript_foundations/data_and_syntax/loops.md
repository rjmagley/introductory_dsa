# Loops

## Objectives
- Recognize the elements of for and while loops
- Demonstrate ways in which for and while loops are interchangeable
- Examine reasons to use one kind of loop over another

Loops are an important part of programming; any language you use as a programmer has some kind of loop functionality. Many early programming languages had one single way of handling loops, but JavaScript has two kinds of loops. You may already be familiar with the **for loop**, but there's another kind of loop - the **while loop**. In a technical sense, the two are interchangable, but there are strong reasons to use one over the other.

## For Loops

Let's start with an example of a for loop we can look at as we talk more about loops. Here is a for loop that will print, one by one, each element in an array.

```js
var loopArray = [7, 14, 5, 8, 21, 3];
for (var i = 0; i < loopArray.length; i++) {
    console.log(loopArray[i]);
}
```

To start a loop, you need four parts: an initialization that executes before the loop starts, a condition that is checked after each iteration of the loop, and an afterthought that occurs after the statement that is inside the loop. In code, we can think of it as looking like this:

```js
for (initialization; condition; afterthought) {
    statement;
}
```

(The section marked as statement can be more than one line of code, and frequently is.)

Typically, these statements are true for most loops you see as a new programmer:

- the initialization is the declaration of a new variable and an assignment of some variable to that value
- the condition is some kind of comparison to the variable established in the initialization
- the afterthought modifies the variable established in the initialization 

If we look at our previous example again:
```js
var loopArray = [7, 14, 5, 8, 21, 3];
for (var i = 0; i < loopArray.length; i++) {
    console.log(loopArray[i]);
}
```

we can see that:
- the initialization is the statement `var i = 0;` - we declare the variable `i` and give it the value of `0`
- the condition compares `i` to `loopArray.length`
- the afterthought modifies `i` by incrementing it by `1`

We say "typically" because these are not hard and fast rules. For example, the condition and afterthought do not *have* to reference the variable established in the initialization at all. You'll have some more in-depth reading on this later, when we discuss arrays and iteration in more detail - for now, the important thing to remember is that they do not *have* to be initializing a variable to `0`, checking to see if the variable is less than an array's length, and incrementing that variable by `1`.

## While Loops

While loops are very similar to for loops. Both kinds of loops repeat a block of code over and over. A while loop looks something like this:

```js
while (condition) {
    statement;
}
```

(Much like a for loop, the statement can be more than one line - and usually is!)

The condition is exactly like a for loop's - it's something that must be true or false. The condition is checked after the statement for the loop finishes - if it returns `true`, the loop runs once more. If it returns `false`, the loop finishes and the code continues.

On the surface, while loops seem less useful than for loops. A better way of thinking of them, however, is that they are less *structured* than for loops. They are two very similar tools that can be used to solve problems differently.

### While Loops Don't Have A Set Number Of Iterations

For loops are typically used when you know that the loop needs to continue for a number of iterations, but you don't know the *exact* number - it's based off of other data in your code, like the length of an array. While loops are more frequently used when there's a block of statements that needs to repeat, but the ending of that loop is determined by something that may change based on what happens inside it.

A good example of this can be found in things like video games. A classic video game like Space Invaders effectively works on a while loop. While the player's ship hasn't been destroyed and there are still enemies on the screen, the game constantly works in a loop - handling input from the joystick and button, moving the alien ships, moving projectiles, increasing the score when a ship is destroyed.

If the player's ship is hit by an enemy projectile, the loop ends - the game needs to stop for a second, check to see if the player has any remaining lives, and then restart the game with a new ship. If all the enemies are destroyed, the loop also ends - the game needs to move to the next stage. In both of these scenarios, the loop doesn't run for a set amount of time - it depends on how quick, accurate, and/or clumsy the player is.

**Note:** in a very technical sense, for loops don't *explicitly* have a set number of iterations. You can do some interesting things with for loops and the afterthought, and we'll talk about that more in later readings. The above example could be done with a for loop... but it would be very confusing to read, even for a very experienced programmer. In general, you want to think of a for loop as being based on iterating over a set number of things.

### While Loops Can Be Used In Place Of For Loops

Let's look at that example where we loop over the elements in an array again.

```js
var loopArray = [7, 14, 5, 8, 21, 3];
for (var i = 0; i < loopArray.length; i++) {
    console.log(loopArray[i]);
}
```

We can re-write this using a while loop instead of a for loop. It looks a little more complicated, but the functionality is the same:

```js
var loopArray = [7, 14, 5, 8, 21, 3];
var i = 0;

while (i < loopArray.length) {
    console.log(loopArray[i]);
    i++;
}
```

Now that we know that we *can*, the question is: *should* we use a while loop here? The answer is, generally speaking, no. While loops and for loops can, in many ways, *technically* achieve the same goal and produce the same result - but when you read code, seeing a for loop sets certain expectations, primarily that the loop has a definite end point. Seeing a while loop sets a different expectation, that the loop may repeat an unknown number of times based on what happens inside the loop.

## Conclusion

Loops - both for loops and while loops - are an important part of programming. Remember that there is a reason there are two kinds of loops! While we can technically do anything we want to with a for loop by using a while loop, or vice versa, using one or the other sets expectations for someone reading your code.