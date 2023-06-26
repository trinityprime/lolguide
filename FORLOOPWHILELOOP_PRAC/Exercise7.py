#Print the following pattern using for loop
#5 4 3 2 1 
#4 3 2 1 
#3 2 1 
#2 1 
#1


n = 5
k = 5

# Loop through values 0 to n(5)
for i in range(0,n+1):

    # Loop through values k-i down to 1, with a step of -1 (counting backwards)
    for j in range(k-i,0,-1):
        print(j,end=' ')
    print(" ")


#If want smallest to biggest:
for i in range(n, 0, -1):
    for j in range(1, k-i+1):
        print(j, end=' ')
    print()




