//UC2 - Ability to Calculate Daily Employee Wage based on part time or full time work 
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
//let empHrs = 0;
//Math.random() provides a random number from 0,1,2 ) 
let empCheck = Math.floor(Math.random() * 3) ;
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
//0,1,2
console.log(empCheck);

let empHrs = GetWorkingHours(empCheck);
// 0,4 , 8
console.log(empHrs);
let empWage = empHrs * WAGE_PER_HOUR; //const WAGE_PER_HOUR = 20;
console.log("Emp Wage: " + empWage);


