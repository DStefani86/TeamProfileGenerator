const empTest = require("../lib/Engineer.js");
 
describe('empTest', () => {
  it('should return name, id, and email', () => {
    var Engineer = new empTest("Daniel",4,"rickybobby@gmail.com", "octocat")
    expect(Engineer.getName()).toBe("Daniel")
    expect(Engineer.getId()).toBe(4)
    expect(Engineer.getEmail()).toBe("rickybobby@gmail.com")
    expect(Engineer.getGithub()).toBe("octocat")
  });

});
