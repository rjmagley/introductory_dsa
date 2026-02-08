# String Encoding

## Objectives
- Understand how the computer handles text in different ways
- Learn more about strings and characters

At this point in your journey, the question "what is a string?" has a fairly simple answer - a string is text, an immutable sequence of characters. As you become more experienced as a programmer, however, strings become more complicated than they may seem - terms like "text" and "character" seem simple on the surface, but when it comes to solving problems using JavaScript, can be very confusing.

## String Encoding

**String encoding** is the process by which the computer decides how binary data is represented as text. Most important of these encodings are those known as **Unicode** written and implemented so that computers all represent text in the same way. This is important for modern computing, even if dealing with encoding problems is less and less common today, and worth knowing a little of the history surrounding it.

### Before Unicode

Computers didn't always represent strings the same way in memory. In the very early days of computer science, this wasn't really a problem - computers simply didn't exchange data with each other unless a human was involved. As computers became networked, it became a much larger problem. Machines from two different manufacturers wouldn't represent text in the same way, and even two products from the *same* manufacturer had no guarantee of storing text in the same way - like DEC's various PDP computers.

By the mid-60s, some manufacturers of hardware and writers of software generally settled on a standard to follow - **ASCII**, short for "American Standard Code for Information Interchange". ASCII is a set of 128 symbols representing upper and lower-case letters, punctuation, numbers and some non-printing control characters - more on what "non-printing control characters" comes after this section. ASCII uses seven bits to encode data; the bits `01000001` translate to the letter `A`, for example.

"Some manufacturers" in the previous paragraph *really* means "American manufacturers" - computers and software produced outside of America didn't necessarily follow this standard, in part because it simply doesn't represent non-Latin languages well. Other manufacturers had to create their own standards, like the Shift JIS standard in Japan for representing Japanese text. Many of these standards ended up at least partially based on ASCII - but not completely. Text transmitted across a network may end up garbled and not render properly if the computer assumed it was receiving text in one encoding, but instead getting another.

Worsening this problem is that some companies, like Microsoft, started developing their own character encodings, to represent text beyond the characters in the ASCII character set. Microsoft went a step further and created *several* encodings for different regions based on languages they used: Windows-1252 for North America and Western Europe, Windows-1256 for Arabic countries, Windows-1251 for countries using Cyrillic-script languages, and so on. Frequently these were supersets of ASCII - taking the ASCII encoding and enhancing it - but this was not always the case.

### This Is A Problem

The end result is that unless software was very careful about how it transmitted data across the Internet, and computers were set up to handle multiple kinds of character encodings, text could become garbled or unreadable - many Japanese websites and software simply wouldn't display anything recognizable to Japanese *or* English speakers on American and European Windows computers.

For example, here's a line of text from the Japanese version of the MDN introducing JavaScript:

JavaScript (JS) は軽量で、インタープリター型、あるいは実行時コンパイルされる、第一級関数を備えたプログラミング言語です

An American PC running Windows 98 that tried to read that from a Japanese website, not knowing what encoding to use, would use the default - Windows-1252, in this case - and produce this:

