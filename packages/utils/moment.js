const moment = require("moment");

let now = moment();

console.log(now.toString());
console.log(now.format("YYYY/MM/DD - HH:mm"));

const date1 = moment('2023-07-05');
const date2 = moment('2023-06-01');

const diffInDays = date1.diff(date2, 'days');

console.log('The difference in days is:', diffInDays);
