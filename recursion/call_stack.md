# The Call Stack

## Objectives
- Learn what the call stack is
- Learn how the call stack can better help you understand both recursive and iterative functions

Before we get deeper into recursion, we should cover a general topic in programming - the existence of the **call stack**. Every language works slightly differently, but all common languages use a call stack (sometimes referred to in shorthand as just "the stack") to manage execution of code. For this module we'll be focused on JavaScript, but the information presented here is generally applicable from language to language.

## Functions

Let's refresh ourselves on functions quickly. A function is a block of pre-defined code that (generally) has a set of **parameters**. These parameters and provided with **arguments** when the function is **called**. When the function is called, the lines of code execute one by one in order. Eventually, there is no more code for the function to run, and it finishes.

The entire state of the function - its arguments, the variables declared inside it and their values, etc. - are stored in what is known as a **frame**. When a function is called, all its data is added to the call stack in a frame. When the function finishes, the frame (all of the data for a function) is removed from the stack - it's not needed anymore, and we need to make sure that there's room in the call stack for more function calls.

Generally speaking, all of this is handled by the language you're working with. It's not something you typically need to think about in your day to day work... unless you're writing tricky recursive functions that are getting out of control. It's still worth knowing at least the basics of, however, because it will help you understand what's happening as your projects become more and more complicated.

## A Call Stack Example Using Non-Recursive Functions

Let's take a look at a quick example of a set of non-recursive example functions. Below is a Trace playground where some functions are established, then called towards the end of the file. See if you can predict what the final output is before you run the code!

https://learnwithtrace.com/playground/shared/ri.submission..submission.ce1b7eb6-0640-4a52-bfd2-064c8fce9417/replay

When you run this code through Trace, you can see a visualization of the call stack on the left hand side - when a function name appears, that means that function is executing. If that function calls another function, the new function call appears on the top of the stack - that new function call has to finish before the function that called it can continue its work.

This is the important thing to note - when we call a function inside another function, the execution of the first function stops until the second function finishes. You may have already been aware of this; now you know a little more about why this happens.

## Conclusion

Now that we know a bit more about the call stack in a theoretical sense, we can begin to think about how it affects our work. To put it simply: in normal day-to-day programming, unless we are purposefully looking to test the limits of the call stack, it is unlikely to cause problems for us. While it differs from language to language, and environment to environment, you don't need to worry about the size of the call stack or the number of functions waiting in it - in many environments, the call stack can have thousands of functions waiting ro resolve.

The exception to this is when we are writing recursive functions. Any recursive function you write may end up calling itself multiple times before it finishes its work - we'll go over a few examples of what this looks like in later modules.