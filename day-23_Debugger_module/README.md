# Day 23
# Debugger Module 

**A debugger is a program that helps us to debug the errors or bugs in a piece of code. Nodejs comes with a debugger which we can use to hunt for different bugs.**

## How to invoke Node.js Debugger

**In order to use the node.js debugger, we need to pass `debug` parameter when invoking a nodejs script. Just for an example if want to debug a file named hello.js, we'll start the debugger as shown below**

`node debug hello.js`

*OUTPUT*
```
< debugger listening on port 5858
connecting... ok
			
```

## Debugger Commands 
**Some of the useful debugger commands include `step,next,list,backtrace` which are explained below:**

1. `step `:: Step into a function or a control structure. e.g. if there's a for loop and you want to look into it, simply use the step command.
2. `next `:: Next command moves us to the next line or section of code, when we want to skip a control structure like for loop or a function, we can use the next statement.
3. `list `:: List command is used to list he lines of source code which enables us to understand where we are on the code.
4. `backtrace `:: Backtrace prints information about what lead to the current execution state of the program. It's sometimes very useful to debug errors in the code.

