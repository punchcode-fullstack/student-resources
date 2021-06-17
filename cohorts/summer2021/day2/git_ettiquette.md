# Git: Ettiquette

## Good vs Bad Commits
As a general rule, good commits have the smallest possible number of changes to the smallest possible number of files to accomplish whatever it is that you're doing.
The main reason is that if you have to put things back how they were (rollback), you want it to be surgical, only rolling back what changed. Also, when you look at what changed, it should have something to do with why it was being changed in the first place.

The end result of this is that if, for example, while changing the background color of a website, you notice a typo in the title, you will NOT make both changes in a single commit. You will make 2 commits, one for the color change and one for the typo.

## Good vs Bad Commit Messages
The following rules come from this blog post. Read it. https://chris.beams.io/posts/git-commit/

- Separate subject from body with a blank line
- Limit the subject line to 50 characters
- Capitalize the subject line
- Do not end the subject line with a period
- Use the imperative mood in the subject line
- Wrap the body at 72 characters
- Use the body to explain what and why vs. how

## More Tools
There are tools such as [Husky](https://www.npmjs.com/package/husky) and [Commitizen](https://github.com/commitizen/cz-cli) that will help us guarantee good commit messages. They take a little bit of time to setup, but once in place, they will make sure that our git history is easy to follow.
