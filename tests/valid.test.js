//This test module has all the tests related to the validation module called valid.js

const valid = require("../lib/valid.js");

describe("validation module testing", () => {
  test("length should return the length of a string", () => {
    expect(valid.length("fawazsullia")).toBe(11);
    expect(valid.length("SomeRandom heyheyhey sajdan")).toBe(27);
    expect(valid.length("45646548")).toBe(8);
  });

  test("test if string is made of numbers", () => {
    expect(valid.allNumbers("1234")).toBe(true);
    expect(valid.allNumbers("1234asda")).toBe(false);
    expect(valid.allNumbers("Ans73jsad9dsa99")).toBe(false);
    expect(valid.allNumbers("")).toBe(false);
  });

  test("string has atleast one uppercase", () => {
    expect(valid.ifCaps("asdsd ds sidsd")).toBe(false);
    expect(valid.ifCaps("asdsd ds Sidsd")).toBe(true);
    expect(valid.ifCaps("asdsD ds SidSd")).toBe(true);
    expect(valid.ifCaps("asds4 5 Ds sidsd")).toBe(true);
    expect(valid.ifCaps("asdsd d 55 89 sidsd")).toBe(false);
  });

  test("string contains atleast one speacial character", () => {
    expect(valid.ifSpecialChar("This does not have special character")).toBe(
      false
    );
    expect(valid.ifSpecialChar("This has a *& special character")).toBe(true);
    expect(valid.ifSpecialChar("This has * a # and $ special character")).toBe(
      true
    );
    expect(valid.ifSpecialChar("$*#")).toBe(true);
    expect(valid.ifSpecialChar("")).toBe(false);
  });

  test("string is a valid email", () => {
    expect(valid.isEmail("fawazsullia@gmail.com")).toBe(true);
    expect(valid.isEmail("fawazsulliagmail.com")).toBe(false);
    expect(valid.isEmail("fawazsullia@gmailcom")).toBe(false);
    expect(valid.isEmail("fawazsulliagmailcom")).toBe(false);
    expect(valid.isEmail("fawazsulliagmail.")).toBe(false);
    expect(valid.isEmail("fawazsullia@")).toBe(false);
    expect(valid.isEmail("@gmail.com")).toBe(false);
    expect(valid.isEmail("fawazsullia@.com")).toBe(false);
  });

  test('string is a valid url', () => {
    expect(valid.isUrl("https://www.linkedin.com")).toBe(true)
    expect(valid.isUrl("https://www.linkedin.com/sdasds")).toBe(true)
    expect(valid.isUrl("https://www.linkedin.com/dsasa?self=dsadsa")).toBe(true)
    expect(valid.isUrl("https://www.linkedin-sdas.com")).toBe(true)
    expect(valid.isUrl("https://www.linkedin")).toBe(false)
    expect(valid.isUrl("www.linkedin.com")).toBe(true)
    expect(valid.isUrl("http://www.linkedin.com")).toBe(true)
    expect(valid.isUrl("https://linkedin.com")).toBe(true)
    expect(valid.isUrl("http://linkedin.com")).toBe(true)
    expect(valid.isUrl("https://linkedin.com/dsasa?self=dsadsa")).toBe(true)
    expect(valid.isUrl("http://linkedin.com/dsasa?self=dsadsa")).toBe(true)
    expect(valid.isUrl("linkedin.com/dsasa?self=dsadsa")).toBe(true)
    expect(valid.isUrl("linkedin.com")).toBe(true)
    expect(valid.isUrl("api.linkedin.com")).toBe(true)
    expect(valid.isUrl("api.linkedin.com/sdadsa?see=dsa")).toBe(true)
  });
  
});
