//UC4 -  Calculating  Wages for a month assuming 20 working days in amonth
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

//Functions are a great way to reuse code.
// function for  getworkinghours( parameter)
function GetWorkingHours(empCheck){
switch (empCheck) {
    case IS_ABSENT:   //0    
       return 0; // 0
        break;
    case IS_PART_TIME: //1
        return PART_TIME_HOURS; //const PART_TIME_HOURS = 4;
        break;
    case IS_FULL_TIME: //2
        return FULL_TIME_HOURS; //const PART_TIME_HOURS = 8;
        break;
    default:
        return  null; //null 'no value' or nonexistence of any value
}
}
//UC5 -  Calculating  Wages till a condition of total workinghours of 160 or  max days of 20 is reached for a month
let empHrs = 0;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
//0<=20 && 0<= 160
while (totalEmpHrs <= MAX_WORKING_HOURS && totalWorkingDays <= MAX_WORKING_DAYS) {
    //totalworkng days = +1
    totalWorkingDays++;
    // 0,1,2
    let empCheck = Math.floor(Math.random() *3);
    //random wale
    let dailyEmpHrs = GetWorkingHours(empCheck);
    //0.......+ random num <= 160
    if (totalEmpHrs + dailyEmpHrs <= MAX_WORKING_HOURS) {
        totalEmpHrs += dailyEmpHrs;
    } else {
        break;
    }
}
//calculate total emp wage
let totalEmpWage = totalEmpHrs * WAGE_PER_HOUR;
//op
console.log("Total Hours: " + totalEmpHrs + "\nTotal Wage: " + totalEmpWage);