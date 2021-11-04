const Employee = require('../lib/employee');
const Intern = require('../lib/intern');

describe("Intern", () =>{
    it("returns school string", () => {
        const student = new Intern('Luis', 3, 'Luis21xs3@gmail.com', "Ga Tech");

        expect(student.getUnique()).toEqual("School: Ga Tech");
    })
}) 