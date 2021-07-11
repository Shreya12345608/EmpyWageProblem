//UC2 - Ability to Calculate Daily Employee Wage based on part time or full time work 
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
let empHrs = 0;
//Math.random() provides a random number from 0,1 ) 
let empCheck = Math.floor(Math.random() * 3) ;
switch (empCheck) {
    case IS_ABSENT:
        
        empHrs = 0;
        break;
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS; //const PART_TIME_HOURS = 4;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS; //const PART_TIME_HOURS = 8;
        break;
    default:
        break;
}

let empWage = empHrs * WAGE_PER_HOUR; //const WAGE_PER_HOUR = 20;
console.log("Emp Wage: " + empWage);


