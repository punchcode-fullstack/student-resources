I just talked to our XYZ account rep, Jason. He told me that they haven't finished gathering the initial requirements yet, so we are going to continue where we left off yesterday.

Review [Bash Basics](../day1/bash_basics.md)

Now that we're all on the same page, let's talk about another very useful command, `echo`

[Bash echo command](bash_echo.md)


Many of the terminal commands have options, sometimes also called flags to modify how they work. The first step to finding out what the available options are is to use the built-in help command, `man`.

[Bash man command](bash_man.md)

The shell lets you do some pretty cool things. Even though shell commands basically do only one thing, they can be strung together like lego bricks to do more complicated things.

[Bash redirection](bash_redirection.md)

We can get information about our laptop from the shell, too.

[Bash system information](bash_system_info.md)

Sometimes things can go wrong, such as a program hangs or freezes. It is important to know how to fix this problem.

[Bash kill](bash_kill.md)

You may have noticed that normally, when you run a command in the terminal you can't use that terminal again until the command is finished. Instead of opening a new terminal every time, there's a way to run commands in the background so that you can re-use the same terminal.

[Bash forking](bash_forking.md)

Sometimes you will make a mistake in the terminal that will make it difficult to use. An example of this is outputting a binary file to stdout. This will normally make your terminal nearly impossible to use.

[Bash reset](bash_reset.md)

Yesterday, we talked about how computers on a TCP/IP network like the internet have IP addresses. Let's see some shell commands that show us what's going on.

[Bash basic network commands](bash_networking_basic.md)

We've been working in the terminal and using the terms terminal and shell a little loosely. Let's briefly mention the difference and talk about the shell we're actually using, zsh.

[Bash shells](bash_shells.md)

Your shell can keep track of data, too. It's time to have a look at environment variables.

[Bash environment variables](bash_environment_variables.md)

We can get a lot of data from the terminal now. Do you remember that, earlier I said we could combine commands like lego bricks? Next we're going to look at some of the most useful bash commands and how they are often used together to get exactly the information we want in the terminal.

[Bash bread and butter commands](bash_essential_commands.md)

Sometimes knowing where you've been is just as important as knowing where you're going. If you want to look back, we can use the `history` command.

[Bash history](bash_history.md)

Let's take a break.

Now that we know our way around the terminal, we're going to talk a little bit about the way we can store related data in text files. Hundreds of file formats have been created, but luckily, we will really only deal with a few of them.
We'll start with INI files.

[File Format INI](file_format_ini.md)

Now we'll take a quick look at YAML files.

[File Format YAML](file_format_yaml.md)

Since we're all working together on the same project, how do we share files and keep from messing up each other's work? We use a technology called versioned source control (vcs). There are several major vcs solutions, but the most ubiquitous by far is called Git.
We'll start learning git now so that we don't keep getting in each other's way. In the beginning, we're just going to cover git in a very basic, superficial way and get it set up and running. You will become a git master as you pursue your programming career. For now, we just need the basics.

[Git First Time Setup](git_first_time_setup.md)

Now that we're all configured, let's look at a real INI file that got created in the last workshop. Run `cat ~/.gitconfig` in your terminal and pick out the things you just added.

It's time to create a spike project. A spike project is basically just a quick thing that you're going to throw away in a few minutes that you use to learn something new or try something out without having to worry about complexity or breaking something important.
We are going to spike a new git repository to learn the fundamentals of working with git and make sure that everything is configured correctly.

Remember, a craftsman is only as good as his tools and the configuration of your laptop will make or break you as a developer. You must master your tools.

[Git basics](git_basics.md)

Now that we have the tools to work together without ruining each other's work, we still have to agree on how we want to communicate. The git history should be easy to follow and understand (for developers) as the project develops.
That way, if we get someone new on the team or we need to refer to older things, we won't have any issues. This is actually a big topic and every company does things a little differently. I'm going to show you how we do things here.
Once you understand our way, learning others will be easy for you.

[Git ettiquette](git_ettiquette.md)

End of day 2