# Countdown Timer

## How to Use

This countdown timer shows the remaining time between two dates!
You only have to enter two dates according to the pattern DD-MM-YYYY.
Alternatively, just hit set twice!

## Behind the Scenes

All dynamic changes in the code are based on react states.

- User input is being translated from a string to a time object.
- This allows to calculate the difference between two dates in milliseconds
- Different multiplications transform the milliseconds to days, hours, minutes and seconds
- an interval triggers a recalculation every second
- the rest is playing around with states and conditions 😊
- if you want to see what happens in the end just copy paste the start date into the end date field
