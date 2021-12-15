var date ={

//* get todays date in dd/mm/yyyy format. Takes in a seperator as an argument

formatDate : function(seperator){
    let today = new Date();
    let dd = today.getDate().toString().padStart(2, '0')
    let mm = (today.getMonth() + 1).toString().padStart(2, '0');
    let yyyy = today.getFullYear();
    
    date = dd + seperator + mm + seperator + yyyy;
    return date
},

//* returns the number of days between 2 dates. Takes in start and end date in dd MON yyyy format

numDays : function( startDate, endDate  ){

let start = new Date(startDate);
let end = new Date(endDate);
let time1 = start.getTime()
let time2 = end.getTime()
let diff = (time2 - time1)/(1000 * 3600 * 24)
return diff

}




}


module.exports = date