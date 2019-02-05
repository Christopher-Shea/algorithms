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
The number of months after the inception of the rabbit breeding program

## Output
The total number of rabbit pairs, both babies and adults, present in the population after the given number of months