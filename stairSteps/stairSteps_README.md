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

Write a program that returns the distinct number of ways to reach the top of a set of stairs of a given size.

## Constraints
Steps can only be taken one or two at a time.

## Input - stairSteps
The number of stairs being climbed

## Output
The distinct number of ways to reach the top of the set of stairs

## Additional Notes
I have also extrapolated this logic and provided a solution for being able to take triple-steps as well.