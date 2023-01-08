---
title: Odious Number Program
description: Writing a program in Java to check if a number entered is odious or not
date: 2023-01-08
draft: true
slug: /blog/odious-number-program
tags:
  - Java
  - School
---

## Question

An Odious number is a positive whole number. Which has odd number of 1’s in its Binary
equivalent.

- Example 1: Binary equivalent of 8 is 1000. Which contains odd number of 1’s. So, 8 is
  Odious number.
- Example 2: Binary equivalent of 13 is 1101. Which contains odd number of 1’s. So, 13 is
  Odious number.
- Example 3: Binary equivalent of 9 is 1001. Which contains even number of 1’s. So, 9 is
  not Odious number.

A few Odious numbers are : 2, 4, 7, 8, 11, 13, etc.

Design a program to accept a positive whole number. Find the binary equivalent of the
number and count the number of 1’s in it and display whether it is an Odious number or not
with an appropriate message. The proper error message should be displayed for the
negative input.

Test your program with the sample data and some random data:

- Example 1:

```text
INPUT: 11
OUTPUT:
BINARY EQUIVALENT = 1011
NUMBER OF 1’S = 3
11 IS AN ODIOUS NUMBER
```

- Example 2:

```text
INPUT: 15
OUTPUT:
BINARY EQUIVALENT = 1111
NUMBER OF 1’S = 4
15 IS NOT AN ODIOUS NUMBER
```

- Example 3:

```text
INPUT: -17
OUTPUT: INVALID INPUT
```

## Solution

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Create a Scanner object to read input from the user
        Scanner scan = new Scanner(System.in);

        // Prompt the user to enter a positive whole number
        System.out.print("Enter a positive whole number: ");
        int num = scan.nextInt();

        // Close the scanner to free up resources
        scan.close();

        // If the number is negative, display an error message and terminate the program
        if (num < 0) {
            System.out.println("Error: number must be positive.");
            return;
        }

        // Convert the number to its binary equivalent
        String binaryString = toBinaryString(num);

        // Count the number of ones in the binary string
        int numOnes = countOnes(binaryString);

        // Print the binary equivalent of the number
        System.out.println("Binary equivalent: " + binaryString);

        //Print the number of ones in the binary string
        System.out.println("Number of 1's: " + numOnes);

        // If the number of ones is odd, print that the number is an Odious number
        if (numOnes % 2 == 1) {
            System.out.println(num + " is an Odious number.");
        }
        // Otherwise, print that the number is not an Odious number
        else {
            System.out.println(num + " is not an Odious number.");
        }
    }

    /**
     * Converts the given number to its binary equivalent as a string.
     * @param num the number to convert
     * @return the binary equivalent of the number as a string
     */
    private static String toBinaryString(int num) {
        String binaryString = "";
        // Iteratively divide the number by 2 and prepend the remainder to the binary string
        // until the number becomes 0
        while (num > 0) {
            binaryString = (num % 2) + binaryString;
            num /= 2;
        }
        return binaryString;
    }

    /**
     * Counts the number of ones in the given string.
     * @param str the string to count ones in
     * @return the number of ones in the string
     */
    private static int countOnes(String str) {
        int count = 0;
        // Iterate through each character in the string and count the ones
        for (int i = 0; i < str.length(); i++) {
            if (str.charAt(i) == '1') {
                count++;
            }
        }
        return count;
    }
}
```

## Variable tables

- main()

| Variable       | Type       | Description                                                               |
| -------------- | ---------- | ------------------------------------------------------------------------- |
| `scan`         | `Scanner`  | A Scanner object used to read input from the user                         |
| `num`          | `int`      | The positive whole number entered by the user                             |
| `binaryString` | `String`   | The binary equivalent of `num` as a string                                |
| `numOnes`      | `int`      | The number of ones in `binaryString`                                      |
| `args`         | `String[]` | The command-line arguments passed to the program (unused in this program) |

- toBinaryString()

| Variable       | Type     | Description                                                                  |
| -------------- | -------- | ---------------------------------------------------------------------------- |
| `num`          | `int`    | The number to convert to a binary string                                     |
| `binaryString` | `String` | The binary equivalent of `num` as a string (initialized to the empty string) |

- countOnes()

| Variable | Type     | Description                                    |
| -------- | -------- | ---------------------------------------------- |
| `str`    | `String` | The string to count the number of ones in      |
| `count`  | `int`    | The number of ones in `str` (initialized to 0) |
