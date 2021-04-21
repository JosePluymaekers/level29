
const {isNotNull, minimumConditionsReached} = require("./verifyPassword");

test("isNotNull", () => {
  expect(isNotNull(null)).toBe(false);
});

//

const {hasRightLength} = require("./verifyPassword");

test("hasRightLength", () => {
  expect(hasRightLength("12345678")).toBe(true);
});
test("hasRightLength", () => {
  expect(hasRightLength("1234567891")).toBe(false);
});


//

const {hasUpperCaseCharacter} = require("./verifyPassword");

test("hasUpperCaseCharacter", () => {
  expect(hasUpperCaseCharacter("A")).toBe(true);
});

test("hasUpperCaseCharacter", () => {
  expect(hasUpperCaseCharacter("a")).toBe(false);
});

//

const {hasLowerCaseCharacter} = require("./verifyPassword");

test("hasLowerCaseCharacter", () => {
  expect(hasLowerCaseCharacter("b")).toBe(true);
});
test("hasLowerCaseCharacter", () => {
  expect(hasLowerCaseCharacter("A")).toBe(false);
});

//

const {hasDigit} = require("./verifyPassword");

test("hasDigit", () => {
  expect(hasDigit("1")).toBe(true);
});

test("hasDigit", () => {
  expect(hasDigit("x")).toBe(false);
});

//

describe("Check combination of conditions", () => {
  test("minimumConditionsReached, all conditions false", () => {
      const conditions = [false, false, false, false, false];
      expect(minimumConditionsReached(conditions)).toBe(false);
  });

  test("minimumConditionsReached under cutoff", () => {
      const conditions = [true, true, false, false, false];
      expect(minimumConditionsReached(conditions)).toBe(false);
  });

  test("minimumConditionsReached on cutoff", () => {
      const conditions = [true, true, true, false, false];
      expect(minimumConditionsReached(conditions)).toBe(true);
  });

  test("minimumConditionsReached over cutoff", () => {
      const conditions = [true, true, true, true, false];
      expect(minimumConditionsReached(conditions)).toBe(true);
  });
});


//


// Verify Password
const {verifyPassword} = require("./verifyPassword");


describe("Verification of the password", () => {
  test("Verify password empy", () => {
      expect(verifyPassword("")).toBe(false);
  });

  test("Verify password only digits", () => {
      expect(verifyPassword("12345678")).toBe(false);
  });

  test("Verify password Lower Case", () => {
      expect(verifyPassword("abcdefgh")).toBe(true);
  });

  test("Verify password Upper Case", () => {
      expect(verifyPassword("ABCDEFGH")).toBe(false);
  });

  test("Verify password Too long Lower Case", () => {
      expect(verifyPassword("abcdefghi")).toBe(false);
  });

  test("Verify password how it should be", () => {
      expect(verifyPassword("Aa1")).toBe(true);
  });

  test("Verify password HENK33$", () => {
      expect(verifyPassword("HENK33$")).toBe(false)
  });

  test("Verify password 1234", () => {
      expect(verifyPassword("1234")).toBe(false)
  });

})


//


