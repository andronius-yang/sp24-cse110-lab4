# Part 2
## Question 1
The bug was that the value acquired from the HTML input was of type "string", so that when the two variables were added, javascript interpreted it as concatenating two strings.
## Question 2
I fixed it by adding the `Number()` cast around the function that acquired the value from user input. However, this may cause future bugs where the user inputs non-numerical values. To check for these bugs, a `typeof` check should be used.