const empTest = require("../lib/Manager.js");
 
describe('empTest', () => {
  it('should return name, id, and email', () => {
    var Manager = new empTest("Daniel",4,"rickybobby@gmail.com", 44)
    expect(Manager.getName()).toBe("Daniel")
    expect(Manager.getId()).toBe(4)
    expect(Manager.getEmail()).toBe("rickybobby@gmail.com")
    expect(Manager.getOfficeNumber()).toBe(44)
  });

});
