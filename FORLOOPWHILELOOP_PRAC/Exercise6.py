# Count the total number of digits in a number

counter = 0
num = 123456789
while num != 0:
    num = num // 10
    counter = counter + 1
print(counter)
