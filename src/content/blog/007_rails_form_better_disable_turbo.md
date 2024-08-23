---
title: Rails form better disable Turbo
date: 2024-08-22
tags: [rails, turbo, form]
---

This form didn't wanna display validation errors:

```ruby
<%= form_with model: @todo do |form| %>
    <%= form.text_field :title %>
    <%= form.submit %>
<% end %>
```

for this model:

```ruby
class Todo < ApplicationRecord
  enum status: { 'Not Done': 0, 'Done': 1 }
  validates :title, presence: true, length: { minimum: 3 }
end
```

<br>

controller:

```ruby
class TodosController < ApplicationController
  def index
    @todos = Todo.all
    @todo = Todo.new
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      redirect_to todos_path, notice: "Todo was created"
    else
      @todos = Todo.all
      render :index
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:title)
  end
end
```

<br>

The reason is Turbo is activated. Disable Turbo in form submission:

```ruby
<%= form_with model: @todo, data: {turbo: false} do |form| %>
    <%= form.text_field :title %>
    <%= form.submit %>
<% end %>
```

<br>

This is another mental load for beginners and time spent for beginners. Rails is truly very opinionated framework.
