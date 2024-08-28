---
title: Improve django stringly template
date: 2024-08-22
status: published
postNumber: 1
tags: [django, template, html]
---

### Stringly typed

Problem with django templates, and many other templates, is that we have to use strings to do some mini logic. In this todo we have to check against string 'Done' and 'Not done' status to show different text in button. Also there is lot of code compared to react's ternary condition.

<br>

Model:

```python
from django.db import models

class Todo(models.Model):
    STATUS_CHOICES = [("Done", "Done"), ("Not Done", "Not Done")]
    title = models.CharField(max_length=20)
    status = models.TextField(choices=STATUS_CHOICES, default="Not Done")
```

<br>

Template:

```html
<button>
  {% if todo.status == 'Done' %} Mark not done {% elif todo.status == 'Not Done'
  %} Mark done {% endif %}
</button>
```

<br>

I guess we can use some property methods on django model, but then what's up with that _too much boilerplate_ that many people like to say.

<br>

We can maybe use boolean instead of status `Done` and `Not Done`. Ok, but I don't think that's scalable, boolean here boolean there boolean soup everywhere. Use status.

<br>

### Enumeration type choice

The way to somewhat mitigate this is to use [enumeration type choice](https://docs.djangoproject.com/en/5.1/ref/models/fields/#enumeration-types):

```python
from django.db import models

class Todo(models.Model):
    class Status(models.TextChoices):
        DONE = "Done", "Done"
        NOT_DONE = "Not Done", "Not Done"

    title = models.CharField(max_length=20)
    status = models.TextField(choices=Status.choices, default=Status.NOT_DONE)
```

<br>

Then in template we can use it like this:

```html
<button>
  {% if todo.status == todo.Status.DONE %} Mark not done {% elif todo.status ==
  todo.Status.NOT_DONE %} Mark done {% endif %}
</button>
```

Now maybe PyCharm will provide intellisense, I am not sure.

<br>

### Template Filter

If you repeat this often use [template filter](https://docs.djangoproject.com/en/5.1/howto/custom-template-tags/).

<br>

Filter:

```python
from django import template

from todoist.models import Todo

register = template.Library()

@register.filter
def toggle_status_label(status):
    if status == Todo.Status.DONE:
        return "Mark not Done"
    elif status == Todo.Status.NOT_DONE:
        return "Mark Done"
```

<br>

Template:

```html
{% load todo_filters %}

<!-- some code in between -->

<button>{{todo.status|toggle_status_label}}</button>
```

<br>

### Errors

Good thing about Django is it has best error reports I've seen so far.

<br>

If you misspell the work like I did:

```html
{% load todo_filter %}
```

<br>

It will show nice error:
![error django](https://i.imgur.com/KuCd0Bi.png)

### Conclusion

All in all, django template is ok if you do almost nothing of logic. Little bit of logic becomes tedious. I think they should upgrade, it's not 2006 anymore.
