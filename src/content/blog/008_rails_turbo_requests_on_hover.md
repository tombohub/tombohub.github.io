---
title: Disable Rails Turbo requests on hover
date: 2024-08-23
tags: [rails, turbo]
---

Turbo v8 in Rails 7 is doing requests on hover: [git pull](https://github.com/hotwired/turbo/pull/1101). Trying to make a todo app with antipattern of modifying model with GET request it really confused me.

<br>

To disable it try solution from [StackOverflow](https://stackoverflow.com/a/78043099/1079002):

```html
<meta name="turbo-prefetch" content="false" />
```

<br>

or

<br>

```html
<a href="/" data-turbo-prefetch="false">Home</a>

<div data-turbo-prefetch="false">
  <a href="/">Home</a>
  ...
</div>
```

<br>

I just want the good old http requests at the beginning and later I'd like to hook up Turbo. Deeply integrated, deeply opinionated, that is Rails my friends.
