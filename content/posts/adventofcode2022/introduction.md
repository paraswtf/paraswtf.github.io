---
title: Day 0 of learning Python
description: Using Advent of Code 2022 as an opportunity to familiarize myself with a new programming language.
date: 2022-12-01
draft: false
slug: /blog/aoc22
tags:
  - AdventOfCode2022
  - Python
---

_Using [Advent of Code 2022](https://adventofcode.com/2022) as an opportunity to familiarize myself with a new programming language._

---

Today was the beginning of a new adventure - learning Python. Armed with a background in Java, JavaScript, and TypeScript, I was eager to see how this new language would shape my coding journey.

## Python's Simplicity

Having spent time with Java, JavaScript, and TypeScript, Python's clean syntax felt refreshingly straightforward.

### Indentation: A New Way of Structuring Code

One of the initial differences I noticed was Python's use of indentation to denote code blocks. Unlike the familiar curly braces and semicolons, Python relies on consistent spacing to define the structure of the code. It felt strange at first, but I quickly came to appreciate the visual clarity it brought to my programs.

```
python
# Java Code
for (int i = 0; i < arr.length; i++) {
  System.out.println("Hello");
}

# Python Code
for i in range(len(arr)):
  print("Hello")
```

### Swapping Values: A Pleasant Surprise

One of the first things that caught my attention was Python's elegant way of swapping values between variables. In Java, I was accustomed to using a temporary variable for such operations, but Python offered a more concise approach.

```python
// Java
int temp = a;
a = b;
b = temp;

# Python
a, b = b, a
```
## Embracing the Pythonic Way

Python's 'Pythonic' way of doing things quickly became evident. It encouraged a more streamlined and intuitive approach to problem-solving. For instance, the built-in functions and libraries were extensive and saved me from reinventing the wheel.

```python
# Finding the maximum value in a list
max_value = max(my_list) # Python

// JavaScript
const max_value = Math.max(...myArray); // JavaScript
```

## Conclusion

Day 0 of my Python journey was both exciting and enlightening. The transition from my familiar languages was smoother than expected, and Python's elegance and simplicity left me eager for more. Using Advent of Code 2022 as my playground, I could feel my confidence in Python growing with each challenge.

As I closed my laptop, I couldn't help but feel a sense of accomplishment. I was ready for the days ahead, eager to explore more of Python's capabilities. With a newfound perspective and a sense of excitement, I looked forward to Day 1, knowing it held new puzzles and new opportunities for me to sharpen my Python skills.

## Resources

- [Python Documentation](https://docs.python.org/3/)
- [Advent of Code 2022](https://adventofcode.com/2022)

## [Read about Day 1 ->](/blog/aoc22/day1)
