const empTest = require("../lib/Intern.js");
 
describe('empTest', () => {
  it('should return name, id, and email', () => {
    var Intern = new empTest("Daniel",4,"rickybobby@gmail.com", "byu")
    expect(Intern.getName()).toBe("Daniel")
    expect(Intern.getId()).toBe(4)
    expect(Intern.getEmail()).toBe("rickybobby@gmail.com")
    expect(Intern.getSchool()).toBe("byu")
  });

});
