---
title: How to submit checkbox in Laravel
date: 2024-09-04
status: published
postNumber: 16
tags: [laravel]
---

### Problem

Let's say you have model with fields:

```php
 Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->boolean('is_published')->default(false)
            $table->timestamps();
        });
```

Create checkbox form like this:

```php
<form action="{{ route('projects.store') }}" method="POST">
    @csrf
        <input class="form-check-input" type="checkbox" id="is_published"
         name="is_published"
         @checked(old('is_published', $project->is_published))>
        <label class="form-check-label" for="is_published">
        Is published:
        </label>
    <button class="btn btn-primary" type="submit">Submit</button>
</form>
```

`@checked` in here:

```php
@checked(old('is_published', $project->is_published))
```

is a shorthand to make the checkbox checked or unchecked when it renders. More info in the [docs](https://laravel.com/docs/11.x/blade#additional-attributes)

Problem is, in form submission checkbox doesn't send anything if it's unchecked. It only sends value, default value is `on`, in payload if it's checked.

Problem is because if you have validation `'is_published' => 'boolean',` that will give error `is published must be true or false` after you submit the form.

### Solution

One way to solve this is

1. Create `ProjectRequest`:

```
php artisan make:request ProjectRequest
```

2. In generated class, in method `rules` add validation `'is_published' => 'boolean'` and function looks now like this:

```php
  * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'github_repo_url' => 'nullable|url',
            'website_url' => 'nullable|url',
            'is_published' => 'boolean',
        ];
    }
```

2. If you don't want authorization return true in method `authorize`:

```php
 /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }
```

3. Create a new method `prepareForValidation`. Name is important because this overriding parent `FormRequest` class. In this function you can do some logic with submitted form data before it is passed to `rules` method.

In this method check if form submit request contains `is_published` key. If it does it must be true, because as `is_published` is not in form submit if it's not checked.

```php
 protected function prepareForValidation()
    {
        $this->merge([
            'is_published' => $this->has('is_published') ? true : false
        ]);
    }
```

4. Now you can pass `ProjectRequest` to the controller action:

```php
   /**
     * Store a newly created resource in storage.
     */
    public function store(ProjectRequest $request)
    {
        Project::create($request->validated());
        return redirect()->route('projects.index')->with('success', 'Project created.');
    }
```

### Final word

It should work.
