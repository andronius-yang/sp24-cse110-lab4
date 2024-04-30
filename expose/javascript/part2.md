# Part 2
## Question 1
Prints `3`. Since `i` is declared as a `var`, it can still be accessed outside of the for loop it was declared for.
## Question 2
Prints `150`. Since `discountedPrice` is similarly declared as a `var`, it can be accessed outside of the for loop. The last value it contains is the discounted price for `300`, so `300 * 0.5 = 150` is the number it holds.
## Question 3
Prints `150`. Since `discountedPrice` was an integer, the round and divide basically does not change the value, and so `150` was stored into `finalPrice` as the code exits the loop
## Question 4
The function returns the list containing numbers `[50, 100, 150]` because it basically halves the prices of the input list.
## Question 5
Error: `i is not defined`. `i` is declared as `let` inside the `for` block and thus cannot be accessed outside of the `for`.
## Question 6
Error: `discountedPrice is not defined`. Similar reasoning as above, `discountedPrice` is declared within the `for` block and cannot be accessed outside.
## Question 7
`150`, like question 3. The reason for getting the value is explained above. The reason why it does not error is because `finalPrice` is declared in the block of the function, and so it can still be accessed on line 14.
## Question 8
It will still return the same list as stated in question 4. This is becasue `discounted`, declared with `let`, is still accessible within the function block.
## Question 9
Same as question 5, error: `i is not defined`. Reasoning same as above: `i` is declared inside the `for` block and thus cannot be accessed outside of the `for`.
## Question 10
It outputs `3` since the length of the inputted list is `3`. Since it is defined in the function block, it can still be accessed.

## Question 11
It still outputs the same values from question 4: `[50, 100, 150]`, because even though `discounted` is a `const`, we never reassigned it using `=`, we only accessed its function `.push()`, so it works the same.

## Question 12
### A.
`student.name`
### B.
`student["Grad Year"]`
### C.
`student.greeting();`
### D.
`student["Favorite Teacher"].name`
### E.
`student.courseLoad[0]`

## Question 13
### A
'32', because 2 was converted to the string '2'.
### B
1, because '3' is converted to the number 3.
### C
3, because null is converted to the number 0.
### D
'3null', because null is converted to the string 'null'.
### E
4, becasue true is converted to number 1
### F
0, because both false and null are converted to the number 0
### G
'3undefined', because undefined is converted to 'undefined'
### H 
`NaN`, because undefined is converted to `NaN`, and thus all numerical operations return `NaN`

## Question 14
### A
True. '2' is converted to 2 and compared.
### B
False, the first character '2' compared to the first character '1' shows '2' is greater as it has larger unicode encoding. Therefore, '2' > '12', and the expression evalueates to false.
### C
True, as '2' is converted to 2 and compared.
### D
False, as 2 and '2' are of different types.
### E
False, as true is converted to 1, and 1 is not equal to 2.
### F
True, as `Boolean(2)` converts 2 into a boolean value, which is `true` since 2 is nonzero. Then, `true === true` returns true.

## Question 15.
Sometimes, comparing different types is wanted, so we can use `==` which automatically converts different types to numeric types (i.e. I want to check if a string is nonzero). However, there are other times where we want to make sure tha tthe two objects we are comparing have the same type, which is when we use `===` to ensure that the objects are also compared based on their types (returning false immediately of the two have different types.)

## Question 16
```
for (const property in statistics){
    if(property.charAt(0) == 'r' || statistics[property] % 2 == 1){
        console.log(`${property}: ${statistics[property]}`);
    } 
}
```

## Question 17
The function returns a list `[2,4,6]`. This is because the function `doSomething` is passed in as the `callback` parameter in `modifyArray`, so for each item in the original `array` passed, `callback(array[i])` essentially calls `doSomething(array[i])` which returns the values `*2`. 

## Question 18
```
function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(printTime, 1000);
```

## Question 19
```
1
4
3
2
```