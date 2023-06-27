#Use else block to display a message “Done” after successful execution of for loop

for i in range(5):
    print(i)
    if i !=4:
        continue
    else: 
        print("Done!")