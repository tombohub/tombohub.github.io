---
title: Script to run rails command on windows
date: 2024-08-22
tags: [rails, windows]
---

I got tired of running `ruby ./bin/rails generate ....` command on Windows.

<br>

With this script you can just run `./rails.bat generate ...`:

1. Create file `rails.bat`
2. Paste this code

```batch
@echo off
ruby ./bin/rails %*
```
