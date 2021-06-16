Total Time: 

## Bash: Filesystem Commands Review (5 min)
* pwd
* cd
* mv
* cp
* rm
* mkdir
* touch
* ls

## Bash: echo command
* echo


## Bash: man (10 min)
learn how to use the ```man``` command to get help on the cli
* search with ```/```
* next with ```n```
* prev with ```Shift+n```
* quit with ```q```

### workshop (15 min)
* use the man command to explore the ```ls``` command
    * what does the ```-l``` option do?
    * how can you list files sorted by newest first?
    * how can you list files recursively?

## Bash: Redirect (5 min)
* echo hello > helloworld.txt
* echo world >> helloworld.txt
* mention stdout and stderr and that they can also be redirected

## Bash: disk space, processes (PIDs), uptime, and load
* df
* dh
* ps
* top
* uptime
* free
* grep

### workshop (10 min)
* list processes for your user
* check your uptime
* check available disk space
* check size of home folder
* check available memory
* check current system load
* use grep to filter ps -ax

## Bash: kill a process (10 min)
* kill
* killall

### workshop (10 min)
* open nano in a terminal
* use ```ps -ax | grep nano``` to get the nano process pid
* kill that nano process from another terminal
* open several chrome windows
* use ps -ax to figure out the name of the chrome browser process
* use killall to close all chrome windows

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


### Bash: reset (1 min)
* reset

### workshop (2 min)
* screw up your terminal with ```cat /path/to/binary```
* notice that the terminal doesn't work correctly
* fix it with the ```reset``` command


## Bash: Network commands (15 min)
* netstat
* ping
* traceroute

### workshop (20 min)
* use traceroute to see the route from your laptop to google.com
    * how many hops are there?
    * are any of the hops slow? Do they have high latency?
* use netstat to see what services your laptop is listening on
    * are you running a webserver? (port 80/443)
    * are you running an smtp server (email)? (port 25)

* open chrome and visit google.com
* use netstat to view established ports
    * what are some of the ports used by chrome?
    * how many established connections did chrome get?

* use ping to determine if facebook.com is online and how much latency it has

## Bash: find, grep, head, tail, wc, pipe (10 min)
* find
* grep
* head
* tail
* wc

### workshop (15 min)
* list the first 10 lines of your .zshrc file
* list the last 7 lines of your .zshrc file
* how many files are in your home directory
* create a file named textfiles.txt that contains all of the .txt files in your home directory recursively, one file per line
* search for the filename and line number of all occurrences of the word "Checking" in ~/Library/Logs


## Bash: history (5 min)
* view history
* run old command
* clear history

### workshop (5 min)
* look through your history
* pick an old command and run it
* clear your history


## SSH (30 min)
* explain pki model
* explain MITM attack
* explain how ssh works
* live demo of ssh

### workshop (30 min)
* create a keypair
* copy the public key to github profile
* try to ssh github and see how git shell restricts you

---

## YAML and INI (10 min)
* explain the YAML format
* show an example of a simple k8s service file
* show an example of a complex k8s deployment file
* explain the INI format
* show an example INI file
---
## git: explain and configure (20 min)
* explain version control
* globally configure git
  * user name
  * email
  * editor

### workshop (10 min)
* examine ~/.gitconfig

---
## git: basics 1 (30 min)
* init
* status
* add
* commit
* amend
* diff
* log

### workshop
* create an empty repo
* create a helloworld file
* git status
* create an initial commit
* edit the helloworld file
* git status
* git diff
* make another commit
* git log
* amend the commit message
* git log

## git: basics2 (15 min)
* good vs bad commits
* good vs bad commit messages
* husky/commitizen
* no workshop

## git: basics3 (10 min)
* remote
* fetch
* pull
* push

### workshop (15 min)
* clone a repo from github
* make a change and commit it
* push the change to github

* start a local repo
* add github as a remote
* push the repo to github
* verify that it got there
