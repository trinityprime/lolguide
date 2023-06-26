# Calculate the sum of all numbers from 1 to a given number

# sum: store sum of all numbers
sum = 0
num = int(input("Enter number: "))
# run loop n times
# stop: n+1 (because range never include stop number in result)
for i in range(1, num + 1, 1):
    # add current number to sum variable
    sum += i
print(f"Sum is: {sum}")