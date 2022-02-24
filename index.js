// Write your solution in this file!
const employee = {
    name: "Nathan",
    streetAddress: "123 Fake Street",
    age: "32"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value //without [] considered static key named "key"
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const employeeCopy = {
        ...employee
    }
    delete employeeCopy[key]
    return employeeCopy
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}