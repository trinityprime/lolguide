# Write a program to display all prime numbers within a range


start = 25
end = 50

# iterate through each number in the range
for num in range(start, end + 1):
    if num > 1:

        # check if the number is divisible by any number between 2 and itself
        for i in range(2, num):
            if num % i == 0:

                # if it is divisible by any number, it's not prime and we break out of the loop
                break

        # if the number was not divisible by any number, then it's considered prime and we print it out
        else:
            print(num)

print(' ')

start = 25
end = 50

for num in range(start, end+1):
    if num > 1:
        for i in range(2, num):
            if num % i ==0:
                break
        else:
            print(num)