# license-checker-cli

A sane cli for [davglass/license-checker](https://github.com/davglass/license-checker)

## Getting Started

This module was motivated by not polluting the global space if not necessary.

Also i like my licenses displayed in a table.

This is how we roll:

### Installing

`$ npm i [-g|-D] license-checker-cli`

## Usage

In a nodejs repo do `$ license-checker-cli`
This will give you some output like:
```
license             repository                                                          name @ version
...
MIT                 https://github.com/sindresorhus/ansi-regex                    ansi-regex @ 0.2.1
MIT                 https://github.com/sindresorhus/ansi-regex                    ansi-regex @ 2.0.0
MIT                 https://github.com/sindresorhus/ansi-styles                  ansi-styles @ 1.1.0
...
```

## Built With

* [davglass/license-checker](https://github.com/davglass/license-checker) the original license-checker
* [cli-table/cli-table3](https://github.com/cli-table/cli-table3) cli tables for better output
