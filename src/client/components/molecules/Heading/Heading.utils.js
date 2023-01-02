export const getHeadingByLevel = level => {
  if (level > 0 && level < 7) {
    return `h${level}`;
  }
  return "h3";
};
