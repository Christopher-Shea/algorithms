# Description - Fibonacci
Imagine a world in which rabbits take a month to mature from birth to breeding age.
Upon reaching breeding age, rabbits make no delay finding a mate.
A female rabbit will be pregnant for exactly one month before her litter is ready to greet the world.
A female rabbit ONLY gives birth to a litter of two - one male and one female.

Thus, starting with ONE baby pair of rabbits, the population will grow as following:
(Month Zero:   0 pairs of rabbits, but someone is about to give us a gift!)
Month One:    1 pair of babies, 0 pairs of adults
Month Two:    0 pairs of babies, 1 pair of adults
Month Three:  1 pair of babies, 1 pair of adults
Month Four:   1 pair of babies, 2 pairs of adults
Month Five:   2 pairs of babies, 3 pairs of adults
Month Six:    3 pairs of babies, 5 pairs of adults
Month Seven:  5 pairs of babies, 8 pairs of adults
Month Eight:  8 pairs of babies, 13 pairs of adults

After eight months, there are a total of 8 pairs of babies + 13 pairs of adults = 21 pairs of rabbits.
The total number of rabbit pairs for a given month can be described by the following sequence:
```
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...]
```

Write a program that yields the number of rabbit pairs in the population after a number of months, given the conditions above.

## Constraints
None

## Input - Fibonacci Sequence
The number of months after the inception of the rabbit breeding program.

## Output
The total number of rabbit pairs, both babies and adults, present in the population after the given number of months.



# Description - stairSteps
When climbing steps, most people will take the steps one at a time. Someone in a rush, or looking for a workout, or having just drunk a large amount of coffee might occasionally take a doulbe-step. Assume that a person can make a decision to take a single or a double step every step they take.

When climbing 3 steps, there are 3 distinct ways to get to that third step:
```
1 step - 1 step - 1 step
1 step - 2 steps
2 steps - 1 step
```

When climbing 5 steps, there are 8 distinct ways to get to the top:
```
1 step - 1 step - 1 step - 1 step - 1 step
1 step - 1 step - 1 step - 2 steps
1 step - 1 step - 2 steps - 1 step
1 step - 2 steps - 1 step - 1 step
2 steps - 1 step - 1 step - 1 step
1 step - 2 steps - 2 steps
2 steps - 1 step - 2 steps
2 steps - 2 steps - 1 step
```

Write a program that yields the distinct number of ways to reach the top of a set of stairs of a given size.

## Constraints
Steps can only be taken as singles or doubles.

## Input - stairSteps
The number of stairs being climbed.

## Output
The distinct number of ways to reach the top of the set of stairs.

## Additional Notes
I included the stairSteps problem in this folder because I was fascinated by its adherence to the Fibonacci sequence. If I come across other problems that follow this pattern I will add them as well.