# vahem

### Vahem is a lodash like library created to make development easy by providing predefined functions

I created this to use this myself for stuff like form validations etc, but the wish is to make this as big as lodash gradually.

## How to use

To Install in your node js project, you need npm.

In the command prompt, simply type ```npm install vahem```

To use the functions in vahem, follow the below steps:

``` const vahem = require('vahem')
    vahem.valid.isEmail("someemailhere")
```

You can also use de-structuring like,

``` const {valid} = require('vahem')
valid.isEmail("somevalidemail") //returns true
```

## Vahem modules you can use in your project

### Valid

This module contains all functions related to validation

- 
