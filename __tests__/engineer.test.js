const Employee = require('../lib/employee');
const Engineer = require('../lib/engineer');

describe("Engineer", () =>{
    it("return a string of engineer's linked github adress"), () =>{
        const engineer = new Engineer('Luis', 2, 'luis21xs3@gmail.com', 'Luis-Ramirez21x');

        expect(engineer.getUnique()).toEqual(`GitHub: <a href="https://github.com/Luis-Ramirez21x"`);
    }
})