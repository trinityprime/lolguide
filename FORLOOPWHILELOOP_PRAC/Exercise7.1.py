#Print the following pattern using for loop
#5 4 3 2 1 
#4 3 2 1 
#3 2 1 
#2 1 
#1

row = 5
col = 5

for i in range(1, row+1):
    for j in range(col-row, 0, -1):
        print(j, end=' ')
    print( )