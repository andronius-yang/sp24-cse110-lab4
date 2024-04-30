# Part 1
## Question 1
values added: 20
## Question 2
values added: 20
## Question 3
values added: 20
## Question 4
`Reference Error: result is not defined`

This is because the scope of `let` variables live only inside the `if` block, and can no longer be accessed after exiting the `if`.

## Question 5 & 6

The code prints an error before reaching either `log`:

`TypeError: Assignment to constant variable.`

This is because we declared `result = 0` and later on, on line 7, tried to assign it a different value of `num1 + num2`. That's not allowed since `result` is defined as a `constant`.

