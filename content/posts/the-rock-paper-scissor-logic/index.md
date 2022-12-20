---
title: The Rock-Paper-Scissor logic
description: How to make a simple game of rock paper scissor (using the random() function on the Math class)
date: 2022-12-19
draft: false
slug: /blog/the-rock-paper-scissor-logic
tags:
  - AdventOfCode
  - Java
---

How would you go about solving this problem.

**`You have write a method to check wether you win, lose or tie in a game of Rock-Paper-Scissor, based on the choice of you and your opponent.`**\
**`The method should return 2 if you win, 1 if you tie and 0 if you lose.`**\
**`And we can use only two if statements and no 'or' or 'and' operators`**

Lets use some characters and values to represent the choices and outcomes:\
`Rock = A` | `Paper = B` | `Scissor = C`\
`Win = 6` | `Tie = 3` | `Loss = 0`

Here is the program you need to make changes to, replace the places where there's `...` with **only a single line** of your code.

```java:title=RockPaperScissor.java
public class RockPaperScissor {
    ...
    public static int checkWinner(char player, char opponent) {
        if(...) return 1;
        ...
        if(...) return 2;
        return 0;
    }
}
```

Try to find the solution yourself before you read the next section.

---

<details> 
  <summary style = "animate: 2s">Need a hint? </summary>

```java:title=RockPaperScissor.java
public class RockPaperScissor {
    //highlight-start
    //Use an array of characters to represent the choices
    static char[] choices = {'C', 'A', 'B', 'C', 'A'};
    //highlight-end
    public static int checkWinner(char player, char opponent) {
        if(...) return 1;
        ...
        if(...) return 2;
        return 0;
    }
}
```

</details>

---

<details> 
  <summary>Need one more hint? </summary>

Look at this pattern\
Whenever the player wins,\
these are the plays:\
`player: A beats C :opponent`\
`player: B beats A :opponent`\
`player: C beats B :opponent`

If we organize this a bit differently, we can find a pattern\
`player choice`\
`A` `B` `C` `A` `B`\
`C` `A` `B` `C` `A` <- the array we created\
`opponent choice`

And whenever the player loses, this is the pattern.\
`player choice`\
`B` `C` `A` `B` `C`\
`C` `A` `B` `C` `A` <- the array we created\
`opponent choice`

Notice how whenever we win, the opponent's choice is always one value behind of the player's choice in the array.\
ie.\
when the player choice is `B`, the opponent's choice is `A`\
when the player choice is `A`, the opponent's choice is `C`, because `C` is one value behind `A` in the array.\
this is the extra element at the start.

</details>

---

<details> 
  <summary>Here's my solution to the problem- </summary>

```java:title=RockPaperScissor.java
public class RockPaperScissor {
    static char[] choices = {'C', 'A', 'B', 'C', 'A'};
    public static int checkWinner(char player, char opponent) {
        //In case of a tie
        if(player == opponent) return 1;
        //In case of a win
        if(choices[player - 'A'] == opponent)  return 2;
        //In case of a loss
        return 0;
    }
}
```

Okay, so what did I do here?\
I used the `choices` array to store the choices.\
I used the `player - 'A' + 1` to get the index of the player's choice in the `choices` array.\
How does that work you ask?\
Well, the ASCII value of `A` is `65` and the ASCII value of `C` is `67`.\
So, when the player gives a character input from `A` to `C`, we actually have a value from `65` to `67`.\
In order to find this value in the `choices` array, we need to subtract `65` from the player input.\
So we get a range from 0-2.\
But the choices array starts from 1 because of the extra elements on both the ends.\
So we add `1` to the value.

Now since we know that we can only win if the opponent's choice is one value behind the player's choice, we can use the `choices` array to check if the player wins or not.\
So to check for the win, we can simply use `choices[player - 'A' + 1 - 1] == opponent`

And that's how you solve this in just three lines of code./
Thanks for reading :))))))

</details>
