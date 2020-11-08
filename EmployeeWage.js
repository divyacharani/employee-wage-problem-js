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
let totalWorkingDays = 0;
let totalEmpHrs = 0;
while (totalWorkingDays < NO_OF_WORKING_DAYS && totalEmpHrs <= NO_OF_WORKING_HOURS) {
    let empCheck = Math.floor((Math.random() * 10) % 3);
    totalEmpHrs += getWorkingHours(empCheck);
    totalWorkingDays++;
}
let empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Employee Working Hours : " + totalEmpHrs + "\nTotal Employee Working Days :  " + totalWorkingDays + "\nTotal Employee Wage : " + empWage);

