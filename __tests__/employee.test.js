const Employee = require('../lib/employee');

describe("Employee", () =>{
    it("Should return name of ", () =>{
        const employee = new Employee('luis', 1, 4702829840);
        expect(employee.getName()).toEqual('luis');
    });

})