"use strict";
const valid = require('./valid');
const date = require('./date');
const array = require('./array');
const ErrorHttp = require('./ErrorHttp');
module.exports = {
    valid,
    date,
    array,
    ErrorHttp
};

console.log(valid.length("Fawazsullia"))
