# Description
Given a string and a character, return an array that represents the distance from each character in the string to the closest occurence of the given character.

For example, given the following string-character combinations

```
'ilikealgorithms', 'i'
'iamusingatwopasssolution', 'u'
'nothere', 'z'
```

the array of distances returned will be

```
[0, 1, 0, 1, 2, 3, 4, 3, 2, 1, 0, 1, 2, 3, 4]
[3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4]
[Infinity, Infinity, Infinity, Infinity, Infinity, Infinity, Infinity]
```

## Constraints

## Input
A string and a character

## Output
An array representing distances to the closest occurence of the given character for each character in the string.

## Additional Notes