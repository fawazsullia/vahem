//Object contains functions useful for validation, especially for forms

var valid = {


//* returns the length of the string

length : function(string){

if(typeof string === "string"){
    return string.length
}
else {  return false  }


},

//* check if the string is made of numbers

allNumbers : function(string){

let regex = /^[0-9]*$/g
let result = regex.test(string)
return result

},


//* check if string contains atleast one caps letter

ifCaps : function(string){

let regex = /\w*[A-Z]+\w*/g
let result = regex.test(string)
return result

},


//* check if string contains atleast one special character (!@#$%^&*)

ifSpecialChar : function(string){

let regex = /\w*[!@#$%^&*]+\w*/g
let result = regex.test(string)
return result

},

//* check if the string is empty or not
notEmpty : function(string){

 if(string.length === 0){
     return false
 }   else {    return true } 

},

//* check if the string is a valid email of the form example@example.com

isEmail : function(string){

let regex = /^[a-z][a-z0-9]*@[a-z]+\.[a-z][a-z]*/g
let result = regex.test(string)
return result

},

//* check if the string is a url of the form https://example.extension

isUrl : function(string){

let regex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g
let result = regex.test(string)
return result

},



}

module.exports = valid