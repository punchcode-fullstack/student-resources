Jason still hasn't heard back from XYZ so we're going to continue getting set up for the project.

We have our spike project from yesterday, but it's just on our own laptops. We all need to be able to share a single project.
If we want to, we can setup our own private git server, but for now, we're going to use GitHub, which is a free service, recently purchased by Microsoft to host our git repositories.

In order to use it, you need to sign up and register an account. If you haven't done so yet, let's do that now.

Now that we all have a GitHub account, we can start sending our code to the remote repository and other people can get and contribute to it.
Do you remember when we talked about network protocols? By default, GitHub uses the http protocol encrypted using ssl/tls, which works, but it's pretty annoying because every time you want to change your code, you will have to log into GitHub with your username and password like this.

## demo of push to GitHub over https

We have a much better option that you should know about anyway because it allows you to securely, remotely operate servers using the terminal. This protocol is called Secure Shell, SSH for short.

[SSH Intro](ssh_intro.md)

Now that we understand what SSH is and what problems it solves, let's set it up for ourselves to use with GitHub.

[SSH Initial Setup](ssh_initial_setup.md)

OK. Let's put our spike project on GitHub.

[Git remote](git_remote.md)

Now that we have our fundamentals in place, let's delete the spike project and repo both locally and on GitHub.


Next: VSCode setup and walkthrough

