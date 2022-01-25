//* includes all operations related to date


var dateOperations = {
  //* get todays date in dd/mm/yyyy format. Takes in a seperator as an argument

  formatDate: function (seperator : string) {
    let today : Date = new Date();
    let dd : string = today.getDate().toString().padStart(2, "0");
    let mm : string = (today.getMonth() + 1).toString().padStart(2, "0");
    let yyyy : string = today.getFullYear().toString();

   let date = dd + seperator + mm + seperator + yyyy;
    return date;
  },

  //* returns the number of days between 2 dates. Takes in start and end date in dd MON yyyy format

  numDays: function (startDate : string, endDate : string) {
    let start = new Date(startDate);
    let end = new Date(endDate);
    let time1 = start.getTime();
    let time2 = end.getTime();
    let diff : number= (time2 - time1) / (1000 * 3600 * 24);
    return diff;
  },
};

module.exports = dateOperations;
