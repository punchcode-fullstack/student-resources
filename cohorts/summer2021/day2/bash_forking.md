# Bash: Forking

## Bash: Fork/background a process, child processes (5 min)
* explain how to fork a process to run it in the background
* explain why you might want to do that

### workshop (15 min)
* run ```tail -f /dev/zero``` in a terminal
* notice how it holds onto the terminal and you can't use it anymore
* kill the tail command
* run the same command forked ```tail -f /dev/zero &```
* notice that you are given the PID of the forked process and the terminal is still usable
* close the terminal
* notice that tail is killed when the terminal is closed b/c it is a child process (use ps to check)
