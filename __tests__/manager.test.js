const Employee = require('../lib/employee');
const Manager = require('../lib/manager');

describe("Manager", () =>{
    it("return managers office number", () =>{
        const boss = new Manager("luis", 1, "Luis21xs3@gmail.com", 4702829840);

        expect(boss.getUnique()).toEqual(`Office Number # 4702829840`); 
    })
})