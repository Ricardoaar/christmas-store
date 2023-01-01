import generateClassName from "@client/utils/classNameGenerator";

describe("generateClassName", function () {
  test('Should return n+1 elements when "returnsString" is false and removeBlockClass is false', function () {
    const blockName = "block";
    const elements = [
      { elementConjunction: "modifier", elementName: "element" },
      { elementConjunction: "modifier", elementName: "element" },
      { elementConjunction: "modifier", elementName: "element" }
    ];
    const options = { returnsString: false, removeBlockClass: false };
    const result = generateClassName(blockName, elements, options);
    expect(result).toHaveLength(4);
  });

  test('Should return n elements when "returnsString" is false and removeBlockClass is true', function () {
    const blockName = "block";
    const elements = [
      { elementConjunction: "modifier", elementName: "element" },
      { elementConjunction: "modifier", elementName: "element" },
      { elementConjunction: "modifier", elementName: "element" }
    ];
    const options = { returnsString: false, removeBlockClass: true };
    const result = generateClassName(blockName, elements, options);
    expect(result).toHaveLength(3);
  });

  test("should generate a class name", function () {
    const blockName = "block";
    const elements = [
      {
        elementConjunction: "modifier",
        elementName: "modifier"
      },
      {
        elementConjunction: "element",
        elementName: "element"
      }
    ];

    const expected = "block block--modifier block__element";
    const actual = generateClassName(blockName, elements);
    expect(actual).toEqual(expected);
  });

  test("Should remove first class name if removeBlockClass is true", function () {
    const blockName = "block";
    const elements = [
      {
        elementConjunction: "modifier",
        elementName: "modifier"
      },
      {
        elementConjunction: "element",
        elementName: "element"
      }
    ];

    const expected = "block--modifier block__element";

    const actual = generateClassName(blockName, elements, {
      removeBlockClass: true,
      returnsString: true
    });

    expect(actual).toEqual(expected);
  });

  test("Should return an array if returnsString is false", function () {
    const blockName = "block";
    const elements = [
      {
        elementConjunction: "modifier",
        elementName: "modifier"
      },
      {
        elementConjunction: "element",
        elementName: "element"
      }
    ];

    const expected = ["block", "block--modifier", "block__element"];

    const actual = generateClassName(blockName, elements, {
      returnsString: false
    });

    expect(actual).toEqual(expected);
  });

  test("Should remove first class name if removeBlockClass is true and returnsString is false", function () {
    const blockName = "block";
    const elements = [
      {
        elementConjunction: "modifier",
        elementName: "modifier"
      },
      {
        elementConjunction: "element",
        elementName: "element"
      }
    ];

    const expected = ["block--modifier", "block__element"];

    const actual = generateClassName(blockName, elements, {
      removeBlockClass: true
    });

    expect(actual).toEqual(expected);
  });
});
