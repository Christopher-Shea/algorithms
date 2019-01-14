## Description
Given a set of available coin values and a total value, calculate the distinct number of ways that total can be made from the available coins.

For example, if in London, a total of 8 pence can be made the 7 following ways:
```
1 * 5p + 1 * 2p + 1 * 1p
1 * 5p + 3 * 1p
4 * 2p
3 * 2p + 2 * 1p
2 * 2p + 4 * 1p
1 * 2p + 6 * 1p
8 * 1p
```
When given a set of available British coins, and the total 8, the program will output 7.

## Constraints
None

## Input
A total numeric value from which to make change

## Output
The distinct number of ways that total can be made with the coins available

## Additional Notes
Coin sets for British pence and American cents are provided.
Dynamic programming solution operates in O(n) time.