‚±‚Ìƒ[ƒ‹‚Í ŠF—l‚Ö‚ÌƒƒbƒZ[ƒW‚Å‚·B

This isn't recognizable as Japanese unless you understand that there's a technical problem, not a linguistic one - the data is still there, the computer just isn't handling it correctly.

Having multiple encoding formats to handle different languages and writing systems is causing a number of problems at this point, particularly as the Internet links more and more computers together. Computers have to transmit data to each other, while also specifying what encoding they're using, and some software would confuse one encoding for another. Eventually, we solve this problem with Unicode.

### Unicode

The Unicode Standard, typically shortened to just "Unicode", is an international standard to electronically represent any character one computer would need to communicate with another. "Unicode" is also frequently a shorthand for **UTF-8** - a specific Unicode encoding using eight bits. The Unicode standard also specifies other encodings, like UTF-16 and UTF-32; this can be confusing sometimes, in the same way it was before - but developers, businesses and governments had generally all settled on UTF-8 as a standard by the mid-2000s.

UTF-8 covers symbols needed to print out text in nearly all human languages - from common languages like English, Chinese, Arabic to significantly less common, like Cherokee (a Native American language) and Soyombo (a script used to write in languages like Mongolian and Sanskrit, created in the late 1600s). It also covers punctuation, various symbols used in different industries and sciences, control characters for computer software, and emoji.

UTF-8 is by far the most popular character encoding in the modern day; it is the default encoding for most major programming languages and operating systems. The major exception is some older Microsoft products... which use UTF-16, still a part of the Unicode Standard.

### What Does This Mean To Me?

If you're lucky, this won't be something you have to think about much - the purpose of having a standard is for *everyone* to use it, and use of UTF-8 is only growing with time.

You may end up someday needing to work on software that doesn't use UTF-8, or work with text that's not encoded in UTF-8 - in this case, simply knowing that other forms of encoding text *exist* is enough to put you most of the way to solving the problem. Many languages have libraries for encoding text to and from different encodings; the majority of the work is done for you once you identify the problem.

## Characters

At the top of this page, we defined a string as "text, an immutable sequence of characters". The word "characters" here can be a bit confusing - it's one of those words that, in context, doesn't mean what you might assume it does.

In a technical sense, a **character** is a single unit of data representing a single symbol. "Symbols" in this case can mean individual printed characters for us to read: letters, digits or punctuation. `"abc6!"` is a string made up of five characters - symbols for the letters "a", "b", "c", the number "6" and the punctuation mark "!".

### Non-Printing Characters

A character can also refer to what we refer to as "control" symbols - symbols that we don't print to the screen, but that instead represent data to the computer to represent how text is formatted. For example, we can add control symbols to strings in JavaScript to modify how they print.

```js
var testString="Hello!\nWorld!"
console.log(testString); // prints Hello!
//                                 World!
```

The `\n` in that string is a "new line" - it tells our JavaScript interpreter to add a line break between two characters, so the rest of the string prints on a different line. `\n` is one of many **escape sequences** we can use in JavaScript to get control symbols into our code. (You can see more of them [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences))

Interestingly, these also count as a character for determining a string's length:

```js
var testString="Hello!\nWorld!"
console.log(testString.length); // prints 13
```

The string `Hello!\nWorld!` is 13 characters long. Reading it visually, we want to think of `\n` as being two separate characters - a backslash, and a lower-case n. To our computer, however, `\n` is just a nice way for humans to understand that a new line will be inserted at that point.

### Modifying Characters

Finally, "characters" can also refer to symbols that are combined with other symbols to modify them. For example, the Unicode character set has a full set of characters used to modify other characters. Look at the character on the following line:

o&#776;

This is a lower-case O with an umlaut over it - in German, this represents how the sound changes. Lots of languages add symbols like this, known as *diacritics*, to letters to indicate pronunciation. To a reader, this is one character. But in code, this can be written as two symbols:

```o&#776;```

The `&#776;` after the `o` represents the umlaut. Technically speaking, Unicode has a specific character for this as well, but we can modify any character this way:

o&#776; t&#776; $&#776; [&#776; !&#776;

The above example is a bit silly, but it demonstrates that this is technically possible - we can combine these symbols to create one human-readable character.

In JavaScript, we can access these symbols using another escape sequence used to access Unicode symbols, `\uXXXX`, where `XXXX` is a hexadecimal number. Like before, this changes the length of the string - this Unicode escape sequence is one "character", according to JavaScript.

```js
var x = "o\u0308";
console.log("o\u0308"); // prints "ö"
console.log(x.length); // prints "2"
```

Keep this in mind when you're doing more advanced work using strings - especially code challenges involving string inputs. What visually looks to you like one letter may actually be two or more symbols combined together.

## Conclusion

You may be noticing a pattern now - something that was introduced to you earlier as being very simple is actually much more complicated than first expected. Don't let this worry you! Like some other things you've read here, this is more for background detail and future thinking - although knowing how to use escape sequences in your output can help make things more clear when you're debugging problems.

The detailed information you've read here is not something you'll need to recall every day. It is useful in edge cases and in-depth technical discussions - being able to talk about topics like differences in character encoding and how it might change code you write is something that can show a prospective employer that you think ahead when you write code. It's never a bad thing to impress someone who assumes you'll give them a simple answer, only to give them one that shows that you think about things in more detail.

