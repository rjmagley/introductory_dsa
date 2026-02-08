# What Is JavaScript?

## Objectives
- Understand what JavaScript is and its role in web development

If you've completed your Web Fundamentals course, you've seen and worked with JavaScript. You've written code in JavaScript and used it to do things like add interactivity to web pages. You may not be familiar with some of the interesting details of JavaScript that have lead to its prominence or how it compares to other languages, however. Programmers as a group tend to love detail, nuance and trivia; in this module, we'll discuss some of the background of JavaScript.

Don't think that this is going to just be a list of facts to impress people with, however - knowing some of this information will be helpful in the future! Being able to know more about the background of JavaScript can help you figure out strange edge cases in projects. Knowing more about JavaScript's history is useful for knowing where it may go in the future, and keeping that in mind as you work on projects in the future can help solve problems before they come up.

## ECMAScript

The word "JavaScript" can be tricky in some contexts. Sometimes programmers using it may not mean *exactly* what you might think they mean.

JavaScript is a language that follows a set of standards known as ECMAScript. ECMA (the European Computer Manufacturers Association) established these standards based on the scripting language developed in-house by Netscape for their web browser. The ECMAScript standard was first established in 1997 and has been regularly updated since then.

## JavaScript and Browsers

Any relatively modern desktop browser you use is likely to use JavaScript. However, the actual engine that JavaScript code runs on may be different from browser to browser. The *engine* is what takes code written in JavaScript and converts it into something that the web browser's software can understand for the purposes of interacting with the page, making requests to web servers, downloading data, etc.

Newer versions of the ECMAScript standard create newer JavaScript implementations in those browsers, and some browsers may be faster or slower to update their implementations. Some brand-new ECMAScript functionality may not work from day 1 in all browsers - their JavaScript engines aren't up to date with those new features yet.

Depending on what kind of project you're working on, you may not be able to assume that your users have the very latest technology - as a general rule, it's wise to not lean too heavily on the latest and greatest features in JavaScript, because not all end users may have browsers supporting them.

Something to also keep in mind is that not all browsers and their engines will adhere *perfectly* to these standards. Different companies have different priorities, and sometimes different ways of following these standards. This is less of a concern than it was in the past, but it does crop up from time to time.

## JavaScript Outside The Browser

Many languages (including JavaScript) are based on the ECMAScript standard. This is useful for you - knowing JavaScript makes it easy to start working in other languages based on ECMAScript. A good example is Google Apps Script, a scripting language used inside Google Sheets, Google Docs, Google Slides and other web-based Google products.

The popularity of JavaScript has lead to the language finding use outside of the browser. The Node.js environment, for example, lets you run JavaScript outside of the user's browser - instead, it's run on the server. Why would you want to do this? Well, the primary reason is familiarity. A front-end developer who is very proficient with JavaScript has less difficulty transitioning to writing back-end code if they don't need to learn an entirely new language and syntax.

"Based on" does not mean "is exactly like", however. The most basic elements of JavaScript (as defined in the ECMAScript standard) like arrays and their functionality, for example, should generally work in a Node application in the same way that they do in the browser. This is not always true, however. More advanced behavior, or behavior that isn't explicitly defined in ECMAScript but instead is developed and maintained by third parties, may not make it to different implementations of JavaScript at the same time.

A good example is the Fetch API, used to make requests to servers and get data in the browser. This functionality has been available in JavaScript for some time, but it was messy - a new API was developed to simplify this work, and many browsers implemented this API in early 2015.

For a long period of time, this functionality wasn't available in the same way in Node; making those requests had to be written completely differently. Node only had the Fetch API implemented and usable in early 2022 - a seven year gap!

These sorts of things aren't likely to cause issues for you as new programmers - however, it's worth keeping in mind. Using the very latest version of something may cause issues with older software and hardware, or you may need to wait for companies to catch up with standards and implement them.