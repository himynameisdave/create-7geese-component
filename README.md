## create-7geese-component

💎 A command-line utility for creating new 7Geese components.

Scaffolds out a component with the following structure:

```
./static/js/apps/components/my-component/
    |-- my-component.jsx
    |-- my-component.less
    |-- my-component.jestspec.jsx
    |-- my-component.examples.md
```

### Install

Install the CLI globally:

```
npm i -g git+https://git@github.com/himynameisdave/create-7geese-component.git
```

### Usage

You can run the command with `create-7geese-component`, but that's kind of long, so you can also use the shortended `c7c`.

**Name**

All you need to do give your component a name. Do so like this:

```
c7c --name MyComponent
```

Omitting the name argument will cause the program to prompt you for one.

**Path**

The command assumes you are running this at the root of the 7Geese repo and want your new component to live in `./static/js/apps/components/`. But perhaps you are a cool kid and want to specify your own path relative to the current directory, do so like this:

```
c7c --name my-component --path ./another-path/
```

---

_Created by [Dave Lunny](http://himynameisdave.com/) in 2018 👌_
