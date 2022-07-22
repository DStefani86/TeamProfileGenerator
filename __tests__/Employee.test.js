const empTest = require("../lib/Employee.js");
 
describe('empTest', () => {
  it('should return name, id, and email', () => {
    var Employee = new empTest("Daniel",4,"rickybobby@gmail.com")
    expect(Employee.getName()).toBe("Daniel")
    expect(Employee.getId()).toBe(4)
    expect(Employee.getEmail()).toBe("rickybobby@gmail.com")
  });

});

