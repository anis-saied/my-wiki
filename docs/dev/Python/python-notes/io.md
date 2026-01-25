## print

### redirect the standard output (`sys.stdout`) to a text file 

```python
import sys

# Open a text file in write mode
with open('output.txt', 'w') as f:
    # Redirect standard output to the file
    sys.stdout = f
    
    # Now, anything that would be printed to the console will be written to the file
    print("This is redirected to the file.")
    
    # Reset standard output to the original value (console)
    sys.stdout = sys.__stdout__

# The file is closed automatically when you exit the 'with' block

# Now, any subsequent print statements will go back to the console
print("This is printed to the console.")
```



## input

### redirect the standard input (`sys.stdin`) to read data from a text file

```python
import sys

# Open a text file in read mode
with open('file.txt', 'r') as f:
    # Redirect standard input to the file
    sys.stdin = f
    
    # Now, 'input()' and similar functions will read from the file
    content = ''
    while 1:
        try:
            user_input = input() # read next line
            content += f"{user_input}\n" 
        except:
            break
    
    # Reset standard input to the original value (keyboard)
    sys.stdin = sys.__stdin__

# The file is closed automatically when you exit the 'with' block

# Print the input obtained from the file
print("User input from file:\n", content)

```

