//UC1 - emp is prsent or absent
const IS_ABSENT = 0;
//Math.random() provides a random number from 0,1 ) 
let empCheck = Math.floor(Math.random() * 3) ;
if (empCheck == IS_ABSENT) {
    console.log("Employee is ABSENT");
} else {
    console.log("Employee is PRESENT");
}


