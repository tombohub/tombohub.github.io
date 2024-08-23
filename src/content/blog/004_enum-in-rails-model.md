---
title: Enum in Rails model
date: 2024-08-22
tags: [rails]
---

Rails doesn't have choices like Django. There are few steps to create choice.

1. Generate model

```consoles
rails generate model Todo title: string status: integer
```

<br>

2. Edit generated model:

```ruby
class Todo < ApplicationRecord
  enum status: { 'Not Done': 0, 'Done': 1 }
end
```

<br>

3. Edit generated migration file to add default status:

```ruby
class CreateTodos < ActiveRecord::Migration[7.2]
  def change
    create_table :todos do |t|
      t.string :title
      t.integer :status, default: 0 # <- add default here

      t.timestamps
    end
  end
end
```

<br>

Too much work and broken connections. Django wins here.
