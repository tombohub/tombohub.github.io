---
title: Does Django gets messy?
date: 2024-09-01
status: published
postNumber: 14
tags: [django, architecture]
---

Django is designed in news agency to produce articles fast and they included orm so they can publish some data with articles. That means they have combined some responsibilities in order to develop faster.

Beginners like that because they can get result faster and less code, but without learning software architecture it can get messy and reach a point where it's hard to make changes.

Take a simple example. You issue invoice to the customer. It can have now 2 statuses: Paid and Unpaid. Now it's not simple save and retrieve from database. Includes business logic. How do you now use that in the application code and all the reports, events, mail sending etc?

There are ways. Each with it's own trade off.
