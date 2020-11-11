class EmployeePayrollData {
    id;
    salary;
    gender;
    startDate;
    //Constructor
    constructor(...params) {
        if (params[0] > 0)
            this.id = params[0];
        else throw "Invalid ID!!";
        this.name = params[1];
        if (params[2] > 0)
            this.salary = params[2];
        else throw "Invalid Salary!!";
        let genderRegex = RegExp('^[M,F]{1}$');
        if (genderRegex.test(params[3]))
            this.gender = params[3];
        else throw "Invalid Gender!!";
        if (params[4] <= new Date())
            this.startDate = params[4];
        else throw "Invalid Start Date!!";
    }

    // getter and setter
    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw "Invalid Name!!";
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-In", options);
        return "Id = " + this.id + " Name = " + this.name + " Salary = " + this.salary + " Gender = " + this.gender + " Start Date : " + empDate;
    }
}

try {
    let employeePayrollData = new EmployeePayrollData(-1, "Bill", 50000, "M", new Date());
    console.log(employeePayrollData.toString());
} catch (error) {
    console.error(error);
}