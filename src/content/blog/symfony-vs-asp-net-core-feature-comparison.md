---
title: I've build todo in 10 web frameworks
date: 2024-08-27
status: published
postNumber: 10
tags: [web, framework, django, rails, laravel]
---

## Intro

In the other [post](https://tombohub.github.io/blog/ive-build-todo-in-10-web-frameworks/) I have rapid tested 10 frameworks and settled on 2: [Symfony](https://symfony.com/) and [ASP.Net Core](https://dotnet.microsoft.com/en-us/apps/aspnet).

I will check the features of each and see how it compares to the other one. If documentation is not approachable to feature discovery I will probably not include it. I also won't go into detailed features. Routing is a feature. Named routes is details. I will exclude the ones I am not interested in. Ok, let's go.

## Command line tool

### Simfony

Symfony has excellent command line tool. I cannot even describe what it has. Check the [docs](https://symfony.com/doc/current/components/console.html).
List of commands is so big that `php bin/console list` took like 10 seconds to list them all. Debug, Doctrine, mailer, generators you name it. +

### Asp.net core

Command line tool is called [dotnet](https://learn.microsoft.com/en-us/dotnet/core/tools/). It's more of a all around tool more than specifically designed for web development. We can install extra tools, but it's not in your face like Symfony's `console` and probably need to search for them, but who wants to do that? I am not paid to do it so I'd rather not.

> Symfony 1 : Asp 0

## Template engine

### Symfony

It uses [Twig](https://twig.symfony.com/). This is stringly template engine and don't have much to say about it.

### Asp

It uses [Razor](https://learn.microsoft.com/en-us/aspnet/core/mvc/views/razor?view=aspnetcore-8.0) templates. It's statically typed and allows to use C#. I like that. +

> Symfony 1 : Asp 1

## ORM

### Symfony

Uses [Doctrine ORM](https://www.doctrine-project.org/). Looks like lots of string to me. It is [integrated](https://symfony.com/doc/current/doctrine.html#automatically-fetching-objects-entityvalueresolver) into Symfony. I don't know much about it. Bulk upsert didn't provide obvious result in google search.

### Asp

Uses [Entity Framework Core](https://learn.microsoft.com/en-us/ef/core/). It's not as integrated in framework, no automatic fetching. We can use [LINQ](https://learn.microsoft.com/en-us/dotnet/csharp/linq/) for querying which is a killer feature. Bulk upsert provides obvious [result](https://entityframework-extensions.net/bulk-extensions). +

> Symfony 1 : Asp 2

## Forms

### Symfony

Has full on [forms component](https://symfony.com/doc/current/forms.html). I've heard that's the biggest components and just the documentation for forms is bigger than the whole Laravel documentation. It can be reusable to use in many views. It has [form events](https://symfony.com/doc/current/form/events.html). +

### Asp

No form component. There is automatic [model binding](https://learn.microsoft.com/en-us/aspnet/core/mvc/models/model-binding?view=aspnetcore-8.0) via [tag helpers](https://learn.microsoft.com/en-us/aspnet/core/mvc/views/tag-helpers/intro?view=aspnetcore-8.0).

> Symfony 2: Asp 2

## Errors/ Debugging

### Symfony

Has nicer error pages. Debug toolbar. +

### Asp

Ugly error pages. No debug toolbar

> Symfony 3 : Asp 2

## Mailer

### Symfony

It has [mailer component](https://symfony.com/doc/current/mailer.html). It can use [templates for email](https://symfony.com/doc/current/mailer.html#twig-html-css). +

### Asp

GPT says there is not native mailer component. Tutorials are using [MailKit](https://mimekit.net/).

> Symfony 4 : Asp 2

## Validation

### Symfony

It has [validation](https://symfony.com/doc/current/validation.html) based on [JSR303 Bean Validation specification](https://jcp.org/en/jsr/detail?id=303).
Lot of validation, even for [Doctrine](https://symfony.com/doc/current/validation.html#doctrine-constraints). It has more validation constraints than Asp out of the box. +

### Asp

Also has [validation](https://learn.microsoft.com/en-us/aspnet/core/mvc/models/validation?view=aspnetcore-8.0). Less constraints than Symfony. People use library [FluentValidation](https://docs.fluentvalidation.net/en/latest/index.html). It has [remote](https://learn.microsoft.com/en-us/aspnet/core/mvc/models/validation?view=aspnetcore-8.0#remote-attribute) validation. [Action parameters validation](https://learn.microsoft.com/en-us/aspnet/core/mvc/models/validation?view=aspnetcore-8.0#top-level-node-validation). +

> Symfony 5 : Asp 3

## Messaging

### Symfony

It has [messenger component](https://symfony.com/doc/current/messenger.html) +

### Asp

Doesn't have

> Symfony 6 : Asp 3

## Scheduling

### Symfony

It has [scheduler](https://symfony.com/doc/current/scheduler.html) +

### Asp

Doesn't have scheduler. Use [Hangfire](https://www.hangfire.io/) or [Quarts.NET](https://www.quartz-scheduler.net/)

> Symfony 7 : Asp 3

## Notifications

### Symfony

[Notifications](https://symfony.com/doc/current/notifier.html) +

### Asp

No

> Symfony 8 : Asp 3

## Storage

### Symfony

No -

### Asp

No -

> If you don't have something essential like [managing file uploads](https://laravel.com/docs/11.x/filesystem#amazon-s3-compatible-filesystems) you both deserve a minus
> Symfony 6 : Asp 2

## Documentation and Learning Resources

### Symfony

[Start page](https://symfony.com/).
[Documentation](https://symfony.com/doc/current/index.html)
[Book](https://symfony.com/book)
[Symfonycast](https://symfonycasts.com/)
Everything is designed to lead to to the learning path. Me personally documentation, I've enjoyed the most. +

### Asp

[Start Page](https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-8.0)
[Documentation](https://learn.microsoft.com/en-us/aspnet/core/mvc/overview?view=aspnetcore-8.0). This documentation is for Asp.Net Core MVC. General documentation for Asp.Net Core is [here](https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-8.0). It's mixed with Razor Pages, Blazor etc. And then there is general part which applies to all of Asp.Net Core.
This is the Microsoft [Learning Centre](https://dotnet.microsoft.com/en-us/learn). After some clicking we can find Asp.Net Core [Learning Path](https://learn.microsoft.com/en-us/training/paths/aspnet-core-web-app/).
It's obvious Microsoft has a lot of products and Asp.Net Core is not their sole focus. It's .NET framework and then whatever they build on top of it.

> Symfony 7 : Asp 3

## Final word

Symfony seems much more oriented around web development. Asp.Net Core is more of a web development addition to the .NET framework. It gives great foundation to build everything you need, but you have to build it. As a hobby developer I'd rather have ready made solutions even if they are opinionated, although for long term project non opinionated might be good. Symfony seems flexible enough, on the first look, to provide opinionated start and enough flexibility to change things down the road.

Asp.Net Core does have another framework built on top of it called [ABP Framework](https://abp.io/) which I tried to use, but it couldn't create a project or I didn't know how. It seems very opinionated and definitely oriented towards big serious companies. I am not the one, at the moment.

Symfony it is.
