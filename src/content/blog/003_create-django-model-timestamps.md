---
title: Create Django model timestamps
date: 2024-08-22
tags: [django]
---

```python
class MyModel(models.Model):
    # some other model fields
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```
