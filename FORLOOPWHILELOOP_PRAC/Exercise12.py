# Display Fibonacci series up to 10 terms

num1 = 0
num2 = 1

# use a for loop to iterate 10 times
for i in range(10):
    # for each iteration, print the value of num1 (followed by a space instead of a newline)
    print(num1, end=" ")
    
    res = num1 + num2
    num1 = num2
    num2 = res
