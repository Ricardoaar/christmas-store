const conjunctions = {
  modifier: "--",
  element: "__"
};

const optionActions = {
  returnsString: (classNameArray, value) => {
    if (value) {
      return classNameArray.join(" ");
    }
    return classNameArray;
  },
  removeBlockClass: (classNamesArray, value) => {
    if (!value) {
      return classNamesArray;
    }

    if (Array.isArray(classNamesArray)) {
      return classNamesArray.slice(1);
    }
    return classNamesArray.split(" ").slice(1).join(" ");
  },
  appendClassname: (classNamesArray, value) => {
    if (!value) {
      return classNamesArray;
    }

    if (Array.isArray(classNamesArray)) {
      return [...classNamesArray, value];
    }

    return `${classNamesArray} ${value}`;
  }
};

const resolveOptions = (resolvedClassnames = [], options) => {
  return Object.keys(options).reduce((classNamesElements, currentOption) => {
    const optionAction = optionActions[currentOption];

    if (optionAction) {
      return optionAction(classNamesElements, options[currentOption]);
    }
    return classNamesElements;
  }, resolvedClassnames);
};

const defaultOptions = {
  returnsString: true
};

/*
 * @param {string} blockName
 * @param {object} conjunctions - object with keys modifier and element to append
 * @param {object} options - Object to modify options
 * @returns {string|array} - class name with all the classes required
 *
 * @example
 * const blockName = "block";
 * const elements = [
 * { elementConjunction: "modifier", elementName: "element" },
 * { elementConjunction: "element", elementName: "element" }
 * ];
 *
 * const options = { returnsString: true, removeBlockClass: true };
 * const result = generateClassName(blockName, elements, options);
 * // result = "block--modifier block__element"
 * */
const generateClassName = (blockName, elements, options = defaultOptions) => {
  const classNamesArray = elements.map(
    ({ elementConjunction, elementName }) => {
      const conjunctionValue = conjunctions[elementConjunction];

      if (conjunctionValue && elementName)
        return `${blockName}${conjunctionValue}${elementName}`;

      return "";
    }
  );
  const cleanedClassNamesArray = classNamesArray.filter(Boolean);
  return resolveOptions([blockName, ...cleanedClassNamesArray], options);
};

export default generateClassName;
