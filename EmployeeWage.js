console.log("Welcome to Employee wage program");
//Calculating Wages till Number of Working Days or Total Working Hours per month is Reached
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NO_OF_WORKING_DAYS = 20;
const NO_OF_WORKING_HOURS = 160;
function getWorkingHours(empCheck) {

    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function caclWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
let totalWorkingDays = 0;
let totalEmpHrs = 0;
let empWageArray = new Array();
while (totalWorkingDays < NO_OF_WORKING_DAYS && totalEmpHrs <= NO_OF_WORKING_HOURS) {
    let empCheck = Math.floor((Math.random() * 10) % 3);
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    totalWorkingDays++;
    empWageArray.push(caclWage(empHrs));            // Save in an Array the Daily Wage
}
let empWage = caclWage(totalEmpHrs);
console.log(empWageArray);
console.log("Total Employee Working Hours : " + totalEmpHrs + "\nTotal Employee Working Days :  " + totalWorkingDays + "\nTotal Employee Wage : " + empWage);

