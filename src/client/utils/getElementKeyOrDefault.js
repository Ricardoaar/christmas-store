export const getElementKeyOrDefault = (
  elements = [],
  searchedElement,
  defaultValue = "",
  keys = {}
) => {
  const { accessor = "value", requiredKey = "label" } = keys;

  const foundElement = elements.find(
    element => element[accessor] === searchedElement
  );

  return foundElement?.[requiredKey] || defaultValue;
};
