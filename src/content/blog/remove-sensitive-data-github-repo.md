---
title: How to remove sensitive data in github repository
date: 2024-09-02
status: published
postNumber: 15
tags: [github]
---

### Intro

Did you commit and push passwords and stuff out there to github land?

This is how to remove sensitive data.

### Steps

1. Commit and push the original repo and all the branches and it's in clean state

2. Clone your repo with command (replace link with link to your repo):

```console
git clone https://github.com/me/myrepo.git
```

3. Install [git-filter-repo](https://github.com/newren/git-filter-repo) with command:

```console
pip install git-filter-repo
```

4. Go into the cloned repo folder with command:

```
cd myrepo.git
```

5. Create a text file with your secrets you want to remove, one for each line and save it inside the repo folder. (DO NOT COMMIT! - Add to `.gitignore`) For example `passwords.txt`:

```txt
12345password
mybestusername
```

6. Inside the project folder run command which will replace sensitive text with default text `***REMOVED***`:

```console
git-filter-repo --replace-text password.txt
```

Use `--force` tag if it tells you your clone is not fresh.

If you want to replace with some other text or use regex this is from the [documentation](https://htmlpreview.github.io/?https://github.com/newren/git-filter-repo/blob/docs/html/git-filter-repo.html):

> --replace-text <expressions_file>
> A file with expressions that, if found, will be replaced. By default, each expression is treated as literal text, but regex: and glob: prefixes are supported. You can end the line with ==> and some replacement text to choose a replacement choice other than the default of \*\*\*REMOVED\*\*\*.

7. Delete the original github repository and create a new one. Don't initialize with `readme.md` or `.gitignore`. The reason for this is because if not there will be error later when pushing the new changes:

```
git push -u origin master
To https://github.com/me/myrepo.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://github.com/me/myrepo.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

I couldn't make it work. If you know how let me know. I decided that creating new github repository is easiest way, git history is preserved anyway.

8. Add origin running command inside the repo folder:

```
git remote add origin https://github.com/me/myrepo.git
```

9. Push the git history to the new github repository and set `master` as origin:

```
git push -u origin master
```

10. Now go to your repository https://github.com/me/myrepo.git and you should see all the commit history is there with the secrets replaced with `***REMOVED***`

11. Clone the new repository, be careful not to overwrite the original project folder if the name is the same, and copy untracked files from the original project folder into the cloned repository.

12. Start working in new cloned repo folder and decide what do you wanna do with the old one

### Final word

Go on and commit secrets no more
