---
title: Rails Turbo gave me problems
date: 2023-08-22
status: published
postNumber: 9
tags: [rails, turbo]
---

Finally finished simple todo app with Rails: [repo](https://github.com/tombohub/simple-rails-todo). It took way longer than needed and it's mostly because of Turbo. In Django I did GET request to delete and modify todo status. In Rails with Turbo we can use `data: {method: :post}` or `patch` in the `link_to` like

<br>

```ruby
<%= link_to 'mark done', toggle_status_todo_path(todo), data: {turbo_method: :post} %>
```

but it didn't work at first. Logging shows status was changed, but page didn't refresh that. Even after page reloading it was still incorrect data. Then I deleted some todos and it became normal. Seems finnicky in my case. I recommend to stick to the traditional `form method='post|get'` for the beginners.
