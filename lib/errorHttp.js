"use strict";
// to throw a error use --> throw new ErrorHttp(errorCode,errorMessage);
class ErrorHttp extends Error {
    constructor(errorCode, message) {
        super(message);
        this.code = errorCode;
    }
}
module.exports = ErrorHttp;
