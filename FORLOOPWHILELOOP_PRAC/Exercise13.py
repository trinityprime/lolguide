#Find the factorial of a given number
#The factorial (symbol: !) means to multiply all whole numbers from the chosen number down to 1.

factorial = 1
num = int(input("Enter a number: "))

# loop from 1 to num (inclusive) and multiply each number with the factorial
for num in range(1, num+1):
    factorial = factorial*num
print(f'The factorial of {num} is {factorial}')